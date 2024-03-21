import axios from "axios";
const baseurl="http://localhost:3002"
const getData = async (url) => {
  try {
    let data = await axios.get(`${baseurl}${url}`);
    data = data.json();
    console.log(data);
    return data.data;
  } catch (e) {
    return e;
  }
};

export const postData = async (url, body) => {
    try {
        console.log(body)
      const response = await axios.post(`${baseurl}${url}`, body);
      const data = response.data; // Response data is accessed directly, no need for .json() with axios
      console.log(data)
      return data;
    } catch (error) {
      return error;
    }
  };
