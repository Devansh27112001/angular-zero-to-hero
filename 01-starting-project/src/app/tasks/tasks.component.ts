import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userObj = input.required<{
    id: string;
    name: string;
    avatar: string;
  }>();
}
