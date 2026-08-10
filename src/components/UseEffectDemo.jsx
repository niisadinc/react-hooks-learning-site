import { useEffect, useState } from "react";
import SectionCard from "./SectionCard";
import { GiHeartBattery } from "react-icons/gi";

function UseEffectDemo() {
  const [message, setMessage] = useState("Sayfa yeni açıldı...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("useEffect çalıştı ve mesaj güncellendi.");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionCard
      title={
        <span className="flex items-center gap-3">
          <GiHeartBattery className="text-3xl text-pink-600" />
          <span>2. UseEffect - Sayfa Açılınca Veri Çekmeyi Öğrenelim</span>
        </span>
      }
      subtitle="UseEffect, component yüklendiğinde veya belirli bir veri değiştiğinde işlem yapmak için kullanılır."
    >
      <div className="mt-6 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Canlı useEffect Örneği:</strong>

        <p className="mt-3">
          Bu örnekte sayfa açıldığında ilk olarak “Sayfa yeni açıldı...” yazısı
          görünür. 2 saniye sonra useEffect çalışır ve mesaj güncellenir.
        </p>

        <div className="mt-5 rounded-2xl bg-pink-50 p-4 text-pink-700">
          <strong>Mesaj:</strong> {message}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Kritik Kod:</strong>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-pink-600 p-4 text-sm leading-6 text-slate-100">
          <code>{`// useState ile ekranda gösterilecek mesaj tutulur.
const [message, setMessage] = useState("Sayfa yeni açıldı...");

// useEffect sayfa ilk açıldığında çalışır.
useEffect(() => {
  const timer = setTimeout(() => {
    setMessage("useEffect çalıştı ve mesaj güncellendi.");
  }, 2000);

  // Component kapanırsa timer temizlenir.
  return () => clearTimeout(timer);
}, []);`}</code>
        </pre>
      </div>

      <div className="mt-5 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>useEffect burada ne işe yarıyor?</strong>

        <p className="mt-3">
          <strong>Sayfa açıldığında çalışıyor:</strong> En sondaki boş bağımlılık
          dizisi <code>[]</code> olduğu için useEffect sadece component ilk
          yüklendiğinde çalışır.
        </p>

        <p className="mt-3">
          <strong>Mesajı güncelliyor:</strong> 2 saniye sonra setMessage
          çalışır ve ekrandaki mesaj değişir.
        </p>

        <p className="mt-3">
          <strong>Temizleme işlemi yapıyor:</strong> return içinde clearTimeout
          kullanıldığı için gereksiz timer bellekte kalmaz.
        </p>
      </div>
    </SectionCard>
  );
}

export default UseEffectDemo;
//benim çok anlayamadığım bana göre soyut olan bir kısımdı. Ama şunu yaptık sayfa ilk açıldığında çalışıyor yeni sayfa açıldı yazıyor sonrea useEffect çalıştı ve mesaj güncellendi yazıyor.