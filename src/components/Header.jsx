import { PiCloverFill } from "react-icons/pi";

function Header() {
  return (
    <header className="bg-pink-600 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
<h1 className="mt-6 flex max-w-3xl items-center gap-4 text-4xl font-bold md:text-6xl">
  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white md:h-16 md:w-16">
    <PiCloverFill className="text-6xl" />
  </span>

  <span>Webin Temellerini Birlikte Atalım</span>
</h1>

      </div>
    </header>
  );
}

export default Header;
//Header kullandım çünkü güzel bir başlangıcı olsun istedim web sitesinin kitabın kapağı gibi düşünülebilir)