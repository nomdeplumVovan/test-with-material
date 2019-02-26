import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user';
import { Position } from '../position';
import { AbzService as UsersService } from '../abz.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  public positions: Array<Position> = [];
  user: User = new User;
  position: Position;
  public selectedFile: any = 'Upload your photo';
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  myForm: FormGroup;
  filename: any;

  constructor(private usersService: UsersService) { }

  registerUser() {
  }


  fetchPositions() {
    return this.usersService
      .getPositions()
      .subscribe((response: any) => {
        this.positions = response.positions;
      });
  }

  onPhotoChange() {
    this.filename = this.user.photo.replace(/.*\\/, '');
    if (this.filename !== null) {
      console.log(this.filename);
      return this.selectedFile = this.filename;
    }
  }

  uploadImage() { }

  onSubmit() {
    console.log(this.user);
  }
  ngOnInit() {
    this.fetchPositions();
  }

}
