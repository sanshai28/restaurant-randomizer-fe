import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRandomizerComponent } from './restaurant-randomizer.component';

describe('RestaurantRandomizerComponent', () => {
  let component: RestaurantRandomizerComponent;
  let fixture: ComponentFixture<RestaurantRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantRandomizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
