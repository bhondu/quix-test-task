import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AUTH_CONFIG } from '../../const/auth-config';
import { AuthConfig } from '../../models/auth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject(AUTH_CONFIG) private authConfig: AuthConfig) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = btoa(unescape(encodeURIComponent(this.authConfig.user + ':' + this.authConfig.password)));
    const cloneReq = req.clone({
      setHeaders: {
        Authorization: `Basic ${credentials}`,
      },
    });

    return next.handle(cloneReq);
  }
}
