var bump = require('gulp-bump');
var changelog = require('gulp-conventional-changelog');
var git = require('gulp-git');
var gulp = require('gulp');
var pkg = require('../package');
var prompt = require('gulp-prompt');
var semver = require('semver');
var touch = require('gulp-touch');
var version = pkg.version;

function getVersionQuestion(currentVersion) {
    var patchVersion = semver.inc(currentVersion, 'patch');
    var minorVersion = semver.inc(currentVersion, 'minor');
    var majorVersion = semver.inc(currentVersion, 'major');

    return [
        {
            type: 'list',
            name: 'version',
            message: 'What type of release would you like to do? Current version: ' + currentVersion,
            choices: [
                {
                    value: patchVersion,
                    name: patchVersion + ' - PATCH version when you make backwards-compatible bug fixes',
                },
                {
                    value: minorVersion,
                    name: minorVersion + ' - MINOR version when you add functionality in a backwards-compatible manner',
                },
                {
                    value: majorVersion,
                    name: majorVersion + ' - MAJOR version when you make incompatible API changes',
                },
            ]
        },
    ];
}

function promptVersionTask() {
    var files = ['./bower.json', './package.json'];
    var question = getVersionQuestion(pkg.version);

    return gulp.src(files)
        .pipe(prompt.prompt(question, function(response) {
            version = response.version;

            return gulp.src(files)
                .pipe(bump({ version: version }))
                .pipe(gulp.dest('./'))
                .pipe(touch());
        }));
}

function changelogTask() {
    return gulp.src('./CHANGELOG.md')
        .pipe(prompt.confirm({
            default: true,
            message: 'Do you want to auto-update the changelog?',
        }))
        .pipe(changelog({ buffer: false, preset: 'angular' }))
        .pipe(gulp.dest('./'))
        .pipe(prompt.confirm({
            default: false,
            message: 'Are you happy with the generated changelog? If not, please revise it before continuing.',
        }));
}

function commitVersionTask() {
    var files = ['./bower.json', './package.json', './lib', './CHANGELOG.md'];

    return gulp.src(files)
        .pipe(git.add())
        .pipe(git.commit('Releasing ' + version));
}

function tagVersionTask(done) {
    git.tag(version, version, function (err) {
        if (err) {
            throw err;
        }

        done();
    })
}

module.exports = gulp.series(
    promptVersionTask,
    changelogTask,
    commitVersionTask,
    tagVersionTask
);
