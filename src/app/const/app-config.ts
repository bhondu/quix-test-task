import { InjectionToken } from '@angular/core';

import { AppConfig } from '../models/app-config';

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export const AppConfigDefaults: AppConfig = {
  apiUrl: '/api',
  apiVersion: '/v1',
};
