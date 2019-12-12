import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import './index';

storiesOf('countup-button', module).add('default', () => {
  const root = document.createElement('div');
  render(
    html`
      <countup-button></countup-button> <countup-button increment="3" />
    `,
    root
  );
  return root;
});
