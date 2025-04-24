import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('home').then(m => m.homeRoutes)       
    },
    {
        path: 'candidates',
        loadChildren: () => import('candidates').then(m => m.candidateRoute)
    }
];
