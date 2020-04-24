import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User';
import { FileUploaderComponent, DefaultFUBackground } from 'src/app/file-uploader/file-uploader.component';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.sass']
})
export class ProfileEditComponent implements OnInit {

  @ViewChild('fileUploader', { static: false }) fileUploader: FileUploaderComponent;
  fileUploaderOptions: DefaultFUBackground = new DefaultFUBackground('photo_camera', null, 'white');

  form: FormGroup;
  username= null;
  avatar = ''
  user: User = new User();
  constructor(private formBuilder: FormBuilder, 
    private userService: UserService,
    private authService: AuthenticationService) {
    this.username = this.authService.currentUserValue.username;
    this.form = this.formBuilder.group({
      username: ['', []],
      avatar: ['', []],
      description: ['', []],
      instagram: ['', []],
    });
   }

  ngOnInit() {
    
    this.userService.getUser(this.username).subscribe((user: User)=>{
      this.avatar = user.avatar;
      this.form.get('username').patchValue(user.username);
      this.form.get('instagram').patchValue(user.instagram);
      this.form.get('description').patchValue(user.description);
    })
  }

  uploadFile(){
    this.fileUploader.upload();
  }

}
