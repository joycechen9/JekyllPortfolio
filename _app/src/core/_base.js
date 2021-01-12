/* global window, jQuery, extLinkConfig, document */
import React from 'react';
import ReactDOM from 'react-dom';
import { FormattedDateRange } from 'wfui-react';
import { extLink } from 'wfui-react/lib/util';
import { Core, setAllConfigs, Provider as CoreProvider } from 'oicr-ui-core';
import 'popper.js/dist/umd/popper';
import SystemInfo from './modules/SystemInfo.tsx';

const { getPageContent } = Core.actions;
const { attributesSelector } = Core.selectors;

/**
 * Set default app configration
 * */
setAllConfigs(window.APP_CONFIG);

const store = require('../site/store').default;
const client = Core.initApolloClient(true, store);

/**
 * Set external link
 */
const ext = extLink(jQuery, window.extLinkConfig);
ext.attach(document);

// Convert UTC time format to local time.
const targetTimeConversion = document.getElementsByClassName(
    'app-time-conversion'
);
if (targetTimeConversion.length) {
    for (var i = 0; i < targetTimeConversion.length; i++) {
        const el = targetTimeConversion[i];
        ReactDOM.render(
            <FormattedDateRange
                startDate={el.getAttribute('datetime')}
                year={el.getAttribute('data-year')}
                month={el.getAttribute('data-month')}
                day={el.getAttribute('data-day')}
                withTime={el.getAttribute('data-withtime')}
                onlyTime={el.getAttribute('data-onlytime')}
                displayTimezone={el.getAttribute('data-displaytimezone')}
            />,
            el
        );
    }
}

// Convert UTC time format to local time. (Range)
const targetTimeConversionRange = document.getElementsByClassName(
    'app-time-conversion-range'
);
if (targetTimeConversionRange.length) {
    for (var i = 0; i < targetTimeConversionRange.length; i++) {
        const el = targetTimeConversionRange[i];
        ReactDOM.render(
            <FormattedDateRange
                startDate={el.getAttribute('data-startdate')}
                endDate={el.getAttribute('data-enddate')}
                year={el.getAttribute('data-year')}
                month={el.getAttribute('data-month')}
                day={el.getAttribute('data-day')}
                withTime={el.getAttribute('data-withtime')}
                withTimeFull={el.getAttribute('data-withtimefull')}
                onlyTime={el.getAttribute('data-onlytime')}
                toTxt={el.getAttribute('data-totxt')}
                displayTimezone={el.getAttribute('data-displaytimezone')}
            />,
            el
        );
    }
}

const targetSiteInfo = document.getElementById('app-siteinfo');
if (targetSiteInfo) {
    try {
        // Get page content.
        ReactDOM.render(
            <CoreProvider store={store} client={client}>
                <SystemInfo
                    data={JSON.parse(
                        targetSiteInfo.getAttribute('data-system')
                    )}
                />
            </CoreProvider>,
            targetSiteInfo
        );
    } catch (err) {
        console.error(err);
    }
}
