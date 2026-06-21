import {AxiosApi} from '../config/AxiosHelper.js'

export const createRoomApi = async (roomCreateId) => {
    const response = await AxiosApi.post(
        "/api/rooms/create",
        {
            roomId: roomCreateId
        }
    );
    return response.data;
}

export const joinRoomApi = async (roomJoinId) => {
    const response = await AxiosApi.get(`/api/rooms/${roomJoinId}`);
    return response.data;
}

export const getMessages = async (roomId, size = 50, page = 0) => {
    const response = await AxiosApi.get(
        `/api/rooms/${roomId}/messages?size=${size}&page=${page}`
    );
    return response.data;
};

export function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const secondsAgo = Math.floor((now - past) / 1000);

    if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `${hoursAgo} hours ago`;
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 30) return `${daysAgo} days ago`;
    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo < 12) return `${monthsAgo} months ago`;
    const yearsAgo = Math.floor(monthsAgo / 12);
    return `${yearsAgo} years ago`;
}