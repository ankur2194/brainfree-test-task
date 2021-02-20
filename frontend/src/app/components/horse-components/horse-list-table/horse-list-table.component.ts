import { Component, OnInit } from '@angular/core';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { HorseService } from 'src/app/services/horse.service';

@Component({
  selector: 'app-horse-list-table',
  templateUrl: './horse-list-table.component.html',
  styles: [],
})
export class HorseListTableComponent implements OnInit {
  horses: any[] = [];
  loadHorsesSubscription: Subscription;

  faEye: any = faEye;
  faEdit: any = faEdit;
  faTrash: any = faTrash;

  genders: any = { 1: 'Male', 2: 'Female' };

  constructor(private horseService: HorseService) {}

  ngOnInit(): void {
    this.loadHorses();
  }

  deleteHorse(horse: any): void {
    this.horseService.deleteHorse(horse.id).subscribe(
      (isDeleted) => {
        this.loadHorses();
      },
      (err) => console.error(err)
    );
  }

  parsePregnantField(horse: any): string {
    if (horse.gender === 2) {
      return horse.pregnant ? 'Yes' : 'No';
    } else {
      return '';
    }
  }

  private loadHorses(): void {
    if (this.loadHorsesSubscription && !this.loadHorsesSubscription.closed) {
      this.loadHorsesSubscription.unsubscribe();
    }

    this.loadHorsesSubscription = this.horseService.getHorses().subscribe(
      (horses) => (this.horses = horses),
      (err) => console.error(err)
    );
  }
}
