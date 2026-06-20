import axios from 'axios';

const TRELLO_API_BASE = 'https://api.trello.com/1';

export const getTrelloBoard = async (boardId: string) => {
  const { TRELLO_KEY, TRELLO_TOKEN } = process.env;
  try {
    const response = await axios.get(`${TRELLO_API_BASE}/boards/${boardId}`, {
      params: {
        key: TRELLO_KEY,
        token: TRELLO_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Trello API Error:', error);
    throw error;
  }
};
