
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component'
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

const routes: Routes = [
  {path: '', component: CharacterListComponent },
  {path: 'character/:id', component: CharacterDetailsComponent },
  {path: 'episode:/id', component: EpisodeDetailsComponent },
  {path: 'episodes', component: EpisodesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
