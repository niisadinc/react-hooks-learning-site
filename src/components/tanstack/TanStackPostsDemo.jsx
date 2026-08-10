import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import SectionCard from "../SectionCard";
import { SiReactquery } from "react-icons/si";

async function fetchUserPosts(userId) {
  if (!userId.trim()) {
    throw new Error("Kullanıcı ID alanı boş bırakılamaz.");
  }

  if (Number(userId) < 1 || Number(userId) > 10) {
    throw new Error("Kullanıcı ID değeri 1 ile 10 arasında olmalıdır.");
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!response.ok) {
    throw new Error("Veri çekilirken bir hata oluştu.");
  }

  return response.json();
}

function TanStackPostsDemo() {
  const [userIdInput, setUserIdInput] = useState("1");
  const [selectedUserId, setSelectedUserId] = useState("1");

  const queryClient = useQueryClient();

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["userPosts", selectedUserId],
    queryFn: () => fetchUserPosts(selectedUserId),
    staleTime: 60 * 1000,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedUserId(userIdInput);
  };

  const refreshData = () => {
    queryClient.invalidateQueries({
      queryKey: ["userPosts", selectedUserId],
    });
  };

  return (
  <SectionCard
    title={
      <span className="flex items-center gap-3">
        <SiReactquery className="text-3xl text-pink-600" />
        <span>1. TanStack Query - Veri Çekme Uygulaması</span>
      </span>
    }
    subtitle="Bu uygulamada veri çekme, cache, loading/error yönetimi ve query invalidation kullanılır."
  >
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border-l-4 border-pink-500 bg-slate-50 p-4"
    >
        <label className="block font-semibold text-slate-700">
          Kullanıcı ID gir:
        </label>

        <div className="mt-3 flex flex-wrap gap-3">
          <input
            type="number"
            value={userIdInput}
            onChange={(event) => setUserIdInput(event.target.value)}
            placeholder="1 ile 10 arasında ID gir"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 md:w-80"
          />

          <button
            type="submit"
            className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Gönder
          </button>

          <button
            type="button"
            onClick={refreshData}
            className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Veriyi Yenile
          </button>
        </div>

        <p className="mt-3 text-sm text-slate-600">
          Boş bırakırsan veya 1-10 dışında bir değer girersen error durumu
          çalışır. Dene ve gör.
        </p>
      </form>

      {isFetching && !isLoading && (
        <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-pink-600">
          Veri arka planda güncelleniyor...
        </div>
      )}

      {isLoading && (
        <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-pink-600">
          Veriler yükleniyor...
        </div>
      )}

      {isError && (
        <div className="mt-5 rounded-2xl bg-red-50 p-4 text-red-700">
          <strong>Hata:</strong> {error.message}
        </div>
      )}

      {!isLoading && !isError && (
        <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-emerald-700">
          <strong>Veri başarıyla çekildi.</strong>

          <p className="mt-2">
            Kullanıcı ID: <strong>{selectedUserId}</strong>
          </p>

          <p className="mt-2">
            API’den gelen post sayısı: <strong>{posts.length}</strong>
          </p>

          <p className="mt-2">
            Bu veri TanStack Query tarafından <strong>cache</strong> içinde tutulur. Aynı
            kullanıcı ID tekrar sorgulandığında veri daha hızlı gösterilebilir.
          </p>
        </div>
      )}

      <div className="mt-5 rounded-2xl border-l-4 border-pink-600 bg-slate-50 p-4 text-slate-700">
        <strong>Bu uygulamada ne oluyor?</strong>

        <p className="mt-3">
          <strong>Veri çekme:</strong> Gönder butonuna basılınca seçilen
          kullanıcı ID değerine göre API’den post listesi çekilir.
        </p>

        <p className="mt-3">
          <strong>Cache mekanizması:</strong> Aynı kullanıcı ID tekrar
          sorgulanırsa TanStack Query daha önce çekilen veriyi cache üzerinden
          hızlıca gösterebilir.
        </p>

        <p className="mt-3">
          <strong>Loading yönetimi:</strong> Veri ilk kez çekilirken ekranda
          yükleniyor mesajı görünür.
        </p>

        <p className="mt-3">
          <strong>Error yönetimi:</strong> Input boş bırakılırsa veya geçersiz
          değer girilirse hata mesajı gösterilir.
        </p>

        <p className="mt-3">
          <strong>Query invalidation:</strong> Veriyi Yenile butonuna basılınca
          mevcut query geçersiz yapılır ve veri tekrar çekilir.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border-l-4 border-pink-600 bg-slate-50 p-4 text-slate-700">
        <strong>Kritik Kod:</strong>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-pink-600 p-4 text-sm leading-6 text-slate-100">
          <code>{`// useQuery API'den veri çeker.
// queryKey cache anahtarıdır.
// queryFn çalışacak veri çekme fonksiyonudur.
const { data, isLoading, isError, error, isFetching } = useQuery({
  queryKey: ["userPosts", selectedUserId],
  queryFn: () => fetchUserPosts(selectedUserId),
  staleTime: 60 * 1000,
});

// Query invalidation:
// Mevcut veriyi geçersiz yapar ve yeniden veri çeker.
queryClient.invalidateQueries({
  queryKey: ["userPosts", selectedUserId],
});`}</code>
        </pre>
      </div>
    </SectionCard>
  );
}

export default TanStackPostsDemo;
//yine tek bir örnek üzrinden konuyu gösterdim eğer istenilen aralıkta değer girilmese error veriliyor veriyi yenilerken de loading kısmı devreye giriyor.//