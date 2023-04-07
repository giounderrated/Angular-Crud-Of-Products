import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss'],
})
export class FormExampleComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    firstname: ['',Validators.required],
    lastname: [''],
    contacts: this.formBuilder.group({
      contactType: ['-1'],
      email: [''],
      phone: [''],
    }),
    skills: this.formBuilder.array([]),
  });

  preview: any;

  save() {
    if(!this.form.valid) return;
    this.preview = this.form.value;
  }

  get skillsForm() {
    return this.form.get('skills') as FormArray;
  }

  addASkillFormGroup() {
    this.skillsForm.push(
      this.formBuilder.group({
        programLanguage: ['',[Validators.required]],
        experience: [0,Validators.compose([Validators.required,Validators.min(0)])],
      })
    );
  }

  removeSkillFormGroup(index: number) {
    this.skillsForm.removeAt(index);
  }

  get firstname(){
    return this.form.get('firstname');
  }

  getProgrammingLanguage(index: number) {
    return this.skillsForm.at(index).get('programLanguage');
  }
  getExperience(index:number){
    return this.skillsForm.at(index).get('experience')
  }
}
