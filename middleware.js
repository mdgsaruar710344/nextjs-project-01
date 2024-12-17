import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales=['en','bn'];
const defaultLocale='en';


function getLocale(request){

  let acceptedLanguage= request.headers.get('accept-language');
  let headers={'accept-language': acceptedLanguage}
  let languages= new Negotiator({headers}).languages()
  const localelanguage=match(languages,locales,defaultLocale)
return localelanguage;
}


export function middleware(request,{params}){
  const pathname= request.nextUrl.pathname;
  console.log(pathname);
  console.log(request.headers.get('accept-language'));


  const localeIsPresent= locales.some(locale=> pathname.startsWith(`/${locale}/`)|| pathname===`/${locale}`);
  console.log(localeIsPresent);

  const locale=getLocale(request)
  if(!localeIsPresent){
    const updatedPathname= `/${locale}${pathname}`
    request.nextUrl.pathname=updatedPathname;
    return NextResponse.redirect(request.nextUrl)
  }

  // if(request.nextUrl.pathname.startsWith('/home'))
  // {
  //   return NextResponse.rewrite('http://localhost:3000/', request.Url)
  // }


  return NextResponse.next();
}


export const config ={
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}