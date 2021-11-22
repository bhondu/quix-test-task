import { InjectionToken } from '@angular/core';

import { AuthConfig } from '../models/auth-config';

export const AUTH_CONFIG = new InjectionToken<AuthConfig>('AUTH_CONFIG');

export const AuthConfigDefaults: AuthConfig = {
  user: 'user',
  password: 'userPass',
};
