import { useRef } from 'react'
import {
    Box,
    Badge,
    ListItemText,
    MenuList,
    IconButton,
    Stack,
    MenuItem,
    ListItemIcon,
    Typography,
    Divider,
    useTheme,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useTranslation } from 'react-i18next'
import icon from './static/icon.png'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import AddIcon from '@mui/icons-material/AddCircleOutline'
import useVersion from './hooks/useVersion'
import SessionList from './components/SessionList'
import * as sessionActions from './stores/sessionActions'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { useSetAtom } from 'jotai'
import * as atoms from './stores/atoms'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { trackingEvent } from './packages/event'
import LinkIcon from '@mui/icons-material/Link'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import platform from './packages/platform'

export const drawerWidth = 240

interface Props {
    openCopilotWindow(): void
    openAboutWindow(): void
    setOpenSettingWindow(name: 'ai' | 'display' | null): void
}

export default function Sidebar(props: Props) {
    const { t } = useTranslation()
    const versionHook = useVersion()

    const sessionListRef = useRef<HTMLDivElement>(null)
    const handleCreateNewSession = () => {
        sessionActions.createEmpty('chat')
        if (sessionListRef.current) {
            sessionListRef.current.scrollTo(0, 0)
        }
        trackingEvent('create_new_conversation', { event_category: 'user' })
    }

    const theme = useTheme()

    return (
        <div
            className="fixed top-0 left-0 h-full z-50"
            style={{
                boxSizing: 'border-box',
                width: drawerWidth,
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: theme.palette.divider,
            }}
        >
            <div className="ToolBar h-full">
                <Stack
                    className="pt-3 pl-2 pr-1"
                    sx={{
                        height: '100%',
                    }}
                >
                    <Box className="flex justify-between items-center px-2">
                        <Box>
                            <div className="flex items-center no-underline">
                                <img src={icon} className="w-8 h-8 mr-3" />
                                <div className="flex flex-col items-start">
                                    <span className="text-2xl font-medium">DS部署工具</span>
                                    <span className="text-[10px] opacity-50">专业版</span>
                                </div>
                            </div>
                        </Box>
                    </Box>

                    <SessionList sessionListRef={sessionListRef} />

                    <Divider variant="fullWidth" />

                    <MenuList sx={{ marginBottom: '20px' }}>
                        <MenuItem onClick={handleCreateNewSession} sx={{ padding: '0.2rem 0.1rem', margin: '0.1rem' }}>
                            <ListItemIcon>
                                <IconButton>
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>{t('new chat')}</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                {/* ⌘N */}
                            </Typography>
                        </MenuItem>

                        <MenuItem onClick={props.openCopilotWindow} sx={{ padding: '0.2rem 0.1rem', margin: '0.1rem' }}>
                            <ListItemIcon>
                                <IconButton>
                                    <SmartToyIcon fontSize="small" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>{t('My Copilots')}</Typography>
                            </ListItemText>
                        </MenuItem>

                        <MenuItem
                            onClick={() => {
                                props.setOpenSettingWindow('ai')
                            }}
                            sx={{ padding: '0.2rem 0.1rem', margin: '0.1rem' }}
                        >
                            <ListItemIcon>
                                <IconButton>
                                    <SettingsIcon fontSize="small" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>{t('settings')}</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                {/* ⌘N */}
                            </Typography>
                        </MenuItem>

                        <MenuItem
                            onClick={() => platform.openLink('https://www.echatsoft.com/visitor/pc/chat.html?companyId=521189&echatTag=kehuduan&metaData=IyLFJTe8AgHNm+J/o3ixbAZHAEoFHnY/W6eJt7HdWjDB90HZtTp52h+M8SebwcoCR2TAe2W2L6zA90Ddp/QeyuLzVizw2o7Vs2Eb+Y1SW4wWnelJW9fcGEigKB56T6VOwQ5tCpsmgzqi/753LjZ05HT0e1XO7NggfvuPHP670mvhtbm9bnmD2d/Zxjd1mth3awCuVW1JVHYmG9EhL+ouqEyCv/hb9TIqdawUUG2lrW783bvCH7COWguqaGLkf89Co3mwpBXIdKzw6qpbMCSRreiHU5+Y06J7c+s/Yi/VtKjKkz5PhlgpFCDd7x+kNJ9aQWI56jH3Xjvv3vsBsVw7rdFFbx4JfOeyQkPMuXxJ3YHrn7Hf8HTmr/mXneJ3iZdmH75FdK8VcT0iW5MjzycrzExstMQWuijgU3PbFArf9/BidRwm07IQLCx+IV9G/eH1DjblsY6q2VE1WG6P70ALGEksPFoCPg9y7Nkil/8+ao3t1a/LcDB8bIL6t3SiHsgI')}
                            sx={{ padding: '0.2rem 0.1rem', margin: '0.1rem' }}
                        >
                            <ListItemIcon>
                                <IconButton>
                                    <ContactSupportIcon fontSize="small" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>
                                    联系客服
                                </Typography>
                            </ListItemText>
                        </MenuItem>

                        <MenuItem 
                            onClick={() => platform.openLink('https://ds.pdfxd.com/course/teach.html')}
                            sx={{ padding: '0.2rem 0.1rem', margin: '0.1rem' }}
                        >
                            <ListItemIcon>
                                <IconButton>
                                    <MenuBookIcon fontSize="small" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>
                                    使用说明
                                </Typography>
                            </ListItemText>
                        </MenuItem>

                        <MenuItem onClick={props.openAboutWindow} sx={{ padding: '0.2rem 0.1rem', margin: '0.1rem' }}>
                            <ListItemIcon>
                                <IconButton>
                                    <InfoOutlinedIcon fontSize="small" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                <Badge
                                    color="primary"
                                    variant="dot"
                                    invisible={!versionHook.needCheckUpdate}
                                    sx={{ paddingRight: '8px' }}
                                >
                                    <Typography sx={{ opacity: 0.5 }}>
                                        {t('About')}
                                    </Typography>
                                </Badge>
                            </ListItemText>
                        </MenuItem>

                    </MenuList>
                </Stack>
            </div>
        </div>
    )
}
