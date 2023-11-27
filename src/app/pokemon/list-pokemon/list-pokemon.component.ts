import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { AuthService } from 'src/app/auth.service';
import { PokemonTeamService } from '../pokemon-team.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  isloggedIn: boolean;

  constructor(
    private router: Router,
    private pokemonService: PokemonService, 
    private auth: AuthService, 
    private teampokemon: PokemonTeamService
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);

    this.isloggedIn = this.auth.isLoggedIn;
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }


  addToTeam(pokemon: Pokemon){
    this.teampokemon.addInTeam(pokemon);
  }


  removeFromTeam(pokemon: Pokemon){
    this.teampokemon.removeFromTeam(pokemon);
  }

  isInTeam(pokemon: Pokemon): boolean{
    return this.teampokemon.getTeam().includes(pokemon.name)
  }

}
