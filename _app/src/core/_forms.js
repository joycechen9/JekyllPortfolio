/* global document, window UMS_CONFIG */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import {
    Forms,
    UMS,
    Provider as CoreProvider,
    Core,
    Search,
} from 'oicr-ui-core';

if (window.FORMS_CONFIG) Forms.setConfig(window.FORMS_CONFIG);

// Load store.
const store = require('../site/store').default;

const client = Core.initApolloClient(true, store);

const { attributesSelector } = Core.selectors;
const { getPageContent } = Core.actions;

// Get User Session, Invoke once
UMS.getUserInfo()(store.dispatch);
// Get page content.
getPageContent('__modules/app.md')(store.dispatch);

// Forms
const targetForms = document.getElementById('app-forms');
if (targetForms) {
    ReactDOM.render(
        <CoreProvider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <Router history={hashHistory}>
                <Forms.BaseRoutes store={store} client={client} />
            </Router>
        </CoreProvider>,
        targetForms
    );
}

// Forms
const targetEmbedForms = document.getElementById('app-forms-embed');
if (targetEmbedForms) {
    ReactDOM.render(
        <CoreProvider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <Router history={hashHistory}>
                <Forms.EmbedFormRoutes client={client} />
            </Router>
        </CoreProvider>,
        targetEmbedForms
    );
}

// Forms
const targetFormVerify = document.getElementById('app-forms-verify');
if (targetFormVerify) {
    ReactDOM.render(
        <CoreProvider
            store={store}
            client={client}
            selector={attributesSelector('__modules/app.md')}
        >
            <Router history={hashHistory}>
                <Forms.VerificationRoutes client={client} />
            </Router>
        </CoreProvider>,
        targetFormVerify
    );
}

// Forms
// Logic to embed non-iframe worm.
const targetEmbedCustomForms = document.getElementsByClassName(
    'app-forms-embed-custom'
);
if (targetEmbedCustomForms.length) {
    for (var i = 0; i < targetEmbedCustomForms.length; i++) {
        ReactDOM.render(
            <CoreProvider
                store={store}
                client={client}
                selector={attributesSelector('__modules/app.md')}
            >
                <Forms.Components.RenderForm
                    params={{
                        nid: targetEmbedCustomForms[i].getAttribute(
                            'data-formid'
                        ),
                        lang: targetEmbedCustomForms[i].getAttribute(
                            'data-lang'
                        ),
                    }}
                />
            </CoreProvider>,
            targetEmbedCustomForms[i]
        );
    }
}
