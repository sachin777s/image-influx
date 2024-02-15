"use client";
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaDownload, FaRegHeart } from 'react-icons/fa'
import { MdOutlineCollectionsBookmark } from 'react-icons/md'
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css';
import { useRouter } from 'next/navigation';

export default function Video(props: {
  isControls: boolean;
  title: string;
  src: string
}) {

  const { title, src } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
      onClick={() => router.push(`/videos/${src}`)}
      className="group relative overflow-hidden"
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
      <CldVideoPlayer
        className='min-w-full md:min-w-[22.5rem]'
        width={480}
        height={0}
        src={src}
        controls={false}
        videoRef={videoRef}
      />
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
