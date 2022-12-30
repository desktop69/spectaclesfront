import { Component, OnInit } from '@angular/core';
import { Spectacle } from '../model/Spectacle.model';
import { SpectacleService } from '../services/spectacle.service';

@Component({
  selector: 'app-spectacle',
  templateUrl: './spectacle.component.html',
  styles: [
  ]
})
export class SpectacleComponent implements OnInit {
spectacles? : Spectacle[];
  constructor(private specServices :SpectacleService) { }
chargerSpectacles (){
  this.specServices.LiterSpectacle().subscribe(spec => {
    console.log(spec);
    this.spectacles = spec;
  })
}

  ngOnInit(): void {
    this.chargerSpectacles();
  }

}
