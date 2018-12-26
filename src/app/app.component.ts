import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
  
  routeLinks: any[];
  activeLinkIndex = -1;


constructor(private router: Router) {
  this.routeLinks = [
     {
          label: 'Add Task',
          link: './tasks',
          index: 0
      }, 
      {
          label: 'View Task',
          link: './tasklist',
          index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}