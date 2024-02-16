import { Avatar } from "@nextui-org/avatar"
import { Button } from "@nextui-org/button"

export default function Followings() {

    interface Following {
        name: string,
        imgUrl: string
    }
    const followings: Following[] = [
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        },
        {
            name: "Sachin Kumargfdsfdsfsdafsdafsafsafasfsdaffafds",
            imgUrl: "https://avatars.githubusercontent.com/u/30373425?v=4"
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a04258114e29026708c"
        },
        {
            name: "Abhishek",
            imgUrl: "https://avatars.githubusercontent.com/u/30373425?v=4"
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        },
        {
            name: "Abhishek",
            imgUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        }
    ]

    return (
        <section className='mx-auto mt-12 w-[35%] min-w-[20rem]'>
            {
                followings.map((following, index) =>
                    <div key={index} className="w-full mt-2 px-1 py-2 flex items-center justify-between rounded-xl border border-gray-400 shadow-[0_0_12px_-3px_gray]">
                        <div className="flex items-center gap-2">
                            <Avatar src={following.imgUrl} />
                            <span className="text-base">
                                {
                                    following.name.length > 15
                                        ? following.name.slice(0, 16) + ".."
                                        : following.name
                                }
                            </span>
                        </div>
                        <Button variant="bordered" className="border-[var(--primary-color)] text-[var(--primary-color)]">Following</Button>
                    </div>
                )
            }
        </section>
    )
}
