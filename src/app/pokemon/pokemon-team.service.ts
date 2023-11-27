import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonTeamService {
  private teamPokemons: string[]; // max 6 dans la team // mettre une string[] ou Pokemon[] pour avoir toute les infos ? 
  

  addInTeam(pokemon: Pokemon){
    if(!this.teamPokemons.includes(pokemon.name)){
      this.teamPokemons.push(pokemon.name)
    }
  }

  removeFromTeam(pokemon: Pokemon){
    const index = this.teamPokemons.indexOf(pokemon.name);
    if(index!== -1){
      this.teamPokemons.splice(index,1);
    }
  }

  getTeam(){
    return this.teamPokemons;
  }
}
