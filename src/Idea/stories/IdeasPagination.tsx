import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import IdeasPagination from '../components/IdeasPagination';

const currentPage = 1;
const totalPages = 10;

storiesOf('Ideas pagination', module)
    .add('default', () => (
        <IdeasPagination
            currentPage={currentPage}
            handleOnPageChange={action('page-changed')}
            totalPages={number('Páginas totales', totalPages)}
        />
    ))
;