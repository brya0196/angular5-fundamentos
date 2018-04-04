import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    template: `
        <h2>Componente de {{ nombre }}</h2>
        <h3 *ngIf="mostrarRetro != true">El mejor juego es: {{ mejorJuego }}</h3>
        <h3 [style.background]="yellow"  
            *ngIf="mostrarRetro">
            El mejor juego retro es: {{ mejorJuegoRetro }}
        </h3>
    `
})

export class VideojuegosComponent {
    public nombre = 'Videojuegos 2018'
    public mejorJuego = 'GTA 5';
    public mejorJuegoRetro = "Super Mario 64";
    public mostrarRetro = true;
}