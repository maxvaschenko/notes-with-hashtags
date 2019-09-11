import axios from "axios";

const endpoint = "https://gentle-escarpment-19443.herokuapp.com/v1";

const getAuthHeader = token => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const getToken = () =>
  axios.post(`${endpoint}/users/auth`, {
    email: "user1@email.com",
    password: "!password!"
  });

export const getArticles = token =>
  axios.get(`${endpoint}/articles`, getAuthHeader(token));

export const putArticle = (article, token) => {
  const { id, ...other } = article;
  return axios.put(
    `${endpoint}/articles/${id}`,
    { ...article },
    getAuthHeader(token)
  );
};

export const deleteArticleRequest = (article, token) => {
  const { id, status, ...other } = article;
  return axios.put(
    `${endpoint}/articles/${id}`,
    { id, ...{ status: 0 }, ...other },
    getAuthHeader(token)
  );
};
