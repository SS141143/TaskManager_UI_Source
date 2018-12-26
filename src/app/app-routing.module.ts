import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tasks',
    pathMatch:'full'
  },
  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'tasklist',
    component: TaskListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
