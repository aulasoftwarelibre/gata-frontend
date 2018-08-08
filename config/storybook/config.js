import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs/react';
import { configure, addDecorator } from '@storybook/react';
import faker from 'faker';
import moment from 'moment';
import 'moment/locale/es';

const loadStories = () => {
    require('../../src/Application/Idea/stories/IdeasPagination');
};

addDecorator(centered);
addDecorator(withKnobs);
configure(loadStories, module);
faker.locale = 'es';
moment.locale('es-ES');