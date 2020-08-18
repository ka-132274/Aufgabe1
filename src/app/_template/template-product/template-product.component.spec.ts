import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProductComponent } from './template-product.component';

describe('TemplateProductComponent', () => {
  let component: TemplateProductComponent;
  let fixture: ComponentFixture<TemplateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
