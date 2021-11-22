import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiUrlInterceptor implements HttpInterceptor {
  constructor(private apiService: ApiService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({ url: this.apiService.apiUrl(req.url) });
    return next.handle(cloneReq);
  }
}
