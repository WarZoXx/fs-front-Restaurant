import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEditFormComponent } from './restaurant-edit-form.component';

describe('RestaurantEditFormComponent', () => {
  let component: RestaurantEditFormComponent;
  let fixture: ComponentFixture<RestaurantEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
