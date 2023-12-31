import http from "../http-common.js";

const getAll = (params) => {
  return http.get("/disasters",{params});
};

const get = id => {
  return http.get(`/disasters/${id}`,);
};

const getdisasterd = id => {
  return http.get(`user/disasters/${id}`,);
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

const findPublished = (params,published)  => {
  return http.get(`/disasters?published=${published} `,{params});
};

const DisasterService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  getdisasterd,
  findPublished
};

export default DisasterService;