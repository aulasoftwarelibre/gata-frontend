import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import IdeasPagination from '../components/IdeasPagination';

const defaultTotalPages = 10;
const minTotalPages = 2;

storiesOf('Ideas pagination', module)
    .add('default', () => (
        <IdeasPagination
            handleOnPageChange={action('page-changed')}
            totalPages={number('Páginas', defaultTotalPages, {
                max: Infinity,
                min: minTotalPages,
                range: true,
                step: 1
            })}
        />
    ))
;