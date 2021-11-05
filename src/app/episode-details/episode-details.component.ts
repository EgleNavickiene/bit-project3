import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  // private _characterService: CharacterService


  private id : string | null;

  // Neprivalomas kintamasis, duomenis gausime is episode service
  public episode? : Episode;

  public characters : [] = [];

  private charactersIds: any  = [];

  constructor(private route: ActivatedRoute,
    private _episodeService : EpisodeService,
    private _characterService : CharacterService) {
    
    // Gauname route'o /episodes/:id parametra (id)
    this.id = this.route.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    // Asinchroninė funkcija

    // 1. Išsiunčiama užklausa duomenims gauti
    this._episodeService.getEpisode(this.id).subscribe(
      // Javascript callback dalis, ivykdoma, kai gaunami is api
      (data : any) => {
      //2. Ivykdomas callback gavus duomenis is API
      this.episode = data;
      console.log(this.episode);

      // 3. BUTINAI SUBSCRIBE FUNKCIJOS CALLBACK Viduje
      // Gauname veikėjų duomenis
      this.getCharacters();
    });
  }

  getCharacters() {
    // Patikriname ar episodo kintamasis turi duomenis
    if(this.episode) {
      // Pereiname per visus episodu veikeju masyvo elementus
      for(let i = 0; i < this.episode.characters.length; i++) {
        /*
        this.episode.characters[i] - string
        elemento reikšmės pvz: https://rickandmortyapi.com/api/character/435   
         */
        let temp : string = this.episode.characters[i].replace("https://rickandmortyapi.com/api/character/", "");
        // Suformatuojame character ID iš url temp kintamajame
        // console.log("this.episode.characters[i]: " + this.episode.characters[i]);
        // console.log("i: " + i);
        // console.log("temp: " + temp);

        this.charactersIds.push(temp);
        // console.log(this.charactersIds.toString());
      }

      /* BUTINAI UZ CIKLO RIBU: */
      // Isvkviesti service gauti veikeju duomenims
      this._characterService.getCharacter(this.charactersIds)
      .subscribe((data: any) => {
          this.characters = data;
      });
    }
  }

}
