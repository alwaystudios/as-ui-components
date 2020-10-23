import { promiseRetry } from '@alwaystudios/as-utils'

export const waitUntil = async (f: any) => {
  await promiseRetry()(async () => {
    f()
  })
}
