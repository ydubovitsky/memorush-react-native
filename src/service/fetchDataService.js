import axios from "axios";

const fetchDataService = async ({ method, url, data, headers }) => {
  const response = await axios({
    method,
    url,
    data,
    headers
  });

  return response;
}

export default fetchDataService;