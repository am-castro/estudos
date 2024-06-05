import { Routes } from "@angular/router";
import { ProductsComponent } from "./components/product/products/products.component";
import { ProductResolver } from "../../shared/providers/resolver/product.resolver";

export const StoreRoutes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('./components/product/products/products.component').then(
            (lazy) => lazy.ProductsComponent
        ),
    },
    {
        path: 'services',
        loadComponent: () => import('./components/service/services/services.component').then(
            (lazy) => lazy.ServicesComponent
        ),
    },
    {
        path: 'checkout',
        loadComponent: () => import('../checkout/components/checkout/checkout.component').then(
            (lazy) => lazy.CheckoutComponent
        ),
    },
    {
        path: '',
        loadComponent: () => import('./components/store/stores/stores.component').then(
            (lazy) => lazy.StoresComponent
        )
    },
    {
        path: 'profile/:profileName',
        loadComponent: () => import('./components/store/store/store.component').then(
            (lazy) => lazy.StoreComponent
        )
    },
    {
        path: 'profile/:profileName/products',
        component: ProductsComponent,
        resolve: {
            products: ProductResolver
        }
    },
    {
        path: 'profile/:profileName/products/:pid',
        loadComponent: () => import('./components/product/products/products.component').then(
            (lazy) => lazy.ProductsComponent
        ),
    }
]