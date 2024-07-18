import type { NitroAppPlugin, RenderResponse } from 'nitropack'

export default <NitroAppPlugin>(async (nitro) => {
  nitro.hooks.hook('render:response', async (response: Partial<RenderResponse>) => {
    if (response?.headers?.['x-powered-by']) delete response.headers['x-powered-by']
  })
})
