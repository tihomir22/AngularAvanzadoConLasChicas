import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { timer, interval } from "rxjs";
import { TestingFormsPadreComponent } from "../testing-forms-padre/testing-forms-padre.component";

@Component({
  selector: "app-testing-forms",
  templateUrl: "./testing-forms.component.html",
  styleUrls: ["./testing-forms.component.scss"]
})
export class TestingFormsComponent implements OnInit {
  @Input("valoresDeEntrado") set valoresDeEntrado(valoresDeEntrado: any) {
    if (valoresDeEntrado) {
      this.formGroupVar.patchValue({
        nombre: valoresDeEntrado.nombre,
        apellido: valoresDeEntrado.apellido,
        contrasenya: valoresDeEntrado.contrasenya
      });
    }
  }

  @Output("enviaAlPapi") enviaAlPapi = new EventEmitter();

  public formGroupVar: FormGroup;
  public placeholderEjemplo = "Mete un nombre papi";
  constructor(
    private padre: TestingFormsPadreComponent,
    private fb: FormBuilder
  ) {
    this.formGroupVar = this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      contrasenya: [
        "",
        [Validators.compose([Validators.maxLength(20), Validators.required])]
      ]
    });

    this.formGroupVar.get("nombre").valueChanges.subscribe(data => {
      if (data == "dembow") {
        this.formGroupVar.patchValue({
          apellido: "membox",
          contrasenya: "megustaelsugar"
        });
        this.placeholderEjemplo = "Ahora me he travestido";
      }
    });
  }

  public submiteameEstaChaval(): void {
    if (this.formGroupVar.valid) {
      // this.enviaAlPapi.emit(this.formGroupVar.value);
      this.padre.metodoRecepcionDatosHijo(this.formGroupVar.value);
    }
  }

  ngOnInit(): void {}
}
