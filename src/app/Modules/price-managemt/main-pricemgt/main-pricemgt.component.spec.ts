import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPricemgtComponent } from './main-pricemgt.component';

describe('MainPricemgtComponent', () => {
  let component: MainPricemgtComponent;
  let fixture: ComponentFixture<MainPricemgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPricemgtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPricemgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
