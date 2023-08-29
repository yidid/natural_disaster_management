import http from "../http-common.js";

const getAll = () => {
  return http.get("/contentmanagers");
};

const get = id => {
  return http.get(`/contentmanagers/${id}`);
};

const create = data => {
  return http.post("/contentmanagers", data);
};

const update = (id, data) => {
  return http.put(`/contentmanagers/${id}`, data);
};

const remove = id => {
  return http.delete(`/contentmanagers/${id}`);
};

const removeAll = () => {
  return http.delete(`/contentmanagers`);
};

const findByTitle = title => {
  return http.get(`/contentmanagers?title=${title}`);
};

const ContentManagerServices = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ContentManagerServices;