import Link from "next/link";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    weight: "600",
    subsets: ["latin"]
})

export default function Toolbar() {
  return (
    <div className="fixed flex w-full lg:px-8 px-4">
        <h1 className={`mix-blend-difference lg:text-5xl text-stone-300 text-3xl w-full lg:text-left m-4 ${urbanist.className}`}>Course Aware</h1>
        <div className="w-1/3 h-24 flex items-center justify-around text-stone-200 font-medium lg:visible collapse">
          <Link href="/practice"><div className="cursor-pointer hover:border-b-2 hover:border-b-neutral-300 p-2 border-b-transparent transition-colors ease-in-out">Problems</div></Link>
          <div className="cursor-pointer hover:border-b-2 hover:border-b-neutral-300 p-2 border-b-transparent transition-colors ease-in-out">About</div>
          <div className="cursor-pointer hover:border-b-2 hover:border-b-neutral-300 p-2 border-b-transparent transition-colors ease-in-out">Sign Up</div>
        </div>
      </div>
  )
}