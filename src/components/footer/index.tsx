import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="items-start pt-10 px-8 pb-10 bg-white border-t border-gray-300 border-b-0 border-l-0 border-r-0 flex-none flex-col flex-nowrap h-auto justify-center m-0 w-full z-0 max-w-full
		lg:items-center lg:px-[80px] lg:py-[60px] "
		>
			<div className="items-start flex flex-col flex-nowrap h-auto overflow-x-visible overflow-y-visible
			lg:flex-none lg:bg-transparent lg:flex-row lg:justify-between lg:m-0 lg:p-0 lg:w-[1020px] lg:max-w-full">
				<div className="items-start mb-4 max-w-full justify-start bg-transparent flex-col flex-nowrap h-auto w-auto
				lg:m-0">
					<p className="text-black text-[16px] font-[600] h-auto tracking-[0.1em] mb-[18px] text-center w-auto max-w-full justify-center items-center flex flex-row overflow-visible verflow-anywhere break-words flex-none flex-nowrap relative z-0 content-center p-0">
						合同会社SasaTech
					</p>
					<p className="text-left justify-start text-[10px] text-black flex-none font-[400] h-auto tracking-[0.1em] leading-[1.75] m-0 w-auto max-w-full
					lg:text-[12px] lg:tracking-[0.13em]">
						〒150-0002
						<br/>
						東京都渋谷区渋谷2-19-15
						<br/>
						宮益坂ビルディング609
					</p>
				</div>
				<div className="items-end flex-[1] w-auto flex-col-reverse flex-nowrap h-auto justify-between max-w-full flex
				lg:bg-transparent lg:flex-none ">
					<p className="text-black flex-none text-[12px] font-[400] h-auto tracking-[0.1em] leading-[1.6] m-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
						Ⓒ2021 Sasa Tech
					</p>
					<div className="hidden content-center items-center bg-transparent flex-none flex-row flex-wrap h-auto justify-center mb-[120px] w-auto max-w-full relative z-0
					 lg:flex ">
						<Link href="/" className="text-black text-[14px] font-[500] h-auto leading-[0.1em] mr-6 p-0 text-center w-auto max-w-[calc(100%-24px)] justify-center items-center flex flex-row overflow-visible break-words">
							トップ
						</Link>
						<Link href="/" className="text-black text-[14px] font-[500] h-auto leading-[0.1em] mr-6 p-0 text-center w-auto max-w-[calc(100%-24px)] justify-center items-center flex flex-row overflow-visible break-words">
							私たちについて
						</Link>
						<Link href="/" className="text-black text-[14px] font-[500] h-auto leading-[0.1em] mr-6 p-0 text-center w-auto max-w-[calc(100%-24px)] justify-center items-center flex flex-row overflow-visible break-words">
							事業内容
						</Link>
						<Link href="/" className="text-black text-[14px] font-[500] h-auto leading-[0.1em] mr-6 p-0 text-center w-auto max-w-[calc(100%-24px)] justify-center items-center flex flex-row overflow-visible break-words">
							お知らせ
						</Link>
						<Link href="/" className="text-black text-[14px] font-[500] h-auto leading-[0.1em] m-0 p-0 text-center w-auto max-w-full justify-center items-center flex flex-row overflow-visible break-words">
							お問い合わせ
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}