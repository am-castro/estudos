import { Routes } from '@angular/router';
import { StoreRoutes } from './view/store/store.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'stores/products',
        pathMatch: 'full'
    },
    {
        path: 'stores',
        loadComponent: () => import('./shared/components/principal/principal.component').then(
            (lazy) => lazy.PrincipalComponent
        ),
        children: StoreRoutes
    }
];
