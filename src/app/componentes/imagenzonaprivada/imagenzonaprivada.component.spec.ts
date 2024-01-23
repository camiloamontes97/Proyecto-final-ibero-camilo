import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenzonaprivadaComponent } from './imagenzonaprivada.component';

describe('ImagenzonaprivadaComponent', () => {
  let component: ImagenzonaprivadaComponent;
  let fixture: ComponentFixture<ImagenzonaprivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagenzonaprivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenzonaprivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
