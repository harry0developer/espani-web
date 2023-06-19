import { Routes } from '@angular/router';
 
import { AppBusinessesComponent } from './businesses/businesses.component';
import { AppBusinessComponent } from './business/business.component';

export const BusinessesRoutes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'businesses',
        component: AppBusinessesComponent,
      },
      { 
        path: 'businesses/:id',
        component: AppBusinessComponent
      },
    ],
  },
];
