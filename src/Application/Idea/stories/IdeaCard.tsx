import { action } from '@storybook/addon-actions';
import { boolean, date, number, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';
import * as React from 'react';

import Comment from '@domain/Comment/Comment';
import IdeaStatus, { values as statusValues } from '@domain/Idea/IdeaStatus';
import User from '@domain/User/User';

import IdeaCard from '../components/IdeaCard/IdeaCard';

const attendee: boolean = faker.random.boolean();
const attendees = (number: number): User[] =>
    Array<User>(number).map(() => ({
        avatar: faker.image.avatar(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
    }))
;
const attendeesNumber = faker.random.number({max: 100, min: 0});
const author: string = faker.name.findName();
const closed: boolean = faker.random.boolean();
const comments = (number: number): Comment[] =>
    Array<Comment>(number).map(() => ({
        author: {
            avatar: faker.image.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
        },
        text: faker.lorem.sentences(),
    }))
;
const commentsNumber = faker.random.number({max: 100, min: 0});
const datetime: Date = faker.date.recent();
const description: string = faker.lorem.paragraphs();
const seats: number = faker.random.number({max: 100, min: attendeesNumber});
const status: IdeaStatus = faker.random.arrayElement(statusValues);
const title: string = faker.lorem.sentence();

storiesOf('Idea card', module)
    .add('default', () => (
        <IdeaCard
            attendee={boolean('Are you attendee?', attendee)}
            attendees={attendees(
                number('Attendees', attendeesNumber, {max: 100, min: 0, range: true, step: 1})
            )}
            author={text('Author', author)}
            closed={boolean('Is closed?', closed)}
            comments={comments(
                number('Comments', commentsNumber, {max: 100, min: 0, range: true, step: 1})
            )}
            datetime={date('Date', datetime)}
            description={text('Description', description)}
            handleOnAttendeesClick={action('attendees-clicked')}
            handleOnCommentsClick={action('comments-clicked')}
            handleOnExitClick={action('exit-clicked')}
            handleOnJoinClick={action('join-clicked')}
            seats={number('Seats', seats)}
            status={select('Status', statusValues, status)}
            title={text('Title', title)}
        />
    ))
;