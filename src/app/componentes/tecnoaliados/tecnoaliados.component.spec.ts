import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoaliadosComponent } from './tecnoaliados.component';

describe('TecnoaliadosComponent', () => {
  let component: TecnoaliadosComponent;
  let fixture: ComponentFixture<TecnoaliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecnoaliadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnoaliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
