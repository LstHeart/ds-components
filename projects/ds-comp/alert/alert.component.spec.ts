import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { AlertComponent } from './alert.component';
import { AlertModule } from './alert.module';

@Component({
  template: `
    <dev-alert [type]="type" [showIcon]="showIcon" [closeable]="closeable" (closeEvent)="handleClose($event)">
      <span>我是一个Alert组件</span>
    </dev-alert>
  `,
})
class TestAlertComponent {
  type = 'info';
  showIcon = false;
  closeable = false;
  clickCount = 0;
  handleClose(value: any) {
    this.clickCount++;
  }
}

describe('AlertComponent', () => {
  let component: TestAlertComponent;
  let fixture: ComponentFixture<TestAlertComponent>;
  let alertElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AlertModule],
      declarations: [TestAlertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAlertComponent);
    component = fixture.componentInstance;
    alertElement = fixture.debugElement.query(By.directive(AlertComponent)).nativeElement;
    fixture.detectChanges();
  });

  describe('alert instance test', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('alert type test', () => {
    it('Alert should has info type', () => {
      expect(alertElement.querySelector('.info')).not.toBe(null);
    });

    it('Alert should has success type', () => {
      // 修改type，判断类型改变是否正确
      component.type = 'success';
      fixture.detectChanges();
      expect(alertElement.querySelector('.success')).not.toBe(null);
    });
  });
});
