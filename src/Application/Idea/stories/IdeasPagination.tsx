import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';
import * as React from 'react';

import IdeasPagination from '../components/IdeasPagination';

const totalPages: number = faker.random.number({max: 100, min: 2});

storiesOf('Ideas pagination', module)
    .add('default', () => (
        <IdeasPagination
            handleOnPageChange={action('page-changed')}
            totalPages={number('Total pages', totalPages, {max: 100, min: 2, range: true, step: 1})}
        />
    ))
;