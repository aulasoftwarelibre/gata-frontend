import * as React from 'react';

import IdeaStatus, { accepted, pending, rejected } from '@domain/Idea/IdeaStatus';

import { Label } from 'semantic-ui-react';

export interface IdeaCardStatusProps {
    status: IdeaStatus;
}

export default ({ status }: IdeaCardStatusProps): JSX.Element =>
    <Label
        color={status === accepted && 'green' || status === rejected && 'red' || undefined}
        ribbon='right'
    >
        {
            status === accepted && 'Aprobada' ||
            status === pending && 'Pendiente' ||
            status === rejected && 'Rechazada'
        }
    </Label>
;