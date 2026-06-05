import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../utility/users';
import { UserObject } from '../utility/types';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() custSelect = new EventEmitter<UserObject>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // private getRandomIndex(): number {
  //   return Math.floor(Math.random() * DUMMY_USERS.length);
  // }

  // selectedUser = signal(DUMMY_USERS[this.getRandomIndex()]);
  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(): void {
    console.log('click from user.component.ts');
    this.custSelect.emit({ id: this.id, name: this.name, avatar: this.avatar });
    // this.selectedUser.set(DUMMY_USERS[this.getRandomIndex()]);
  }
}
