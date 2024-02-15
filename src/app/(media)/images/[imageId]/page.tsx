"use client";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/react";
import { CldImage } from "next-cloudinary";
import { FaDownload, FaRegHeart } from "react-icons/fa";
import { MdOutlineCollectionsBookmark } from "react-icons/md";

export default function page({ params }: any) {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full px-2 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <User
          className="scale-125 hidden md:flex"
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
        <div className="flex items-center gap-2">
          <Button className='bg-white text-[var(--primary-text)] shadow-[0_0_8px_-3px_black] border-1 border-transparent transition-colors duration-300 hover:border-black'>
            Collection
            <MdOutlineCollectionsBookmark color='var(--secondary-text)' size={24} />
          </Button>
          <Button className='bg-white text-[var(--primary-text)] shadow-[0_0_8px_-3px_black] border-1 border-transparent transition-colors duration-300 hover:border-black'>
            Like
            <FaRegHeart color='var(--secondary-text)' size={24} />
          </Button>
          <Button className='bg-[var(--primary-color)] text-white'>
            Dowload <FaDownload />
          </Button>
        </div>
      </div>
      <CldImage
        width={0}
        height={0}
        className='mt-12 w-auto max-w-100% max-h-[650px]'
        src={params.imageId}
        alt={"..."}
      />
      <div className="mt-12 mb-0 md:mb-12 flex items-center justify-center gap-6">
        <div className="flex flex-col items-center">
          <span className="text-xl text-center">Date</span>
          <span className="text-[var(--secondary-text)]">12 Jul</span>
        </div>
        <span className="block h-[50px] w-[2px] bg-[var(--secondary-text)]"></span>
        <div className="flex flex-col items-center">
          <span className="text-xl">Likes</span>
          <span className="text-[var(--secondary-text)]">54K</span>
        </div>
        <span className="block h-[50px] w-[2px] bg-[var(--secondary-text)]"></span>
        <div className="flex flex-col items-center">
          <span className="text-xl">Downloads</span>
          <span className="text-[var(--secondary-text)]">43K</span>
        </div>
      </div>
      <User
        className="my-6 scale-125 md:hidden self-start"
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
      />
    </section>
  )
}