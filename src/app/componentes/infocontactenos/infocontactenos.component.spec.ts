import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocontactenosComponent } from './infocontactenos.component';

describe('InfocontactenosComponent', () => {
  let component: InfocontactenosComponent;
  let fixture: ComponentFixture<InfocontactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfocontactenosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfocontactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
