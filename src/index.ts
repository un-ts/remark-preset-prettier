import { plugins as _plugins } from './plugins.js'

export const plugins = _plugins.map(plugin => [plugin, false] as const)

export default { plugins }
