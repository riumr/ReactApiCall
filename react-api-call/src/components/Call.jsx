import { useState, useEffect } from 'react';
import axios from "axios";

export default function Call() {
  const [data, setData] = useState(0);
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
        data01Max:parseInt(response01.data['SeoulRtd.citydata_ppltn'][0]['AREA_PPLTN_MAX']),
        data01Min:parseInt(response01.data['SeoulRtd.citydata_ppltn'][0]['AREA_PPLTN_MIN']),
        data02:parseInt(response02.data['SeoulRtd.citydata_ppltn'][0]['AREA_PPLTN_MAX'])
      });
      console.log(data.data01Max-data.data01Min)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const data01Style={
    height:parseInt(`${data.data01Max}-${data.data01Min}`)/100,
    backgroundColor:'gray'
  }
  return (
    <>
      <div style={data01Style}>
        {data.data01Max}
        {data.data01Min}
      </div>
      <div>{data.data02}</div>
    </>
  )
}
