import axios from 'axios'

const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (personObject) => {
  const request = axios.post(baseUrl, personObject);
  return request.then((response) => response.data);
};

const update = (id, personObject) => {
  const request = axios.put(`${baseUrl}/${id}`, personObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

// eslint-disable-next-line
export default { getAll, create, update, remove };