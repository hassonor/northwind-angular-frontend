import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;

    public imageUrl = environment.productImagesUrl;

    constructor(
        private myActivatedRoute: ActivatedRoute,
        private notify: NotifyService,
        private myRouter: Router,
        private myProductsService: ProductsService) { }

    async ngOnInit() {
        try {
            const id = +this.myActivatedRoute.snapshot.params.id; // Take a route parameter named id.
            this.product = await this.myProductsService.getOneProduct(id);
        }
        catch (err) {
            this.notify.error(err);
        }
    }

    public async delete() {
        try {
            const answer = confirm("Are you sure?");
            if (!answer) return;
            await this.myProductsService.deleteProduct(this.product.id);
            this.notify.success("Product has been deleted.")
            this.myRouter.navigateByUrl("/products");
        }
        catch (err) {
            this.notify.error(err);
        }
    }

}
