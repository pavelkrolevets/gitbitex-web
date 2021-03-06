import { Service } from './service';

export class TradeService extends Service {

    getProducts() {
        return this.request.get('/products');
    }

    getProductsDer() {
        return this.request.get('/products_der');
    }

    getProductHistory(productId: string, granularity: number) {
        return this.request.get(`/products/${productId}/candles?granularity=${granularity}`);
    }

    getProductTradeHistory(productId: string) {
        return this.request.get(`/products/${productId}/trades`);
    }

}