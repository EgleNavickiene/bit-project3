import { Component, OnInit, Input } from '@angular/core';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  public episodes = [];
  public episodesInfo: any = {};

  constructor(private _episodeService: EpisodeService) { }

  ngOnInit(): void {
    this._episodeService.getEpisodes(1).subscribe((data: any) => {
      this.episodes = data.results;
      this.episodesInfo = data.info;
      console.log(this.episodes);
    }
    
    );
  }

}
