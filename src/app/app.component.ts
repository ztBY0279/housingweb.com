import { Component,inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiDataType } from './api-data-type';
import { ExternalApiService } from './external-api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06homes';
  year:number = new Date().getFullYear()
  postsData:ApiDataType[] = [];
  externalApiData:ExternalApiService = inject(ExternalApiService);

  housingLocationId : ActivatedRoute = inject(ActivatedRoute);
  activatedId = -1;

  constructor(){
    this.postsData = this.externalApiData.getData();
    console.log('the data in appcomponent is ',this.postsData);
    this.activatedId = Number(this.housingLocationId.snapshot.params['id'])
  }
  

}
