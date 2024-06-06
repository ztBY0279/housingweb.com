import { Component,Input,inject,Output,EventEmitter } from '@angular/core';
import { HousingLocation } from '../../housingLocation';
import { HousingService } from '../../housing.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
   @Input() housingLocation!: HousingLocation;
   //housingLocationList:HousingLocation[] = [];
   //housingService:HousingService = inject(HousingService);
   @Output() idProvider = new EventEmitter<number>();
   constructor(){
   // this.housingLocationList = this.housingService.getAllHousingLocations();
    //console.log('the value of this.housingLocationList is ',this.housingLocationList);
   }
}
