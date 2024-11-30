import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader/loader.service';
// import { LoaderService } from './services/loader.service'; // Adjust path as needed

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show(); // Show loader when request starts

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.hide(); // Hide loader when request completes
      })
    );
  }
}
