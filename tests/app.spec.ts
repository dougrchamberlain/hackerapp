import * as angular from 'angular';
import 'angular-mocks';
import App from '../src/index';

import { expect } from 'chai';

describe('Hacker App', () => {

    beforeEach(() => {
        angular.mock.module(App);
    });

    it('Should retrieve best stories', inject((
        $httpBackend: ng.IHttpBackendService,
        $compile: ng.ICompileService,
        $rootScope: ng.IRootScopeService
    ) => {
        const $scope = $rootScope.$new();
        $httpBackend.expectGET(/v0\/beststories/).respond([1, 2, 3, 4, 5]);

        const element = $compile('<best-stories></best-stories>')($scope);
        $httpBackend.flush();
    }));

});
