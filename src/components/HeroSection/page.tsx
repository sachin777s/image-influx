import Background from "@/images/hero_bg.jpg";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useTheme } from "next-themes";
import { CiSearch } from "react-icons/ci";

export default function HeroSection() {

    return (
        <div className="px-4 w-full h-[480px] bg-[url('../images/hero_bg.jpg')] bg-cover bg-center flex items-center justify-center">
            <div className="p-4 max-w-[840px] flex flex-col items-center justify-center gap-4 backdrop-brightness-50 rounded-xl">
                <h1 className="w-full text-4xl font-bold text-white">Get the best royalty free images and videos uploaded by creators</h1>
                <p className="w-full text-white">Over 4.3 million+ high quality stock images, videos and music shared by our talented community.</p>
                <Input
                    radius="full"
                    height={35}
                    className="w-full"
                    startContent={
                        <>
                            <select id="countries" className="mr-2 bg-gray-50 border-2 border-gray-400 text-gray-900 text-base rounded-lg block p-2.5 outline-none">
                                <option value="CA">Images</option>
                                <option value="FR">Videos</option>
                            </select>
                        </>
                    }
                    endContent={
                        <CiSearch size={28} />
                    }
                />
            </div>
        </div>
    )
}
