import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { ProfileRouteActivatorGuard } from "./profile-route-activator.guard";

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileRouteActivatorGuard] },
    { path: 'login', component: LoginComponent },
];