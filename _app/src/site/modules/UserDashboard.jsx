import React from 'react';
import { Core, UMS } from 'oicr-ui-core';

const { Dashboard } = Core.Components;
const { UserAccountDashboard } = UMS.Dashboard;

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
