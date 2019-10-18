import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRestaurantComponent } from './post-restaurant.component';

describe('PostRestaurantComponent', () => {
  let component: PostRestaurantComponent;
  let fixture: ComponentFixture<PostRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
