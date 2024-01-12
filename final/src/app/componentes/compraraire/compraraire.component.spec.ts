import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraraireComponent } from './compraraire.component';

describe('CompraraireComponent', () => {
  let component: CompraraireComponent;
  let fixture: ComponentFixture<CompraraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraraireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompraraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
