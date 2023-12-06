import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloPreviewComponent } from './articolo-preview.component';

describe('ArticoloPreviewComponent', () => {
  let component: ArticoloPreviewComponent;
  let fixture: ComponentFixture<ArticoloPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticoloPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticoloPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
