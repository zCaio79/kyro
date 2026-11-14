import { CircleDollarSign, Code, Cpu, HardDriveDownload, HeartHandshake, ScanEye, Youtube } from "lucide-react";
import Image from "next/image";

export default function Hub() {
    return (
        <div className="flex flex-col items-center font-outfit w-full min-h-screen h-fit bg-black overflow-x-hidden pb-16 lg:pb-0">

            <header className="flex w-full py-4 px-6 lg:py-6 lg:px-8">
                <Image className="rounded-md" height={40} width={40} alt="icon" src="/simpicon.ico" draggable={false} />
                <div className="flex items-center ml-auto gap-6 text-neutral-400">
                    <a href="https://github.com/zCaio79/kyro" className="hover:text-emerald-400"><Code /></a>
                </div>
            </header>

            <div className="flex relative border-y-4 px-2 lg:px-4 border-neutral-950 rounded-3xl">
                <Image
                    className="flex z-10 h-[38vh] w-[90vw] sm:h-[50vh] sm:w-[75vw] lg:h-[70vh] lg:w-[45vw] opacity-70 rounded-4xl saturate-0"
                    height={600}
                    width={600}
                    alt="tv"
                    src="/tvgif.gif"
                    unoptimized
                    draggable={false}
                />

                <span className="absolute flex flex-col gap-2 lg:gap-4 z-0 left-1/2 lg:left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 glitch text-center lg:text-left">
                    <p className="text-6xl sm:text-8xl lg:text-9xl text-neutral-50 font-extrabold flex gap-4 lg:gap-8 justify-center lg:justify-start">
                        Kyro
                    </p>
                    <p className="text-4xl sm:text-6xl lg:text-7xl text-neutral-50 font-extrabold flex gap-2 lg:gap-4 justify-center lg:justify-start">
                        Music <span className="animate-pulse">_</span>
                    </p>
                </span>

                <Youtube className="size-7 lg:size-10 absolute right-6 top-6 lg:right-20 lg:top-20 glitch text-red-800" />
            </div>

            <div className="flex flex-col sm:flex-row self-center mt-6 w-[90vw] sm:w-[75vw] lg:w-[45vw] gap-4 lg:gap-8">
                <a
                    href="/kyro_executavel.rar"
                    download="kyro_executavel.rar"
                    className="cursor-pointer flex w-full lg:w-fit justify-center items-center gap-3 font-spartan py-2 lg:py-1.5 font-bold px-6 border-2 rounded border-neutral-400 bg-neutral-400 text-black text-lg hover:bg-neutral-300 hover:border-neutral-300 transition-colors duration-300"
                >
                    Download
                    <HardDriveDownload className="size-5" />
                </a>

                <button className="cursor-pointer flex w-full justify-center items-center gap-3 font-spartan py-2 lg:py-1.5 font-bold px-6 border-2 rounded border-emerald-600 text-emerald-400 text-lg hover:bg-emerald-600 hover:text-black transition-colors duration-300">
                    Donate
                    <HeartHandshake />
                </button>
            </div>

            <section className="flex font-spartan p-4 lg:p-6 flex-col gap-6 self-center mt-[6vh] lg:mt-[10vh] w-[92vw] sm:w-[80vw] lg:w-[50vw]">

                <span className="flex ml-0 lg:ml-6 w-full lg:w-[90%] text-xl lg:text-2xl font-bold text-neutral-400">
                    Drop your musics directly from youtube in your pc, no tabs, just a classic retrô cmd ;
                </span>

                <div className="flex ml-0 lg:ml-6 w-fit flex-col gap-2.5 font-outfit cursor-alias font-bold text-neutral-500 text-base lg:text-lg">
                    <p className="hover:text-emerald-500 flex gap-4 items-center"><CircleDollarSign /> no ads </p>
                    <p className="hover:text-emerald-500 flex gap-4 items-center"><ScanEye /> no tracking</p>
                    <p className="hover:text-emerald-500 flex gap-4 items-center"><Cpu /> local process</p>
                </div>

                <div className="flex gap-[4vh] lg:gap-[5vh] flex-col w-full mt-[6vh] lg:mt-[10vh]">
                    <Image
                        className="rounded-lg m-auto border-y-4 py-3 border-neutral-950 saturate-0 w-full lg:w-auto h-auto"
                        height={600}
                        width={650}
                        alt="icon"
                        src="/kyrovideo.gif"
                        draggable={false}
                        unoptimized
                    />
                    <Image
                        className="rounded-lg ml-auto opacity-70 saturate-0 invert w-full h-auto"
                        height={400}
                        width={1000}
                        alt="icon"
                        src="/workflow2.png"
                        draggable={false}
                    />
                </div>

            </section>

        </div>
    )
}