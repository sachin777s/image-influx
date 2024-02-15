"use client";
import React from 'react'
import { Image as NextUIImage } from "@nextui-org/image";
import NextImage from "next/image";
import { Button } from '@nextui-org/button';
import { FaDownload, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import { CldImage } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

export default function Image(props: {
  src: string,
  alt: string,
  title: string
}) {

  const { src, alt, title } = props;

  const router = useRouter();

  return (
    <div
     className="group relative overflow-hidden"
     onClick={()=>router.push(`images/${src}`)}
     >
      <div className='w-full p-2 absolute top-0 left-0 z-[11] opacity-0 transition duration-500 group-hover:opacity-100 flex items-center gap-2'>
        <span className="absolute top-0 w-full h-1 bg-transparent -translate-y-full shadow-[0_0_37px_24px_black] z-0"></span>
        <Button isIconOnly className='bg-white'>
          <MdOutlineCollectionsBookmark color='var(--secondary-text)' size={24} />
        </Button>
        <Button isIconOnly className='bg-white'>
          <FaRegHeart color='var(--secondary-text)' size={24} />
        </Button>
      </div>
      <CldImage width={0} height={0} className='w-full h-auto' src={src} alt={alt} />
      <div className='w-full px-2 py-1 absolute left-0 bottom-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 flex items-center justify-between overflow-hidden'>
        <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent translate-y-full shadow-[0_0_37px_24px_black] z-0"></span>
        <p className="text-white z-10">{title}</p>
        <Link href="/">
          <Button className='bg-[var(--primary-color)] text-white'>
            Dowload <FaDownload />
          </Button>
        </Link>
      </div>
    </div>
  )
}