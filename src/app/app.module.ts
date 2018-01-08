import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from "@angular/router";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule } from './material.module';
import { TechTalksComponent  } from './tech-talks/tech-talks.component';
import { TalkDetailComponent } from './talk-details/talk-details.component';
// import { reducers, CustomSerializer } from './store/reducers';
import { AppComponent } from './app.component';
import { TalkService } from './http.service';

 const routes: Routes = [
  { path: '', redirectTo: '/talks', pathMatch: 'full' },
  { path: 'talks', component: TechTalksComponent },
  { path: 'talk/:id', component: TalkDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TechTalksComponent,
    TalkDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
 //   StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [TalkService], //{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
