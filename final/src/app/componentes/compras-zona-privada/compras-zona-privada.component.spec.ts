import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasZonaPrivadaComponent } from './compras-zona-privada.component';

describe('ComprasZonaPrivadaComponent', () => {
  let component: ComprasZonaPrivadaComponent;
  let fixture: ComponentFixture<ComprasZonaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprasZonaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprasZonaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
