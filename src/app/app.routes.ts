import { Routes } from '@angular/router';
import { UsersCreate } from './components/users-create/users-create';
import { UsersList } from './components/users-list/users-list';
import { UsersEdit } from './components/users-edit/users-edit';
import { UsersDetails } from './components/users-details/users-details';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {
        path: "",
        component: UsersList
    },
        {
        path: "create",
        component: UsersCreate
    },
    {
        path: "edit/:id",
        component: UsersEdit
    },
    {
        path: "details/:id",
        component: UsersDetails
    },
    {
        path: "register",
        component: Register
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "dashboard",
        component: Dashboard
    }

];
