import { useState, useEffect } from 'react';

export default function Call() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('')
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
    </>
  )
}
