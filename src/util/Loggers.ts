import * as bunyan from "bunyan"

const mainLogger = bunyan.createLogger({
    name: "schedapi",
    level: "info"
})

const loggers = {}

export interface Logger {
    info: (...args) => void,
    warn: (...args) => void,
    error: (...args) => void
}


export class Loggers {
    public static get(name: string): Logger {
        if (!loggers[name]) {
            loggers[name] = mainLogger.child({
                module: name
            })
        }

        return loggers[name]
    }
}
