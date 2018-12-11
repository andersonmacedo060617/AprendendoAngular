import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalculoComponent } from './form-calculo.component';

describe('FormCalculoComponent', () => {
  let component: FormCalculoComponent;
  let fixture: ComponentFixture<FormCalculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCalculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
