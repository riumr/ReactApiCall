import { useState, useEffect } from 'react';
import axios from "axios";
import { placeList } from './PlaceList';

export default function Call() {
  const [data, setData] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      for (const place of placeList) {
        const response = axios.get(`http://openapi.seoul.go.kr:8088/${apiKey}/json/citydata_ppltn/1/5/${place}`);
        setData({
          data01:response.data['SeoulRtd.citydata_ppltn'][0]['AREA_CONGEST_LVL'],
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <div>{data.data01}</div>
    </>
  )
}
