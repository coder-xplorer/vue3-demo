import axios from "axios"

export function fetchResource() {
  return axios.get("/api/resources").then(res => res.data)
}

export function updateResource(id, resource) {
  return axios.patch(`/api/resources/${id}`, resource)
    .then((res) => res.data)
    .catch(error => {
      return Promise.reject(error?.response?.data)
    });
}

export function deleteResource(id) {
  return axios
    .delete(`/api/resources/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error?.response?.data);
    });
}