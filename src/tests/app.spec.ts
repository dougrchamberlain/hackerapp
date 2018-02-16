import * as angular from 'angular';
import 'angular-mocks';
import 'angular-resource';
import beststories from '../best-stories/component';


import { expect } from 'chai';

describe('Hacker App', () => {

    beforeEach(() => {
        angular.mock.module(beststories);
    });

    it('Should retrieve best story', inject(($httpBackend: ng.IHttpBackendService) => {
        $httpBackend.expectGET('/v0/beststories').respond([1, 2, 3, 4, 5]);
    }));

});
