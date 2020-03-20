import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.sass']
})
export class FileUploaderComponent implements OnInit {
  message = null;
  imageSrc = null;
  @Output() onImageChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      }
      this.onImageChange.emit(file);
  }
  }

  }
