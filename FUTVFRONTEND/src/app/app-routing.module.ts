import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfinitePageComponent } from './components/infinite-page/infinite-page.component';
const routes: Routes = [
  { path: '', component: InfinitePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
