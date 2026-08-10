import UseStateDemo from "../components/UseStateDemo";
import UseEffectDemo from "../components/UseEffectDemo";
import UseMemoDemo from "../components/UseMemoDemo";
import UseCallbackDemo from "../components/UseCallbackDemo";
import UseRefDemo from "../components/UseRefDemo";
import Footer from "../components/Footer";

function ReactPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          React Öğrenelim
        </h1>

        <p className="mt-3 text-slate-600">
          Bu sayfada React’in temel hook yapılarını öğreneceğiz. useState,
          useEffect, useMemo, useCallback ve useRef konularını örneklerle
          inceleyeceğiz.
        </p>
      </div>

      <UseStateDemo />
      <UseEffectDemo />
      <UseMemoDemo />
      <UseCallbackDemo />
      <UseRefDemo />

      <Footer />
    </div>
  );
}

export default ReactPage;