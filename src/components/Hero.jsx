export default function Hero() {
  const scrollToSignup = (e) => {
    e.preventDefault();
    const el = document.getElementById('signup');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-4 pt-8 md:pt-16 pb-12 text-center">
        {/* "As seen in" bar */}
        <p className="text-gray-400 text-sm md:text-base mb-4">:אחרי שהופיע ב</p>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 md:px-4 md:py-2 flex items-center justify-center h-10 md:h-12">
            <img src="/images/now14.png" alt="Now 14" className="h-5 md:h-7 object-contain brightness-0 invert opacity-80" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 md:px-4 md:py-2 flex items-center justify-center h-10 md:h-12">
            <img src="/images/channel10.jpg" alt="Channel 10" className="h-5 md:h-7 object-contain brightness-0 invert opacity-80" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 md:px-4 md:py-2 flex items-center justify-center h-10 md:h-12">
            <img src="/images/n12.png" alt="N12" className="h-5 md:h-7 object-contain brightness-0 invert opacity-80" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 md:px-4 md:py-2 flex items-center justify-center h-10 md:h-12">
            <span className="text-red-500 font-bold text-base md:text-lg tracking-tight">Calcalist</span>
          </div>
        </div>

        {/* Orange gradient separator */}
        <div className="w-48 h-0.5 bg-gradient-to-l from-orange-500 via-orange-400 to-yellow-400 rounded-full mb-6" />

        {/* Community line */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4 max-w-2xl">
          ואחרי שהקים את קהילת ה-AI הגדולה בישראל עם מעל ל-320,000 עוקבים
        </p>

        {/* Orange separator */}
        <div className="w-32 h-0.5 bg-gradient-to-l from-orange-500 to-yellow-400 rounded-full mb-6" />

        {/* Intro line */}
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          עמיחי שקל יוצא לראשונה עם מועדון ה-AI שעומד לשנות הכל:
        </p>

        {/* Club name - blue glow */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gradient-blue animate-glow mb-6">
          מועדון AI Master
        </h2>

        {/* Main headline */}
        <h1
          className="text-2xl md:text-5xl lg:text-6xl font-black leading-tight mb-8"
          style={{
            textShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)',
          }}
        >
          שיהפוך אותך ל&quot;צוות של איש אחד&quot;
        </h1>

        {/* Sub-bullets */}
        <div className="flex flex-col items-center gap-2 mb-6 text-base md:text-2xl font-bold">
          <p>
            ככה תסיים כל משימה{' '}
            <span className="text-orange-400">פי 3 יותר מהר,</span>
          </p>
          <p>
            תבצע עבודה של{' '}
            <span className="text-orange-400">5 אנשים</span>{' '}
            בקלות
          </p>
          <p>
            ותהפוך לנכס{' '}
            <span className="text-blue-400">ששום מכונה לא יכולה להחליף</span>
          </p>
        </div>

        {/* Small gray disclaimer */}
        <p className="text-gray-500 text-xs md:text-sm max-w-xl leading-relaxed mb-10">
          (בעסקים, בקריירה, אפילו בחיים האישיים, גם אין לך ידע טכנולוגי וגם אתה מרגיש שאתה כבר הרבה זמן מאחור)
        </p>

        {/* Amichai hero image - stylized device mockup */}
        <div className="relative mb-10 animate-float">
          {/* Laptop frame */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-2 shadow-2xl shadow-blue-500/20 max-w-xs md:max-w-md mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/amichai-hero.png"
                alt="עמיחי שקל"
                className="w-full h-auto"
              />
            </div>
            {/* Laptop base */}
            <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl -mx-4 mt-1" />
          </div>

          {/* Tablet mockup - offset */}
          <div className="hidden md:block absolute -left-8 md:-left-16 top-8 w-28 md:w-36 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 shadow-xl shadow-blue-500/10 rotate-[-6deg]">
            <div className="rounded overflow-hidden">
              <img
                src="/images/amichai-hero.png"
                alt=""
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>

          {/* Phone mockup - offset */}
          <div className="hidden md:block absolute -right-6 md:-right-12 bottom-4 w-20 md:w-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 shadow-xl shadow-blue-500/10 rotate-[6deg]">
            <div className="rounded overflow-hidden">
              <img
                src="/images/amichai-hero.png"
                alt=""
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#signup"
          onClick={scrollToSignup}
          className="inline-block bg-gradient-to-l from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-base md:text-xl font-bold px-6 py-3 md:px-10 md:py-4 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 mb-8"
        >
          אני רוצה לשמוע פרטים על המועדון
        </a>

        {/* Down arrow */}
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
