import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormArray , Validators} from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  form = this.fb.group({
    name : ['' , Validators.required],
    email : ['' , Validators.required, Validators.email],
    mobile : this.fb.array([
      this.fb.control('')
    ])
  })

  get mobiles(){
    return this.form.get('mobile') as FormArray;

  }

  add(){
    this.mobiles.push(this.fb.control(''))
    console.log(this.fb.control(''))

  }

  remove(data : any){
    let dt = this.mobiles.removeAt(data)
    console.log(dt)

  }

  onsubmit(){
    console.log(this.form.value)
  }

  ngOnInit(): void {
  }

}
