import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { LogoComponent } from './components/layout-area/logo/logo.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { BestFruitComponent } from './components/home-area/best-fruit/best-fruit.component';
import { SpecialsComponent } from './components/home-area/specials/specials.component';
import { DessertsComponent } from './components/home-area/desserts/desserts.component';
import { SalesComponent } from './components/home-area/sales/sales.component';
import { SloganComponent } from './components/home-area/slogan/slogan.component';
import { RecommendedComponent } from './components/home-area/recommended/recommended.component';
import { SearchComponent } from './components/home-area/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricingComponent } from './components/home-area/pricing/pricing.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { InventoryComponent } from './components/home-area/inventory/inventory.component';
import ArrayService from './services/array.service';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { PleaseWaitComponent } from './components/shared-area/please-wait/please-wait.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { ObservableTesterComponent } from './components/about-area/observable-tester/observable-tester.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { VatCalculatorComponent } from './components/home-area/vat-calculator/vat-calculator.component';
import { EmployeeListComponent } from './components/employees-area/employee-list/employee-list.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        LogoComponent,
        HomeComponent,
        DiscountComponent,
        BestFruitComponent,
        SpecialsComponent,
        DessertsComponent,
        SalesComponent,
        SloganComponent,
        RecommendedComponent,
        SearchComponent,
        PricingComponent,
        ClockComponent,
        InventoryComponent,
        ProductListComponent,
        AboutComponent,
        ContactUsComponent,
        Page404Component,
        ProductCardComponent,
        ProductDetailsComponent,
        AddProductComponent,
        PleaseWaitComponent,
        UpdateProductComponent,
        ObservableTesterComponent,
        VatCalculatorComponent,
        EmployeeListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],

    // Tell Angular to create a DI object from ArrayService for the entire app: 
    // providers: [ArrayService],

    bootstrap: [LayoutComponent]
})
export class AppModule { }
