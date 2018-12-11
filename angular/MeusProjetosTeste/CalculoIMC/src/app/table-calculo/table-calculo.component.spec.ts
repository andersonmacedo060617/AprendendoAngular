import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCalculoComponent } from './table-calculo.component';

describe('TableCalculoComponent', () => {
  let component: TableCalculoComponent;
  let fixture: ComponentFixture<TableCalculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCalculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
