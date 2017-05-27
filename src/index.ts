import * as Discord from "discord.js"

import config from "./config"
import { Loggers } from "./util/Loggers"
import SubredditWatcher from "./reddit/SubredditWatcher"

const DISCORD_TOKEN = config.get("discordToken")
const DISCORD_CHANNELS = config.get("channelIDs").split(",")
const SUBREDDITS = config.get("subreddits").split(",")

const log = Loggers.get(" 🌽  ")
const discord = new Discord.Client()

SUBREDDITS.forEach(subredditName => {
    const subreddit = new SubredditWatcher(subredditName)

    subreddit.subscribeToNewPosts(post => {
        const alert = `New Post: ${post.title} by ${post.author}. ${post.url}`

        DISCORD_CHANNELS.forEach(channelID => {
            const channel = discord.channels.get(channelID) as Discord.TextChannel
            if (!channel) return
            channel.send(alert)
            log.info("Alerted a new subreddit post.", alert)
        })
    })
})

// discord.on("message", message => {
//     if (message.member.user.equals(discord.user)) return
// })

discord.on("ready", () => {
    log.info("Cobby reporting for duty!")
})
discord.login(DISCORD_TOKEN)