import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

   // Veikeju masyvas, kurio duomenis uzpildysime is CharacterService
  public characters: any = [];
  public charactersInfo: any = {};

  public page : number = 1;

  //"Inject" character service i komponenta
  constructor(private _characterSevice: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
    
  }

  getCharacters() {
// Characters kintamajam, priskiriame duomenis is 
    //characterService getCharaters funkcijos
    this.characters = this._characterSevice.getCharacters(this.page)
        //Subsceibe naudojama su Obsevable tipo obj.
        //Angular visada grazina Obsevable
        //data - kint. su grazintais duomenimis
      .subscribe((data: any) => {

        this.characters = data.results;
        this.charactersInfo = data.info;
                  
      });

    console.log(this.characters);
  }

  nextPage() {
    this.page  ++ ;
  }
}
