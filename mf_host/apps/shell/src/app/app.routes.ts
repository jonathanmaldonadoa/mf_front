import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login', // 1. Primero la ruta específica
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '', // 2. Después la ruta base
    component: NxWelcome,
  },
  {
    path: '**', // 3. Al final cualquier error
    redirectTo: '',
  }
];