import { HomeIcon,GlobeAmericasIcon,BoltIcon,VideoCameraIcon,PlayCircleIcon,CogIcon,DocumentDuplicateIcon } from "@heroicons/react/24/solid";

const Menu = () => {
    return (
        <div className="w-[6%] h-screen flex flex-col bg-[#202020] items-center text-white" >
        <div className="flex h-20 mt-2 flex-col justify-center cursor-pointer items-center w-full hover:bg-gray-600">
            <HomeIcon className="h-6" />
            <h4 className=" capitalize text-[10px]">home</h4>
        </div>
            <div className="flex h-20 mt-2 flex-col justify-center cursor-pointer items-center w-full hover:bg-gray-600">
                <GlobeAmericasIcon className="h-6" />
                <h4 className=" capitalize text-[10px]">Exploler</h4>
            </div>
            <div className="flex h-20 mt-2 flex-col justify-center cursor-pointer items-center w-full hover:bg-gray-600">
                <BoltIcon className="h-6" />
                <h4 className=" capitalize text-[10px]">Short</h4>
            </div>
            <div className="flex h-20 mt-2 flex-col justify-center cursor-pointer items-center w-full hover:bg-gray-600">
                <VideoCameraIcon className="h-6" />
                <h4 className=" capitalize text-[10px]">Library</h4>
            </div>
            <div className="flex h-20 mt-2 flex-col justify-center cursor-pointer items-center w-full hover:bg-gray-600">
                <PlayCircleIcon className="h-6" />
                <h4 className=" capitalize text-[10px]">Subscribe</h4>
            </div>
            <div className="flex h-20 mt-2 flex-col justify-center cursor-pointer items-center w-full hover:bg-gray-600">
                <CogIcon className="h-6" />
                <h4 className=" capitalize text-[10px]">Setting</h4>
            </div>
            <div className="flex h-20 mt-2 flex-col justify-center cursor-pointer items-center w-full hover:bg-gray-600">
                <DocumentDuplicateIcon className="h-6" />
                <h4 className=" capitalize text-[10px]">history</h4>
            </div>
        </div>
    );
}

export default Menu;