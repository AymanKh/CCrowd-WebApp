import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiCircleBarComponent } from './semi-circle-bar.component';

describe('SemiCircleBarComponent', () => {
  let component: SemiCircleBarComponent;
  let fixture: ComponentFixture<SemiCircleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiCircleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiCircleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
