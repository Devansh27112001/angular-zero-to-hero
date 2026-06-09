import { Component, input, Input } from '@angular/core';
import { UserObject } from '../utility/types';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userObj = input<UserObject | undefined>();
  // @Input() userObg: UserObject | undefined;
}
