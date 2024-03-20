import { useState, useEffect } from 'react';
import axios from "axios";

export default function Call() {
  const [data, setData] = useState(null);
  const apiKey = process.env.REACT_APP_SEOUL_API_KEY;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://openapi.seoul.go.kr:8088/${apiKey}/json/citydata_ppltn/1/5/광화문·덕수궁`);
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
  
    </>
  )
}
