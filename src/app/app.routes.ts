import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { JoinPageComponent } from './join-page/join-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
        title:()=>Promise.resolve("Soundwave")
    },

    {
        path: "discover-page",
        component: DiscoverPageComponent,
        title:()=>Promise.resolve("Discover")
    },

    {
        path: "join-page",
        component: JoinPageComponent,
        title:()=>Promise.resolve("Join")
    },

    {
        path: "home-page",
        component: HomePageComponent,
        title:()=>Promise.resolve("Soundwave")
    }
];
