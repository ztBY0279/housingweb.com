import { Component,inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../housingLocation';
import { HousingService } from '../../housing.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
   // housingLocation: HousingLocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };
  // name = this.housingLocation.name;
    readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
    housingLocation: HousingLocation[] = [];
    housingService:HousingService = inject(HousingService);

    filteredLocationList: HousingLocation[] = [];
    constructor(){
      this.housingLocation = this.housingService.getAllHousingLocations();
      this.filteredLocationList = this.housingLocation;
    }

    filterResults(text: string) {
      if (!text) {
        this.filteredLocationList = this.housingLocation;
        return;
      }
      this.filteredLocationList = this.housingLocation.filter((housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
      );
    }


}
