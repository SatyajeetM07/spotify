"use client";

import {TbPlaylist} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai"
import useAuthModel from "@/hooks/useAuthModel";
import { useUser } from "@/hooks/useUser";
import useUploadModel from "@/hooks/useUploadModel";

const Library =()=>{
    const authModel=useAuthModel();
    const uploadModel = useUploadModel();

    const {user}= useUser();

    const onClick=()=>{
        if(!user){
            return authModel.onOpen();
        }

        return uploadModel.onOpen();
    };
    return (
        <div className="flex flex-col">
            <div className="
            flex
            item-center
            justify-between
            px-5
            pt-4
            ">
                <div className="
                inline=flex
                item-center
                gap-x-2

                ">
                    <TbPlaylist className = "text-neutral-400" size ={26}/>
                    <p
                        className="
                            text-neutral-400
                            font-medium
                            text-md
                        "
                    >
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus
                onClick={onClick}
                size = {20}
                className ="
                text-neutral-400
                cursor-pointer
                hover:text-white
                transition                   
                "
            />
            <div className="
            flex
            flex-col
            gap-y-2
            mt-4
            px-3
            ">
                List of Songs

            </div>

            </div>
        </div>
    );
}

export default Library