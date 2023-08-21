import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="transition-none">
        <div className="flex h-auto mh100">
          <div className="sd-apper">

            {/* mainvisual */}

            <section className=" p items-center bg-transparent flex-none flex-col h-auto justify-start m-0 transform translate-x-0 translate-y-0 w-full max-w-full relative">
              <div className="bg-mainvisual bg-center bg-cover rounded-inherit h-full absolute top-0 left-0 w-full transition-all z-2 filter "/>
              <div className="items-start flex-none flex-col flex-nowrap justify-center m-0 p-0 max-w-full w920 flex relative z-0"></div>
              <p className="mb-17 tracking-wider text-white flex-none h-auto opacity-100 px-0 text-left transform scale-100  transition  w-full max-w-full justify-start">
                テクノロジーを通じて、<br/>節度を持った革新を生み出す。
              </p>
              <p className="leading-[1.5] text-white flex-none text-[14px] font-[400] h-auto m-0 p-0 text-left">
                私たちは、ただ目新しいものを生み出すテックカンパニーではありません。<br/>節度を持ち、課題の本質を捉え、最適な形でのソリューションを生み出します。
              </p>
              {/* <div>
                <Link href="/">
                  <Image 
                    src="/sasatech-logo.webp"
                    alt="a"
                    layout="responsive"
                    width={600}
                    height={156}
                  />
                </Link>
                <div>
                  <Link href="/">
                    <p>トップ</p>
                  </Link>
                  <Link href="/">
                    <p>私たちについて</p>
                  </Link>
                  <Link href="/">
                    <p>事業内容</p>
                  </Link>
                  <Link href="/">
                    <p>お知らせ</p>
                  </Link>
                  <Link href="/">
                    <p>お問い合わせ</p>
                  </Link>
                </div>
                <button>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </button>
              </div> */}
            </section>

            {/* news */}

            <section className="mt-[-100px] px-[20px] py-[25px] z-[5] w-full max-w-full items-center bg-transparent flex-none flex-col flex-nowrap h-auto justify-center overflow-x-hidden overflow-y-hidden flex relative">
              <div className="shadow-[0px_2px_25px_rgba(0,0,0,0.2)] flex-col flex-nowrap p-[25px] items-start bg-white border-0 border-t-0 border-r-0 border-b-0 border-l-0 rounded-[4px] border-gray-300 flex-none h-auto w-[1024px] max-w-full flex relative z-0">
                <div className="flex-col flex-wrap items-start h-auto justify-between p-0 w-full max-w-full flex flex-none relative z-0">
                  <p className="m-0 max-w-full text-black flex-none text-[14px] font-[400] h-auto tracking-[0.1em] leading-[1.5] p-0 text-left w-auto justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words flex-nowrap relative z-0">
                    お知らせ
                  </p>
                  <Link href="/" className="flex flex-none h-auto items-center bg-transparent rounded-none flex-row flex-nowrap justify-center p-0 w-auto max-w-full relative z-0">
                    <div className="bg-green-600 flex-none h-[1px] mr-[10px] w-3 max-w-[calc(100%-10px)] items-center flex flex-col flex-nowrap relative z-0"></div>
                    <p className="text-green-600 flex-none text-[12px] font-[400] h-auto tracking-[0.1em] leading-[1.5] m-0 p-0 text-left max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words flex-nowrap relative z-0">
                      もっと見る
                    </p>
                  </Link>
                  <div className="m-0 w-full max-w-full">
                    <div className="items-start flex-col flex-nowrap justify-start m-0 w-full max-w-full flex-[1] h-auto p-0 ">
                      <p className="flex-none text-[12px] m-0 mb-[6px] p-0 w-full max-w-full text-gray-400 font-[400] h-auto leading-[1.5] text-left justify-start ">
                        2022/02/01
                      </p>
                      <Link href="/" className="text-[12px] leading-[1.5] m-0 p-0 w-full max-w-full text-black flex-[1] font-[400] h-auto text-left justify-start items-center flex flex-row overflow-visible break-words">
                        月額7,700円から、高品質のホームページ制作 - kumitoruをローンチしました。
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* philosophy */}

            <section className="flex-col flex-nowrap mt-5 w-full max-w-full items-start bg-transparent flex-none h-auto justify-start overflow-x-visible overflow-y-visible z-[1] flex relative">
              <div className="items-start flex-col flex-nowrap flex-none justify-start p-0 w-full max-w-full flex relative z-0">
                <div className="flex-none w-[80%] max-w-[80%] items-center flex-row flex-nowrap justify-end p-0 flex relative z-0">
                  <div className="bg-chair flex-none h-40 w-full max-w-full items-center rounded-[4px] flex-col flex-nowrap justify-center bg-[50%] bg-cover bg-inherit left-0 top-0 z-[-2]"></div>
                </div>
                <div className="px-8 py-6 items-start flex-[1] flex-col flex-nowrap justify-center opacity-100 w-auto max-w-full z-0">
                  <div className="items-start flex-col flex-nowrap justify-start m-0 p-0 max-w-full flex flex-none relative z-0">
                    <p className="text-green-600 flex-none text-[12px] font-[400] h-auto leading-[1.5] mb-3 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      philosophy
                    </p>
                    <p className="hidden text-black flex-none text-[18px] font-[400] h-auto tracking-[0.25em] leading-[1.75] mb-4 p-0 text-left w-auto max-w-full overflow-visible verflow-anywhere break-words">
                      私たちは、テクノロジーを駆使して<br/>課題解決に取り組む企業です。
                    </p>
                    <p className="flex tracking-[0.1rem] text-black none text-[18px] font-[400] h-auto leading-[1.75] mb-4 p-0 text-left w-auto max-w-full justify-start items-center flex-row overflow-visible verflow-anywhere break-words">
                      私たちは、テクノロジーを駆使して課題解決に取り組む企業です。
                      </p>
                    <p className="text-black flex-none text-[14px] font-[400] h-auto leading-[1.5] mb-4 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      インターネットが普及しスマートフォンを多くの人が持つようになった現代において、課題解決とテクノロジーは密接な関係にあります。
                       <br/>Sasatechでは、プログラミングやデザイン、マーケティングなど、あらゆる側面で課題解決の道を模索します。
                    </p>
                    <Link href="/" className="items-center bg-transparent rounded-0 flex-none flex-row flex-nowrap h-8 justify-center p-0 w-auto max-w-full relative z-0">
                      <div className="bg-green-600 flex-none h-[1px] mr-[10px] w-3 max-w-[calc(100%-10px)] items-center flex flex-col flex-nowrap relative z-0 "></div>
                      <p className="left-[20px] bottom-[8px] text-green-600 flex-none text-[12px] font-[400] h-auto tracking-[0.1em] leading-[1] m-0 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words flex-nowrap relative z-0">
                        もっと見る
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* business */}

            <section className="mt-10 pt-20 px-8 pb-[60px] items-center bg-white flex-none flex-col flex-nowrap height-auto justify-center w-full z-[1] max-w-full flex relative">
              <div className="flex flex-none justify-start overflow-x-visible overflow-y-visible align-start flex-col flex-now h-auto m-0 p-0 absolute top-0 w-full z-[-1] max-w-full">
                <div className="flex flex-none m-0 absolute transform translate-x-[-12px] rotate-[4] skew-x-[4] scale-x-[110] scale-y-[100] bg-black rounded-[8px] h-[380px] w-full z-[5] max-w-full"></div>
              </div>
              <div className="mr-6 max-w-full items-start flex-none flex-col flex-nowrap justify-center p-0 w-[1280px] flex relative z-0">
                <p className="text-white flex-none text-[12px] font-[400] h-auto leading-[1.5] mb-2 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                  business
                </p>
                <div className="mb-8 max-w-full items-center flex-row flex-nowrap justify-center p-0 flex">
                  <p className="text-white flex-none text-[24px] font-[400] h-auto tracking-[0.1em] leading-[1.5] mr-6 p-0 text-left w-auto max-w-[calc(100%-24px)] justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                    事業内容
                  </p>
                  <Link href="/" className="items-center bg-transparent rounded-none flex-none flex-row flex-nowrap h-6 justify-center p-0 w-auto max-w-full flex relative z-0 m-0">
                    <div className="bg-white flex-none h-[1px] mr-[10px] w-3 max-w-[calc(100%-10px)] items-center flex flex-col flex-nowrap relative z-0"></div>
                    <p className="text-white flex-none text-[12px] font-[400] h-auto tracking-[0.1em] leading-[1] m-0 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words relative z-0">
                      もっと見る
                    </p>
                  </Link>
                </div>
                <p className="text-white  flex flex-none text-[12px] font-[400] h-auto leading-[1.75] m-0 p-0 text-left w-full max-w-full justify-start items-center flex-row overflow-visible verflow-anywhere break-words">
                  <br />
                </p>
              </div>
              <div className="flex-col m-0 max-w-full items-start flex-none justify-center p-0 w-[1280px] ">
                <div className="flex-none mb-[36px] w-full max-w-full items-center flex-col flex-nowrap justify-center p-0">
                  <div className="bg-meido flex-none h-60 w-full max-w-full items-center rounded-[4px] flex-col flex-nowrap justify-center mb-7 relative flex z-0 box-border leading-[1] p-0 bg-[50%] left-0 top-0 bg-cover"></div>
                  <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center p-0 w-full max-w-full flex relative z-0">
                    <p className="text-black flex-none text-[14px] font-[400] h-auto leading-[1.5] mb-[4px] p-0 text-left w-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      エンターテイメント事業
                    </p>
                    <p className="text-black flex-none text-[12px] font-[400] h-auto leading-[1.75] m-0 p-0 text-left w-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words flex-nowrap relative z-0">
                      メイドカフェ事業やアイドル事業などを始めとした、エンターテイメント領域のマーケティング支援やシステム開発を行っています。
                      <br/>
                    </p>
                  </div>
                </div>
                <div className="flex-none mb-9 w-full max-w-full items-center flex-col flex-nowrap p-0 ">
                  <div className="bg-kumitoru flex-none h-60 w-full max-w-full items-center rounded-[4px] flex-col flex-nowrap justify-center mb-7 relative"></div>
                  <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center p-0 w-full  max-w-full display-flex relative z-0">
                    <p className="text-black flex-none text-[14px] font-[400] h-auto leading-[1.5] mb-1 p-0 text-left w-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      月額制Web制作サービス「kumitoru」の開発,運営
                    </p>
                    <Link href="https://kumitoru.com" className="text-green-600 flex-none text-[12px] font-[400] h-auto leading-[1.5] mb-2 p-0 text-left w-full max-w-full justify-start items-center ">
                      https://kumitoru.com
                    </Link>
                    <p className="text-black flex-none text-[12px] font-[400] h-auto leading-[1.75] mt-2 p-0 text-left w-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      初期費用なしかつ格安の月額制で、お客様の意図を汲み取ったオリジナルのホームページを制作します。
                      <br/>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-col flex-nowrap m-0 max-w-full items-start flex-none justify-center p-0 w-[1280px]">
                <div className="flex-none mb-9 w-full max-w-full items-center flex-col flex-nowrap justify-center p-0">
                  <div className="bg-pc flex-none h-60 w-full max-w-full items-center rounded-[4px] flex-col flex-nowrap justify-center mb-7 relative flex z-0 bg-[50%] bg-cover"></div>
                  <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center p-0 w-full max-w-full display-flex relative z-0">
                    <p className="text-black flex-none text-[14px] font-[400] h-auto leading-[1.5] mb-2 p-0 text-left w-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      Webアプリケーション開発,運用
                    </p>
                    <p className="text-black flex-none text-[12px] font-[400] h-auto leading-[1.75] m-0 p-0 text-left width-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      「国内メディアのシステム開発」「大手金融機関のホームページ制作」「芸能事務所の社内向けツールの開発」など、主にNuxtを用いて様々なWebアプリケーションを開発・運用しています。
                        <br/>
                    </p>
                  </div>
                </div>
                <div className="flex-none m-0 w-full max-w-full items-center flex-col flex-nowrap justify-center p-0">
                  <div className="bg-fx flex-none h-60 w-full max-w-full items-center border-[4px] flex-col flex-now justify-center mb-7 relative bg-cover"></div>
                    <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center p-0 w-full max-w-full flex relative z-0">
                      <p className="h-auto text-black flex-none text-[14px] font-[400] leading-[1.5] mb-2 p-0 text-left w-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                        金融領域をはじめとしたデータ分析
                      </p>
                      <p className="text-black flex-none text-[12px] font-[400] h-auto leading-[1.75] m-0 text-left text-none w-full max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                         金融機関の売買審査のアルゴリズム制作、AWS・GCPを使用したビックデータの構築を行っています。
                         <br/>
                      </p>
                  </div>
                </div>
              </div>
            </section>

            {/* underground */}

            <div className="items-center bg-white flex-none flex-col flex-nowrap h-auto justify-center p-0 w-full max-w-full">
              <div className="bg-denwa rounded-[4px] flex-none h-auto mx-4 mb-4 pt-8 px-6 pb-12 w-[calc(100%-32px)] max-w-w-[calc(100%-32px)] items-center flex-col flex-nowrap justify-center relative bg-cover bg-[50%] ">
                <Link href="/" className="flex-none w-full max-w-full items-end flex-row flex-nowrap justify-between px-3 py-6 flex relative z-0">
                  <div className="bg-white bottom-0 flex-none h-[1px] left-0 m-0 absolute right-0 w-full max-w-full items-center flex flex-col flex-nowrap z-0 "></div>
                  <div className="items-start flex-none flex-col flex-nowrap justify-center p-0 w-auto max-w-auto flex relative z-0">
                    <p className="text-white flex-none text-[14px] font-[400] h-auto tracking-[0.1em] leading-[1] mb-3 p-0 text-left w-auto max-w-auto justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words flex-nowrap relative z-0">
                      お問い合わせ
                      <br/>
                    </p>
                    <p className="text-white flex-none text-[22px] font-[400] h-auto tracking-[0.1em] leading-[1] m-0 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words flex-nowrap relative z-0">
                      Contact us
                      <br/>
                    </p>
                  </div>
                  <p className="text-white flex-none text-[22px] font-[400] h-auto tracking-[0.1em] leading-[1] m-0 p-0 text-left text-none w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                    →
                    <br/>
                  </p>
                </Link>
              </div>

              <div className="bg-suit rounded-[4px] flex-none h-auto mx-4 mb-4 pt-8 px-6 pb-12 w-[calc(100%-32px)] max-w-[calc(100%-32px)] items-center flex-col flex-nowrap justify-center relative bg-cover bg-[50%]">
                <Link href="/" className="flex-none w-full max-w-full items-end flex-row flex-nowrap justify-between py-6 px-3 pb6 flex relative z-0">
                  <div className="bg-white bottom-0 flex-none h-[1px] left-0 m-0 absolute right-0 w-full max-w-full items-center flex flex-col flex-now z-0"></div>
                  <div className="items-start flex-none flex-col flex-nowrap justify-center p-0 w-auto max-w-full flex relative z-0">
                    <p className="text-white flex-none text-[14px] font-[400] h-auto tracking-[0.1em] leading-[1] mb-3 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      採用情報
                      <br/>
                    </p>
                    <p className="text-white flex-none text-[22px] font-[400] h-auto tracking-[0.1em] leading-[1] mb-0 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                      Recruit
                      <br/>
                    </p>
                  </div>
                  <p className="text-white flex-none text-[22px] font-[400] h-auto tracking-[0.1em] leading-[1] m-0 p-0 text-left w-auto max-w-full justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words">
                    →
                    <br/>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
		</main>
  )
}
