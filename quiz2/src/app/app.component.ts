import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'image-gallery';
  // private data:any = []
  // constructor(private http: HttpClient) {
    
  }
 
//   getData(){
//     const url ='http://api.open-notify.org/astros.json'
//     this.http.get(url).subscribe((res)=>{
//       this.data = res
//       console.log(this.data)
//     })
//   }
//  }