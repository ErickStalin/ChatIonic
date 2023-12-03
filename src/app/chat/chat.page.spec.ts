import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage {
  messages: { sender: string, text: string }[] = []; // Array para almacenar mensajes
  newMessage: string = ''; // Variable para el nuevo mensaje

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'Tú', text: this.newMessage });
      this.newMessage = ''; // Limpiar el campo de entrada después de enviar el mensaje
    }
  }
}
