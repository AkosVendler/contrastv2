import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return(
        <div className=" flex items-center justify-center">
            <div className="w-screen h-svh flex justify-center items-center gap-64">
                <div className="flex justify-start flex-col">
                    <h2 className="text-[#212529] relative left-[-12px] tracking-tighter text-[180px] leading-none font-black">MEOW..</h2>
                    <h3 className="text-[#212529] leading-9 font-thin text-xl">Error 404 - Page not found</h3>
                    <Link className="w-32 px-4 py-2 mt-10 hover:border-[#212529] hover:border-[1px] transition ease-in flex items-center justify-center gap-2" href={"/"}>
                        <Image src="/thin-arrow.svg" width={20} height={20} />
                        <p className="text-[#212529]  font-thin">Go back</p>
                    </Link>
                </div>
                <div className="w-3/12">
                    <Image src="/errorcat.svg" width={500} height={500} title="MEOW..." />
                </div>
            </div>
        </div>
    ) 
  }