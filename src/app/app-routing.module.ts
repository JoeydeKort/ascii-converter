import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {AsciiConverterComponent} from "./ascii-converter/ascii-converter.component";

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'ascii-converter',
    component: AsciiConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
