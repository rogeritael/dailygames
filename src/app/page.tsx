import { Container } from "@/components/container";
import { HeroCover } from "@/components/hero-cover";
import { Input } from "@/components/input";



export default function Home() {
  return (
      <main className="w-full">
        <Container>
          <HeroCover />
          <Input />
        </Container>
      </main>
  );
}
