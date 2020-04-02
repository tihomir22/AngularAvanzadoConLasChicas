import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestingFormsComponent } from "./testing-forms/testing-forms.component";
import { CommonModule } from "@angular/common";
import { TestingFormsPadreComponent } from './testing-forms-padre/testing-forms-padre.component';

@NgModule({
  declarations: [AppComponent, TestingFormsComponent, TestingFormsPadreComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
