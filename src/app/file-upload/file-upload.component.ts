import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
})
export class FileUploadComponent implements OnInit {
  uploadFileList: UploadFile[] = [];

  constructor() {}

  ngOnInit(): void {}

  onFileDropped(event: any) {
    const target = event as FileList;
    if (target != null) {
      this.addFileList(target);
    }
  }

  fileBrowseHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files != null) {
      this.addFileList(target.files);
    }
  }

  deleteFile(index: number) {
    this.uploadFileList.splice(index, 1);
  }

  addFileList(fileList: FileList) {
    const target = Array.from(fileList).map(file => ({
        file,
        name: file.name,
        size: file.size,
    } as UploadFile));
    this.uploadFileList = this.uploadFileList.concat(target);
  }
}

interface UploadFile {
  name: string;
  size: number;
  file: File;
}
