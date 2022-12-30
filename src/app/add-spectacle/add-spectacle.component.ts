import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spectacle } from '../model/Spectacle.model';
import { SpectacleService } from '../services/spectacle.service';

@Component({
  selector: 'app-add-spectacle',
  templateUrl: './add-spectacle.component.html',
  styles: [
  ]
})
export class AddSpectacleComponent implements OnInit {
newSpectacle = new Spectacle;

  constructor( private router : Router,private specServices :SpectacleService) { }

  ngOnInit(): void {
  }

  addSpectacle (){
    this.specServices.ajouterSpectacle(this.newSpectacle).subscribe(spec =>{
     console.log(spec);
     this.router.navigate(['']);
    })
  }

}
