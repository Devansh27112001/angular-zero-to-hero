import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './utility/users';
import { TasksComponent } from './tasks/tasks.component';
import { UserObject } from './utility/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  userObject: UserObject = {
    id: '',
    name: '',
    avatar: '',
  };
  tmpUser = { id: '01', name: 'Devansh', avatar: 'testAvatar' };

  onSelectUser(User: UserObject): void {
    /* Instead of getting the whole user object in this method, we can also get the id of 
  the selected user from the user.component.ts and then find that particular user here using 
  that id as we already have the list of users, using .find() method and then pass the name
  of that found user to the app-tasks component.
  */
    console.log('Hello from app.component.ts file');
    this.userObject = User;
  }
}
