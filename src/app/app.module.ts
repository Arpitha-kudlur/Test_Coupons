import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy, DatePipe, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ServerErrorComponent } from './core/errors/server-error/server-error.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';
import {TooltipModule} from 'primeng/tooltip';
import { NgxPrintModule } from 'ngx-print';
import { config } from './config';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { PublicClientApplication, InteractionType} from '@azure/msal-browser';
import {
    MSAL_GUARD_CONFIG,
    MsalService,
    MsalBroadcastService,
    MsalGuard,
    MsalInterceptor,
    MsalModule,
    MsalInterceptorConfiguration,
    MsalGuardConfiguration,
    MSAL_INTERCEPTOR_CONFIG
  } from '@azure/msal-angular';
import { RouterLink, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';

 
//   const apiBaseUri: string = environment.apiBaseUri
  //'https://nche-dv-nair-api-euwe-app-b8eyasb6fwfdexe3.westeurope-01.azurewebsites.net/';

  const protectedResourceMap = new Map<string, string[]>([
        // ['https://graph.microsoft.com/v1.0/me', ['User.Read']], // Microsoft Graph API example
        // ['https://localhost:7107/', ['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // ['https://localhost:7107/actor/me', ['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // ['https://localhost:7107/actor/all', ['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
    
        // [`${apiBaseUri}actor`, ['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}mission`, ['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}aircraft`, ['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}airport`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}comment`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}Operator`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}missionhoc`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impuser_impersonation/user_impersersonation']],
        // [`${apiBaseUri}missionOwner`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/onation']],
        // [`${apiBaseUri}flight`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}missionTraveller`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}missionTripTransport`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
        // [`${apiBaseUri}trip`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
    
        // [`${apiBaseUri}trip`,['api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation']],
    ]);
  
    export function msalInterceptorConfigFactory(): MsalInterceptorConfiguration {
        return {
          interactionType: InteractionType.Redirect,
          protectedResourceMap,
        };
      }
      export function msalGuardConfigFactory(): MsalGuardConfiguration {
        return {
          interactionType: InteractionType.Redirect,
          authRequest: config.loginRequest, // Ensure loginRequest is defined in your `config.ts`
        };
      }

      

@NgModule({
    declarations: [AppComponent, NotfoundComponent, ServerErrorComponent],
    imports: [AppRoutingModule, AppLayoutModule, TableModule, CommonModule, RouterLink, RouterModule, NgxPrintModule,
        BrowserAnimationsModule,
        // ToastrModule.forRoot({
        //     positionClass: 'toast-top-right',
        //     messageClass: 'toast-message'
        // }),
        TooltipModule,
        BrowserModule,
        HttpClientModule,
        MsalModule.forRoot(
            new PublicClientApplication(config.msalConfig), // MSAL instance
            msalGuardConfigFactory(), // MSAL guard config
            msalInterceptorConfigFactory() // MSAL interceptor config
          ),],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,
         // { provide: MSAL_INSTANCE,useFactory: MSALInstanceFactory},
         {provide: MSAL_INTERCEPTOR_CONFIG,useFactory: msalInterceptorConfigFactory,},
        { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
      //  { provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true,},
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
         ToastrService, ConfirmationService, DatePipe,
        MsalService,MsalBroadcastService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
