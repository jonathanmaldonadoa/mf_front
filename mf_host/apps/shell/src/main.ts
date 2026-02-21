import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/module-federation.manifest.json')
  .then((res) => res.json())
  .then((remotes) => {
    setRemoteDefinitions(remotes); // <--- ESTO ES VITAL
    return import('./bootstrap');
  })
  .catch((err) => console.error(err));