function SectionCard({ title, subtitle, children }) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

        <p className="mt-2 text-slate-600">{subtitle}</p>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}

export default SectionCard;

//USESTATE USEEFFECT VB. HEPSİ İÇİN BİR ALAN AÇTIK -YAZILARI İÇİN BİR ALAN AÇTIK- İŞTE BU ALAN SECTİONKARTTIR. YANİ O KISMI İÇEREN YERLER İÇİN CSS ÖZELLİĞİBURADA TANIMLAND//