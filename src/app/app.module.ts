import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckedDirective } from './shared/checked.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CheckedDirective,
    TransformTaskPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule

  ],
  providers: [CheckedDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
