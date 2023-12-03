import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.scss']
})
export class BusyComponent implements OnInit{
  startAndataCorridoio!: number;
  endAndataCorridoio!: number;
  endPermanenzaBagno!: number;
  endRitornoCorridoio!: number;

  constructor(private service : HttpService) {
    this.service.getTimeStartExitClass('3ET').subscribe(time => {
      this.startAndataCorridoio = time.result.start_exit_from_class
    })
    setTimeout(() => {
      setInterval(() => {
        this.service.getTimeEndExitClass('3ET').subscribe(time => {
          this.endAndataCorridoio = time.result.end_exit_from_class
        })
      },3000)
    }
    ,3000)

  }

  ngOnInit() {

  }

}
