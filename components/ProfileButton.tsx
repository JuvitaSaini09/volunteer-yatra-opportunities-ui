// components/ProfileButton.tsx
import Image from "next/image";
import { Button } from "./ui/button";

const ProfileButton = () => (
  <Button
    variant="default"
    className="flex gap-2.5 items-center mx-auto w-20 h-10 bg-white border-1 border-grey-primary rounded-[46px] hover:bg-gray-100"
  >
    <Image src="/logos/user.svg" width={24} height={24} alt="user icon" />
    <Image
      className="hidden sm:block"
      src="/logos/profile.svg"
      width={24}
      height={24}
      alt="profile icon"
    />
  </Button>
);

export default ProfileButton;
