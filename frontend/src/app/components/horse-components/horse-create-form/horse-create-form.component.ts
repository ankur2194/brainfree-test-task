import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
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

  faCalendar = faCalendar;

  constructor(
    private fb: FormBuilder,
    private horseService: HorseService,
    private router: Router
  ) {
    this.horseCreateForm = this.fb.group({
      name: ['', [Validators.required]],
      dob: ['', []],
      gender: ['', [Validators.required]],
      pregnant: ['', []],
      due_date: ['', []],
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
      if (val === 1 && this.isFemale) {
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
      // return;
    }

    this.loading = true;

    const horseData = this.horseCreateForm.value;
    this.horseService.createHorse(horseData).subscribe(
      (isCreated) => {
        this.router.navigate(['/horses']);
      },
      (err) => console.error(err)
    );
  }
}
