import * as angular from 'angular';
import 'angular-resource';

class StoryItem {
    public id: string;
    public by: string;
}

export default class StoryItemController {

    public static $inject: string[] = ['$resource', '$timeout'];
    public storyId: string;
    public storyItem: StoryItem;
    private storyItemResource: ng.resource.IResourceClass<StoryItem>;

    constructor(private $resource: ng.resource.IResourceService, private $timeout: ng.ITimeoutService) {
    }

    public $onInit() {
        this.storyItemResource = this.$resource<StoryItem>('https://hacker-news.firebaseio.com/v0/item/:id.json');
        this.storyItem = this.storyItemResource.get({ id: this.storyId });

    }

}
