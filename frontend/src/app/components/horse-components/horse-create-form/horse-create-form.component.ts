import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-create-form',
  templateUrl: './horse-create-form.component.html',
  styles: [],
})
export class HorseCreateFormComponent implements OnInit {
  horseCreateForm: FormGroup;
  isFemale: boolean = false;
  isPregnant: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private horseService: HorseService,
    private router: Router
  ) {
    this.horseCreateForm = this.fb.group({
      name: [null, [Validators.required]],
      dob: [null, []],
      gender: [null, [Validators.required]],
      pregnant: [null, []],
      due_date: [null, []],
    });

    this.horseCreateForm.get('gender').valueChanges.subscribe((val) => {
      if (val === 2) {
        this.horseCreateForm
          .get('pregnant')
          .setValidators([Validators.required]);
        this.isFemale = true;
      } else {
        this.isFemale = false;
        this.isPregnant = false;
        this.horseCreateForm.get('pregnant').setValidators([]);
        this.horseCreateForm.get('due_date').setValidators([]);
      }
    });

    this.horseCreateForm.get('pregnant').valueChanges.subscribe((val) => {
      if (val === true && this.isFemale) {
        this.horseCreateForm
          .get('due_date')
          .setValidators([Validators.required]);
        this.isPregnant = true;
      } else {
        this.isPregnant = false;
        this.horseCreateForm.get('due_date').setValidators([]);
      }
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    for (const i in this.horseCreateForm.controls) {
      this.horseCreateForm.controls[i].markAsDirty();
      this.horseCreateForm.controls[i].updateValueAndValidity();
    }

    if (this.horseCreateForm.invalid || this.loading) {
      return;
    }

    this.loading = true;

    if (!this.isFemale) {
      this.horseCreateForm.get('pregnant').setValue(null);
      this.horseCreateForm.get('due_date').setValue(null);
    } else if (!this.isPregnant) {
      this.horseCreateForm.get('due_date').setValue(null);
    }

    const horseData = this.horseCreateForm.value;
    this.horseService.createHorse(horseData).subscribe(
      (isCreated) => {
        this.router.navigate(['/horses']);
      },
      (err) => console.error(err)
    );
  }
}
