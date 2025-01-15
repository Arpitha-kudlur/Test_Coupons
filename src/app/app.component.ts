import { Component, OnInit,Inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MSAL_GUARD_CONFIG, MsalService, MsalBroadcastService, MsalGuardConfiguration } from '@azure/msal-angular';
import { InteractionType, PopupRequest, RedirectRequest, AuthenticationResult,SsoSilentRequest  } from '@azure/msal-browser';
import { config } from './config';

import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig,
        @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
        private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private router: Router) { }
 
//     async ngOnInit() {
//         this.primengConfig.ripple = true;
//         try 
//         {await this.msalService.instance.initialize();
//           console.log('MSAL Initialization complete.');
//           // Handle the redirect response and set the active account
//         this.msalService.handleRedirectObservable().subscribe({
//           next: (response: AuthenticationResult) => {
//               if (response) {
//                   console.log('Login successful via redirect:', response);
//                   this.msalService.instance.setActiveAccount(response.account); // Set the active account
//                   console.log('Active account already set:', activeAccount);
//                   this.acquireToken(); // Acquire token after login
//               }
//           },
//           error: (err) => {
//             console.error('Error during redirect processing:', err);
//         }
//       });
    
//     const activeAccount = this.msalService.instance.getActiveAccount();
//     if (!activeAccount) {
//         console.log('No active account found. Redirecting to login.');
//         this.login(); // Trigger login if no active account
//     }else
//     { this.router.navigate(['/']); // Navigate to the mission path
//       }
// } catch (err) {
//     console.error('MSAL Initialization error:', err);
// }
//     }

ngOnInit(): void {
    
}
    login() {
      // Use `loginRedirect` for redirect-based authentication
      this.msalService.loginRedirect(config.loginRequest);
    }
  
  
      acquireToken() {
        this.msalService.acquireTokenSilent(config.loginRequest).subscribe({
            next: (response: AuthenticationResult) => {
                console.log('Token acquired:', response.accessToken);
            },
            error: (err) => {
                console.error('Token acquisition failed:', err);
                if (err.name === "InteractionRequiredAuthError") {
                    console.log('Falling back to acquireTokenRedirect');
                    this.msalService.acquireTokenRedirect(config.loginRequest); // Redirect for token acquisition
                }
            },
        });
    }
    
    
}
