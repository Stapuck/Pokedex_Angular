import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { PokemonTeamService } from '../pokemon-team.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-team-pokemon',
  template: `
  <h2>Ma team de Pokémon !!<h2>

  <ul>
    <li *ngFor="let pokemon of teamPokemon">
      {{pokemon}}
    <li>
  <ul>

  <a (click)="goToPokemonList()">Retour<a>

  <!-- faire la gestion des messages pour utilisateur pour l'informer add/remove pokémon de la liste -->



  `,
})
export class TeamPokemonComponent  {
  teamPokemon: string[];

  constructor(
    private router: Router,
    private teamPokemonService: PokemonTeamService
  ){

    this.teamPokemon = this.teamPokemonService.getTeam();
  
  }


  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToPokemonDetail(pokemon: Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }


}
