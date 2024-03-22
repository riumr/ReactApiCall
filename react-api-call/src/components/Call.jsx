import { useState, useEffect } from 'react';
import axios from "axios";

export default function Call() {
  const [data, setData] = useState(String);
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://openapi.seoul.go.kr:8088/${apiKey}/json/citydata_ppltn/1/5/광화문·덕수궁`);
      setData(response.data['SeoulRtd.citydata_ppltn'][0]['AREA_PPLTN_MAX'])
      console.log(response.data['SeoulRtd.citydata_ppltn'][0]['AREA_PPLTN_MAX'])
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      {data}
    </>
  )
}
