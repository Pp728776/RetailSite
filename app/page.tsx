// HOME PAGE. Shows the sections listed in content/home.ts, in that order.
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SECTIONS } from "@/components/HomeSections";
import { sections } from "@/content/home";

export default function Home() {
  return (
    <>
      <Nav />
      {sections.map(name => { const S = SECTIONS[name]; return <S key={name} />; })}
      <Footer />
    </>
  );
}
