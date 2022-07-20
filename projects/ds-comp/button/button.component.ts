// button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'ds-button',
  template: `<button (click)="onClick()"><ng-content></ng-content></button>`,
})
export class ButtonComponent {
  onClick() {
    console.log('你刚刚点击了按钮哟');
  }
}
