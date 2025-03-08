import { Session } from '../../shared/types'

export const defaultSessionsForEN: Session[] = [
    {
        id: 'justchat-b612-406a-985b-3ab4d2c482ff',
        name: '新对话',
        type: 'chat',
        messages: [
            {
                id: 'a700be6c-cbdd-43a3-b572-49e7a921c059',
                role: 'system',
                content:
                    '我是DS小助手，可以帮您写作、写代码、翻译、提供建议等，您可以问我任何问题！',
            },
        ],
    }
]

export const defaultSessionsForCN: Session[] = [
    ...defaultSessionsForEN,
]
