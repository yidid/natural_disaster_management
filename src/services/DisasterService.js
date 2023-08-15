import http from "../http-common.js";

const getAll = () => {
  return http.get("/disasters");
};

const get = id => {
  return http.get(`/disasters/${id}`);
};

const create = data => {
  return http.post("/disasters", data);
};

const update = (id, data) => {
  return http.put(`/disasters/${id}`, data);
};

const remove = id => {
  return http.delete(`/disasters/${id}`);
};

const removeAll = () => {
  return http.delete(`/disasters`);
};

const findByTitle = title => {
  return http.get(`/disasters?title=${title}`);
};

const DisasterService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default DisasterService;