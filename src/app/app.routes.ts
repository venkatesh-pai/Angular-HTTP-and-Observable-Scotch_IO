import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

export const AppRoutes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: ':id',
        component: UserDetailComponent
      },
      {
        path: ':id/edit',
        component: UserEditComponent
      }
    ]
  },
  // default route
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  // 404
  { path: '**', redirectTo: 'users' }
];
