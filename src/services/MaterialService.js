import http from "../http-common.js";

const getAll = () => {
  return http.get("/materials");
};

const get = id => {
  return http.get(`/materials/${id}`);
};

const create = data => {
  return http.post("/materials", data);
};

const update = (id, data) => {
  return http.put(`/materials/${id}`, data);
};

const remove = id => {
  return http.delete(`/materials/${id}`);
};

const removeAll = () => {
  return http.delete(`/materials`);
};

const findByTitle = title => {
  return http.get(`/materials?title=${title}`);
};

const MaterialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MaterialService;