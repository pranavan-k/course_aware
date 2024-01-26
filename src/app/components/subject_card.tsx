import Image from "next/image"
import Link from "next/link"

interface IProps {
    name: string,
    img: string,
    link: string
}

export default function SubjectCard(props: IProps) {
  return (
    <Link href={props.link}>
      <div className="w-full h-1/12 border-slate-700 border-2 flex gap-5">
          <Image alt="functions" src="" width={20} height={20}>
              
          </Image>
          <h1>{props.name}</h1>
      </div>
    </Link>
  )
}