import Controller from './controller';
const template = require('./story-item.html');

export default {
    bindings: { storyId: '=' },
    controller: Controller,
    template
};
