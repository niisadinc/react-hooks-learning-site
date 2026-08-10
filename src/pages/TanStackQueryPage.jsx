import TanStackPostsDemo from "../components/tanstack/TanStackPostsDemo";
import TanStackPostsDemoFooter from "../components/tanstack/TanStackPostsDemoFooter";
function TanStackQueryPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          TanStack Query Öğrenelim
        </h1>

        <p className="mt-3 text-slate-900">
          Bu sayfada TanStack Query kullanarak gerçek API’den veri çekeceğiz.
          Loading, error, cache ve query invalidation yapılarını çalışan bir
          örnek üzerinden göreceğiz.
        </p>
      </div>

      <TanStackPostsDemo />
      <TanStackPostsDemoFooter />
    </div>
  );
}

export default TanStackQueryPage;