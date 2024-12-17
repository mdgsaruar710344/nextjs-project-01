
import { getSinglePhoto } from "@/app/lib/image-data";

import { NextResponse } from "next/server";

export async  function GET(request,{params}){

const id=params?.id;
const singlePhoto=await getSinglePhoto(id);

  return  NextResponse.json(singlePhoto);

} 