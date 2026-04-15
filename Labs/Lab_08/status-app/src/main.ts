import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
// --- Newly Imported Services ---
import { importProvidersFrom } from '@angular/core'; // Import some Service to import Storage Service
import { IonicStorageModule } from '@ionic/storage-angular'; // Import Storage Service

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// First code to execute (bootstrap) for app
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    importProvidersFrom(IonicStorageModule.forRoot()) // Bootstrap imported Storage component
  ],
});
