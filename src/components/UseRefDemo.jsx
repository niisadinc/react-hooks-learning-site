import { useEffect, useRef, useState } from "react";
import SectionCard from "./SectionCard";
import { FaCakeCandles } from "react-icons/fa6";

function UseRefDemo() {
  const inputRef = useRef(null);
  const renderCountRef = useRef(0);
  const [name, setName] = useState("");

  useEffect(() => {
  inputRef.current.focus({
    preventScroll: true,
  });
}, []);
  renderCountRef.current += 1;

  const clearInput = () => {
    setName("");
    inputRef.current.focus();
  };

  return (
    <SectionCard
      title={
        <span className="flex items-center gap-3">
          <FaCakeCandles className="text-3xl text-pink-600" />
          <span>5. UseRef - Inputa Otomatik Focus Verme</span>
        </span>
      }
      subtitle="UseRef, DOM elemanlarına erişmek veya renderlar arasında değer saklamak için kullanılır."
    >
      <p className="text-slate-600">
        Bu örnekte sayfa açıldığında input alanına otomatik focus veriliyor.
        Ayrıca componentin kaç kez render olduğu useRef ile tutuluyor.
      </p>

      <input
        ref={inputRef}
        type="text"
        placeholder="Adını yaz..."
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="mt-5 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
      />

      <div className="mt-4">
        <button
          onClick={clearInput}
          className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700"
        >
          Temizle ve Focusla
        </button>
      </div>

      <div className="mt-5 grid gap-3">
        <p className="rounded-2xl bg-pink-100 p-4 text-slate-700">
          Yazılan isim:{" "}
          <span className="font-bold">{name || "Henüz yazılmadı"}</span>
        </p>

        <p className="rounded-2xl bg-slate-50 p-4 text-slate-700">
          Component render sayısı:{" "}
          <span className="font-bold">{renderCountRef.current}</span>
        </p>
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Kullanım amacı:</strong> Inputa focus vermek, bir DOM elemanına
        erişmek veya renderlar arasında değer saklamak için kullanılır.
      </div>
    </SectionCard>
  );
}

export default UseRefDemo;
//Bu örnekte sayfa açıldığında input alanına otomatik focus veriliyor. Ayrıca componentin kaç kez render olduğu useRef ile tutuluyor. Bunu sayfadaki kutucuğa yazı yazarak test edebiliriz.