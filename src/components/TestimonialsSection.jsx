export default function TestimonialsSection() {
  return (
    <section className="py-10 md:py-24 bg-white text-black" dir="rtl">
      <div className="max-w-5xl mx-auto px-5 md:px-4 text-center">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-bold text-sm mb-2 tracking-wide">TESTIMONIALS</p>
          <h2 className="text-2xl md:text-5xl font-black">
            מה לקוחות אומרים
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card-light overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <img
              src="/images/testimonial1.png"
              alt="המלצת לקוח"
              className="w-full h-auto"
            />
          </div>
          <div className="glass-card-light overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <img
              src="/images/testimonial2.png"
              alt="המלצת לקוח"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
