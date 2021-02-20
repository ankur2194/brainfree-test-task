import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-edit-form',
  templateUrl: './horse-edit-form.component.html',
  styles: [],
})
export class HorseEditFormComponent implements OnInit {
  horseEditForm: FormGroup;
  isFemale: boolean = false;
  isPregnant: boolean = false;
  loading: boolean = false;
  horse: any;

  constructor(
    private fb: FormBuilder,
    private horseService: HorseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.horseEditForm = this.fb.group({
      name: [null, [Validators.required]],
      dob: [null, []],
      gender: [null, [Validators.required]],
      pregnant: [null, []],
      due_date: [null, []],
    });

    this.horseEditForm.get('gender').valueChanges.subscribe((val) => {
      if (val === 2) {
        this.horseEditForm.get('pregnant').setValidators([Validators.required]);
        this.isFemale = true;
      } else {
        this.isFemale = false;
        this.isPregnant = false;
        this.horseEditForm.get('pregnant').setValidators([]);
        this.horseEditForm.get('due_date').setValidators([]);
      }
    });

    this.horseEditForm.get('pregnant').valueChanges.subscribe((val) => {
      if (val === true && this.isFemale) {
        this.horseEditForm.get('due_date').setValidators([Validators.required]);
        this.isPregnant = true;
      } else {
        this.isPregnant = false;
        this.horseEditForm.get('due_date').setValidators([]);
      }
    });

    const horse_id: number = +this.route.snapshot.paramMap.get('id');
    this.horseService.getHorseById(horse_id).subscribe(
      (horse) => {
        this.horse = horse;
        this.horseEditForm.setValue({
          name: this.horse.name,
          dob: this.horse.dob,
          gender: this.horse.gender,
          pregnant: this.horse.pregnant,
          due_date: this.horse.due_date,
        });
      },
      (err) => console.error(err)
    );
  }

  ngOnInit(): void {}

  submitForm(): void {
    for (const i in this.horseEditForm.controls) {
      this.horseEditForm.controls[i].markAsDirty();
      this.horseEditForm.controls[i].updateValueAndValidity();
    }

    if (this.horseEditForm.invalid || this.loading) {
      return;
    }

    this.loading = true;

    if (!this.isFemale) {
      this.horseEditForm.get('pregnant').setValue(null);
      this.horseEditForm.get('due_date').setValue(null);
    } else if (!this.isPregnant) {
      this.horseEditForm.get('due_date').setValue(null);
    }

    const horseData = this.horseEditForm.value;
    this.horseService.updateHorse(this.horse.id, horseData).subscribe(
      (isUpdated) => {
        this.router.navigate(['/horses', this.horse.id]);
      },
      (err) => console.error(err)
    );
  }
}
