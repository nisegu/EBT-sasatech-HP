import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="items-start pt-10 px-8 pb-10 bg-white border-t border-gray-300 border-b-0 border-l-0 border-r-0 flex-none flex-col flex-nowrap h-auto justify-center m-0 w-full z-0 max-w-full">
			<div className="items-start flex flex-col flex-nowrap h-auto overflow-x-visible overflow-y-visible">
				<div className="items-start mb-4 max-w-full justify-start bg-transparent flex-col flex-nowrap h-auto w-auto">
					<p className="text-black text-[16px] font-[600] h-auto tracking-[0.1em] mb-[18px] text-center w-auto max-w-full justify-center items-center flex flex-row overflow-visible verflow-anywhere break-words flex-none flex-nowrap relative z-0">
						合同会社SasaTech
					</p>
					<p className="text-left justify-start text-[10px] text-black flex-none font-[400] h-auto tracking-[0.1em] leading-[1.75] m-0 w-auto max-w-full">
						〒150-0002
						<br/>
						東京都渋谷区渋谷2-19-15
						<br/>
						宮益坂ビルディング609
					</p>
				</div>
				<div className="items-end flex-[1] w-auto flex-col-reverse flex-nowrap h-auto justify-between overflow-x-visible overflow-y-visible max-w-full">
					<p className="text-black flex-none text-[12px] font-[400] h-auto tracking-[0.1em] leading-[1.6] m-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
						Ⓒ2021 Sasa Tech
					</p>
					{/* <div>
						<Link href="/">
							トップ
						</Link>
						<Link href="/">
							私たちについて
						</Link>
						<Link href="/">
							事業内容
						</Link>
						<Link href="/">
							お知らせ
						</Link>
						<Link href="/">
							お問い合わせ
						</Link>
					</div> */}
				</div>
			</div>
		</footer>
	)
}