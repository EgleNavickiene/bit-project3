import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private url: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  /* Funkcija gauti visiems epizodams */
  getEpisodes(page: number, name?: string) {

    let params = new HttpParams();

    params = params.append('page', page);

    let data = this.http.get(this.url, { params });

    return data;
  }

  // Kadangi informacija is character dalies grazinama, kaip pilnas uzklausos url:
  // PVZ: 'https://rickandmortyapi.com/api/episode/1'
  // Todel naudosime bendrine funkcija, gauti
  // epizodo informacija pagal url, url bus atsiunciamas kaip parametras
  getEpisodeByUrl(url : string) {

    console.log("Episode service API URL");
    console.log(url);
    let data = this.http.get(url);

    return data;
  }

  // Atskira funkcija episodo gavimui pagal ID
  getEpisodeById( ) {

  }
}