import api from './api';

const newsApi = api(`${import.meta.env.VITE_NEWSAPI_BASE_URL}`);

export default newsApi;
