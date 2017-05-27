import * as Snooper from "reddit-snooper"

import { Loggers } from "../util/Loggers"


export default class SubredditWatcher {
    private snooper
    private subredditWatcher
    private postWatchers: Function[]
    private log

    constructor(subreddit: string) {
        this.log = Loggers.get("Subreddit::" + subreddit)
        this.postWatchers = []

        this.snooper = new Snooper({
            automatic_retries: true,
            api_requests_per_minute: 5
        })

        this.subredditWatcher = this.snooper.watcher.getPostWatcher(subreddit)

        this.subredditWatcher.on("post", post => {
            this.postWatchers.forEach(x => x(post.data))
        }).on("error", err => this.log.error(err))
    }

    public subscribeToNewPosts(cb: Function) {
        this.postWatchers.push(cb)
    }
}
