import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserObject } from '../utility/types';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserObject;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() custSelect = new EventEmitter<UserObject>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // private getRandomIndex(): number {
  //   return Math.floor(Math.random() * DUMMY_USERS.length);
  // }

  // selectedUser = signal(DUMMY_USERS[this.getRandomIndex()]);
  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(): void {
    console.log('click from user.component.ts');
    this.custSelect.emit(this.user);
    // this.selectedUser.set(DUMMY_USERS[this.getRandomIndex()]);
  }
}
