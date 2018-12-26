import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      ToastrModule.forRoot(),
  ]
  }));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
