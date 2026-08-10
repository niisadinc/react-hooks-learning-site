import ReduxCounterDemo from "../components/redux/ReduxCounterDemo";
import ReduxFooter from "../components/redux/ReduxFooter";

function ReduxPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Redux Öğrenelim
        </h1>

        <p className="mt-3 text-slate-600">
          Bu sayfada Redux’un temel yapılarını öğreneceğiz. Store, slice,
          action, reducer, dispatch ve selector kavramlarını basit bir sayaç
          örneği üzerinden inceleyeceğiz.
        </p>
      </div>

      <ReduxCounterDemo />

      <ReduxFooter />
    </div>
  );
}

export default ReduxPage;