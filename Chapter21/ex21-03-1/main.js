'use strict';

const appInfo = {
    company: 'White Knight Software, Inc.',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
    copyright() {
        return `@ ${new Date().getFullYear()}, ${this.company}`;
    },
};

Object.freeze(appInfo);
console.log(Object.isFrozen(appInfo));

appInfo.newProp = 'test';
delete appInfo.company;
appInfo.company = 'test';
Object.defineProperty(appInfo, 'company', { enumerable: false });