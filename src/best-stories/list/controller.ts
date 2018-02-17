import * as angular from 'angular';
import 'angular-resource';

export default class BestStoriesController {

    public static $inject: string[] = ['$resource'];
    public stories: ng.resource.IResourceArray<any>;

    constructor(private $resource: ng.resource.IResourceService) {
    }

    public $onInit() {
        this.stories = this.$resource('https://hacker-news.firebaseio.com/v0/beststories.json').query();
    }

}
