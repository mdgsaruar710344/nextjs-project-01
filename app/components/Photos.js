import PhotoCard from "./PhotoCard";

const Photos= async ()=> {
  const photodata=await fetch('http://localhost:3000/api/photos')
  const photos=await photodata.json();
  // console.log(photos);



return (
          <div>

          This is photo page! 
          Total photos : {photos.length}
          <div className="flex flex-row-3 gap-5">
          {photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
          </div>
        
          

          </div>
      );
    }

export default Photos;
