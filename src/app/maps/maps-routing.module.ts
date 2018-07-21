import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { JvectormapComponent } from './jvectormap/jvectormap.component';

const routes: Routes = [
  {
      path: 'google',
      component: GoogleComponent
  },
  {
      path: 'jvectormap',
      component: JvectormapComponent
  },
  {
      path: '',
      redirectTo: 'google',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
