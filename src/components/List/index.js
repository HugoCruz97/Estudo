import { useState, useEffect } from 'react';
import { Title, Image } from "./styles"

const ENDPOINT_BASE = "https://api.thecatapi.com/v1/images/search" 
const IMAGE_DEFAULT = "https://escolaviniciusdemoraes.com.br/wp-content/uploads/2021/10/placeholder-582.png"

function List() {
  const [data, setData] = useState(IMAGE_DEFAULT);
  useEffect(() => {
    fetch(ENDPOINT_BASE).then((response) => {
      response.json().then((data) => {
          setData(data[0])
      })
      
    })
  }, [])
    

  return (
    <>
      <Title>{data.id}</Title>
      <Image width={data.width} height={data.height} src={data.url}/>
    </>
  );
}

export default List;
