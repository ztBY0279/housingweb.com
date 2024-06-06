import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ApiDataType } from './api-data-type';
@Injectable({
  providedIn: 'root'
})


export class ExternalApiService {
  posts: ApiDataType[] = [];
  constructor(){
    fetch("http://localhost:3000/posts")
    .then((Response)=>{
      return Response.json()
    })
    .then((data)=>{
      console.log('the data is ',data);
      this.posts = data
    })
  }

  getData():ApiDataType[]{
    return this.posts
  }
}

