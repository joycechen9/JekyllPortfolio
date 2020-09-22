import React from 'react';
import { connect } from 'react-redux';
import {
    isAdminSelector,
    isOperatorSelector,
} from 'oicr-ui-core/lib/ums/selectors';
import { FormattedMessage } from 'react-intl';

interface Props {
    isAdminOperator: boolean,
    data: {
        commitId: string,
    },
}

const SystemInfo: React.FC<Props> = ({ isAdminOperator, data }) => {
    if (!isAdminOperator || !data.commitId) return null;
    return (
        <FormattedMessage
            id="footer.commitId_txt"
            defaultMessage="Commit ID: ({commitId})"
            values={{
                commitId: data.commitId,
            }}
        />
    );
}

export default connect((state) => ({
    isAdminOperator: isAdminSelector(state) || isOperatorSelector(state)
}))(SystemInfo);