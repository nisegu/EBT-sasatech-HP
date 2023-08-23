import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="items-start pt-10 px-8 pb-10 bg-white border-t border-gray-300 border-b-0 border-l-0 border-r-0 flex-none flex-col flex-nowrap h-auto justify-center m-0 w-full max-w-full
		lg:items-center lg:px-20 lg:py-16 "
		>
			<div className="items-start flex flex-col flex-nowrap h-auto overflow-x-visible overflow-y-visible
			lg:flex-none lg:bg-transparent lg:flex-row lg:justify-between lg:m-0 lg:p-0 lg:w-full lg:max-w-full">
				<div className="items-start mb-4 max-w-full justify-start bg-transparent flex-col flex-nowrap h-auto w-auto
				lg:m-0">
					<p className="mb-4 w-auto max-w-full h-auto text-black text-base font-semibold tracking-widest text-center ">
						合同会社SasaTech
					</p>
					<p className="m-0 w-auto max-w-full justify-start flex-none h-auto text-xs text-black tracking-widest text-left">
						〒150-0002
						<br/>
						東京都渋谷区渋谷2-19-15
						<br/>
						宮益坂ビルディング609
					</p>
				</div>
				<div className="items-end flex-1 w-auto flex-col-reverse flex-nowrap h-auto justify-between max-w-full flex
				lg:bg-transparent lg:flex-none ">
					<p className="text-black flex-none text-xs h-auto tracking-widest  m-0 text-left w-auto max-w-full">
						Ⓒ2021 Sasa Tech
					</p>
					<div className="hidden content-center items-center bg-transparent flex-none flex-row flex-wrap h-auto justify-center mb-28 w-auto max-w-full relative z-0
					 lg:flex ">
						<Link href="/" className="mr-6 p-0 w-auto max-w-full h-auto text-black text-sm font-medium text-center">
							トップ
						</Link>
						<Link href="/" className="mr-6 p-0 w-auto max-w-full h-auto text-black text-sm font-medium text-center">
							私たちについて
						</Link>
						<Link href="/" className="mr-6 p-0 w-auto max-w-full h-auto text-black text-sm font-medium text-center">
							事業内容
						</Link>
						<Link href="/" className="mr-6 p-0 w-auto max-w-full h-auto text-black text-sm font-medium text-center">
							お知らせ
						</Link>
						<Link href="/" className="m-0 p-0 w-auto max-w-full h-auto text-black text-sm font-medium text-center">
							お問い合わせ
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}