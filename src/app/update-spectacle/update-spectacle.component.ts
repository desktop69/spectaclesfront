import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spectacle } from '../model/Spectacle.model';
import { SpectacleService } from '../services/spectacle.service';

@Component({
  selector: 'app-update-spectacle',
  templateUrl: './update-spectacle.component.html',
  styles: [
  ]
})
export class UpdateSpectacleComponent implements OnInit {
  curentpectacle = new Spectacle;

  constructor(private router: Router,
    private specServices: SpectacleService,
    private activatedRoute: ActivatedRoute) { }

   updateSpectacle() {
    this.specServices.updateSpectacle(this.curentpectacle).subscribe(spec => {
      console.log(spec);
      this.router.navigate(['']);
    });
  }

  AsyncDataSpectacle() {
    this.specServices.consulterSpectacle(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
      console.log(prod.dateCreation)
      this.curentpectacle = prod;
    });
  }

  ngOnInit(): void {
    this.AsyncDataSpectacle()
  }

}
