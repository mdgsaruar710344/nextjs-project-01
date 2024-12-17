import en from "./en";
import bn from "./bn";

const getDictionary=(lang)=>{
if (lang=='en'){
  return en;
}
else if(lang=='bn') {
  return bn;
}
}
export default getDictionary;