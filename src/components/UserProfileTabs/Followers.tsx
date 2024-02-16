import { Avatar } from "@nextui-org/avatar"
import { Button } from "@nextui-org/button"

export default function Followers() {

    interface Follower {
        name: string,
        imgUrl: string,
        isFollowBack: boolean
    }
    const Followers: Follower[] = [
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            isFollowBack: false
        },
        {
            name: "Sachin Kumargfdsfdsfsdafsdafsafsafasfsdaffafds",
            imgUrl: "https://avatars.githubusercontent.com/u/30373425?v=4",
            isFollowBack: false
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            isFollowBack: false
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a04258114e29026708c",
            isFollowBack: false
        },
        {
            name: "Abhishek",
            imgUrl: "https://avatars.githubusercontent.com/u/30373425?v=4",
            isFollowBack: false
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            isFollowBack: false
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            isFollowBack: false
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            isFollowBack: false
        }
    ]

    return (
        <section className='mx-auto mt-12 w-[35%] min-w-[20rem]'>
            {
                Followers.map((Follower, index) =>
                    <div key={index} className="w-full mt-2 px-1 py-2 flex items-center justify-between rounded-xl border border-gray-400 shadow-[0_0_12px_-3px_gray]">
                        <div className="flex items-center gap-2">
                            <Avatar src={Follower.imgUrl} />
                            <span className="text-base">
                                {
                                    Follower.name.length > 15
                                        ? Follower.name.slice(0, 16) + ".."
                                        : Follower.name
                                }
                            </span>
                        </div>
                        <Button
                            className="bg-[var(--primary-color)] text-white"
                        >
                            Follow
                        </Button>
                    </div>
                )
            }
        </section>
    )
}