import Link from "next/link"
import SubjectCard from "@/app/components/subject_card"

export default function Practice() {
  return (
    <main className="w-screen bg-slate-900 h-screen m-0 p-0">
        <div className="w-full h-full flex justify-center lg:flex-row flex-col gap-8 items-center lg:p-36">
            <div className="bg-slate-900 w-2/12 h-full">
              <SubjectCard name="Functions" img=".../public/next.svg" link="/practice/functions"/>
            </div>
            <div className="bg-slate-900 w-2/12 h-full"></div>
            <div className="bg-slate-900 w-2/12 h-full"></div>
            <div className="bg-slate-900 w-2/12 h-full"></div>
        </div>
    </main>
  )
}