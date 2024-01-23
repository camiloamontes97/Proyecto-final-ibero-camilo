import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioempresarialComponent } from './servicioempresarial.component';

describe('ServicioempresarialComponent', () => {
  let component: ServicioempresarialComponent;
  let fixture: ComponentFixture<ServicioempresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioempresarialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioempresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
