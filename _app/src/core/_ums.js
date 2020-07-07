/* global document, window UMS_CONFIG */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Core, UMS, Provider as CoreProvider } from 'oicr-ui-core';
import UserDashboard from '../site/modules/UserDashboard';
import PrivateFile from '../site/modules/PrivateFile';

if (window.UMS_CONFIG) UMS.setConfig(window.UMS_CONFIG);

// Load store.
const store = require('../site/store').default;

const client = Core.initApolloClient(true, store);

const { attributesSelector } = Core.selectors;
const { getPageContent } = Core.actions;

// Get User Session, Invoke once
UMS.getUserInfo()(store.dispatch);
// Get page content.
getPageContent('__modules/app.md')(store.dispatch);

// Render UMS
const target = document.getElementById('app-user-services');
if (target) {
    ReactDOM.render(
        <CoreProvider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <Router history={hashHistory}>
                <UMS.Route path="/dashboard" component={UserDashboard} />
                <UMS.BaseRoutes />
            </Router>
        </CoreProvider>,
        target
    );
}

// Render User Menu
const targetUserMenu = document.getElementById('app-user-nav');
if (targetUserMenu) {
    ReactDOM.render(
        <CoreProvider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <UMS.Components.UserNavMenu rootPath="/user" />
        </CoreProvider>,
        targetUserMenu
    );
}

// Render User Login
const targetUserLogin = document.getElementById('app-user-login');
if (targetUserLogin) {
    ReactDOM.render(
        <CoreProvider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <UMS.Components.LoginButton rootPath="/user" />
        </CoreProvider>,
        targetUserLogin
    );
}

/**
 * Render view/edit tab for admin user.
 * This will be rendered after pubmed publications are rendered.
 */
const config = Core.getConfig();
if (config.CMUI_ENABLED) {
    const targetEditable = document.getElementById('editButton');
    if (targetEditable) {
        ReactDOM.render(
            <Core.Provider
                store={store}
                client={client}
                selector={attributesSelector('__modules/app.md')}
            >
                <Core.Components.ContentPageWrapper
                    viewDOM={targetEditable.innerHTML}
                    rootPath="/user/#/admin/dashboard"
                    eventKey={4}
                    path={targetEditable.getAttribute('data-path')}
                    isPublic={targetEditable.getAttribute('data-is-public')}
                />
            </Core.Provider>,
            targetEditable
        );
    }
}

const targetPrivate = document.getElementById('private-file-container');
if (targetPrivate) {
    ReactDOM.render(
        <Core.Provider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <PrivateFile fileSrc={targetPrivate.getAttribute('data-src')} />
        </Core.Provider>,
        targetPrivate
    );
}
