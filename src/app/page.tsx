import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Masthead from "@/components/ui/Masthead";
import Paragraph from "@/components/ui/Paragraph";

export const metadata: Metadata = {
  title: "AutoDocs API",
  description: "AutoDocs API: Bringing Clarity to Code",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <p className="indent-3 font-mono text-[20px] leading-[20px] text-black dark:text-white font-extrabold tracking-widest">
            AUTODOCS
          </p>
          <Masthead size="xl" className="three-d text-black dark:text-white">
            Better Code <br></br>
            <span className="text-[#407BBF]">Documentation.</span>
          </Masthead>

          <div className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8">
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b] dark:text-white">
                API
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal dark:text-white">
                Generate documentation for your codebase using AI.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b] dark:text-white">
                Open Source
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal dark:text-white">
                Transparent and community-driven platform.
              </p>
            </div>
          </div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <Link
              href="https://github.com/ShreyanshMisra/autodocs"
              target="_blank"
              className="group rounded-full pl-[8px] min-w-[170px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
              style={{
                boxShadow:
                  "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
              }}
            >
              View on Github
            </Link>
            <Link
              href="/login"
              className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
              style={{
                boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
              }}
            >
              <span className="mr-2"> Get API key → </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
