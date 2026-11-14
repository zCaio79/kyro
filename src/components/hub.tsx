import { CircleDollarSign, Code, Cpu, HardDriveDownload, HeartHandshake, MoveDown, ScanEye, Terminal, TriangleAlert, Youtube } from "lucide-react";
import Image from "next/image";

export default function Hub() {
    return (
        <div className="flex flex-col items-center font-outfit w-full min-h-screen h-fit bg-black overflow-x-hidden pb-0">

            <header className="flex w-full py-4 px-6 lg:py-6 lg:px-8">
                <Image className="rounded-md" height={40} width={40} alt="icon" src="/simpicon.ico" draggable={false} />
                <div className="flex items-center ml-auto gap-6 text-neutral-400">
                    <a href="https://github.com/zCaio79/kyro" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                        <Code />
                    </a>
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
                    <p className="hover:text-emerald-500 transition-colors flex gap-4 items-center"><CircleDollarSign /> no ads </p>
                    <p className="hover:text-emerald-500 transition-colors flex gap-4 items-center"><ScanEye /> no tracking</p>
                    <p className="hover:text-emerald-500 transition-colors flex gap-4 items-center"><Cpu /> local process</p>
                </div>

                <div className="flex flex-col gap-8 ml-0 lg:ml-6 mt-6 w-full lg:w-[90%]">
                    <p className="text-neutral-400 text-xl lg:text-2xl leading-relaxed">
                        <strong className="text-neutral-200">How it works:</strong> Extract the archive, run the executable, pick MP3 or MP4, and paste any YouTube link or playlist. Your files are automatically converted and saved inside the <code className="text-emerald-400 bg-neutral-900 text-base lg:text-lg font-bold px-1.5 py-0.5 rounded">/droped</code> folder.
                    </p>

                    <div className="w-full rounded-lg border border-neutral-800 bg-neutral-950/90 p-3 lg:p-4 font-mono text-xs sm:text-sm shadow-lg overflow-x-auto">
                        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-neutral-900 text-neutral-500 text-sm lg:text-md font-semibold">
                            <Terminal className="size-4 text-emerald-500 flex-shrink-0" />
                            <span>kyro_drops.exe — cmd</span>
                        </div>
                        <div className="flex flex-col gap-1.5 text-neutral-300 font-semibold text-sm lg:text-md whitespace-nowrap sm:whitespace-normal">
                            <p>
                                <span className="text-emerald-500">&gt;&gt;</span> 1 &lt;- MP3 ( audio ) | 2 &lt;- MP4 ( video )
                            </p>
                            <p>
                                <span className="text-yellow-500">Youtube™ Link -&gt;</span>{" "}
                                <span className="text-neutral-500">https://youtu.be/dQw4w9WgXcQ</span>
                            </p>
                            <p className="text-purple-400">&gt;&gt; Dropando : Nujabes - Aruarian Dance ...</p>
                            <p className="text-emerald-400">
                                &gt;&gt; Drop concluído! Saved in ./droped <span className="animate-pulse">█</span>
                            </p>
                        </div>
                    </div>

                    <p className="font-outfit text-sm lg:text-md text-neutral-600 flex items-start gap-2">
                        <TriangleAlert className="size-5 flex-shrink-0 mt-0.5" />
                        <span>Windows SmartScreen notice: since it&apos;s an indie open-source tool without a paid certificate, click <span className="text-neutral-400">&quot;More info&quot; &rarr; &quot;Run anyway&quot;</span> on first launch.</span>
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center my-8 text-neutral-600 gap-4">
                    <span className="uppercase tracking-widest text-base lg:text-xl font-mono font-bold text-neutral-300 text-center">See it in action</span>
                    <MoveDown className="size-5 lg:size-6 animate-bounce text-emerald-500" />
                </div>

                <div className="flex gap-[4vh] lg:gap-[5vh] flex-col w-full items-center">
                    <Image
                        className="rounded-lg m-auto border-y-4 py-3 border-neutral-950 saturate-0 w-full lg:w-auto h-auto"
                        height={600}
                        width={650}
                        alt="kyro preview gif"
                        src="/kyrovideo.gif"
                        draggable={false}
                        unoptimized
                    />
                    <Image
                        className="rounded-lg ml-auto opacity-70 saturate-0 invert w-full h-auto"
                        height={400}
                        width={1000}
                        alt="workflow diagram"
                        src="/workflow2.png"
                        draggable={false}
                    />
                </div>

            </section>

            <footer className="flex flex-col md:flex-row items-center justify-between w-full max-w-[92vw] lg:max-w-[70vw] border-t-4 border-dashed border-neutral-900 mt-16 py-8 px-4 lg:px-6 font-mono font-semibold text-base lg:text-xl text-neutral-500 gap-6 md:gap-0 text-center md:text-left">
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>System: Online</span>
                </div>

                <div className="flex flex-col items-center my-2 md:my-0 text-center gap-1">
                    <p className="text-sm lg:text-lg">Designed & Built by <span className="text-neutral-300 font-bold">zCaio</span> ♫ — Open Source</p>
                    <span className="text-neutral-600 text-xs lg:text-sm">Last Update: 13/11/2026</span>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/zCaio79/kyro" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                        GitHub
                    </a>
                    <span>•</span>
                    <span className="text-neutral-600">Kyro © 2026</span>
                </div>
            </footer>

        </div>
    )
}