import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../shared/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService : TaskService, 
    private toastr: ToastrService) { }

  ngOnInit() {
    if(this.taskService.taskButtonLblName != 'Update Task')
    {
      this.resetForm();      
    }  
  }
 resetForm(form? : NgForm){
   if(form != null)
     form.resetForm();

     this.taskService.taskButtonLblName = 'Add Task';
     this.taskService.isUpdate = false;

   this.taskService.formData = {
    Task_ID : null,
    Parent_ID : null,
    TaskName: '',
    Start_Date:null,
    End_Date:null,
    Priority:0,
    Parent_Task : '',
   }
 }

 onSubmit(form : NgForm){
   if(form.value.Task_ID == null)
    this.addTask(form);
    else
    this.updateTask(form);
 }

 addTask(form : NgForm){
  if(this.compareDates()){
    this.taskService.postTask(form.value)
        .subscribe(result => {
          this.toastr.success("Task Added Successfully","Task Manager");
          this.resetForm(form);
        });
    }
 }
 updateTask(form: NgForm){
  if(this.compareDates()){
    this.taskService.putTask(form.value)
    .subscribe(result => {
      this.toastr.success("Task updated Successfully","Task Manager");
      this.resetForm(form);
    });
  }
 }

 compareDates(){
  if(new Date(this.taskService.formData.Start_Date) > new Date(this.taskService.formData.End_Date)){
      this.toastr.error('Start_Date should not be greaterthan End_Date', 'Task Manager');
      return false;
    }
    return true;
  }
}
