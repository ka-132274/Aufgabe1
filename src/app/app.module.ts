import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageMainComponent } from './page-main/page-main.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateProductComponent } from './_template/template-product/template-product.component';
import { TemplateCartComponent } from './_template/template-cart/template-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    TemplateHeaderComponent,
    TemplateProductComponent,
    TemplateCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
