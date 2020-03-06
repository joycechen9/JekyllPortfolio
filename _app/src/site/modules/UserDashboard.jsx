import React from 'react';
import { Core, Forms, UMS } from 'oicr-ui-core';
import * as ImportExportDashboard from './importExport';

const { Dashboard } = Core.Components;
const { UserAccountDashboard } = UMS.Dashboard;
const { OPERATOR, ADMINISTRATOR } = UMS.CONSTANTS.ROLES;

const {
    ContentManagementDashboard,
} = Core.Dashboard;

class UserDashboard extends React.Component {
    render() {
        return (
            <Dashboard
                id="forms-user-dashboard"
                className="clearfix"
                defaultActiveKey={2.1}
                rootPath="/dashboard"
            >
                <Dashboard.Item eventKey={2} component={UserAccountDashboard} />
            </Dashboard>
        );
    }
}

export default UserDashboard;
