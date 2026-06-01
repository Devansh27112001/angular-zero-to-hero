import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../utility/users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private getRandomIndex(): number {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  selectedUser = signal(DUMMY_USERS[this.getRandomIndex()]);

  get imagePath(): string {
    return 'assets/users/' + this.selectedUser().avatar;
  }

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[this.getRandomIndex()]);
    console.log('click');
  }
}
