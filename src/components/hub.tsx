import { CircleDollarSign, Code, Cpu, Flag, HardDriveDownload, HeartHandshake, MoveDown, ScanEye, Terminal, TriangleAlert, Youtube } from "lucide-react";
import Image from "next/image";

export default function Hub() {
    return (
        <div className="flex flex-col items-center font-outfit w-full min-h-screen h-fit bg-black pb-20">

            <header className="flex w-full py-6 px-8">
                <Image className="rounded-md" height={40} width={40} alt="icon" src="/simpicon.ico" draggable={false} />
                <div className="flex items-center ml-auto gap-6 text-neutral-400">
                    <a href="https://github.com/zCaio79/kyro" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                        <Code />
                    </a>
                </div>
            </header>

            <div className="flex relative border-y-4 px-4 border-neutral-950 rounded-3xl">
                {/* Mantido exatamente as proporções originais da sua TV */}
                <Image className="flex z-10 h-[70vh] w-[45vw] opacity-70 rounded-4xl saturate-0"
                    height={600} width={600} alt="tv" src="/tvgif.gif" unoptimized draggable={false} />

                <span className="absolute flex flex-col gap-4 z-0 left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 glitch">
                    <p className="text-9xl text-neutral-50 font-extrabold flex gap-8">Kyro</p>
                    <p className="text-7xl text-neutral-50 font-extrabold flex gap-4">Music <span className=" animate-pulse">_</span></p>
                </span>
                <Youtube className="size-10 absolute right-20 top-20 glitch text-red-800" />
            </div>

            <div className="flex self-center mt-6 w-[45vw] gap-8">

                <a href="/kyro_executavel.rar" download="kyro_executavel.rar" className="cursor-pointer flex w-fit items-center gap-3 font-spartan py-1.5 font-bold px-6 border-2 rounded border-neutral-400 bg-neutral-400 text-black text-lg
                hover:bg-neutral-300 hover:border-neutral-300 transition-colors duration-300">
                    Download
                    <HardDriveDownload className="size-5" />
                </a>

                <button className="cursor-pointer flex w-full items-center justify-center gap-3 font-spartan py-1.5 font-bold px-6 border-2 rounded border-emerald-600 text-emerald-400 text-lg
                hover:bg-emerald-600 hover:text-black transition-colors duration-300">
                    Donate
                    <HeartHandshake />
                </button>

            </div>

            <section className="flex font-spartan p-6 flex-col gap-6 self-center mt-[10vh] w-[50vw]">

                <span className="flex ml-6 w-[90%] text-2xl font-bold text-neutral-400">Drop your musics directly from youtube in your pc, no tabs, just a classic retrô cmd ;</span>
                
                <div className="flex ml-6 w-fit flex-col gap-2.5 font-outfit cursor-alias font-bold text-neutral-500 text-lg">
                    <p className="hover:text-emerald-500 transition-colors flex gap-4 items-center"><CircleDollarSign/> no ads </p>
                    <p className="hover:text-emerald-500 transition-colors flex gap-4 items-center"><ScanEye/> no tracking</p>
                    <p className="hover:text-emerald-500 transition-colors flex gap-4 items-center"><Cpu/> local process</p>
                </div>

                {/* Explicação rápida + Caixa estilo Terminal */}
                <div className="flex flex-col gap-10 ml-6 mt-6 w-[90%]">
                    <p className="text-neutral-400 text-2xl leading-relaxed">
                        <strong className="text-neutral-200">How it works:</strong> Extract the archive, run the executable, pick MP3 or MP4, and paste any YouTube link or playlist. Your files are automatically converted and saved inside the <code className="text-emerald-400 bg-neutral-900 text-lg font-bold px-1.5 py-0.5 rounded">/droped</code> folder.
                    </p>

                    <div className="w-full rounded-lg border border-neutral-800 bg-neutral-950/90 p-4 font-mono text-sm shadow-lg">
                        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-neutral-900 text-neutral-500 text-md font-semibold">
                            <Terminal className="size-4 text-emerald-500" />
                            <span>kyro_drops.exe — cmd</span>
                        </div>
                        <div className="flex flex-col gap-1.5 text-neutral-300 font-semibold text-md">
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

                    <p className="font-outfit text-md text-neutral-600">
                        <TriangleAlert className="mb-2"/> Windows SmartScreen notice: since it&apos;s an indie open-source tool without a paid certificate, click <span className="text-neutral-400">&quot;More info&quot; &rarr; &quot;Run anyway&quot;</span> on first launch.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center my-10 text-neutral-600 gap-6">
                    <span className="uppercase tracking-widest text-xl font-mono font-bold text-neutral-300">See it in action</span>
                    <MoveDown className="size-6 animate-bounce text-emerald-500" />
                </div>

                <div className="flex gap-[5vh] flex-col w-full">
                    <Image className="mx-auto invert opacity-80" height={600} width={650} alt="kyro preview gif" src="/kyrovideo.gif" draggable={false} unoptimized/>
                    <Image className="rounded-lg ml-auto opacity-70 p-10 saturate-0 invert" height={400} width={1000} alt="workflow diagram" src="/workflow2.png" draggable={false} />
                </div>

            </section>

            <footer className="flex flex-col md:flex-row items-center justify-between w-full max-w-[70vw] border-t-4 border-dashed border-neutral-900 mt-10 py-8 px-6 font-mono font-semibold text-xl text-neutral-500">
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>System: Online</span>
                </div>

                <div className="flex flex-col items-center my-4 md:my-0 text-center gap-1">
                    <p>Designed & Built by <span className="text-neutral-300 font-bold">zCaio</span> ♫ — Open Source</p>
                    <span className="text-neutral-600 text-sm">Last Update: 13/11/2026</span>
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