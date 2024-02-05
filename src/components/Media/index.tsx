"use client"
import { Tab, Tabs } from "@nextui-org/tabs";
import { FaVideo } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import Image from "./ImageSection/Image"
import ImagesTab from "./ImageSection/ImagesTab";
import VideosTab from "./VideoSection/VideosTab";

export default function Media() {
    return (
        <div className="mt-16 mx-auto flex w-full flex-col items-center">
            <Tabs aria-label="Options" color="success" variant="bordered">
                <Tab
                    className=""
                    key="photos"
                    title={
                        <div className="flex items-center space-x-2">
                            <IoImageOutline />
                            <span>Photos</span>
                        </div>
                    }
                >
                   <ImagesTab/>
                </Tab>
                <Tab
                    key="videos"
                    title={
                        <div className="flex items-center space-x-2">
                            <FaVideo />
                            <span>Videos</span>
                        </div>
                    }
                >
                   <VideosTab/>
                </Tab>
            </Tabs>
        </div>
    )
}
