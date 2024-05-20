export const Config = {
    regions: {
        dev: { name: "Local Server", address: "kaklik.me:8000", https: false },
    },
    defaultRegion: "dev",
    mode: "halloween"
} satisfies ConfigType as ConfigType;

export interface ConfigType {
    readonly regions: Record<string, {
        readonly name: string
        readonly address: string
        readonly https: boolean
    }>
    readonly defaultRegion: string
    readonly mode: string
}
