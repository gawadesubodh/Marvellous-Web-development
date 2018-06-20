import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideSecondComponent } from './inside-second.component';

describe('InsideSecondComponent', () => {
  let component: InsideSecondComponent;
  let fixture: ComponentFixture<InsideSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
