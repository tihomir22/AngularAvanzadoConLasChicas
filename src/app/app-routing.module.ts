import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TestingFormsComponent } from "./testing-forms/testing-forms.component";
import { TestingFormsPadreComponent } from "./testing-forms-padre/testing-forms-padre.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "nombreComp",
    pathMatch: "full"
  },
  {
    path: "nombreComp",
    component: TestingFormsPadreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
