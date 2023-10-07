import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent {


  constructor(private service : HttpService){}

  start(){
    this.service.setAccess().subscribe(data=>{
      console.log(data)
    })
  }

}
