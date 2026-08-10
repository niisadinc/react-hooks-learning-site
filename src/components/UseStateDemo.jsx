import { useState } from "react";
import SectionCard from "./SectionCard";
import { GiLoveLetter } from "react-icons/gi";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
   <SectionCard
  title={
    <span className="flex items-center gap-3">
      <GiLoveLetter className="text-3xl text-pink-600" />
      <span>1. UseState - Sayaç Uygulamasını Keşefedin :)</span>
    </span>
  }
  subtitle="UseState, component içinde değişebilen verileri tutmak için kullanılır."
>

      <p className="text-slate-600">
       <strong>UseState</strong>, component içinde değişebilen verileri tutmak için kullanılır. butonları ile sayacın değeerini değiştirmek sizin elinizde.
      </p>

      <div className="mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-3xl bg-pink-100 text-5xl font-bold text-pink-600">
        {count}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={decreaseCount}
          className="rounded-xl bg-pink-700 px-5 py-3 font-semibold text-white hover:bg-pink-800"
        >
          Azalt
        </button>

        <button
          onClick={resetCount}
          className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-700"
        >
          Sıfırla
        </button>

        <button
          onClick={increaseCount}
          className="rounded-xl bg-fuchsia-500 px-5 py-3 font-semibold text-white hover:bg-fuchsia-800"
        >
          Artır
        </button>
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong className="block mb-3">Kritik Kod:</strong>

        <pre className="overflow-x-auto rounded-xl bg-pink-600 p-4 text-sm leading-6 text-slate-100">
          <code>{`// Sayacı 1 artıran fonksiyon
const increaseCount = () => {
  setCount(count + 1);
};

// Sayacı 1 azaltan fonksiyon
const decreaseCount = () => {
  setCount(count - 1);
};

// Sayacı başlangıç değeri olan 0'a döndüren fonksiyon
const resetCount = () => {
  setCount(0);
};`}</code>
        </pre>
      </div>
    </SectionCard>
  );
}

export default UseStateDemo;
//işte ilk kısmımız klasik ve alıştırmasını yaptığım bir örnek olan sayacı ekledim. arttırıp azaltma ve sıfırlama özelliğini ekledim eski örneğime göre daha gelişmiş bir hali.