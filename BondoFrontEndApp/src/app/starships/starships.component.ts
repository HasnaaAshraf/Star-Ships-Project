import { Component, OnInit } from '@angular/core';
import { StarshipService } from './starship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit{

  allstarships: any[] = [];
  filteredstarships: any[] = [];
  isloading = false;
  errorMessage = '';
  searchText = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;

  constructor(private starShipService: StarshipService,private router:Router) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(url?: string): void {
  this.isloading = true;
  this.errorMessage = '';
  
  this.starShipService.getStarships(url).subscribe({
    next: (response) => {
      this.allstarships = response.results.map((ship: any) => ({
        ...ship,
        id: this.extractIdFromUrl(ship.url)
      }));
      this.nextPageUrl = response.next;
      this.previousPageUrl = response.previous;
      this.applySearchFilter();
      this.isloading = false;
    },
    error: (err) => {
      console.error(err);
      this.errorMessage = 'Failed to load starships.';
      this.isloading = false;
    }
  });
  }

 nextPage(): void {
    if (this.nextPageUrl) {
      this.loadStarships(this.nextPageUrl);
    } else {
      console.warn('No next page available.');
    }
  }

  previousPage(): void {
    if (this.previousPageUrl) {
      this.loadStarships(this.previousPageUrl);
    } else {
      console.warn('No previous page available.');
    }
  }


  extractIdFromUrl(url?: string): number {
  if (!url) return 0;
  const idMatch = url.match(/\/(\d+)\/$/);
  return idMatch ? Number(idMatch[1]) : 0;
  }

  applySearchFilter(): void {
    const keyword = this.searchText.trim().toLowerCase();

    if (!keyword) {
      this.filteredstarships = this.allstarships;
    } else {
      this.filteredstarships = this.allstarships.filter(starship =>
        (starship.name || '').toLowerCase().includes(keyword)
      );
    }
  }

  goToDetails(id: number) {
    console.log('Navigating to details page for ID:', id);
    this.router.navigate(['/details', id]);
  }

}
