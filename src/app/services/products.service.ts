import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import ProductModel from '../models/product.model';
import { productAddedAction, productDeletedAction, productsDownloadedAction, productUpdatedAction } from '../redux/products-state';
import store from '../redux/store';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    // Get all products: 
    public async getAllProducts() {
        if (store.getState().productsState.products.length === 0) {
            const products = await this.http.get<ProductModel[]>(environment.productsUrl).toPromise();
            store.dispatch(productsDownloadedAction(products));
        }
        return store.getState().productsState.products;
    }

    // Get one product: 
    public async getOneProduct(id: number) {
        if (store.getState().productsState.products.length === 0) {
            const products = await this.http.get<ProductModel[]>(environment.productsUrl).toPromise();
            store.dispatch(productsDownloadedAction(products));
        }
        const product = store.getState().productsState.products.find(p => p.id === id);
        return product;
    }

    // Add product: 
    public async addProduct(product: ProductModel) {
        const myFormData: FormData = ProductModel.convertToFormData(product);
        const addedProduct = await this.http.post<ProductModel>(environment.productsUrl, myFormData).toPromise();
        store.dispatch(productAddedAction(addedProduct));
        return addedProduct;
    }

    // Update product: 
    public async updateProduct(product: ProductModel) {
        const myFormData: FormData = ProductModel.convertToFormData(product);
        const updatedProduct = await this.http.put<ProductModel>(environment.productsUrl + product.id, myFormData).toPromise();
        store.dispatch(productUpdatedAction(updatedProduct));
        return updatedProduct;
    }

    // Delete product: 
    public async deleteProduct(id: number) {
        await this.http.delete(environment.productsUrl + id).toPromise();
        store.dispatch(productDeletedAction(id));
    }

}
