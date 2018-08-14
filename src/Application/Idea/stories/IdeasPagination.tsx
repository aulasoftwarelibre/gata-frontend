import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';
import * as React from 'react';

import IdeasPagination from '@application/Idea/components/IdeasPagination';

const totalPages: number = faker.random.number(100);

storiesOf('Ideas pagination', module)
    .add('default', () => (
        <IdeasPagination
            handleOnPageChange={action(
                'page-changed',
            )}
            totalPages={number(
                'Total pages',
                totalPages,
            )}
        />
    ))
;