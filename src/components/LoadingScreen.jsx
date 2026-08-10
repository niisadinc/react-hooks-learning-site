function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-600 text-white">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-600 border-t-indigo-400"></div>

        <h1 className="text-2xl font-bold">Sayfa yükleniyor...</h1>

        <p className="mt-2 text-slate-300">
          React Hooks örnekleri hazırlanıyor.
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;

//İstenilen bir şeydi bu.web site a girince yüklenirken karşımıza çıkan ekran içindir)