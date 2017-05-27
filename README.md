![Cobby Banner](/img/banner.png?raw=true)
# Cobby Bot
Happen to be in a motorcycling group that is obsessed with Eloté? Then you've found the perfect discord bot.


## Features
* Forwards new reddit posts from /r/motoLA to #announcements 

<!--Install: https://discordapp.com/oauth2/authorize?&client_id=318102303330664448&scope=bot&permissions=0 -->


## Development
Set the environment variable `COBBY_DISCORD_TOKEN={...}` locally before trying to run the application otherwise it won't work. Either use your own from your own application or ask me for the official app's token. See src/config.ts for the full configuration schema.


### Install and run locally:
* `git clone https://github.com/mmmeff/cornbot.git`
* `cd cornbot`
* `yarn` to install dependencies
* `yarn watch` or `yarn start`


## Roadmap
* [ ] Remove motoLA-specific config nodes and enabble multiple subreddit->channelID mappings
* [ ] Add deployment instructions for docker image (ezmode hosting)
* [ ] Enable configuration via chat commands to move past hosting requirements


## Feature ideas
* [ ] Event/Ride participation XP/levels
* [ ] Corn man leaderboards
* [ ] Corn IOU tracking