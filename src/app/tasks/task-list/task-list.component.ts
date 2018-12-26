import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/shared/task.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/shared/task.model';
import { TaskResults } from 'src/app/shared/taskResults.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskNameSearch : string;
  parent_TaskSearch : String;
  start_DateSearch: string;
  end_DateSearch: string;
  priority_FromSearch : number;
  priority_ToSearch : number;
  constructor(private taskService: TaskService,
    private toastr : ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.taskService.refreshTaskList();
  }
  editTask(tr : TaskResults){
    this.taskService.taskButtonLblName = 'Update Task';
    this.taskService.isUpdate = true;
    var task: Task;
    if(tr.TaskStartDate == '01/01/0001')
      task.Start_Date = null;
    if(tr.TaskEndDate == '01/01/0001')
      task.End_Date = null;

      task = {
        Task_ID : tr.Task_ID,
        Parent_ID :tr.Parent_ID,
        TaskName :tr.TaskName,
        Start_Date :tr.Start_Date,
        End_Date :tr.End_Date,
        Priority : tr.Priority,
        Parent_Task : tr.ParentTaskName
      };
    this.taskService.formData = Object.assign({}, task);
    this.router.navigateByUrl('/tasks');
  }

  deleteTask(taskId : number, parentTaskId:number){
    this.taskService.deleteTask(taskId, parentTaskId)
    .subscribe(result => {
      this.toastr.success("Task deleted Successfully","Task Manager");
      this.taskService.refreshTaskList();
    });
  }

  filterItem(){
    if(this.taskNameSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => item.TaskName.toLowerCase().indexOf(this.taskNameSearch.toLowerCase()) > -1
     ) 
    }
    else if(this.parent_TaskSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => item.ParentTaskName.toLowerCase().indexOf(this.parent_TaskSearch.toLowerCase()) > -1
     ) 
    }
    else if(this.priority_FromSearch && this.priority_ToSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => item.Priority >= this.priority_FromSearch && item.Priority <= this.priority_ToSearch
     ) 
    }
    else if(this.priority_FromSearch && !this.priority_ToSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => item.Priority >= this.priority_FromSearch
     ) 
    }
    else if(!this.priority_FromSearch && this.priority_ToSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => item.Priority <= this.priority_ToSearch
     ) 
    }
    else if(this.start_DateSearch && this.end_DateSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => new Date(item.TaskStartDate) <= new Date(this.start_DateSearch)
               && new Date(item.TaskEndDate) >= new Date(this.end_DateSearch)
     ) 
    }
    else if(this.start_DateSearch && !this.end_DateSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => new Date(item.TaskStartDate) <= new Date(this.start_DateSearch)
     ) 
    }
    else if(!this.start_DateSearch && this.end_DateSearch)
    {
      this.taskService.list = Object.assign([], this.taskService.list).filter(
        item => new Date(item.TaskEndDate) >= new Date(this.end_DateSearch)
     ) 
    }
    else
    {
      this.taskService.refreshTaskList();
    }
    
  }
}
