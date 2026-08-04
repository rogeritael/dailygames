import { GameProps } from '@/utils/types/game'
import Image from 'next/image'
import Link from 'next/link'
import { BiRightArrowCircle } from 'react-icons/bi'

interface GameCardProps {
    game: GameProps
}

export function GameCard({ game }: GameCardProps){
    return (
        <Link href={`/game/${game.id}`} >
            <section className='w-full bg-slate-200 rounded-lg p-4 mb-5'>
                <div className='w-full h-56 relative transition-all duration-200 hover:scale-105'>
                    <Image
                        src={game.image_url}
                        alt={game.title}
                        quality={100}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                        className='rounded-lg object-cover'
                    />
                        
                </div>
                <div className='flex gap-1.5 mt-4 items-center justify-between'>
                    <h1 className='text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden'>{game.title}</h1>
                    <BiRightArrowCircle size={24} color='#000' />
                </div>
            </section>
        </Link>
    )
}