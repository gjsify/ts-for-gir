import { Logger } from './logger'
import { run, Errors } from '@oclif/core'
import flush from '@oclif/core/flush'

export * from './index'

if (require.main === module) {
    async function start() {
        try {
            await run()
            await flush()
        } catch (error: unknown | Errors.CLIError) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (error && (error as Errors.CLIError).oclif) {
                Errors.handle(error as Errors.CLIError)
            } else {
                Logger.error(error)
            }
        }
    }
    void start()
}
