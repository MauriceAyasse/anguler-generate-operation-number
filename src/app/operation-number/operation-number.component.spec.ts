import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationNumberComponent } from './operation-number.component';

describe('OperationNumberComponent', () => {
  let component: OperationNumberComponent;
  let fixture: ComponentFixture<OperationNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
