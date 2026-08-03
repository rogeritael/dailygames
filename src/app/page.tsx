import { Container } from "@/components/container";
import { HeroCover } from "@/components/hero-cover";



export default function Home() {
  return (
      <main className="w-full">
        <Container>
          <HeroCover />
        </Container>
      </main>
  );
}
