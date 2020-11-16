import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-wrapper',

  template: ` <storybook-button
    *ngIf="showButton"
    (onClick)="onClick.emit($event)"
  ></storybook-button>`
})
export default class ButtonWrapperComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  showButton = true;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
