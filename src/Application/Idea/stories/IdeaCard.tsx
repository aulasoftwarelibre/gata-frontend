import { action } from '@storybook/addon-actions';
import { boolean, date, number, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';
import * as React from 'react';

import Comment from 'src/Domain/Comment/Comment';
import IdeaStatus, { values as statusValues } from '../../../../src/Domain/Idea/IdeaStatus';
import User from 'src/Domain/User/User';

import IdeaCard from '../components/IdeaCard/IdeaCard';

const attendee: boolean = false;
const attendees: User[] = Array<User>(faker.random.number({max: 10, min: 0})).map(() => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return({
        avatar: faker.image.avatar(),
        firstName: firstName,
        lastName: lastName,
        username: faker.internet.userName(firstName, lastName),
    });
});
const author: string = faker.name.findName();
const closed: boolean = false;
const comments: Comment[] = Array<Comment>(faker.random.number({max: 10, min: 0})).map(() => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return({
        author: {
            avatar: faker.image.avatar(),
            firstName: firstName,
            lastName: lastName,
            username: faker.internet.userName(firstName, lastName),
        },
        text: faker.lorem.sentences(),
    });
});
const datetime: Date = faker.date.recent();
const description: string = faker.lorem.paragraphs();
const seats: number = faker.random.number({max: 10, min: attendees.length});
const status: IdeaStatus = faker.random.arrayElement(statusValues);
const title: string = faker.lorem.sentence();

storiesOf('Idea card', module)
    .add('default', () => (
        <IdeaCard
            attendee={boolean('Are you attendee?', attendee)}
            attendees={attendees}
            author={text('Author', author)}
            closed={boolean('Is closed?', closed)}
            comments={comments}
            datetime={date('Date', datetime)}
            description={text('Description', description)}
            handleOnAttendeesClick={action('attendees-clicked')}
            handleOnCommentsClick={action('comments-clicked')}
            handleOnExitClick={action('exit-clicked')}
            handleOnJoinClick={action('join-clicked')}
            seats={number('Seats', seats, {max: Infinity, min: 1, range: true, step: 1})}
            status={select('Status', statusValues, status)}
            title={text('Title', title)}
        />
    ))
;