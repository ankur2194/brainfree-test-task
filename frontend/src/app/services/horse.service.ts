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
}
