import * as angular from 'angular';
import 'angular-mocks';
import App from '../src/index';

import { expect } from 'chai';

describe('Hacker App', () => {

    beforeEach(() => {
        angular.mock.module(App);
    });


    describe('Story Item Component', () => {
        it('Should render a story item', inject((
            $httpBackend: ng.IHttpBackendService,
            $compile: ng.ICompileService,
            $rootScope: ng.IRootScopeService
        ) => {
            const $scope: any = $rootScope.$new();
            $scope.story = { id: 1, by: 'testerman', title: 'test a test' };

            const element = $compile('<story-item story="story"></story-item>')($scope);
            const htmlElement = element[0];
            $scope.$apply();

            expect(htmlElement.querySelector('h3').textContent).equal('test a test');
            expect(htmlElement.querySelector('p').textContent).equal('testerman');

        }));

    });

});
