import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Restaurant} from "../../dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-restaurant-by-id',
  templateUrl: './restaurant-by-id.component.html',
  styleUrls: ['./restaurant-by-id.component.css']
})
export class RestaurantByIdComponent implements OnInit {

  @Input()
  public restaurant: Observable<Restaurant> | undefined ;
  private elemId: any;

  constructor(private _activatedRoute: ActivatedRoute,private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( (params: Params) => {
      this.elemId = params['id'];
      this.restaurant = this.restaurantService.getRestaurantById(this.elemId);
    })

  }

}

