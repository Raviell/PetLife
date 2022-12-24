import { NavbarModule } from './components/shared/navbar/navbar.module';
import { ViewComponent } from './components/view/view.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
