import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testing-forms-padre",
  templateUrl: "./testing-forms-padre.component.html",
  styleUrls: ["./testing-forms-padre.component.scss"]
})
export class TestingFormsPadreComponent implements OnInit {
  public datosParaElHijo;

  constructor() {}

  ngOnInit(): void {
    this.datosParaElHijo = {
      nombre: "Tiho",
      apellido: "Dj",
      contrasenya: 123456
    };
  }

  public metodoRecepcionDatosHijo(datos: any) {
    console.log(datos);
  }
}
