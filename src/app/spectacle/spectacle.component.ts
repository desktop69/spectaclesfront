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
image: any;
listImages: String[] = [];

  constructor(private specServices :SpectacleService) { }
chargerSpectacles (){
  this.specServices.LiterSpectacle().subscribe(spec => {
    console.log(spec);
    this.spectacles = spec;

    for (let index = 0; index < this.spectacles.length; index++) {
      this.specServices
        .loadImage(this.spectacles[index].image.idImage)
        .subscribe((res: any) => {
          //console.log(res.name)
          this.listImages[index] =
            'data:' + res.type + ';base64,' + res.image;
          });
        }





  })




}

supprimerspectacle(spec: Spectacle) {
  // console.log(p);
  let conf = confirm(" Etes-vous sure ?");
  if (conf)
    this.specServices.supprimerSpectacle(spec.id).subscribe( ()=>{
      console.log("sspectacle supprimé");
      this.chargerSpectacles();
    })
  }

  ngOnInit(): void {
    this.chargerSpectacles();
  }

}
