import { WebClient } from "@slack/web-api";

const slackClient = new WebClient(process.env.SLACK_TOKEN);

export const sendSlackNotification = async (channel: string, message: string) => {
  try {
    const result = await slackClient.chat.postMessage({
      channel: channel,
      text: message,
    });
    return result;
  } catch (error) {
    console.error("Slack Notification Error:", error);
    throw error;
  }
};
