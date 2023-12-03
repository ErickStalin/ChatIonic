import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  constructor(private router: Router) {}

  navigateToPerfil() {
    this.router.navigate(['/perfil']); // Navegar a la página 'perfil'
  }
}
