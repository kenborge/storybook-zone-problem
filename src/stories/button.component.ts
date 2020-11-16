import { Component, Input, Output, EventEmitter, NgZone } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: ` <button
    type="button"
    (click)="buttonClick()"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  buttonClick() {
    this.onClick.emit('running in zone ' + NgZone.isInAngularZone());
  }

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<string>();
}
