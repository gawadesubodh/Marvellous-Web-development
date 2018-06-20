import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideFirstComponent } from './inside-first.component';

describe('InsideFirstComponent', () => {
  let component: InsideFirstComponent;
  let fixture: ComponentFixture<InsideFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
