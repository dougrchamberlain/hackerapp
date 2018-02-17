import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import * as ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import * as ngResource from 'angular-resource';
import BestStories from './best-stories/list';
import StoryItem from './story-item';

export default angular.module('App', [ngResource, ngMaterial])
    .component('bestStories', BestStories)
    .component('storyItem', StoryItem)
    .name;
