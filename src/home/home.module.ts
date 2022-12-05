import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from 'src/app/shared/components/card/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './singup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './singup/signup.service';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule { }