import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bytes' })
export class BytesPipe implements PipeTransform {
  public transform(bytes: number): string {
    if (isNaN(parseFloat('' + bytes)) || !isFinite(bytes)) return '-';
    if (bytes <= 0) return '0';
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const val = Math.floor(Math.log(bytes) / Math.log(1024));
    return (
      (bytes / Math.pow(1024, Math.floor(val))).toFixed(1) + ' ' + units[val]
    );
  }
}
