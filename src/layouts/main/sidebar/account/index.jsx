import { Popover } from "@headlessui/react";

import { useAccount } from "~/store/auth/hooks";
import More from "./more";



export default function Account(){



    const account = useAccount();
    return(
        <div className="mt-auto">
        <Popover className="relavite">
            <Popover.Button className='my-3 p-3 rounded-full hover:bg-[color:var(--background-third)]  w-full flex text lelf items-center outline-none'>
           <img src={account.avatar} className="w-10 h-10  rounded-full"></img>
           <div className="mx-3 text-[15px] font-bold ">
            <h6 className="font-bold leading-[20px]">{account.username}</h6>
            <div className="text-[color:var(--color-bases)] leading-[20px]">
                {account.fullName}
            </div>
           </div>
            </Popover.Button>
           <Popover.Panel className="absolute bottom-[60px] z-[1] w-[300px] left-1/2-translate-x-1/2 bg-[color:var(--background-primary)] shadow-box  rounded-2xl">
           <More/>
           </Popover.Panel>
        </Popover>
        </div>

            
    );
}