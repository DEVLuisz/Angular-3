import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginGuard } from 'src/app/core/auth/login.guard';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/signup.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [LoginGuard],
      children: [
          {
              path: '',
              component: SignInComponent,
          },
          {
              path: 'signup',
              component: SignUpComponent,
          },
      ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})

export class HomeRoutingModule{}