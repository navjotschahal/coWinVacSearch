import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowinCenterComponent } from './cowin-center.component';

describe('CowinCenterComponent', () => {
  let component: CowinCenterComponent;
  let fixture: ComponentFixture<CowinCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowinCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CowinCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
