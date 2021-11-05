import { Component, OnInit, Input } from '@angular/core';
import { EpisodeService } from '../episode.service';
import { Episode } from '../episode'

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  public episodes? : Episode[];
  public episodesInfo: any = {};

  public page : number = 1;

  constructor(private _episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this._episodeService.getEpisodes(this.page).subscribe((data : any) => {
      this.episodes = data.results;
      this.episodesInfo = data.info;
      console.log(this.episodes);
    });
  }  

  nextPage() {

    if(this.page < this.episodesInfo.pages) {
      this.page ++ ;
    } else {
      alert ("This is a last page");
    }
    

    console.log("Next page:");
    console.log(this.page);

    this.getEpisodes();
  }

  previousPage() {

    // Patikriname ar page reiksme nera neigiama, -1 puslapio nera
    if(this.page > 1) {
      this.page--;
    }

    // Iskvieciame characters service atnaujinti duomenis
    this.getEpisodes();
  }

}
