import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
	return (
    <div className="pt-10 px-6 pb-6 items-center bg-transparent bottom-auto right-0 top-0 w-full z-10 absolute max-w-full flex flex-none flex-row flex-nowrap h-auto justify-between 
    lg:m-0 lg:px-14 lg:py-10 "
    >
      <Link href="/" className="items-center flex-row flex-nowrap justify-center p-0 flex flex-none max-w-full relative">
        <Image
          src="/sasatech-logo.webp"
          alt="テキストテキストテキスト"
          width={100}
          height={100}
          className="flex-none w-28 max-w-full h-auto m-0 p-0 items-center flex flex-col flex-nowrap relative 
          lg:w-40"
        />
      </Link>
      <div className="hidden content-center items-center bg-transparent flex-none flex-row flex-wrap h-auto justify-center w-auto max-w-full relative z-0
			lg:flex ">
        <Link href="/" className=" h-auto mr-6 p-0 w-auto justify-center items-center flex flex-row overflow-visible break-words text-white text-sm font-normal text-center">
          トップ
        </Link>
        <Link href="/" className="h-auto mr-6 p-0 w-auto justify-center items-center flex flex-row overflow-visible break-words text-white text-sm font-normal text-center">
          私たちについて
        </Link>
        <Link href="/" className="h-auto mr-6 p-0 w-auto justify-center items-center flex flex-row overflow-visible break-words text-white text-sm font-normal text-center">
          事業内容
        </Link>
        <Link href="/" className="h-auto mr-6 p-0 w-auto justify-center items-center flex flex-row overflow-visible break-words text-white text-sm font-normal text-center">
          お知らせ
        </Link>
        <Link href="/" className="h-auto m-0 p-0 w-auto justify-center items-center flex flex-row overflow-visible break-words text-white text-sm font-normal text-center">
          お問い合わせ
        </Link>
      </div>
      <button className="flex items-end flex-none flex-col flex-nowrap h-8 justify-center m-0 opacity-100 p-0 w-10 max-w-full 
      lg:hidden">
        <div className="items-end flex-none flex-col flex-nowrap h-5 justify-between p-0 w-7 max-w-full flex relative ">
          <div className="bg-white rounded-sm flex-none h-1 w-2/4 max-w-2/4 items-center flex flex-col flex-nowrap relative "></div>
          <div className="bg-white rounded-sm flex-none h-1 w-full max-w-full items-center flex flex-col flex-nowrap relative "></div>
          <div className="bg-white rounded-sm flex-none h-1 w-3/4 max-w-3/4 items-center flex flex-col flex-nowrap relative "></div>
        </div>
      </button>
    </div>
	)
}