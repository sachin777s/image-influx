import UserProfileTabs from "@/components/UserProfileTabs";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { MdModeEdit } from "react-icons/md";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile({ params }: any) {

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <section className="flex items-center flex-col">
      <Avatar
        className="w-32 h-32"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
      />
      <span className="mt-6 text-4xl sm:text-5xl">{`${user?.given_name} ${user?.family_name}`}</span>
      <Button radius="sm" className="mt-4 text-xl py-4 bg-[var(--primary-color)] text-white">
        <MdModeEdit />
        Edit Profile
      </Button>
      <div className="mt-8 mb-0 md:mb-12 flex items-center justify-center gap-6 md:gap-12">
        <div className="flex flex-col items-center">
          <span className="text-base text-center">Followers</span>
          <span className="text-[var(--secondary-text)] text-xl">2K</span>
        </div>
        <span className="block h-[30px] w-[2px] bg-[var(--secondary-text)]"></span>
        <div className="flex flex-col items-center">
          <span className="text-base">Likes</span>
          <span className="text-[var(--secondary-text)] text-xl">54K</span>
        </div>
        <span className="block h-[30px] w-[2px] bg-[var(--secondary-text)]"></span>
        <div className="flex flex-col items-center">
          <span className="text-base">Downloads</span>
          <span className="text-[var(--secondary-text)] text-xl">43K</span>
        </div>
      </div>
      <UserProfileTabs />
    </section>
  )
}
