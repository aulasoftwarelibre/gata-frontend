import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';
import * as React from 'react';

import IdeasPagination from '@application/Idea/components/IdeasPagination';

storiesOf('Ideas pagination', module)
    .add('default', () => (
        <IdeasPagination
            handleOnPageChange={action('page-changed')}
            totalPages={number(
                'Total pages',
                faker.random.number({max: 100, min: 2}),
                {max: 100, min: 2, range: true, step: 1},
            )}
        />
    ))
;