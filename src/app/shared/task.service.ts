import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { TaskResults } from './taskResults.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  formData : Task;
  list : TaskResults[];
  taskButtonLblName : string = 'Add Task';
  isUpdate : boolean = false;
  readonly rootURL ="http://172.18.3.136/api";
  //readonly rootURL ="http://localhost:55830/api"

  constructor(private http : HttpClient) { }

  postTask(formData : Task){
    return this.http.post(this.rootURL+'/task',formData);     
   }

  putTask(formData : Task){
    return this.http.put(this.rootURL+'/task/'+formData.Task_ID,formData);     
   }

  deleteTask(id : number, parentTaskId: number){
    return this.http.delete(this.rootURL+'/task/'+id);
   }

   refreshTaskList(){
    this.http.get(this.rootURL+'/task')
    .toPromise().then(res => this.list = res as TaskResults[]);
  }
}
