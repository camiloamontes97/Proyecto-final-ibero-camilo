import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiZonaPrivadaComponent } from './confi-zona-privada.component';

describe('ConfiZonaPrivadaComponent', () => {
  let component: ConfiZonaPrivadaComponent;
  let fixture: ComponentFixture<ConfiZonaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiZonaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiZonaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
