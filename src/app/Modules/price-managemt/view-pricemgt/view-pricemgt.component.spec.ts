import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPricemgtComponent } from './view-pricemgt.component';

describe('ViewPricemgtComponent', () => {
  let component: ViewPricemgtComponent;
  let fixture: ComponentFixture<ViewPricemgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPricemgtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPricemgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
