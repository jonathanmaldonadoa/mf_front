import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then((m) => m.RemoteEntryModule),
  },
  // Tu ruta por defecto si quieres
  {
    path: '',
    component: NxWelcome,
  },
];