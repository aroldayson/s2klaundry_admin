import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicrepancyComponent } from './dicrepancy.component';

describe('DicrepancyComponent', () => {
  let component: DicrepancyComponent;
  let fixture: ComponentFixture<DicrepancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicrepancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicrepancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
