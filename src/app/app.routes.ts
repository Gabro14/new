import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {path: '', redirectTo:  'home', pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "details/:id", component: DetailsComponent},
    {path: "roomDetails/:id", component: RoomDetailsComponent},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "**", component: ErrorComponent}



];
