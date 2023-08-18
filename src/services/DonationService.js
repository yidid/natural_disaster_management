import http from "../http-common.js";

const getAll = () => {
  return http.get("/donations");
};

const get = id => {
  return http.get(`/donations/${id}`);
};

const create = data => {
  return http.post("/donations", data);
};

const update = (id, data) => {
  return http.put(`/donations/${id}`, data);
};

const remove = id => {
  return http.delete(`/donations/${id}`);
};

const removeAll = () => {
  return http.delete(`/donations`);
};

const findByTitle = title => {
  return http.get(`/donations?title=${title}`);
};

const DonationService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default DonationService;