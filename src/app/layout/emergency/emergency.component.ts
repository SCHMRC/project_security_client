import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService, UsciteClasse } from 'src/app/service/http.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent implements OnInit {
  form!: FormGroup;
  test: UsciteClasse = {
    idClasseFK : "3ET",
    timestamp : "2023-10-22 15:47:20"
  }


  constructor(private service: HttpService, private fb: FormBuilder) {
    this.form = this.initForm();
  }

  ngOnInit() {

  }

  start(num: number){
    this.service.setAccess(num).subscribe(data=>{
      console.log(data)
    })
  }

  onStart() {
    let form = this.form.value
    this.service.getUsciteClasse(form).subscribe(data => { console.log(data) })
  }

  initForm() {
    return  this.fb.group({
      idClasseFK: [this.test.idClasseFK],
      timestamp: [this.test.timestamp]
    })
  }

}
