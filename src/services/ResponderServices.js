import http from "../http-common.js";

const getAll = () => {
  return http.get("/responders");
};

const get = id => {
  return http.get(`/responders/${id}`);
};

const create = data => {
  return http.post("/responders", data);
};

const update = (id, data) => {
  return http.put(`/responders/${id}`, data);
};

const remove = id => {
  return http.delete(`/responders/${id}`);
};

const removeAll = () => {
  return http.delete(`/responders`);
};

const findByTitle = title => {
  return http.get(`/responders?title=${title}`);
};

const ResponderServices = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ResponderServices;