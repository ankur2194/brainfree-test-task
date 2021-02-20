import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-detail-fields',
  templateUrl: './horse-detail-fields.component.html',
  styles: [],
})
export class HorseDetailFieldsComponent implements OnInit {
  horse: any;

  genders: any = { 1: 'Male', 2: 'Female' };

  constructor(
    private horseService: HorseService,
    private route: ActivatedRoute
  ) {
    const horse_id: number = +this.route.snapshot.paramMap.get('id');
    this.horseService.getHorseById(horse_id).subscribe(
      (horse) => (this.horse = horse),
      (err) => console.error(err)
    );
  }

  ngOnInit(): void {}

  parsePregnantField(horse: any): string {
    if (horse.gender === 2) {
      return horse.pregnant ? 'Yes' : 'No';
    } else {
      return '';
    }
  }
}
