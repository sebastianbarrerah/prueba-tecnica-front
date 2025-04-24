import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('home').then(m => m.homeRoutes)         
    },
    {
        path: 'candidates',
        loadChildren: () => import('candidates').then(m => m.candidateRoute)    
    },
    {
        path: 'statics',
        loadChildren: () => import('statics').then(m => m.staticRoute)     
    },
    {
        path: 'users',
        loadChildren: () => import('user').then(m => m.userRoute)               
    },
];
