import { action } from '@storybook/addon-actions';
import { date, number, object, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';
import * as React from 'react';

import IdeaCard from '@application/Idea/components/IdeaCard/IdeaCard';
import Comment from '@domain/Comment/Comment';
import Idea from '@domain/Idea/Idea';
import { ACCEPTED, PENDING, REJECTED } from '@domain/Idea/IdeaStatus';
import User from '@domain/User/User';

const attendees = (number: number): User[] =>
    Array<User>(number).map(() => ({
        avatar: faker.image.avatar(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        name: faker.internet.userName(),
    }))
;
const attendeesNumber: number = faker.random.number({max: 100, min: 0});
const comments = (number: number): Comment[] =>
    Array<Comment>(number).map(() => ({
        createdBy: {
            avatar: faker.image.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            name: faker.internet.userName(),
        },
        createdAt: faker.date.recent(),
        text: faker.lorem.sentences(),
    }))
;
const commentsNumber: number = faker.random.number({max: 100, min: 0});
const idea: Idea = {
    attendees: attendees(number(
        'Attendees',
        attendeesNumber,
        {max: 100, min: 0, range: true, step: 1},
    )),
    capacity: number(
        'Capacity',
        faker.random.number({max: 100, min: attendees.length}),
    ),
    comments: comments(number(
        'Comments',
        commentsNumber,
        {max: 100, min: 0, range: true, step: 1},
    )),
    createdAt: date(
        'Created at',
        faker.date.recent(),
    ),
    createdBy: {
        avatar: faker.image.avatar(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        name: faker.internet.userName(),
    },
    description: text(
        'Description',
        faker.lorem.paragraphs(),
    ),
    status: select(
        'Status',
        [ACCEPTED, PENDING, REJECTED],
        faker.random.arrayElement([ACCEPTED, PENDING, REJECTED]),
    ),
    title: text(
        'Title',
        faker.lorem.sentence(),
    ),
};

storiesOf('Idea card', module)
    .add('default', () => (
        <IdeaCard
            handleOnAttendeesClick={action('attendees-clicked')}
            handleOnCommentsClick={action('comments-clicked')}
            handleOnExitClick={action('exit-clicked')}
            handleOnJoinClick={action('join-clicked')}
            idea={object('Idea', idea)}
        />
    ))
;