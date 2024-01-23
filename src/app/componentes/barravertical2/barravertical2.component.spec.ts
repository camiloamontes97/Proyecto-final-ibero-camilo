import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barravertical2Component } from './barravertical2.component';

describe('Barravertical2Component', () => {
  let component: Barravertical2Component;
  let fixture: ComponentFixture<Barravertical2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Barravertical2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Barravertical2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
