import { Theme, Config, Settings, ModelProvider, Session } from './types'
import { v4 as uuidv4 } from 'uuid'

export function settings(): Settings {
    return {
        aiProvider: ModelProvider.Ollama,
        openaiKey: '',
        apiHost: 'https://api.openai.com',

        azureApikey: '',
        azureDeploymentName: '',
        azureDalleDeploymentName: 'dall-e-3',
        azureEndpoint: '',
        chatglm6bUrl: '',
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
        topP: 1,
        // openaiMaxTokens: 0,
        // openaiMaxContextTokens: 4000,
        openaiMaxContextMessageCount: 10,
        // maxContextSize: "4000",
        // maxTokens: "2048",

        claudeApiKey: '',
        claudeApiHost: 'https://api.anthropic.com',
        claudeModel: 'claude-3-5-sonnet-20241022',

        ollamaHost: 'http://127.0.0.1:11434',
        ollamaModel: 'deepseek-r1:1.5b',

        lmStudioHost: 'http://127.0.0.1:1234',
        lmStudioModel: '',

        showWordCount: true,
        showTokenCount: false,
        showTokenUsed: true,
        showModelName: true,
        showMessageTimestamp: false,
        userAvatarKey: '',
        theme: Theme.FollowSystem,
        language: 'en',
        fontSize: 12,
        spellCheck: true,

        defaultPrompt: getDefaultPrompt(),

        allowReportingAndTracking: true,

        enableMarkdownRendering: true,

        siliconCloudHost: 'https://api.siliconflow.cn',
        siliconCloudKey: '',
        siliconCloudModel: 'THUDM/glm-4-9b-chat',

        ppioHost: 'https://api.ppinfra.com/v3/openai',
        ppioKey: '',
        ppioModel: 'deepseek/deepseek-r1/community',

        autoGenerateTitle: true,
    }
}

export function newConfigs(): Config {
    return { uuid: uuidv4() }
}

export function getDefaultPrompt() {
    return '我是DS小助手，可以帮您写作、写代码、翻译、提供建议等，您可以问我任何问题！'
}

export function sessions(): Session[] {
    return [{ id: uuidv4(), name: '新对话', messages: [{ id: uuidv4(), role: 'system', content: getDefaultPrompt() }], type: 'chat' }]
}
