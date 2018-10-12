// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB_HLpKI5kOl8v0dCVj9dL8I1KFHNy0P8E",
    authDomain: "fir-crudapp-fe3a3.firebaseapp.com",
    databaseURL: "https://fir-crudapp-fe3a3.firebaseio.com",
    projectId: "fir-crudapp-fe3a3",
    storageBucket: "fir-crudapp-fe3a3.appspot.com",
    messagingSenderId: "658833774084"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
