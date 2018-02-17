import * as angular from 'angular';
import 'angular-mocks';
import App from '../src/index';

import { expect } from 'chai';

describe('Hacker App', () => {

    beforeEach(() => {
        angular.mock.module(App);
    });

    it('Should create list of best story items', inject((
        $httpBackend: ng.IHttpBackendService,
        $compile: ng.ICompileService,
        $rootScope: ng.IRootScopeService
    ) => {
        const $scope = $rootScope.$new();
        $httpBackend.expectGET(/v0\/beststories/).respond([1, 2, 3, 4, 5]);

        $httpBackend.whenGET(/v0\/item\/\d+?\.json/).respond((method, url, data) => {
            return [200, { id: url, by: 'tester guy' }];
        });

        const element = $compile('<best-stories></best-stories>')($scope);
        const htmlElement = element[0];
        $httpBackend.flush();

        expect(htmlElement.querySelectorAll('story-item').length).equal(5);

    }));

    describe('Story Item Component', () => {
        it('Should render a story item', inject((
            $httpBackend: ng.IHttpBackendService,
            $compile: ng.ICompileService,
            $rootScope: ng.IRootScopeService
        ) => {
            const $scope = $rootScope.$new();
            $httpBackend.expectGET(/v0\/item\/\d+?.json/).respond({ id: 1, by: 'testy testerman' });

            const element = $compile('<story-item story-id="1"></story-item>')($scope);
            const htmlElement = element[0];
            $httpBackend.flush();

            expect(htmlElement.querySelectorAll('p').length).equal(2); // compiles 2 sections

        }));

    });

});
