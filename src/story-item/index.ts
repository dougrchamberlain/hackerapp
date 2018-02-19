import Controller from './controller';
declare var require: any;
const template = require('./story-item.html');

export default {
    bindings: { story: '=' },
    controller: Controller,
    template
};
