import {
    Button,
    Paper,
    Badge,
    Box,
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    useTheme,
} from '@mui/material'
import iconPNG from '../static/icon.png'
import { useTranslation } from 'react-i18next'
import platform from '../packages/platform'
import useVersion from '../hooks/useVersion'
import * as atoms from '../stores/atoms'
import { useAtomValue } from 'jotai'

interface Props {
    open: boolean
    close(): void
}

export default function AboutWindow(props: Props) {
    const { t } = useTranslation()
    const theme = useTheme()
    const language = useAtomValue(atoms.languageAtom)
    const versionHook = useVersion()
    return (
        <Dialog open={props.open} onClose={props.close} fullWidth>
            <DialogTitle>{t('版本信息')}</DialogTitle>
            <DialogContent>
                <Box sx={{ textAlign: 'center', padding: '0 20px' }}>
                    <img src={iconPNG} style={{ width: '100px', margin: 0, display: 'inline-block' }} />
                    <h3 style={{ margin: '4px 0 5px 0' }}>DS本地部署工具</h3>
                    <p className="p-0 m-0">一键部署本地DeepSeek，网络不再“繁忙”</p>
                    <p className="p-0 m-0 opacity-60 text-xs">本软件资源均从公开合法渠道获取，，仅作阅读交流，版权归原作者或出版社，与本软件无关，本软件不对所涉及的版权负法律责任!若有侵权，请联系删除。软件标价含资料处理、本地化部署服务费及运营售后成本。</p>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                    className='mt-1'
                >
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close}>{t('close')}</Button>
            </DialogActions>
        </Dialog>
    )
}
