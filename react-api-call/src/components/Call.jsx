import { useState, useEffect } from 'react';
import axios from "axios";

export default function Call() {
  const [data, setData] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [response01,response02] = await Promise.all([
        axios.get(`http://openapi.seoul.go.kr:8088/${apiKey}/json/citydata_ppltn/1/5/광화문·덕수궁`),
        axios.get(`http://openapi.seoul.go.kr:8088/${apiKey}/json/citydata_ppltn/1/5/서울대공원`)
      ])
      setData({
        data01:response01.data['SeoulRtd.citydata_ppltn'][0]['AREA_CONGEST_LVL'],
        data02:response02.data['SeoulRtd.citydata_ppltn'][0]['AREA_CONGEST_LVL']
      });
      console.log(data.data01Max-data.data01Min)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <div>{data.data01}</div>
      <div>{data.data02}</div>
    </>
  )
}
