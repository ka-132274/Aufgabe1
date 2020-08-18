import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCartComponent } from './template-cart.component';

describe('TemplateCartComponent', () => {
  let component: TemplateCartComponent;
  let fixture: ComponentFixture<TemplateCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
