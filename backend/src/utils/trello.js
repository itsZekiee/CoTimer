"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrelloBoard = void 0;
const axios_1 = __importDefault(require("axios"));
const TRELLO_API_BASE = 'https://api.trello.com/1';
const getTrelloBoard = async (boardId) => {
    const { TRELLO_KEY, TRELLO_TOKEN } = process.env;
    try {
        const response = await axios_1.default.get(`${TRELLO_API_BASE}/boards/${boardId}`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Trello API Error:', error);
        throw error;
    }
};
exports.getTrelloBoard = getTrelloBoard;
