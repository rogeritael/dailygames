import { Container } from "@/components/container";
import { HomeGamesContainer } from "@/components/home-games-container";
import { Input } from "@/components/input";
import { SearchGamesContainer } from "@/components/search-games-container";
import { GameProps } from "@/utils/types/game";

interface SearchProps {
    params: Promise<{
        title: string;
    }>;
}
export default async function Search({ params }: SearchProps){
    const { title } = await params;
    
    return (
        <main className="w-full">
            <Container>
                <Input />
                <h2 className="font-bold text-xl mt-8 mb-5">Resultado de pesquisa para: <span className="font-normal">{title}</span></h2>
                <SearchGamesContainer params={params} />
                
            </Container>
        </main >
    )
}