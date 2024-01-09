import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioninformativaComponent } from './seccioninformativa.component';

describe('SeccioninformativaComponent', () => {
  let component: SeccioninformativaComponent;
  let fixture: ComponentFixture<SeccioninformativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccioninformativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeccioninformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
