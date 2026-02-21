import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // <--- Verifica que sea standalone
  imports: [CommonModule],
  selector: 'app-login-entry',
  template: `<h1>Contenido del Login cargado con éxito!</h1>`,
})
export class RemoteEntry {}
