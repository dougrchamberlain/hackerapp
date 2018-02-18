import * as angular from 'angular';
import 'angular-resource';

export class StoryItem {
    public id: string;
    public by: string;
}

export default class AppController {

    public static $inject: string[] = ['$resource', '$timeout'];

    public search: any = [];
    public stories: StoryItem[];
    public totalStories: number = 0;
    private bestStoryURL: string = 'https://hacker-news.firebaseio.com/v0/beststories.json';
    private itemURL: string = 'https://hacker-news.firebaseio.com/v0/item/:id.json';

    private resource: ng.resource.IResourceClass<StoryItem> = this.$resource<StoryItem>(this.bestStoryURL);

    constructor(private $resource: ng.resource.IResourceService, private $timeout: ng.ITimeoutService) {
        console.log('constructor');

    }

    public $onInit() {
        this.getAllBestStories();

    }

    private getAllBestStories() {
        this.resource.query((stories: StoryItem[]) => {
            this.stories = stories;
            this.totalStories = stories.length;
            this.requestStory(-1);
        });
    }

    private requestStory(index: number) {
        this.$timeout(() => {
            if (index++ < this.totalStories - 1) {
                this.requestStory(index);
                const result = JSON.parse(localStorage.getItem(this.stories[index] as any));
                if (result) {
                    this.stories[index] = result;
                } else {
                    this.$resource<StoryItem>(this.itemURL).get({ id: this.stories[index] }, (story: StoryItem) => {
                        this.stories[index] = story;
                        localStorage.setItem(story.id, JSON.stringify(story));
                    });
                }
            }
        }, 30);

    }


}
