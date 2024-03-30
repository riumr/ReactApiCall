import axios from "axios";
import { placeList } from './PlaceList';

export default function Call() {
  const places=placeList;
  const apiKey = process.env.REACT_APP_API_KEY;
  const fetchData = async () => {
    try {
      places.forEach(place=>{
        axios.get(`http://openapi.seoul.go.kr:8088/${apiKey}/json/citydata_ppltn/1/5/${place}`)
        .then(response=>{
          // 데이터가 없는 경우 제외하고 모두 호출
          if(response.data['RESULT.CODE']!=='INFO-200'){
            console.log(response.data['SeoulRtd.citydata_ppltn'][0]['AREA_CONGEST_LVL']);
          }
        })
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  return (
    <>
    </>
  )
}
