import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RestaurantService} from "./services/restaurant.service";
import { CouleurMoyenneDirective } from './directives/couleur-moyenne.directive';
import { RestaurantByIdComponent } from './pages/restaurant-by-id/restaurant-by-id.component';
import { RestaurantsEvaluationsComponent } from './components/restaurant-evaluations/restaurants-evaluations.component';
import { EvaluationFormComponent } from './components/evaluation-form/evaluation-form.component';
import { RestaurantEditFormComponent } from './components/restaurant-edit-form/restaurant-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    CouleurMoyenneDirective,
    RestaurantByIdComponent,
    RestaurantsEvaluationsComponent,
    EvaluationFormComponent,
    RestaurantEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
