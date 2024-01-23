import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaprivadausuarioComponent } from './zonaprivadausuario.component';

describe('ZonaprivadausuarioComponent', () => {
  let component: ZonaprivadausuarioComponent;
  let fixture: ComponentFixture<ZonaprivadausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZonaprivadausuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZonaprivadausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
