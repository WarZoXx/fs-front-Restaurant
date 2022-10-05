import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantComponent} from "./pages/restaurant/restaurant.component";
import {RestaurantByIdComponent} from "./pages/restaurant-by-id/restaurant-by-id.component";

const routes: Routes = [
  {path:'',redirectTo:'restaurants',pathMatch:'full'},
  {path:'restaurants',component:RestaurantComponent},
  { path: "restaurants/:param", component: RestaurantByIdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
