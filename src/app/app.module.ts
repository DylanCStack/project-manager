import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectService } from './project.service';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FilterPipe } from './filter.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewProjectComponent,
    EditProjectsComponent,
    ProjectDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
