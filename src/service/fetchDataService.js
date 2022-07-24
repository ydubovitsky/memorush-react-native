import axios from "axios";

const fetchDataService = async (method, path, data) => {
  const response = await axios({
    method: method,
    url: 'http://localhost:8081' + path,
    data: data
  });

  return response;
}

export default fetchDataService;