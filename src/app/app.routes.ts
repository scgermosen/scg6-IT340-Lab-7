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
        component: UsersList,
        title: "Users List"
    },
        {
        path: "create",
        component: UsersCreate,
        title: "New User Creation"
    },
    {
        path: "edit/:id",
        component: UsersEdit,
        title: "Edit User"
    },
    {
        path: "details/:id",
        component: UsersDetails,
        title: "User Details"
    },
    {
        path: "register",
        component: Register,
        title: "Register Page"
    },
    {
        path: "login",
        component: Login,
        title: "Login Page"
    },
    {
        path: "dashboard",
        component: Dashboard,
        title: "User Dashboard"
    }

];
