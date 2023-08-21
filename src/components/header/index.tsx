import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
	return (
    <div className="pt-[40px] px-[25px] pb-[25px] items-center bg-transparent bottom-auto flex-none flex-row flex-nowrap h-auto justify-between absolute right-0 top-0 w-full z-[5] max-w-full flex">
      <Link href="/" className="items-center flex-row flex-nowrap justify-center p-0 flex flex-none max-w-full relative z-0">
        <Image
          src="/sasatech-logo.webp"
          alt="テキストテキストテキスト"
          width={100}
          height={100}
          className="flex-none w-[120px] max-w-full h-auto m-0 p-0 items-center flex flex-col flex-nowrap relative z-0 "
        />
      </Link>
      <button className="flex items-end flex-none flex-col flex-nowrap h-8 justify-center m-0 opacity-100 p-0 w-10 max-w-full z-0">
        <div className="items-end flex-none flex-col flex-nowrap h-[18px] justify-between p-0 w-7 max-w-full flex relative z-0">
          <div className="bg-white rounded-[2px] flex-none h-[2px] w-[60%] max-w-[60%] items-center flex flex-col flex-nowrap relative z-0"></div>
          <div className="bg-white rounded-[2px] flex-none h-[2px] w-full max-w-full items-center flex flex-col flex-nowrap relative z-0"></div>
          <div className="bg-white rounded-[2px] flex-none h-[2px] w-[80%] max-w-[80%] items-center flex flex-col flex-nowrap relative z-0"></div>
        </div>
      </button>
    </div>
	)
}