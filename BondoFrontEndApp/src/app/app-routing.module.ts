import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/starships', pathMatch: 'full' },
  { path: 'starships', component: StarshipsComponent },
  { path: 'details/:id', component: StarshipDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
