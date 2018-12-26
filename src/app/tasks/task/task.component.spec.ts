import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TaskComponent } from './task.component';
import { MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule,
      ],
      declarations: [ TaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
