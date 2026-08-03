import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from 'react-icons/ai'

async function getDailyGame(){
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: { revalidate: 320 }});

    return response.json();
  }catch(e){
    throw new Error("Failed to fetch data")
  }
}

export async function HeroCover(){
    const dailyGame: GameProps = await getDailyGame();

    return (
        <Link href={`/game/${dailyGame.id}`}>
            <section className="w-full rounded-lg ">
                <figure className="group w-full bg-black relative max-h-125 h-125 rounded-lg overflow-hidden">
                    <div className="absolute z-2 bottom-0 px-8 py-8">
                        <p className="text-4xl font-bold text-white">{dailyGame.title}</p>
                        <button className="flex items-center gap-1 bg-amber-700 w-fit px-5 py-2 rounded-b-xs mt-3" >
                            <p className="font-medium">Jogar Agora</p>
                            <AiOutlineArrowRight />
                        </button>
                    </div>
                    <Image
                        alt="imagem do jogo em destaque"
                        src={dailyGame.image_url}
                        priority={true}
                        quality={100}
                        fill
                        className="group-hover:opacity-100 max-h-125 object-cover rounded-lg opacity-50 transition-all duration-200"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    />
                </figure>

            </section>
        </Link>
    )
}