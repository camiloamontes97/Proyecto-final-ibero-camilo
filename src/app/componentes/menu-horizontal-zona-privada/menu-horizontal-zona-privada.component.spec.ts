import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHorizontalZonaPrivadaComponent } from './menu-horizontal-zona-privada.component';

describe('MenuHorizontalZonaPrivadaComponent', () => {
  let component: MenuHorizontalZonaPrivadaComponent;
  let fixture: ComponentFixture<MenuHorizontalZonaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuHorizontalZonaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuHorizontalZonaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
