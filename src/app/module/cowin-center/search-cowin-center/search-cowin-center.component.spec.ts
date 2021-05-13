import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCowinCenterComponent } from './search-cowin-center.component';

describe('SearchCowinCenterComponent', () => {
  let component: SearchCowinCenterComponent;
  let fixture: ComponentFixture<SearchCowinCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCowinCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCowinCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
