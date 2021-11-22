import { Inject, Injectable } from '@angular/core';

import { APP_CONFIG } from '../../const/app-config';
import { AppConfig } from '../../models/app-config';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  public getApiUrl() {
    return this.appConfig.apiUrl;
  }

  public getApiVersion() {
    return this.appConfig.apiVersion;
  }

  public apiUrl(path: string) {
    return this.getApiUrl() + this.getApiVersion() + path;
  }
}
