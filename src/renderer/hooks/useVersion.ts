import { useState, useEffect } from 'react'
import platform from '../packages/platform'

export default function useVersion() {
    const [version, _setVersion] = useState('')
    const [needCheckUpdate, setNeedCheckUpdate] = useState(false)
    useEffect(() => {
        const handler = async () => {
            const version = await platform.getVersion()
            _setVersion(version)
            setNeedCheckUpdate(false)
        }
        handler()
        return () => {}
    }, [])

    return {
        version,
        needCheckUpdate,
    }
}
