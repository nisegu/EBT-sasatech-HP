import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
	weight:["400","500","700"],
	subsets:["latin"],
	display:"swap",
})

export const metadata: Metadata = {
	title: 'sasatech',
	description: 'sasatechのホームページです',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja" className={notojp.className}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
