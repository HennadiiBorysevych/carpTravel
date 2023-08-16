import {
  About,
  Career,
  Contacts,
  Gallery,
  Header,
  Hero,
  Offers,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offers />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
