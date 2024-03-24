'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { IoSend } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { LuMinus } from "react-icons/lu";


export const Chatbox = () => {

    const [isChat, handleChatBox] = useState<boolean>(false)


    return (
        <div>
            <div className={`fixed bottom-0 right-0 md:w-1/3 sm:w-[70%]  w-full overflow-hidden rounded transition-height duration-500 ease-out ${isChat ? ' h-[80vh]' : 'h-[0vh]'} z-40`}>
                <div className="bg-white">
                    <div className="bg-black/80 py-2 flex items-center px-2 justify-between">
                        <BsFillChatQuoteFill className="text-2xl" />
                        <div>
                            <button><LuMinus className="text-2xl font-extrabold" /></button>
                            <button className="hover:rotate-180 transition-transform ease-in-out duration-500 ml-3" onClick={() => handleChatBox(!isChat)}><RxCross2 className="text-2xl font-extrabold" /></button>
                        </div>
                    </div>
                    <div className="bg-white h-[64vh]  overflow-y-auto px-2">

                    </div>
                    <div className="relative px-2 bg-inherit">
                        <textarea className="focus:outline-1 focus:outline-gray-500 w-full inline-block caret-gray-500 p-2 border border-gray-500 rounded-md" placeholder="Ask a question?" >
                        </textarea>
                        <IoSend className="absolute right-5 top-0 bottom-0 text-2xl text-black m-auto cursor-pointer hover:text-black/70 transition-colors ease-in-out duration-300" />
                    </div>
                </div>
            </div >

            <BsFillChatQuoteFill onClick={() => handleChatBox(!isChat)}
                className={`
               text-5xl md:text-7xl text-black hover:text-black/80 transition-colors duration-500 ease-in-out cursor-pointer fixed bottom-20 right-7 z-20`} />

        </div>
    )
}
