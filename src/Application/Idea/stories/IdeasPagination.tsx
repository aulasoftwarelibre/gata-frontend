import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import IdeasPagination from '../components/IdeasPagination';

const totalPages: number = 10;

storiesOf('Ideas pagination', module)
    .add('default', () => (
        <IdeasPagination
            handleOnPageChange={action('page-changed')}
            totalPages={number('Total pages', totalPages, {max: Infinity, min: 2, range: true, step: 1})}
        />
    ))
;