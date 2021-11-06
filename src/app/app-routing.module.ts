
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component'
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component';
import { EpisodeDetailsComponent } from './episodes/episode-details/episode-details.component';

const routes: Routes = [
  {path: '', component: CharacterListComponent },
  {path: 'character/:id', component: CharacterDetailsComponent },
  {path: 'episodes/:id', component: EpisodeDetailsComponent },
  {path: 'episodes', component: EpisodesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
