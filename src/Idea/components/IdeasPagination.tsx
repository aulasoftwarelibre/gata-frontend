import * as React from 'react';

import { Icon, Pagination } from 'semantic-ui-react';

interface IdeasPaginationProps {
    /** @default 1 */
    currentPage?: number;
    handleOnPageChange: (page: number) => void;
    totalPages: number;
}

export default ({ currentPage, handleOnPageChange, totalPages }: IdeasPaginationProps) =>
    <Pagination
        defaultActivePage={currentPage}
        ellipsisItem={{content: <Icon name='ellipsis horizontal' />, icon: true}}
        firstItem={{content: <Icon name='angle double left' />, icon: true}}
        lastItem={{content: <Icon name='angle double right' />, icon: true}}
        nextItem={{content: <Icon name='angle right' />, icon: true}}
        onPageChange={(event, { activePage: page }) => handleOnPageChange(Number(page))}
        prevItem={{content: <Icon name='angle left' />, icon: true}}
        totalPages={totalPages}
    />
;