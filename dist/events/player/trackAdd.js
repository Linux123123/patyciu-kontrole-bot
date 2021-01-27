"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
exports.name = 'trackAdd';
const run = async (client, message, queue) => {
    let channel = await client.channels.fetch(message.settings.musicChannelId);
    let msg = await channel.messages.fetch(message.settings.musicMsgId);
    msg.edit(client.functions.queueMessage(queue));
};
exports.run = run;