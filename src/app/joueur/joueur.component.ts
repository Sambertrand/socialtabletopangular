import { Component, OnInit } from '@angular/core';
import {personnage} from '../personnage';
import {mytable} from '../my-table';
import {joueur} from '../joueur';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  joueur: joueur;

  constructor() { 
    this.joueur = new joueur(15)
  }

  ngOnInit() {
  }
}
