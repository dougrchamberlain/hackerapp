import * as angular from 'angular';
import BestStories from './best-stories/component';

export default angular.module('App', [])
    .component('bestStories', BestStories)
    .component('dumb', { template: '<div>dumb</div>' })
    .name;

