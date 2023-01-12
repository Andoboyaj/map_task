import axiosClient from "./axiosClient";

const osrmApi = {
  getPathInfo(coords) {
    const url = `/driving/${coords}?overview=full`;
    return axiosClient.get(url);
  },
};

export default osrmApi;
