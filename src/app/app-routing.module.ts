import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { MessageComponent } from './components/pages/message/message.component';

const routes: Routes = [
   // { path: 'message', component: MessageComponent },
    //{ path: 'login' },
    { path: '', redirectTo: 'message', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }