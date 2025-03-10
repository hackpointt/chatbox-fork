import log from 'electron-log'
import Store from 'electron-store'
import { Config, Settings } from '../shared/types'
import * as defaults from '../shared/defaults'
import { app } from 'electron'
import path from 'path'

interface StoreType {
    settings: Settings
    configs: Config
    lastShownAboutDialogVersion: string
}

// 自定义配置文件路径，将最后一级路径的文件夹名修改为 "自定义文件夹名"
const getCustomConfigPath = () => {
    // 获取默认的userData路径
    const userDataPath = app.getPath('userData')
    // 获取父目录
    const parentDir = path.dirname(userDataPath)
    // 创建新的路径，修改最后一级文件夹名
    const customPath = path.join(parentDir, 'ds-chat')
    return customPath
}

export const store = new Store<StoreType>({
    clearInvalidConfig: true,
    cwd: getCustomConfigPath() // 使用自定义路径
})
log.info('store path:', store.path)

export function getSettings(): Settings {
    const settings = store.get<'settings'>('settings', defaults.settings())
    return settings
}

export function getConfig(): Config {
    let configs = store.get<'configs'>('configs')
    if (!configs) {
        configs = defaults.newConfigs()
        store.set<'configs'>('configs', configs)
    }
    return configs
}
