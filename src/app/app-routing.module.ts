import { EmployeeListComponent } from './components/employees-area/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductListComponent },
    { path: "products/details/:id", component: ProductDetailsComponent },
    { path: "products/new", component: AddProductComponent },
    { path: "products/edit/:id", component: UpdateProductComponent },
    { path: "employees", component: EmployeeListComponent },
    { path: "about", component: AboutComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMath: "full" --> exact
    { path: "**", component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
