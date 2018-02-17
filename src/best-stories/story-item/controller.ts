import * as angular from 'angular';
import 'angular-resource';

export default class StoryItemController {

    public static $inject: string[] = ['$resource'];
    public storyItem: ng.resource.IResourceClass<any>;
    public storyId: string;

    constructor(private $resource: ng.resource.IResourceService) {
    }

    public $onInit() {
        this.storyItem = this.$resource(`https://hacker-news.firebaseio.com/v0/item/${this.storyId}.json`);

        this.storyItem.get((data: any) => {
            this.storyItem = data;
        });
    }

}
