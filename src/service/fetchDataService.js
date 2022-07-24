import axios from "axios";

const fetchDataService = async (method, path, data) => {
  const response = await axios({
    method: method,
    url: 'http://10.0.2.2:8081' + path,
    data: data
  });
  return response;
}

export default fetchDataService;