export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white text-black" dir="rtl">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          מה לקוחות אומרים
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/testimonial1.png"
            alt="המלצת לקוח"
            className="w-full h-auto rounded-xl shadow-md"
          />
          <img
            src="/images/testimonial2.png"
            alt="המלצת לקוח"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
