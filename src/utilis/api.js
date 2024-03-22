import axios from "axios";
const baseurl="https://user-create-login.vercel.app"
const token = localStorage.getItem('token');

export const getData = async (url) => {
  try {
    let data = await axios.get(`${baseurl}${url}`,
  {  headers: {
      Authorization: `Bearer ${token}`
    }});
    ;
    
    return data.data;
  } catch (e) {
    return e;
  }
};

export const postData = async (url, body) => {
    try {
        
      const response = await axios.post(`${baseurl}${url}`, body);
      const data = response.data; // Response data is accessed directly, no need for .json() with axios
      
      return data;
    } catch (error) {
      
      throw error;
    }
  };
