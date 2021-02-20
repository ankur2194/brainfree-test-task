import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (
            event.status === 200 &&
            event.body &&
            event.body.success === false
          ) {
            if (event.body.error.VALIDATION_ERROR) {
              event.body.error.VALIDATION_ERROR.forEach((error) => {
                alert(error.message);
              });
              return throwError('Validation Error!');
            }
          }
        }
      })
    );
  }
}
