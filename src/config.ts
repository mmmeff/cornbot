import * as convict from "convict"

const schema: convict.Schema = {
    discordToken: {
        format: String,
        default: "nah",
        env: "COBBY_DISCORD_TOKEN"
    },
    subreddits: {
        doc: "Comma separated list of subreddits to watch",
        format: String,
        default: "motola",
        env: "COBBY_SUBREDDITS"
    },
    channelIDs: {
        doc: "Comma separated list of channel IDs to update",
        format: String,
        default: "318136791154556928",
        env: "COBBY_CHANNELIDS"
    }
}

const config = convict(schema)

export default config