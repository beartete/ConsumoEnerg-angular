import { Component } from '@angular/core';

@Component({
  selector: 'app-consumo-energia',
  templateUrl: './consumo-energia.component.html',
  styleUrls: ['./consumo-energia.component.css']
})
export class ConsumoEnergiaComponent {
  title = 'Consumo de Energia';
  pessoas: number = 0;
  comodos: number = 0;
  tvs: number = 0;
  computadores: number = 0;
  maquinaLavar: string = '';
  secadora: string = '';
  consumo: number = 0;
  valorConta: number = 0;
  tarifa: number = 1.99954;


  calcularConsumo(): void {
    let consumoComodos = this.comodos * 100;
    let consumoPessoas = this.pessoas * 120;
    let consumoTvs = this.tvs * 80;
    let consumoComputadores = this.computadores * 75;
    let consumoMaquinaLavar = this.maquinaLavar === 'Sim' ? 300 : 0;
    let consumoSecadora = this.secadora === 'Sim' ? 350 : 0;

    this.consumo = (consumoComodos + consumoPessoas + consumoTvs + consumoComputadores + consumoMaquinaLavar + consumoSecadora);

    let consumoChuveiro = (5500 * 10/60) * this.pessoas * 30;
    this.consumo += consumoChuveiro;
    this.consumo /= 1000;

    this.valorConta = this.consumo * this.tarifa;
  }
}
