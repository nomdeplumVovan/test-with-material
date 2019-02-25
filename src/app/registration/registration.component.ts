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
  isShown= false;
  // selectedPosition: any = 'Select your position ';
  // styleSelectedFile: String = ' color: rgb(141, 140, 140);';
  myForm: FormGroup;

  // validColor = '#b7b7b7 ';
  // invalidColor = '#f44336';
  // validNameColor = this.validColor;
  // validNameBorderColor = this.validColor;
  // validMailColor = this.validColor;
  // validMailBorderColor = this.validColor;
  // validPlaceholderMail = 'Your email';



  // photoControl = new FormControl;
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
      // this.styleSelectedFile = 'color: rgb(239, 108, 0);';
      return this.selectedFile = this.filename;
    }
  }
  // onPositionChange() {
  //   this.selectedPosition = '';

  // }

  uploadImage() {
    // return this.onPhotoChange();
  }
  // validationInput() {
  //   if (this.myForm.controls['userName'].invalid && this.myForm.controls['userName'].touched) {

  //     this.validNameColor = this.invalidColor;
  //     this.validNameBorderColor = this.invalidColor;
  //     console.log('this.invalidColor :' + this.invalidColor );
  //   }
  //   if (this.myForm.controls['userEmail'].invalid && this.myForm.controls['userEmail'].touched) {
  //     // this.validPlaceholderMail = 'Error';
  //     this.validMailColor = this.invalidColor;
  //     this.validMailBorderColor = this.invalidColor;
  //   }
  // }



  onSubmit() {
    console.log(this.myForm);
  }
  ngOnInit() {
    this.fetchPositions();
    // this.myForm = new FormGroup({
    //   userName: new FormControl('', Validators.required),
    //   userEmail: new FormControl('', [Validators.required,
    //   Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')]),

    //   userPhone: new FormControl('', [Validators.required,
    //   Validators.pattern('^[\+]{0,1}380([0-9]{9})$')]),

    //   userPosition: new FormControl(),
    //   userPhoto: new FormControl()
    // });
//  this.validationInput();
  }

}
