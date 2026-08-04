"use server"
import { GameProps } from "@/utils/types/game";
import { GameCard } from "../game-card";

interface SearchProps {
    params: Promise<{
        title: string;
    }>;
}

async function getGames(title: string){
    try {
        const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`, {next: { revalidate: 320 }});

        return response.json();
    } catch(e){
        throw new Error("Erro ao buscar jogos");
    }
}

export async function SearchGamesContainer({ params }: SearchProps){
    const { title } = await params;
    const games: GameProps[] = await getGames(title);

    return (
        <div className="grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {!games && (
                <p>Nenhum resultado encontrado</p>
            )}
            {games && games.map((game) => (
                <GameCard key={game.id} game={game}/>
            ))}
        </div>
    )
}
