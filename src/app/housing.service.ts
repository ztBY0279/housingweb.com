import { Injectable } from '@angular/core';
import { HousingLocation } from './housingLocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  housingLocation: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28DE-WQFjqHcmeI5GfGcoKwy02Ua1fQozuM8l_Gpwj4L2ZzvxKusOoEktLca41zjjL7w&usqp=CAU",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg0C5Nff96ZpUgBVVjqRGgK2P_JESD0RcUxmR7FSJg21T6qzGKKiTX8M0JLfWI0Jxf3E&usqp=CAU",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: "https://housingfactory.in/Assets/wp-content/uploads/2021/12/Untitled-design-4.png",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      // photo: "https://i.pinimg.com/736x/80/c9/31/80c9310999cb9917e489fdf4dbccd5f0.jpg",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDS71-TK2C1QaynoJ06Xgq9bP9H6GIyt2jw&s",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUXHtX0aj8HWpZH3hkQS6MFHlDIFakfvIzA&s",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: "https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg",
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe House',
      city: 'Oakland',
      state: 'CA',
      photo: `https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQup-GHifQfwYZRp7tVpByvyVxckoexLyIbNg&s",
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: "https://housingfactory.in/Assets/wp-content/uploads/2021/12/Untitled-design-4.png",
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ]
  constructor() { }
   
   
    getAllHousingLocations(): HousingLocation[] {
      return this.housingLocation;
    }
    getHousingLocationById(id: number): HousingLocation | undefined {
      return this.housingLocation.find((housingLocationItem) => housingLocationItem.id === id);
    }

    submitApplication(firstName: string, lastName: string, email: string) {
      console.log(
        `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
      );
    }

 
}
