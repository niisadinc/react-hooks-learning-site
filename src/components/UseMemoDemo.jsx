import { useMemo, useState } from "react";
import SectionCard from "./SectionCard";
import { MdOutlineBedroomBaby } from "react-icons/md";
const lessons = [
  "HTML Temelleri",
  "CSS Temelleri",
  "TailwindCSS",
  "JavaScript ",
  "Phyton",
  "Go",
  "React ",
  "C",
  "C#",
  "API",
];

function UseMemoDemo() {
  const [searchText, setSearchText] = useState("");

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) =>
      lesson.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    
    <SectionCard
  title={
    <span className="flex items-center gap-3">
      <MdOutlineBedroomBaby className="text-3xl text-pink-600" />
      <span>3. UseMemo - Arama Filtresi Nedir?</span>
    </span>
  }
  subtitle="UseMemo, hesaplanan bir değeri gereksiz yere tekrar hesaplamamak için kullanılır."
>
      <p className="text-slate-600">
        Bu örnekte dersler arama metnine göre filtreleniyor. Arama sonucu
        sadece searchText değiştiğinde yeniden hesaplanıyor.
      </p>

      <input
        type="text"
        placeholder="Ders ara..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        className="mt-5 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />

      <p className="mt-4 text-slate-600">
        Bulunan sonuç:{" "}
        <span className="font-bold text-pink-600">
          {filteredLessons.length}
        </span>
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {filteredLessons.map((lesson) => (
          <span
            key={lesson}
                      className="rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700"
                    >
            {lesson}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Neden Kullanırız:</strong> Filtreleme, sıralama veya büyük veri
        hesaplama gibi işlemlerde gereksiz tekrar hesaplamayı azaltmak için
        kullanılır.
      </div>
    </SectionCard>
  );
}

export default UseMemoDemo;
//bunu yeni öğrendim ve en güzeli bu bence gerekszi tekrarsız veri arama yapıyor.//