// レスポンシブデザイン pc lgで設定. lg:1024px
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="overflow-x-hidden">
        <div className="h-auto min-h-screen flex">
          <div className="w-full max-w-full">

            {/* mainvisual */}

            <section className="bg-transparent h-auto m-0 pt-44 px-6 pb-40 w-full max-w-full relative flex-none flex-col flex-nowrap justify-start items-center 
            lg:pt-60 lg:px-44 lg:pb-44
            before:content-[''] before:bg-mainvisual before:brightness-50 before:contrast-125 before:bg-center before:bg-cover before:h-full before:left-0 before:absolute before:top-0 before:w-full"
            >
              <div className="items-start flex-none flex-col flex-nowrap justify-center m-0 p-0 max-w-full flex relative">
                <p className="mb-4 px-0 flex-none h-auto w-full max-w-full justify-start font-black text-xl text-white tracking-wider text-left
                lg:text-3xl"
                >
                  テクノロジーを通じて、<br/>節度を持った革新を生み出す。
                </p>
                <p className="flex-none h-auto m-0 p-0 text-left w-full max-w-full justify-start text-white text-sm font-normal ">
                  私たちは、ただ目新しいものを生み出すテックカンパニーではありません。<br/>節度を持ち、課題の本質を捉え、最適な形でのソリューションを生み出します。
                </p>
              </div>
            </section>

            {/* news */}

            <section className="-mt-24 px-5 py-6 z-10 w-full max-w-full items-center bg-transparent flex-none flex-col flex-nowrap h-auto justify-center overflow-x-hidden overflow-y-hidden flex relative
            lg:mx-0 lg:mb-0 lg:px-14 lg:py-10 lg:w-full"
            >
              <div className="shadow-lg flex-col flex-nowrap p-6 items-start bg-white border-0 border-t-0 border-r-0 border-b-0 border-l-0 rounded-md border-gray-300 flex-none h-auto max-w-full flex relative 
              lg:shadow-xl lg:flex-row lg:justify-start lg:px-16 lg:py-10 lg:max-w-full"
              >
                <div className="flex-col flex-wrap items-start h-auto justify-between p-0 w-full max-w-full flex flex-none relative
                lg:flex-row lg:flex-nowrap"
                >
                  <p className="m-0 p-0 max-w-full w-auto h-auto justify-start items-center flex flex-row overflow-visible break-words flex-nowrap relative text-black flex-none text-sm font-normal text-left 
                  lg:mr-9 lg:max-w-full"
                  >
                    お知らせ
                  </p>
                  <div className="m-0 w-full max-w-full items-start flex-1 flex-row flex-nowrap justify-start 
                  lg:w-auto lg:max-w-full"
                  >
                    <div className="items-start flex-col flex-nowrap justify-start m-0 w-full max-w-full flex-1 h-auto p-0 
                    lg:flex-row lg:flex "
                    >
                      <p className="m-0 mb-[6px] p-0 w-full max-w-full h-auto justify-start flex-none text-xs text-gray-400 font-[400] text-left
                      lg:m-0 lg:mr-6 lg:w-auto lg:justify-start lg:text-sm "
                      >
                        2022/02/01
                      </p>
                      <Link href="/" className=" m-0 p-0 w-full max-w-full h-auto justify-start items-center flex flex-row overflow-visible break-words text-black flex-1 font-normal  text-left text-xs
                      lg:mr-10 lg:w-auto lg:text-sm"
                      >
                        月額7,700円から、高品質のホームページ制作 - kumitoruをローンチしました。
                      </Link>
                    </div>
                  </div>
                  <Link href="/" className="flex flex-none h-auto items-center bg-transparent rounded-none flex-row flex-nowrap justify-center p-0 w-auto max-w-full relative">
                    <div className="bg-green-600 flex-none h-1 mr-2 w-3 max-w-full items-center flex flex-col flex-nowrap relative"></div>
                    <p className="m-0 p-0 max-w-full h-auto justify-start items-center flex flex-row overflow-visible verflow-anywhere break-words flex-nowrap relative text-green-600 flex-none text-xs font-normal tracking-widest text-left">
                      もっと見る
                    </p>
                  </Link>
                </div>
              </div>
            </section>

            {/* philosophy */}

            <section className="flex-col flex-nowrap mt-5 w-full max-w-full items-start bg-transparent flex-none h-auto justify-start overflow-x-visible overflow-y-visible flex relative
            lg:m-0 lg:flex-row"
            >
              <div className="items-start flex-col flex-nowrap flex-none justify-start p-0 w-full max-w-full flex relative
              lg:items-center lg:flex-now lg:flex-row"
              >
                <div className="flex-none w-3/4 max-w-3/4 items-center flex-row flex-nowrap justify-end p-0 flex relative
                lg:w-2/4 lg:max-w-2/4"
                >
                  <div className="bg-chair flex-none h-40 w-full max-w-full items-center rounded-md flex-col flex-nowrap justify-center bg-center bg-cover bg-inherit left-0 top-0 -z-10
                  lg:flex-col lg:h-96 "
                  ></div>
                </div>
                <div className="px-8 py-6 items-start flex-1 flex-col flex-nowrap justify-center opacity-100 w-auto max-w-full 
                lg:px-16 lg:py-10 "
                >
                  <div className="items-start flex-col flex-nowrap justify-start m-0 p-0 max-w-full flex flex-none relative">
                    <p className="mb-3 p-0 w-auto max-w-full h-auto justify-start items-center flex flex-row overflow-visible break-words text-green-600 flex-none text-xs font-normal text-left">
                      philosophy
                    </p>
                    <p className="hidden mb-4 p-0 w-auto max-w-full h-auto flex-none overflow-visible break-words text-black text-left text-lg font-normal tracking-wide 
                    lg:block lg:justify-start"
                    >
                      私たちは、テクノロジーを駆使して<br/>課題解決に取り組む企業です。
                    </p>
                    <p className=" mb-4 p-0 w-auto max-w-full h-auto flex-none justify-start overflow-visible break-words text-black text-left text-lg font-normal tracking-wide 
                    lg:hidden"
                    >
                      私たちは、テクノロジーを駆使して課題解決に取り組む企業です。
                      </p>
                    <p className="mb-4 p-0 h-auto w-auto max-w-full justify-start items-center flex flex-row flex-none overflow-visible break-words text-black text-sm font-normal text-left ">
                      インターネットが普及しスマートフォンを多くの人が持つようになった現代において、課題解決とテクノロジーは密接な関係にあります。
                       <br/>Sasatechでは、プログラミングやデザイン、マーケティングなど、あらゆる側面で課題解決の道を模索します。
                    </p>
                    <Link href="/" className="flex items-center bg-transparent rounded-0 flex-none flex-row flex-nowrap h-8 justify-center p-0 w-auto max-w-full relative">
                      <div className="bg-green-600 flex-none h-1 mr-2 w-3 max-w-full items-center flex flex-col flex-nowrap relative"></div>
                      <p className="m-0 p-0 h-auto w-auto max-w-full justify-start items-center flex flex-row flex-nowrap flex-none overflow-visible break-words relative text-green-600 text-xs font-normal tracking-widest text-left ">
                        もっと見る
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* business */}

            <section className=" mt-10 pt-20 px-8 pb-16 items-center bg-white flex-none flex-col flex-nowrap height-auto justify-center w-full z-10 max-w-full flex relative
             lg:h-auto lg:pt-16 lg:px-32 lg:pb-24 lg:w-full "
            >
              <div className=" flex flex-none justify-start overflow-x- align-start flex-col flex-now h-auto m-0 p-0 absolute top-0 w-full -z-10 max-w-full
              lg:flex-none lg:w-0">
                <div className=" flex flex-none m-0 absolute transform translate-x-3 translate-y-0 rotate-3 skew-x-3 skew-y-0 scale-x-110 scale-y-1 bg-black rounded-lg h-96 w-full z-10 max-w-full"></div>
              </div>
              <div className="mb-6 max-w-full items-start flex-none flex-col flex-nowrap p-0 w-full flex relative
              lg:mb-12"
              >
                <p className="mb-2 p-0 w-auto max-w-full h-auto justify-start items-center flex flex-row flex-none overflow-visible break-words text-white text-xs font-normal text-left 
              lg:text-green-600"
                >
                  business
                </p>
                <div className="mb-6 max-w-full items-center flex-row flex-nowrap justify-center p-0 flex
                lg:m-0"
                >
                  <p className="mr-6 p-0 w-auto max-w-full h-auto justify-start items-center flex flex-row flex-none overflow-visible break-words text-white text-2xl font-normal tracking-widest text-left 
                lg:text-black"
                  >
                    事業内容
                  </p>
                  <Link href="/" className="items-center bg-transparent rounded-none flex-none flex-row flex-nowrap h-6 justify-center p-0 w-auto max-w-full flex relative m-0">
                    <div className="bg-white flex-none h-1 mr-2 w-3 max-w-full items-center flex flex-col flex-nowrap relative 
                  lg:bg-green-600"
                    ></div>
                    <p className="m-0 p-0 w-auto max-w-full h-auto justify-start items-center flex flex-row overflow-visible break-words relative text-white flex-none text-xs font-normal tracking-widest text-left 
                  lg:text-green-600">
                      もっと見る
                    </p>
                  </Link>
                </div>
                <p className="w-full max-w-full h-auto justify-start items-center flex-row flex flex-none overflow-visible break-words text-white text-xs font-normal m-0 p-0 text-left
                lg:text-black lg:hidden">
                  <br />
                </p>
              </div>
              <div className="flex-col m-0 max-w-full items-start flex-none justify-center flex
              lg:flex-row lg:flex-nowrap lg:mr-8 lg:mb-5 lg:max-w-full"
              >
                <div className="flex-none mb-9 w-full max-w-full items-center flex-col flex-nowrap justify-center
                lg:m-0 lg:mr-16 lg:w-2/4 lg:max-w-2/4">
                  <div className="bg-meido flex-none h-60 w-full max-w-full items-center rounded-sm flex-col flex-nowrap justify-center mb-7 relative flex box-border bg-center left-0 top-0 bg-cover
                  lg:h-80"></div>
                  <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center w-full max-w-full flex relative">
                    <p className="mb-1 p-0 w-full max-w-full h-auto justify-start items-center flex flex-row flex-none overflow-visible break-words text-black text-sm font-normal text-left ">
                      エンターテイメント事業
                    </p>
                    <p className="w-full max-w-full h-auto justify-start items-center flex flex-row flex-none overflow-visible break-words flex-nowrap relative text-black text-xs text-left ">
                      メイドカフェ事業やアイドル事業などを始めとした、エンターテイメント領域のマーケティング支援やシステム開発を行っています。
                      <br/>
                    </p>
                  </div>
                </div>
                <div className="flex-none mb-9 w-full max-w-full items-center flex-col flex-nowrap flex
                lg:justify-center lg:mb-0 lg:mt-24 lg:ml-16 lg:w-2/4 lg:max-w-2/4"
                >
                  <div className="bg-kumitoru flex-none h-60 w-full max-w-full items-center rounded-sm flex-col flex-nowrap justify-center mb-7 relative bg-center bg-cover flex
                  lg:h-80 "></div>
                  <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center p-0 w-full max-w-full display-flex relative">
                    <p className="text-black flex-none text-sm h-auto mb-1 text-left">
                      月額制Web制作サービス「kumitoru」の開発,運営
                    </p>
                    <Link href="https://kumitoru.com" className="mb-2 p-0 flex-none w-full max-w-full h-auto justify-start items-center text-green-600 text-xs text-left ">
                      https://kumitoru.com
                    </Link>
                    <p className="text-black flex-none text-xs h-auto mt-2 p-0 text-left w-full max-w-full justify-start ">
                      初期費用なしかつ格安の月額制で、お客様の意図を汲み取ったオリジナルのホームページを制作します。
                      <br/>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-col flex-nowrap m-0 max-w-full items-start flex-none p-0 w-full flex
              lg:flex-row lg:ml-10 lg:max-w-full"
              >
                <div className="flex-none mb-9 w-full max-w-full items-center flex-col flex-nowrap justify-center p-0
                lg:m-0 lg:mr-16 lg:w-2/4 lg:max-w-2/4">
                  <div className="bg-pc flex-none h-60 w-full max-w-full items-center rounded-sm flex-col flex-nowrap justify-center mb-7 relative flex z-0 bg-center bg-cover
                  lg:h-80"
                  ></div>
                  <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center p-0 w-full max-w-full display-flex relative">
                    <p className="mb-2 p-0 w-full max-w-full h-auto flex-none text-black text-sm text-left ">
                      Webアプリケーション開発,運用
                    </p>
                    <p className="m-0 p-0 w-full max-w-full flex-none text-black text-xs text-left">
                      「国内メディアのシステム開発」「大手金融機関のホームページ制作」「芸能事務所の社内向けツールの開発」など、主にNuxtを用いて様々なWebアプリケーションを開発・運用しています。
                        <br/>
                    </p>
                  </div>
                </div>
                <div className="flex-none m-0 w-full max-w-full items-center flex-col flex-nowrap justify-center p-0
                lg:mt-24 lg:ml-16 lg:w-2/4 lg:max-w-2/4"
                >
                  <div className="bg-fx flex-none h-60 w-full max-w-full items-center rounded-sm flex-col flex-now justify-center mb-7 relative bg-cover bg-center
                  lg:h-80"
                  ></div>
                    <div className="items-center bg-transparent flex-none flex-col flex-nowrap h-full justify-center p-0 w-full max-w-full flex relative ">
                      <p className="mb-2 p-0 w-full max-w-full h-auto flex-none text-black text-sm text-left">
                        金融領域をはじめとしたデータ分析
                      </p>
                      <p className="w-full max-w-full h-auto flex-none text-black text-xs text-left text-none">
                         金融機関の売買審査のアルゴリズム制作、AWS・GCPを使用したビックデータの構築を行っています。
                         <br/>
                      </p>
                  </div>
                </div>
              </div>
            </section>

            {/* underground */}

            <div className="items-center bg-white flex-none flex-col flex-nowrap h-auto justify-center p-0 w-full max-w-full flex
            lg:items-stretch lg:bg-black lg:flex-row "
            >
              <div className=" rounded-sm flex-none h-auto mx-4 mb-4 pt-8 px-6 pb-12 w-full max-w-full items-center flex-col flex-nowrap justify-center relative z-0
              before:content-[''] before:bg-denwa before:bg-cover before:bg-center before:h-full before:left-0 before:absolute before:top-0 before:w-full before:-z-10
              lg:h-80 lg:px-20 lg:py-24 lg:w-2/4 lg:max-w-2/4 lg:m-0"
              >
                <Link href="/" className="flex-none w-full max-w-full items-end flex-row flex-nowrap justify-between px-3 py-6 flex relative ">
                  <div className="bg-white bottom-0 flex-none h-1 left-0 m-0 absolute right-0 w-full max-w-full items-center flex flex-col flex-nowrap "></div>
                  <div className="items-start flex-none flex-col flex-nowrap justify-center p-0 w-auto max-w-auto flex relative ">
                    <p className="mb-3 p-0 w-auto max-w-auto h-auto flex-none text-white text-sm tracking-widest text-left">
                      お問い合わせ
                      <br/>
                    </p>
                    <p className="w-auto max-w-full h-auto flex-none text-white text-xl tracking-widest text-left">
                      Contact us
                      <br/>
                    </p>
                  </div>
                  <p className="w-auto max-w-full h-auto flex-none text-white text-xl tracking-widest text-left">
                    →
                    <br/>
                  </p>
                </Link>
              </div>

              <div className=" rounded-sm flex-none h-auto mx-4 mb-4 pt-8 px-6 pb-12 w-full max-w-full items-center flex-col flex-nowrap justify-center relative z-0
              before:content-[''] before:bg-suit before:bg-cover before:bg-center before:h-full before:left-0 before:absolute before:top-0 before:w-full before:-z-10
              lg:h-80 lg:px-20 lg:py-24 lg:w-2/4 lg:max-w-2/4 lg:m-0"
              >
                <Link href="/" className="flex-none w-full max-w-full items-end flex-row flex-nowrap justify-between px-3 py-6 flex relative ">
                  <div className="bg-white bottom-0 flex-none h-1 left-0 m-0 absolute right-0 w-full max-w-full items-center flex flex-col flex-nowrap "></div>
                  <div className="items-start flex-none flex-col flex-nowrap justify-center p-0 w-auto max-w-auto flex relative ">
                    <p className="mb-3 p-0 w-auto max-w-auto h-auto flex-none text-white text-sm tracking-widest text-left">
                      採用情報
                      <br/>
                    </p>
                    <p className="w-auto max-w-full h-auto flex-none text-white text-xl tracking-widest text-left">
                      Recruit
                      <br/>
                    </p>
                  </div>
                  <p className="w-auto max-w-full h-auto flex-none text-white text-xl tracking-widest text-left">
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
