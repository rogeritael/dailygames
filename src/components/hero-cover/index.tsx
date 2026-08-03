import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";

async function getDailyGame(){
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`);

    return response.json();
  }catch(e){
    throw new Error("Failed to fetch data")
  }
}

export async function HeroCover(){
    const dailyGame: GameProps = await getDailyGame();

    return (
        <Link href={`/game/${dailyGame.id}`}>
            <section className="w-full bg-black rounded-lg border-2">
                <Image
                    width={100}
                    height={100}
                    alt="imagem do jogo em destaque"
                    src={dailyGame.image_url}
                    priority={true}
                    quality={100}
                />
            </section>
        </Link>
    )
}