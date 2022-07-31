import axios from "axios";

const fetchDataService = async (method, path, data) => {
  const response = await axios({
    method: method,
    url: 'http://10.0.2.2:8080' + path,
    data: data
  });
  return response;
}

export default fetchDataService;