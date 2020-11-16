import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import ButtonWrapperComponent from './button-wrapper.component';

export default {
  title: 'Example/ButtonWrapper',
  component: ButtonWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [Button, ButtonWrapperComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonWrapperComponent> = (args: ButtonWrapperComponent) => ({
  component: ButtonWrapperComponent,
  props: args,
});

export const Primary = Template.bind({});

