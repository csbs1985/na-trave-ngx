import { Injectable } from "@angular/core";

Injectable({
  providedIn: 'root'
})
export class FormatarHoraService {

  readonly segundo = 60;
  converter(minuto): any {
    return Math.round(this.segundo * minuto);
  }
}
