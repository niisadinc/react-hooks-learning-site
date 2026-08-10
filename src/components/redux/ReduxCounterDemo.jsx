import { useDispatch, useSelector } from "react-redux";
import { GiQueenCrown } from "react-icons/gi";
import SectionCard from "../SectionCard";
import { increase, decrease, reset } from "../../features/counter/counterSlice";

function ReduxCounterDemo() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <SectionCard
      title={
        <span className="flex items-center gap-3">
          <GiQueenCrown className="text-3xl text-pink-600" />
          <span>1. Redux nedir sayaç örneği ile öğrenelim</span>
        </span>
      }
    >
      <p className="text-slate-700">
        Bu örnekte sayaç değeri Redux store içinde tutulur. Artır, azalt ve
        sıfırla butonlarına basıldığında dispatch ile action çalışır ve reducer
        sayaç değerini günceller.
      </p>

      <div className="mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-3xl bg-pink-50 text-5xl font-bold text-pink-600">
        {count}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => dispatch(decrease())}
          className="rounded-xl bg-purple-500 px-5 py-3 font-semibold text-white hover:bg-pink-500"
        >
          Azalt
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="rounded-xl bg-red-400 px-5 py-3 font-semibold text-white hover:bg-pink-500"
        >
          Sıfırla
        </button>

        <button
          onClick={() => dispatch(increase())}
          className="rounded-xl bg-purple-500 px-5 py-3 font-semibold text-white hover:bg-pink-500"
        >
          Artır
        </button>
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Neden hem React'ta hem de Redux'ta sayaç örneği var?</strong>

        <p className="mt-3">
          <strong>React useState sayaçta</strong> sayaç değeri sadece ilgili
          componentin içinde tutulur. Yani veri componentin kendi içindedir.
        </p>

        <p className="mt-3">
          <strong>Redux sayaçta</strong> sayaç değeri merkezi store içinde
          tutulur. Böylece farklı componentler de aynı veriye ulaşabilir.
        </p>

        <p className="mt-3">
          Kısaca useState küçük ve local durumlar için, Redux ise birden fazla
          componentin ortak kullanacağı veriler için daha uygundur.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Redux kavramları sayaç örneğinde ne işe yarıyor?</strong>

        <p className="mt-3">
          <strong>Store:</strong> Sayaç değerinin tutulduğu merkezi veri
          deposudur. Bu örnekte ekranda görünen sayı, component içinde değil
          Redux store içinde saklanır.
        </p>

        <p className="mt-3">
          <strong>Slice:</strong> Sayaçla ilgili verileri ve işlemleri bir arada
          tutan bölümdür. Bu örnekte counterSlice, sayaç değerini ve artırma,
          azaltma, sıfırlama işlemlerini yönetir.
        </p>

        <p className="mt-3">
          <strong>Action:</strong> Redux’a yapılacak işlemi söyleyen komuttur.
          Bu örnekte increase sayacı artırır, decrease sayacı azaltır, reset ise
          sayacı sıfırlar.
        </p>

        <p className="mt-3">
          <strong>Reducer:</strong> Action çalıştığında sayaç değerini
          değiştiren koddur. Örneğin increase actionı çalışınca reducer, store
          içindeki sayaç değerini 1 artırır.
        </p>

        <p className="mt-3">
          <strong>Dispatch:</strong> Component içinden Redux’a action göndermek
          için kullanılır. Bu örnekte Artır, Azalt ve Sıfırla butonlarına
          basıldığında dispatch çalışır.
        </p>

        <p className="mt-3">
          <strong>Selector:</strong> Redux store içindeki veriyi okumak için
          kullanılır. Bu örnekte useSelector, store içindeki sayaç değerini alır
          ve ekranda gösterir.
        </p>

        <p className="mt-3">
          <strong>Kısaca:</strong> Kullanıcı butona basar, dispatch actionı
          çalıştırır, reducer store içindeki sayaç değerini günceller, selector
          ise yeni değeri okuyup ekrana yansıtır. <hr></hr>
          <strong>İşte bu da bizim mini Redux örneğimiz.</strong>
        </p>
      </div>

      <div className="mt-5 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Kritik Kod:</strong>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-pink-600 p-4 text-sm leading-6 text-slate-100">
          <code>{`// Store içindeki sayaç değerini okur.
// Buna selector denir.
const count = useSelector((state) => state.counter.value);

// Redux'a action göndermek için kullanılır.
// Buna dispatch denir.
const dispatch = useDispatch();

// Butona basınca increase action'ı çalışır.
// Reducer store içindeki sayaç değerini artırır.
<button onClick={() => dispatch(increase())}>
  Artır
</button>

// Butona basınca decrease action'ı çalışır.
// Reducer store içindeki sayaç değerini azaltır.
<button onClick={() => dispatch(decrease())}>
  Azalt
</button>

// Butona basınca reset action'ı çalışır.
// Reducer store içindeki sayaç değerini 0 yapar.
<button onClick={() => dispatch(reset())}>
  Sıfırla
</button>`}</code>
        </pre>
      </div>
    </SectionCard>
  );
}

export default ReduxCounterDemo;
// redux görevinde istenilen her şeyi bir sayaç üzerinden gösterdim. reacttaki sayaçtan farklı neden çünkü reacttaki sayaç sadece componentin içinde tutuluyorken redux ise merkezi bir store içinde tutuluyor
