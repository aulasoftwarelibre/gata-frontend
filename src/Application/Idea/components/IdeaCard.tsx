import * as moment from 'moment';
import * as React from 'react';

import { Button, Card, Icon } from 'semantic-ui-react';

import Comment from 'Domain/Comment/Comment';
import IdeaStatus from 'Domain/Idea/IdeaStatus';
import User from 'Domain/User/User';

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
    <Card fluid>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                {author}
                <span className="right floated">
                    {moment(datetime).fromNow()}
                </span>
            </Card.Meta>
            <Card.Description dangerouslySetInnerHTML={{__html: description}} />
            {
                attendee &&
                <Button
                    content='SALIR'
                    floated='right'
                    onClick={handleOnExitClick}
                    positive
                />
            }
            {
                !attendee && closed &&
                <Button
                    content='CERRADA'
                    disabled
                    floated='right'
                    negative
                />
            }
            {
                !attendee && !closed &&
                <Button
                    content='PARTICIPAR'
                    floated='right'
                    onClick={handleOnJoinClick}
                />
            }
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
                {attendees.length}{seats && `/${seats}`}
            </a>
        </Card.Content>
    </Card>
;