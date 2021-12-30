import ProductModel from 'src/app/models/product.model';

// Products State: 
export class ProductsState {
    public products: ProductModel[] = [];
}

// Product Action Types:
export enum ProductActionType {
    productsDownloaded = "productsDownloaded",
    productAdded = "productAdded",
    productUpdated = "productUpdated",
    productDeleted = "productDeleted"
}

// Product Action: 
export interface ProductAction {
    type: ProductActionType;
    payload: any;
    // More specific type list:
    // payload: ProductModel[] | ProductModel | number;
}

// Product Action Creators: 
export function productsDownloadedAction(products: ProductModel[]): ProductAction {
    return { type: ProductActionType.productsDownloaded, payload: products };
}
export function productAddedAction(product: ProductModel): ProductAction {
    return { type: ProductActionType.productAdded, payload: product };
}
export function productUpdatedAction(product: ProductModel): ProductAction {
    return { type: ProductActionType.productUpdated, payload: product };
}
export function productDeletedAction(id: number): ProductAction {
    return { type: ProductActionType.productDeleted, payload: id };
}

// Products Reducer:
export function productsReducer(currentState: ProductsState = new ProductsState(), action: ProductAction): ProductsState {
    
    const newState = { ...currentState };

    switch(action.type) {
        case ProductActionType.productsDownloaded: // Here payload is all products (ProductModel[])
            newState.products = action.payload;
            break;
        case ProductActionType.productAdded: // Here payload is the added product (ProductModel)
            newState.products.push(action.payload);
            break;
        case ProductActionType.productUpdated: { // Here payload is the updated product (ProductModel)
            const index = newState.products.findIndex(p => p.id === action.payload.id);
            newState.products[index] = action.payload;
            break;
        }
        case ProductActionType.productDeleted: { // Here payload is the deleted product's id (number)
            const index = newState.products.findIndex(p => p.id === action.payload);
            newState.products.splice(index, 1);
            break;
        }
    }

    return newState;
}