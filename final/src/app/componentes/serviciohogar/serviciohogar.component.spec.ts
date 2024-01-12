import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciohogarComponent } from './serviciohogar.component';

describe('ServiciohogarComponent', () => {
  let component: ServiciohogarComponent;
  let fixture: ComponentFixture<ServiciohogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiciohogarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciohogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
