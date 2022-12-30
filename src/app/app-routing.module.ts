import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpectacleComponent } from './spectacle/spectacle.component';

const routes: Routes = [
  {path : "", component : SpectacleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
