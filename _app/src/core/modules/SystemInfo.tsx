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
    intl: {
        formatDate: Function
    }
}


const SystemInfo: React.FC<Props> = ({ isAdminOperator, data, intl }) => {
    if (!data || !isAdminOperator || !data.commitId || !data.buildTime) return null;
    return (
        <div className="system-info">
            <div className="system-info__last-commit">
                <FormattedMessage
                    id="footer.commitId_txt"
                    defaultMessage="Last successful build: ({commitId})"
                    values={{
                        commitId: data.commitId,
                    }}
                />
            </div>
            <div className="system-info__build-at">
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
            </div>
        </div>
    );
}

export default injectIntl(connect((state) => ({
    isAdminOperator: isAdminSelector(state) || isOperatorSelector(state)
}))(SystemInfo));