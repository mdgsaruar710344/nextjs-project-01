import PhotoCard from "../components/PhotoCard";

const Photos= async ()=> {
  const photodata=await fetch('http://localhost:3000/api/photos')
  const photos=await photodata.json();
  console.log(photos);



return (
          <div>

          This is photo page! 
          Total photos : {photos.length}
          {photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
          

          </div>
      );
    }

export default Photos;
