import { NgModule } from '@angular/core';
import { RouterModule, Routes} from'@angular/router'

import { HeaderComponent }      from './header/header.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
