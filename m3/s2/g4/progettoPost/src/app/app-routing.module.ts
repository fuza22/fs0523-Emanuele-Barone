import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivePostComponent } from './posts/active-post/active-post.component';
import { PostInattiviComponent } from './posts/inactive-post/inactive-post.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

{
  path: '',
  component: HomeComponent
},
{
  path: 'active-post',
  component: ActivePostComponent
},
{
  path: 'inactive-post',
  component: PostInattiviComponent
},
{
  path: 'users',
  component: UsersComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
