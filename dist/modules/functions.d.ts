import { Guild, Message } from 'discord.js';
import { Bot } from '../client/client';
import { GuildSettings } from '../interfaces/GuildSettings';
export declare const defaultSettings: GuildSettings;
export declare const Functions: {
    permlevel: (client: Bot, message: Message) => number;
    getSettings: (client: Bot, guild: Guild) => GuildSettings;
    awaitReply: (msg: Message, question: string, limit?: number) => Promise<string | false>;
    clean: (client: Bot, text: any) => Promise<any>;
    loadCommand: (client: Bot, commandName: string) => Promise<void>;
    unloadCommand: (client: Bot, commandName: string) => Promise<string | false>;
    wait: any;
};
//# sourceMappingURL=functions.d.ts.map