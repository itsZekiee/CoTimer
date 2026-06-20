import { WebClient } from "@slack/web-api";

const slackToken = process.env.SLACK_BOT_TOKEN;
export const slackClient = new WebClient(slackToken);

export const sendSlackNotification = async (channel: string, text: string) => {
  try {
    await slackClient.chat.postMessage({ channel, text });
  } catch (error) {
    console.error("Slack notification failed:", error);
  }
};
