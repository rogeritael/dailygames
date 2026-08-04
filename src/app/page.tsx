import { Container } from "@/components/container";
import { HeroCover } from "@/components/hero-cover";
import { HomeGamesContainer } from "@/components/home-games-container";
import { Input } from "@/components/input";



export default function Home() {
  return (
      <main className="w-full">
        <Container>
          <HeroCover />
          <Input />
          <HomeGamesContainer />
        </Container>
      </main>
  );
}
