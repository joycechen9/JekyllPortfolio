import React from 'react';
import { connect } from 'react-redux';
import {
    isAdminSelector,
    isOperatorSelector,
} from 'oicr-ui-core/lib/ums/selectors';
import { FormattedMessage, injectIntl } from 'react-intl';

interface Props {
    isAdminOperator: boolean,
    data: {
        commitId: string,
        buildTime: string,
    },
}

const SystemInfo: React.FC<Props> = ({ isAdminOperator, data, intl }) => {
    if (!data || !isAdminOperator || !data.commitId || !data.buildTime) return null;
    return (
        <React.Fragment>
            <FormattedMessage
                id="footer.commitId_txt"
                defaultMessage="Last successful build: ({commitId})"
                values={{
                    commitId: data.commitId,
                }}
            />
            {' '}
            <FormattedMessage
                id="footer.commitId_txt"
                defaultMessage="Built at: {buildTime}"
                values={{
                    buildTime: intl.formatDate(
                        new Date(
                            data.buildTime
                        ),
                        {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                        }
                    ),
                }}
            />
        </React.Fragment>
    );
}

export default injectIntl(connect((state) => ({
    isAdminOperator: isAdminSelector(state) || isOperatorSelector(state)
}))(SystemInfo));