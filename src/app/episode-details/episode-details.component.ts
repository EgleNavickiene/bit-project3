import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  private id : string | null;

  // Neprivalomas kintamasis, duomenis gausime is episode service
  public episode? : Episode;

  public characters : any;

  constructor(private route: ActivatedRoute, private _episodeService : EpisodeService) {
    
    // Gauname route'o /episodes/:id parametra (id)
    this.id = this.route.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    // this._episodeService.getEpisode(this.id)
    // .subscribe((data : any) => {
    //   this.episode = data;
    //   console.log(this.episode);
    // })
  }

}
