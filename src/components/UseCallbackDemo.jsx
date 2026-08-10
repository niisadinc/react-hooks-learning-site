import { memo, useCallback, useState } from "react";
import SectionCard from "./SectionCard";
import { LuRabbit } from "react-icons/lu";
const SaveButton = memo(function SaveButton({ onSave }) {
  return (
    <button
      onClick={onSave}
      className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-800"
    >
      Notu Kaydet
    </button>
  );
});

function UseCallbackDemo() {
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  const handleSaveNote = useCallback(() => {
    if (note.trim() === "") {
      return;
    }

    setSavedNotes((prevNotes) => [...prevNotes, note]);
    setNote("");
  }, [note]);

  return (
    <SectionCard
      title= {
        <span className="flex items-center gap-3">
          <LuRabbit className="text-3xl text-pink-600" />
          <span>4. UseCallback - Buton Fonksiyonunu Sabitlemek Nedir?</span>
        </span>
      }
      subtitle="UseCallback ile gereksiz yere tekrar eden fonksiyonlar yok."
    >

      <input
        type="text"
        placeholder="Bir not yaz..."
        value={note}
        onChange={(event) => setNote(event.target.value)}
        className="mt-5 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
      />

      <div className="mt-4">
        <SaveButton onSave={handleSaveNote} />
      </div>

      <div className="mt-5 grid gap-3">
        {savedNotes.length === 0 ? (
          <p className="rounded-2xl bg-pink-50 p-4 text-pink-700">
            Henüz not kaydedilmedi.
          </p>
        ) : (
          savedNotes.map((savedNote, index) => (
            <div
              key={`${savedNote}-${index}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700"
            >
              {savedNote}
            </div>
          ))
        )}
        <div className="mt-5 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
  <strong>Kritik Kod:</strong>

  <pre className="mt-3 overflow-x-auto rounded-xl bg-pink-600 p-4 text-sm leading-6 text-slate-100">
    <code>{`// useCallback, fonksiyonu hafızada tutar.
// note değişmediği sürece handleSaveNote yeniden oluşturulmaz.
const handleSaveNote = useCallback(() => {
  setSavedNotes((prevNotes) => [...prevNotes, note]);
  setNote("");
}, [note]);`}</code>
  </pre>
</div>
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4 text-slate-700">
        <strong>Neden Kullanırız:</strong> Child componentlere gönderilen
        fonksiyonları sabitlemek ve gereksiz renderları azaltmak için
        kullanılır.
      </div>
    </SectionCard>
  );
}

export default UseCallbackDemo;
// bu temel olarak reactte fonksiyonu hafızada-depoda- tutmak anlamına geliyor.Ama backend olmadığı için sayfa yenilenince eski haline dönüyor//