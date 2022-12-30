import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpectacleComponent } from './add-spectacle/add-spectacle.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import { UpdateSpectacleComponent } from './update-spectacle/update-spectacle.component';

const routes: Routes = [
  {path : "", component : SpectacleComponent},
  {path : "add", component : AddSpectacleComponent},
  {path : "update/:id", component : UpdateSpectacleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
