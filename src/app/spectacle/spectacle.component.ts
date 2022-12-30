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

supprimerspectacle(spec: Spectacle) {
  // console.log(p);
  let conf = confirm(" Etes-vous sure ?");
  if (conf)
    this.specServices.supprimerSpectacle(spec.id).subscribe( ()=>{
      console.log("pays supprimé");
      this.chargerSpectacles();
    })
  }

  ngOnInit(): void {
    this.chargerSpectacles();
  }

}
