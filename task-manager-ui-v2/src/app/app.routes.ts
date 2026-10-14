import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { TaskListComponent } from './components/task-list/task-list';
import { authGuard } from './guards/auth-guard';
import { TaskForm } from './components/task-form/task-form';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tasks',
    component: TaskListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'tasks/create',
    component: TaskForm
  },
  {
    path: 'tasks/edit/:id',
    component: TaskForm
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];