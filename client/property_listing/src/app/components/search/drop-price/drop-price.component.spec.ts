import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropPriceComponent } from './drop-price.component';

describe('DropPriceComponent', () => {
  let component: DropPriceComponent;
  let fixture: ComponentFixture<DropPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
