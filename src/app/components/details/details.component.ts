import { CommonModule } from '@angular/common';
import { HousingLocation } from './../../housingLocation';
import { Component,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { FormControl,ReactiveFormsModule,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 // routeId = -1;
  route:ActivatedRoute = inject(ActivatedRoute);
  housingService:HousingService = inject(HousingService);
  housingLocation:HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    console.log('the value of housingLocation',this.housingLocation);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
    this.applyForm.reset();
  }
}
