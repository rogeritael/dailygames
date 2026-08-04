import { GameProps } from "@/utils/types/game";
import { GameCard } from "../game-card";

async function getGames(){
    try {
        const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {next: { revalidate: 320 }});

        return response.json();
    } catch(e){
        throw new Error("Erro ao buscar jogos");
    }
}

export async function HomeGamesContainer(){
    const games: GameProps[] = await getGames();

    return (
        <section>
            <h2 className="text-lg font-bold mt-8 mb-5">Conheça esses jogos</h2>
            <div className="grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </section>
    )
}