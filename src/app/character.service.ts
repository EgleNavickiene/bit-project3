import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";

/* Angular Dekoratorius */
@Injectable({
  providedIn: 'root'
})

/* Service tipo klases atsakingos uz darba su duomenimis */
export class CharacterService {

  //Inject
  constructor(private http: HttpClient) {
    // kolkas konstruktoriuje nedarom nieko
  }

  // Klases metodai/funkcijos

  // Susikureme nauja funkcija, gauti veikeju duomenims
  //parametrai - page (klaustukas nurodo, kad sitas par. neprivalomas)
  getCharacters(page? : number ) {

    const params = new HttpParams()
    if(page) {
      params.set('page', page)
      .set('orderBy', '"$key"')
      .set('page', '1');
    }    

    //API endpoint

    let url = 'https://rickandmortyapi.com/api/character';

    //siunciam GET i nurodyta url
    let data = this.http.get(url, {params});

    return data;

  }


}