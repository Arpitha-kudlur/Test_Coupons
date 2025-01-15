export const config = {

    // MSAL Configuration
    msalConfig: {
      auth: {
        //clientId:'eb7a3a80-22aa-4cdd-8023-66cea7ec19dd',
       clientId: 'c4e2717d-088d-41b4-8913-5735d0b08f3c', // NAIR, // Replace with your Azure AD App registration clientId
        authority: 'https://login.microsoftonline.com/12a3af23-a769-4654-847f-958f3d479f4a/', // Replace with your tenant ID
        redirectUri: "/", // Your app's redirect URI
      },
      cache: {
        cacheLocation: "localStorage", // or 'sessionStorage'
        storeAuthStateInCookie: false, // Recommended for IE11 or Edge
      },
    },
  
    // Login Request Configuration
    loginRequest: {
      scopes: ["api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation"],
     // scopes: ["User.Read"], // Replace with the required scopes
    },
  
    // Backend API Configuration
    apiConfig: {
      //scopes: ["https://graph.microsoft.com/User.Read"],
      //scopes: ["api://<YOUR_API_ID>/access_as_user"], // Replace with your backend API scopes
     scopes: ["api://9cecca07-e5c6-4dd1-81e9-67770c172d69/user_impersonation/user_impersonation"]
      
    },
  };
  