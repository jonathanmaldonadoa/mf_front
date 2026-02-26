import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';

@Component({
  standalone: true, // <--- Verifica que sea standalone
  imports: [NxWelcome],
  selector: 'app-admin-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntry { }
