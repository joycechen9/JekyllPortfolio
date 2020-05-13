/* global window, document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Members, Provider as CoreProvider, Core } from 'oicr-ui-core';

if (window.MEMBERS_CONFIG) Members.setConfig(window.MEMBERS_CONFIG);

const { transformJSON } = Members.helpers;

// Load store.
const store = require('../site/store').default;

const client = Core.initApolloClient(true, store);

const { attributesSelector } = Core.selectors;
const { getPageContent } = Core.actions;

// Get page content.
getPageContent('__modules/app.md')(store.dispatch);

// Render Members
const targetMembers = document.getElementById('app-members');

if (targetMembers) {
    // Check if static data is provided
    const staticMembers = transformJSON(
        targetMembers.getAttribute('data-members')
    );
    const staticPubs = transformJSON(
        targetMembers.getAttribute('data-publications')
    );

    if (staticMembers) {
        store.dispatch({ type: 'RECEIVE_MEMBERS', data: staticMembers });
    }

    if (staticPubs) {
        store.dispatch({
            type: 'RECEIVE_PUBLICATIONS',
            publications: staticPubs,
        });
    }

    ReactDOM.render(
        <CoreProvider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <Router history={hashHistory}>
                <Members.BaseRoutes
                    isStatic={!!staticMembers && !!staticPubs}
                    isStaticPublications={!!staticPubs}
                    isStaticMembers={!!staticMembers}
                />
            </Router>
        </CoreProvider>,
        targetMembers
    );
}
