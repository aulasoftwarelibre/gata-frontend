import * as moment from 'moment';
import * as React from 'react';

import Comment from '@domain/Comment/Comment';
import IdeaStatus from '@domain/Idea/IdeaStatus';
import User from '@domain/User/User';

import { Card, Icon } from 'semantic-ui-react';

import CardStatus from './IdeaCardStatus';
import CardTitle from './IdeaCardTitle';

export interface IdeaCardProps {
    attendee?: boolean;
    attendees: User[];
    author: string;
    closed?: boolean;
    comments: Comment[];
    datetime: Date;
    description: string;
    handleOnAttendeesClick: () => void;
    handleOnCommentsClick: () => void;
    handleOnExitClick: () => void;
    handleOnJoinClick: () => void;
    seats?: number;
    status: IdeaStatus;
    title: string;
}

export default ({
    attendee,
    attendees,
    author,
    closed,
    comments,
    datetime,
    description,
    handleOnAttendeesClick,
    handleOnCommentsClick,
    handleOnExitClick,
    handleOnJoinClick,
    seats,
    status,
    title
}: IdeaCardProps): JSX.Element =>
    <Card>
        <Card.Content>
            <CardStatus status={status} />
            <CardTitle>
                {title}
            </CardTitle>
            <Card.Meta>
                {author}
                <span className="right floated">
                    {moment(datetime).fromNow()}
                </span>
            </Card.Meta>
            <Card.Description dangerouslySetInnerHTML={{__html: description}} />
        </Card.Content>
        <Card.Content extra>
            <a onClick={handleOnCommentsClick}>
                <Icon name={comments.length === 1 ? 'comment' : 'comments'} />
                {comments.length}
            </a>
            <a
                className='right floated'
                onClick={handleOnAttendeesClick}
            >
                <Icon name={attendees.length === 1 ? 'user' : 'users'} />
                {attendees.length}{seats !== null && `/${seats}`}
            </a>
        </Card.Content>
    </Card>
;