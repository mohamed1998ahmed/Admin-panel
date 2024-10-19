import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login',
    },
    {
      path: 'login',
      loadComponent: () => import('../app/component/login/login.component').then(m =>m.loginComponent),
    },
    {
      path: 'admin',
      loadComponent: () => import('../app/component/admin/admin.component').then(m =>m.adminComponent),
      children: [
          {
            path: '',
            loadComponent: () => import('../app/component/dashboard/dashboard.component').then(m =>m.dashboardComponent),
          },
          {
            path: 'dashboard',
            loadComponent: () => import('../app/component/dashboard/dashboard.component').then(m =>m.dashboardComponent),
          },
          {
            path: 'add-product',
            loadComponent: () => import('../app/component/product/add/add.component').then(m =>m.addProductComponent),
          },
          {
            path: 'product-list',
            loadComponent: () => import('../app/component/product/list/list.component').then(m =>m.ProductListComponent),

          }
      ]
    }
];
