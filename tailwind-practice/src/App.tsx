import './App.css';

import {
    Home as HomeIcon,
    Search as SearchIcon,
    Library as LibraryIcon,
    ChevronLeft as ArrowLeftIcon,
    ChevronRight as ArrowRightIcon
} from 'lucide-react'

export default function App() {
    return (
        <div className='flex flex-col bg-zinc-900 text-zinc-50 w-screen h-screen'>
            <div className='flex flex-1'>
                <aside className='w-64 bg-zinc-950 p-6'>
                    <nav className='space-y-4 my-4'>
                        <a className='flex items-center gap-2 text-xs font-semibold'>
                            <HomeIcon />
                            Home
                        </a>
                        <a className='flex items-center gap-2 text-xs font-semibold'>
                            <SearchIcon />
                            Search
                        </a>
                        <a className='flex items-center gap-2 text-xs font-semibold'>
                            <LibraryIcon />
                            Your Library
                        </a>
                    </nav>

                    <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 1</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 2</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 3</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 4</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 5</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 6</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 7</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 8</a>
                        <a className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 9</a>
                    </nav>
                </aside>
                <main className='flex-1 p-6'>
                    <div className='space-x-3'>
                        <button className='p-2 rounded-full bg-black/40'>
                            <ArrowLeftIcon />
                        </button>
                        <button className='p-2 rounded-full bg-black/40'>
                            <ArrowRightIcon />
                        </button>
                    </div>

                    <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

                    <section className='grid grid-cols-3 gap-4 mt-6'>
                        <article className='flex bg-black/40 rounded-md items-center'>
                            <div className='w-20 h-20 bg-zinc-500 rounded-md'></div>
                            <strong className='m-4'>Title</strong>
                        </article>
                        <article className='flex bg-black/40 rounded-md items-center'>
                            <div className='w-20 h-20 bg-zinc-500 rounded-md'></div>
                            <strong className='m-4'>Title</strong>
                        </article>
                        <article className='flex bg-black/40 rounded-md items-center'>
                            <div className='w-20 h-20 bg-zinc-500 rounded-md'></div>
                            <strong className='m-4'>Title</strong>
                        </article>
                        <article className='flex bg-black/40 rounded-md items-center'>
                            <div className='w-20 h-20 bg-zinc-500 rounded-md'></div>
                            <strong className='m-4'>Title</strong>
                        </article>
                        <article className='flex bg-black/40 rounded-md items-center'>
                            <div className='w-20 h-20 bg-zinc-500 rounded-md'></div>
                            <strong className='m-4'>Title</strong>
                        </article>
                        <article className='flex bg-black/40 rounded-md items-center'>
                            <div className='w-20 h-20 bg-zinc-500 rounded-md'></div>
                            <strong className='m-4'>Title</strong>
                        </article>
                    </section>
                </main>
            </div>
            <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
                Footer
            </footer>
        </div>
    )
}
