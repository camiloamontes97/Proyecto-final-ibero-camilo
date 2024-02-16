import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoZonaPrivadaComponent } from './info-zona-privada.component';

describe('InfoZonaPrivadaComponent', () => {
  let component: InfoZonaPrivadaComponent;
  let fixture: ComponentFixture<InfoZonaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoZonaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoZonaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
