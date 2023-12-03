import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Agrega IonicModule aquí
    RouterModule.forRoot([]), // Agrega RouterModule aquí
    AngularFireModule.initializeApp(environment.firebaseConfig)
    // Otros módulos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
