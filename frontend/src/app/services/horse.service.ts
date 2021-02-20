import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HorseService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getHorses(): Observable<any[]> {
    return this.http.get<any>(this.API_URL + `/horses`).pipe(
      map((res) => {
        let horses: any[] = [];
        if (res && res.success && res.data) {
          horses = res.data;
        } else {
          throw 'Error while fetching horses';
        }
        return horses;
      })
    );
  }

  getHorseById(id: number): Observable<any> {
    return this.http.get<any>(this.API_URL + `/horses/${id}`).pipe(
      map((res) => {
        let horse: any = null;
        if (res && res.success && res.data) {
          horse = res.data;
        } else {
          throw 'Error while fetching horse';
        }
        return horse;
      })
    );
  }

  createHorse(horseData: any): Observable<boolean> {
    return this.http.post<any>(this.API_URL + `/horses/create`, horseData).pipe(
      map((res) => {
        let isCreated: boolean = false;
        if (res && res.success && res.data) {
          isCreated = res.data;
        } else {
          throw 'Error while creating horse';
        }
        return isCreated;
      })
    );
  }

  updateHorse(id: number, horseData: any): Observable<boolean> {
    return this.http
      .put<any>(this.API_URL + `/horses/${id}/update`, horseData)
      .pipe(
        map((res) => {
          let isUpdated: boolean = false;
          if (res && res.success && res.data) {
            isUpdated = res.data;
          } else {
            throw 'Error while updating horse';
          }
          return isUpdated;
        })
      );
  }

  deleteHorse(id: number): Observable<boolean> {
    return this.http.delete<any>(this.API_URL + `/horses/${id}/delete`).pipe(
      map((res) => {
        let isDeleted: boolean = false;
        if (res && res.success && res.data) {
          isDeleted = res.data;
        } else {
          throw 'Error while deleting horse';
        }
        return isDeleted;
      })
    );
  }
}
