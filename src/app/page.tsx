import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Sertanejo raiz
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Funk{" "}
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock antigo
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Tempos
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image
                src={"/banda.jpg"}
                width={104}
                height={104}
                alt="Album de música"
              />
              <strong>Gino e Geno</strong>
              <button className="w-12  h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image
                src={"/banda.jpg"}
                width={104}
                height={104}
                alt="Album de música"
              />
              <strong>Gino e Geno</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image
                src={"/banda.jpg"}
                width={104}
                height={104}
                alt="Album de música"
              />
              <strong>Gino e Geno</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image
                src={"/banda.jpg"}
                width={104}
                height={104}
                alt="Album de música"
              />
              <strong>Gino e Geno</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image
                src={"/banda.jpg"}
                width={104}
                height={104}
                alt="Album de música"
              />
              <strong>Gino e Geno</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image
                src={"/banda.jpg"}
                width={104}
                height={104}
                alt="Album de música"
              />
              <strong>Gino e Geno</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-3xl mt-10">
            Made for Jionarran de Almeida
          </h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image
                src={"/banda.jpg"}
                className="w-full"
                width={120}
                height={120}
                alt="Album de música"
              />
              <strong className="font-semibold">Sertanejo Mix 1</strong>
              <span className="text-sm text-zinc-400">Gino e Geno</span>
            </a>
            <a className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image
                src={"/banda.jpg"}
                className="w-full"
                width={120}
                height={120}
                alt="Album de música"
              />
              <strong className="font-semibold">Sertanejo Mix 1</strong>
              <span className="text-sm text-zinc-400">Gino e Geno</span>
            </a>
            <a className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image
                src={"/banda.jpg"}
                className="w-full"
                width={120}
                height={120}
                alt="Album de música"
              />
              <strong className="font-semibold">Sertanejo Mix 1</strong>
              <span className="text-sm text-zinc-400">Gino e Geno</span>
            </a>
            <a className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image
                src={"/banda.jpg"}
                className="w-full"
                width={120}
                height={120}
                alt="Album de música"
              />
              <strong className="font-semibold">Sertanejo Mix 1</strong>
              <span className="text-sm text-zinc-400">Gino e Geno</span>
            </a>
            <a className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image
                src={"/banda.jpg"}
                className="w-full"
                width={120}
                height={120}
                alt="Album de música"
              />
              <strong className="font-semibold">Sertanejo Mix 1</strong>
              <span className="text-sm text-zinc-400">Gino e Geno</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={"/banda.jpg"}
            width={56}
            height={56}
            alt="Album de música"
          />
          <div className="flex flex-col gap-1">
            <strong className="font-normal">Acidente de Amor</strong>
            <span className="text-xs text-zinc-400">Gino e Geno</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-5 ">
            <Shuffle size={22} className="text-zinc-200"/>
            <SkipBack size={22} className="text-zinc-200"/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white/40">
              <Play size={22} />
            </button>
            <SkipForward size={22} className="text-zinc-200"/>
            <Repeat size={22} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:41</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:11</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
            <Maximize2 size={20}/>
          </div>
        </div>
      </footer>
    </div>
  );
}
