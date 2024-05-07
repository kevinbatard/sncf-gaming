export {};

declare global {
    interface Window {
        Twitch?: {
            Embed: typeof TwitchPlayer;
        };
    }
}

interface TwitchPlayer {
    new (id: string, options: TwitchPlayerOptions): TwitchPlayerInstance;
    setVolume(volume: number): void;
}

interface TwitchPlayerOptions {
    width: string | number;
    height: string | number;
    channel: string;
    parent: string[];
}

interface TwitchPlayerInstance {
    setVolume(volume: number): void;
}
