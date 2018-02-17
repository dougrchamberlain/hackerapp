import * as angular from 'angular';
import * as ngResource from 'angular-resource';
import BestStories from './best-stories/list';
import StoryItem from './best-stories/story-item';

export default angular.module('App', [ngResource])
    .component('bestStories', BestStories)
    .component('storyItem', StoryItem)
    .name;

