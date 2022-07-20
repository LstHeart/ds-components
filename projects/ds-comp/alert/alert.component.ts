import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertType } from './alert.types';

@Component({
  selector: 'ds-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  // Alert 类型
  @Input() type: AlertType = 'info';
  // 是否显示图标，用于支持用户自定义图标
  @Input() showIcon = true;
  // 是否可关闭
  @Input() closeable = false;
  // 关闭回调
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  hide = false;
  constructor() {}

  close() {
    this.closeEvent.emit(true);
    this.hide = true;
  }
}
