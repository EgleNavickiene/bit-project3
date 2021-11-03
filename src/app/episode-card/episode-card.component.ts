import { Component, OnInit, Input } from '@angular/core';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  // Cia gauname url reiksme pagal kuria epizodo komponentui reikia gauti duomenis is service
  @Input() episodeUrl? : any; // decorate the property with @Input()
  public episode : any;
  // @Input() episode? : Episode;


  constructor(private _episodeService: EpisodeService) { }

  ngOnInit(): void {

    console.log("Character Episode List Component Duomenys");
    console.log(this.episode);


    this._episodeService.getEpisodeByUrl(this.episodeUrl).subscribe(data => {
      this.episode = data;
      console.log(this.episode);
    });
  }

}