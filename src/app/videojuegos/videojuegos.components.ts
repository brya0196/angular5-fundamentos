import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.components.html'
})

export class VideojuegosComponent {
    public nombre:string;
    public mejorJuego:string;
    public mejorJuegoRetro:string;
    public mostrarRetro:boolean;
    public color:string;
    public year:number;


    public videojuegos:Array<string>; // si ponemos any acepta todos los tipos de datos

    constructor() {
        this.nombre = 'Videojuegos 2018';
        this.mejorJuego = 'GTA 5';
        this.mejorJuegoRetro = "Super Mario 64";
        this.mostrarRetro = true;
        this.color = "yellow";
        this.year = 2018; 
        this.videojuegos = [
            "los simpons hit and rund",
            "Assassins Creed",
            "GTA",
            "Call of Duty",
            "Tekken"
        ]
    }
}