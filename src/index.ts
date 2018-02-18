import * as angular from 'angular';
import * as ngResource from 'angular-resource';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import * as ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import StoryItem from './story-item';
import '../assets/app.css';

import appController from './controller';

export default angular.module('App', [ngResource, ngMaterial, uiRouter])
    .component('storyItem', StoryItem)
    .controller('appController', appController)
    .config(($stateProvider: any) => {
        console.log($stateProvider);
    })
    .name;
