import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spectacle } from '../model/Spectacle.model';
import { Image } from '../model/image.model';
import { SpectacleService } from '../services/spectacle.service';

@Component({
  selector: 'app-add-spectacle',
  templateUrl: './add-spectacle.component.html',
  styles: [
  ]
})
export class AddSpectacleComponent implements OnInit {
newSpectacle = new Spectacle;
uploadedImage!: File;
image: any;
response: any;

  constructor( private router : Router,private specServices :SpectacleService) { }

  ngOnInit(): void {
  }

  addSpectacle (){
    // this.specServices.ajouterSpectacle(this.newSpectacle).subscribe(spec =>{
    //  console.log(spec);
    //  this.router.navigate(['']);
    // })

    this.specServices
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((response: any) => {
      this.specServices
        .loadImage(response.idImage)
        .subscribe((image: any) => {
          let img = new Image();
          img.idImage = image.idImage;
          img.name = image.name;
          img.type = image.type;
          img.image = image.image;
          this.newSpectacle.image = new Image();
          this.newSpectacle.image = img;
          

     this.specServices.ajouterSpectacle(this.newSpectacle).subscribe(spec =>{
     console.log(spec);
     this.router.navigate(['']);
    })

        });
    });




  }


  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

}
