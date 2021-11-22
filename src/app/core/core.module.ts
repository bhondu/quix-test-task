import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { APP_CONFIG, AppConfigDefaults } from '../const/app-config';
import { AUTH_CONFIG, AuthConfigDefaults } from '../const/auth-config';
import { AppConfig } from '../models/app-config';
import { AuthConfig } from '../models/auth-config';
import { ApiUrlInterceptor } from './interceptors/api-url.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }

  public static forRoot(authConfig: AuthConfig, appConfig: AppConfig): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: AUTH_CONFIG,
          useValue: {
            ...AuthConfigDefaults,
            ...authConfig,
          },
          multi: false,
        },
        {
          provide: APP_CONFIG,
          useValue: {
            ...AppConfigDefaults,
            ...appConfig,
          },
          multi: false,
        },
        ApiService,
      ],
    };
  }
}
