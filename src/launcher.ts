import IOptions from './IOptions';

export default class WDIOSericeLauncher {
    constructor(options: IOptions, caps: any[], config: any) {
        this.options = options;
        this.caps = caps;
        this.config = config;
    }

    async onPrepare(config: any, caps: any) {}

    async onWorkerStart(cid, caps, specs, args, execArgv) {}

    async onComplete(exitCode, config, capabilities, results) {}
}
