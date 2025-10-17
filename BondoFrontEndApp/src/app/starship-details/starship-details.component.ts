import { Component } from '@angular/core';
import { StarshipService } from '../starships/starship.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent {

  starships:any;
  starShipId!: number;
  isLoading = false;
  errorMessage = '';
 
  constructor(private starShipsService:StarshipService,private activatedRoute:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void{
    this.isLoading = true;
     const id = this.activatedRoute.snapshot.paramMap.get('id')
     if (id) {
      this.starShipsService.getStarshipById(id).subscribe({
        next:(data)=>{
          this.starships = data,
          this.isLoading = false
        },
        error:(err)=>{
          console.error(err);
          this.errorMessage = 'Failed to load starship details.';
          this.isLoading = false;
        }
      });
    }
  }

  goBackToStarships() {
  this.router.navigate(['/starships']);
  }
   
}
