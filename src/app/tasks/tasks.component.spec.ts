import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule,
      ],
      declarations: [TaskComponent, TasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
