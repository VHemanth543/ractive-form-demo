import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormArray , Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {

  compname = ""

  empForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({

      skills: this.fb.array([]),
      compName : ['']
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',

    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
