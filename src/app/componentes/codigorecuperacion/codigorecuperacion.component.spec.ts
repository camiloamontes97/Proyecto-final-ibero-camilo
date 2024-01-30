import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigorecuperacionComponent } from './codigorecuperacion.component';

describe('CodigorecuperacionComponent', () => {
  let component: CodigorecuperacionComponent;
  let fixture: ComponentFixture<CodigorecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigorecuperacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigorecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
