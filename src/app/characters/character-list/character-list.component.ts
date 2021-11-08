import { Component, OnInit } from '@angular/core';
import { UIDataService } from 'src/app/services/uidata.service';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

   // Veikeju masyvas, kurio duomenis uzpildysime is CharacterService
  public characters: any = [];
  public charactersInfo: any = {};

  public errors: any;

  public page : number = 1;

  public searchOptions = {
    'name': '',
    'status': ''
  }

  //"Inject" character service i komponenta
  constructor(
    private _characterSevice: CharacterService,
    private _UIDataService: UIDataService,
    ) { }

  ngOnInit(): void {
    this.getCharacters();    
  }

  filterCharacters(name: string) {
    // alert("Character List Komponentas Suzinojo apie onForm Submit Event'a is SearchForm komponento ");
    this.searchOptions.name = name;
    this.getCharacters();
  }

  getCharacters(name?: string) {
    // Characters kintamajam priskiriame duomenis is 
    //characterService getCharaters funkcijos
    this.characters = this._characterSevice.getCharacters(this.page, this.searchOptions.name)
        //Subsceibe naudojama su Obsevable tipo obj.
        //Angular visada grazina Obsevable
        //data - kint. su grazintais duomenimis is musu uzklausos
      .subscribe((data: any) => {
          // Jei uzklausa buvo ivykdyta sekmingai
          // Success callback
        this.characters = data.results;
        this.charactersInfo = data.info;
      },

      // Jei grazintas error status code
      // Error callback
      (error: any) => {

        // Patikriname error status koda
        if (error.status == '404') {
          alert("oops nothing found");
          console.log(error);

          // Priskiriame error objekta savo komponento errors masyvui,
          // kad galetume atvaizduoti klaidos pranesima template dalyje
          this.errors = error;

          // Nustatome characters masyva i tuscia masyva, nes nebuvo rasta jokiu veikeju
          this.characters = [];
          // Taip pat pakeiciame charactersInfo objekto reiksmes pagal klaidos koda
          this.charactersInfo.count = 0;
          this.charactersInfo.pages = 0;
        } else {
          alert("oops went wrong");
        }

      }

      // console.log(data);
      /*
      Dokumentacija kokie duomenys grazinami:
      https://rickandmortyapi.com/documentation/#character-schema
      */
    );
  }

  nextPage() {

    if(this.page < this.charactersInfo.pages) {
      this.page  ++ ;
    } else {
      alert("This is a last page");
    }
    
    console.log("Next page:");
    console.log(this.page);

    this.getCharacters();
  }

  previousPage() {

    // Patikriname ar page reiksme nera neigiama, -1 puslapio nera
    if(this.page > 1) {
      this.page--;
    }

    // Iskvieciame characters service atnaujinti duomenis
    this.getCharacters();
  }
  
}
