import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CollapseModule ,AlertModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { EventcardComponent } from './event/eventcard/eventcard.component';
import { FooterComponent } from './core/footer/footer.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { EventService } from './shared/event.service';
import { UserService } from './shared/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    ...AppRoutingModule.routableComponents
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [EventService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
