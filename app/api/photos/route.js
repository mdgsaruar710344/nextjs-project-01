import { NextResponse } from "next/server";
import { getAllphotos,getSinglePhoto } from "@/app/lib/image-data";

export  async function GET(request){
  const photos = await getAllphotos();

  // const data= await photodata.json();
  // console.log(data);

  return NextResponse.json(photos) ;
}


