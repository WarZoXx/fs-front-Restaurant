import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsEvaluationsComponent } from './restaurants-evaluations.component';

describe('RestaurantsEvaluationsComponent', () => {
  let component: RestaurantsEvaluationsComponent;
  let fixture: ComponentFixture<RestaurantsEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsEvaluationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
