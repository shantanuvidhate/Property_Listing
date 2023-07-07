import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropStatusComponent } from './drop-status.component';

describe('DropStatusComponent', () => {
  let component: DropStatusComponent;
  let fixture: ComponentFixture<DropStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
