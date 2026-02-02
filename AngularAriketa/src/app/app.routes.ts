import { Routes } from '@angular/router';
import { Opendata } from './opendata/opendata';

export const routes: Routes = [
    {
        path: 'eventos/:tipo',
        component: Opendata
    },
    {
        path: 'opendata',
        component: Opendata
    },
    {
        path: '',
        redirectTo: 'eventos/1',
        pathMatch: 'full'
    }
];
