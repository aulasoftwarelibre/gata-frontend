import { action } from '@storybook/addon-actions';
import { date, number, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';
import * as moment from 'moment';
import * as React from 'react';

import IdeaCard from '@application/Idea/components/IdeaCard/IdeaCard';
import IdeaStatus, { ACCEPTED, PENDING, REJECTED } from '@domain/Idea/IdeaStatus';

const attendees: number = faker.random.number(100);
const capacity: number = faker.random.number(100);
const comments: number = faker.random.number(100);
const createdAt: Date = faker.date.recent();
const createdBy: string = faker.name.findName();
const description: string = faker.lorem.paragraphs();
const status: IdeaStatus = faker.random.arrayElement([ACCEPTED, PENDING, REJECTED]);
const title: string = faker.lorem.sentence();

storiesOf('Idea card', module)
    .add('default', () => (
        <IdeaCard
            attendees={number(
                'Attendees',
                attendees,
            )}
            capacity={number(
                'Capacity',
                capacity,
            )}
            comments={number(
                'Comments',
                comments,
            )}
            createdAt={moment(date(
                'Created at',
                createdAt,
            ))}
            createdBy={text(
                'Created by',
                createdBy,
            )}
            description={text(
                'Description',
                description,
            )}
            handleOnAttendeesClick={action(
                'attendees-clicked',
            )}
            handleOnCommentsClick={action(
                'comments-clicked',
            )}
            status={select(
                'Status',
                [ACCEPTED, PENDING, REJECTED],
                status,
            )}
            title={text(
                'Title',
                title,
            )}
        />
    ))
;