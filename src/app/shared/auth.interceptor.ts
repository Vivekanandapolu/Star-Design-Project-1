import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from './loader/loader.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { LoaderService } from './services/loader.service'; // Adjust path as needed

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show(); // Show loader when request starts

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.hide(); // Hide loader when request completes
      }),
      catchError((err) => {
        if (err.status === 401 || err.error.exc_type == 'CSRFTokenError') {
          this.toastr.error(err?.error?.message);
          localStorage.clear();
          this.router.navigate(['']);
        }
        if (err.status === 500) {
          this.toastr.error('Internal Error 500');
        }
        if (err.status === 403) {
          this.toastr.error('Forbidden Error 403');
          this.router.navigate(['']);
        }
        if (err.status === 409) {
          this.toastr.error('Already Exists');
        }
        if (err.status === 400) {
          this.toastr.error('Bad Request');
        }
        if (err.status === 404) {
          this.toastr.error('Not Found');
        }
        if (err.status === 504) {
          this.toastr.error('Bad Gateway');
        }
        return throwError(err);
      })
    );
  }
}
