import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutecnialiadosComponent } from './menutecnialiados.component';

describe('MenutecnialiadosComponent', () => {
  let component: MenutecnialiadosComponent;
  let fixture: ComponentFixture<MenutecnialiadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenutecnialiadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenutecnialiadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
