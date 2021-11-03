import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  // private: id: string | null;

  constructor( private route: ActivatedRoute, private _episodeService : EpisodeService ) { 
    // this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    // this._episodeService.getEpisode(id:)
  }
                            // : Observable<Episode> 
  getEpisode(id: string | null) {
    // let data = this.http.get(this.url = "/" + id);
    //return data;
  }

}
