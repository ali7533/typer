'use client'
import Image from "next/image";
import Nav from "./components/nav/Nav";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-12 gird-cols-12">
      <Nav />
      <div className="p-16 text-center font-bold"style={{gridArea:"3 /1/span 1/span 12"}}>
        Learn Typing
      </div>
      <div className="p-4 md:p-16 col-span-12 grid grid-cols-12 gap-4" style={{gridArea:"4 /1/span 1/span 12"}}>
        <Link href='/malayalam' className='shadow-[3px_5px_11px_rgba(0,0,0,.7)] text-center col-span-12 md:col-span-3 lg:col-span-3 rounded-md'>Malayalam</Link>
        <Link href='/english' className='shadow-[3px_5px_11px_rgba(0,0,0,.7)] text-center col-span-12 md:col-span-3 lg:col-span-3 rounded-md'>English</Link>
        <Link href='/hindi' className='shadow-[3px_5px_11px_rgba(0,0,0,.7)] text-center col-span-12 md:col-span-3 lg:col-span-3 rounded-md'>Hindi</Link>
      </div>
    </div>
  );
}
