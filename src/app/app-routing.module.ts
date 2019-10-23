import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EwedComponent } from './ewed/ewed.component';
import { EwedInfoComponent } from './ewedInfo/ewedInfo.component';


const routes: Routes = [
  {path: 'home', component: EwedComponent },
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'info/:FilterName/:FilterValue/:MinYear/:MinMonth/:MaxYear/:MaxMonth', component: EwedInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
