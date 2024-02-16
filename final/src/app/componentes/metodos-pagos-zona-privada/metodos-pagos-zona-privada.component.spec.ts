import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosPagosZonaPrivadaComponent } from './metodos-pagos-zona-privada.component';

describe('MetodosPagosZonaPrivadaComponent', () => {
  let component: MetodosPagosZonaPrivadaComponent;
  let fixture: ComponentFixture<MetodosPagosZonaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetodosPagosZonaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetodosPagosZonaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
