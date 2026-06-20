"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSlackNotification = void 0;
const web_api_1 = require("@slack/web-api");
const slackClient = new web_api_1.WebClient(process.env.SLACK_TOKEN);
const sendSlackNotification = async (channel, message) => {
    try {
        const result = await slackClient.chat.postMessage({
            channel: channel,
            text: message,
        });
        return result;
    }
    catch (error) {
        console.error("Slack Notification Error:", error);
        throw error;
    }
};
exports.sendSlackNotification = sendSlackNotification;
