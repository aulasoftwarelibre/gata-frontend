import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs/react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(centered);
addDecorator(withKnobs);

const loadStories = () => {
    require('../../src/Idea/stories/IdeasPagination');
};

configure(loadStories, module);