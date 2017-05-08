import { omitNil } from '../../../common/utils';
import CartMapper from './cart-mapper';
import GatewayMapper from './gateway-mapper';
import QuoteMapper from './quote-mapper';
import StoreMapper from './store-mapper';

export default class ClientTokenMapper {
    /**
     * @returns {ClientTokenMapper}
     */
    static create() {
        const cartMapper = CartMapper.create();
        const gatewayMapper = GatewayMapper.create();
        const quoteMapper = QuoteMapper.create();
        const storeMapper = StoreMapper.create();

        return new ClientTokenMapper(cartMapper, gatewayMapper, quoteMapper, storeMapper);
    }

    /**
     * @param {CartMapper} cartMapper
     * @param {GatewayMapper} gatewayMapper
     * @param {QuoteMapper} quoteMapper
     * @param {StoreMapper} storeMapper
     */
    constructor(cartMapper, gatewayMapper, quoteMapper, storeMapper) {
        /**
         * @private
         * @type {CartMapper}
         */
        this.cartMapper = cartMapper;

        /**
         * @private
         * @type {GatewayMapper}
         */
        this.gatewayMapper = gatewayMapper;

        /**
         * @private
         * @type {QuoteMapper}
         */
        this.quoteMapper = quoteMapper;

        /**
         * @private
         * @type {StoreMapper}
         */
        this.storeMapper = storeMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToClientToken(data) {
        return omitNil({
            cart: this.cartMapper.mapToCart(data),
            gateway: this.gatewayMapper.mapToGateway(data),
            quote: this.quoteMapper.mapToQuote(data),
            store: this.storeMapper.mapToStore(data),
        });
    }
}
