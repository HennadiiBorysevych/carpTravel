import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 pt-[36px] md:pt-[25px]">
      <div className="container flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
}
