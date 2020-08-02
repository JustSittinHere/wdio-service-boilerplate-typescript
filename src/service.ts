import IOptions from './IOptions';

export default class WDIOServiceService {
    constructor(options: IOptions) {
        this.options = options;
    }

    async onPrepare(config, capabilities) {}

    async onWorkerStart(cid, caps, specs, args, execArgv) {}

    async beforeSession(config, capabilities, specs) {}

    async before(capabilities, specs) {}

    async beforeSuite(suite) {}

    async beforeHook(test, context) {}

    async afterHook(test, context, { error, result, duration, passed, retries }) {}

    async beforeTest(test, context) {}

    async beforeCommand(commandName, args) {}

    async afterCommand(commandName, args, result, error) {}

    async afterTest(test, context, { error, result, duration, passed, retries }) {}

    async afterSuite(suite) {}

    async after(result, capabilities, specs) {}

    async afterSession(config, capabilities, specs) {}

    onComplete(exitCode, config, capabilities, results) {}

    onReload(oldSessionId, newSessionId) {}
}
