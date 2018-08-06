import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs/react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(centered);
addDecorator(withKnobs);

loadStories = () => {
    // You can require as many stories as you need.
};

configure(loadStories, module);