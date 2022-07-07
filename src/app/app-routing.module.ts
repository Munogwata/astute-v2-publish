import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GrowComponent } from './pages/grow/grow.component';
import { HomeMoneyComponent } from './pages/home-money/home-money.component';
import { KeepComponent } from './pages/keep/keep.component';
import { MakeComponent } from './pages/make/make.component';

const routes: Routes = [
  { path: '', component: HomeMoneyComponent },
  { path: 'make', component: MakeComponent },
  { path: 'keep', component: KeepComponent },
  { path: 'grow', component: GrowComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
