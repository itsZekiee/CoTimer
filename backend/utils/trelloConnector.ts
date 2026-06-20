import axios from "axios";

const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;

const trelloApi = axios.create({
  baseURL: "https://api.trello.com/1",
  params: {
    key: TRELLO_API_KEY,
    token: TRELLO_TOKEN,
  },
});

export const getTrelloBoard = async (boardId: string) => {
  const response = await trelloApi.get(`/boards/${boardId}`);
  return response.data;
};

export const createTrelloCard = async (listId: string, name: string, desc: string) => {
  const response = await trelloApi.post("/cards", null, {
    params: {
      idList: listId,
      name,
      desc,
    },
  });
  return response.data;
};
