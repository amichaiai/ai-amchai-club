import { CalcalistLogo, Channel12Logo, Channel13Logo, Channel14Logo } from './MediaLogos';

export default function Hero() {
  const scrollToSignup = (e) => {
    e.preventDefault();
    const el = document.getElementById('signup');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-orange-500/15 blur-[100px] animate-pulse-slow-delayed pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-[80px] animate-pulse-slow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-4 pt-8 md:pt-16 pb-12 text-center animate-fade-in">

        {/* "As seen in" frosted glass pill */}
        <div className="inline-flex flex-col items-center gap-3 mb-8 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <p className="text-gray-400 text-sm md:text-base">:אחרי שהופיע ב</p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <div className="bg-white/10 rounded-lg px-2 py-1.5 md:px-3 md:py-2 flex items-center justify-center h-10 md:h-12 transition-all hover:bg-white/20">
              <CalcalistLogo className="h-7 md:h-8 w-auto" />
            </div>
            <div className="bg-white/10 rounded-lg px-2 py-1.5 md:px-3 md:py-2 flex items-center justify-center h-10 md:h-12 transition-all hover:bg-white/20">
              <Channel13Logo className="h-7 md:h-8 w-auto" />
            </div>
            <div className="bg-white/10 rounded-lg px-2 py-1.5 md:px-3 md:py-2 flex items-center justify-center h-10 md:h-12 transition-all hover:bg-white/20">
              <Channel12Logo className="h-7 md:h-8 w-auto" />
            </div>
            <div className="bg-white/10 rounded-lg px-2 py-1.5 md:px-3 md:py-2 flex items-center justify-center h-10 md:h-12 transition-all hover:bg-white/20">
              <Channel14Logo className="h-7 md:h-8 w-auto" />
            </div>
          </div>
        </div>

        {/* Community line with gradient border */}
        <div className="relative mb-6">
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-l from-transparent via-orange-500/50 to-transparent" />
          <p className="text-base md:text-xl text-gray-200 leading-relaxed pt-4 max-w-2xl">
            ואחרי שהקים את קהילת ה-AI הגדולה בישראל עם מעל ל-<span className="text-white font-bold">320,000</span> עוקבים
          </p>
        </div>

        {/* Intro line */}
        <p className="text-base md:text-lg text-gray-400 mb-6">
          עמיחי שקל יוצא לראשונה עם מועדון ה-AI שעומד לשנות הכל:
        </p>

        {/* Club name - premium gradient */}
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-black mb-4"
          style={{
            background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))',
          }}
        >
          מועדון AI Master
        </h2>

        {/* Main headline with premium glow */}
        <h1
          className="text-2xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
          style={{
            background: 'linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.3))',
            letterSpacing: '-0.02em',
          }}
        >
          שיהפוך אותך ל&quot;צוות של איש אחד&quot;
        </h1>

        {/* Sub-bullets with animated underline accents */}
        <div className="flex flex-col items-center gap-3 mb-6 text-base md:text-xl font-semibold">
          <p className="text-gray-200">
            ככה תסיים כל משימה{' '}
            <span className="text-orange-400 font-bold">פי 3 יותר מהר,</span>
          </p>
          <p className="text-gray-200">
            תבצע עבודה של{' '}
            <span className="text-orange-400 font-bold">5 אנשים</span>{' '}
            בקלות
          </p>
          <p className="text-gray-200">
            ותהפוך לנכס{' '}
            <span className="text-blue-400 font-bold">ששום מכונה לא יכולה להחליף</span>
          </p>
        </div>

        {/* Disclaimer in glass pill */}
        <p className="text-gray-500 text-xs md:text-sm max-w-xl leading-relaxed mb-8 px-4 py-2 rounded-full border border-white/5 bg-white/5">
          (בעסקים, בקריירה, אפילו בחיים האישיים, גם אין לך ידע טכנולוגי וגם אתה מרגיש שאתה כבר הרבה זמן מאחור)
        </p>

        {/* Amichai hero image - premium device mockup with glow */}
        <div className="relative mb-10 animate-float">
          {/* Glow behind mockup */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 pointer-events-none" />

          {/* Laptop frame */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-2 shadow-2xl shadow-blue-500/20 max-w-xs md:max-w-md mx-auto border border-white/10">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/amichai-hero.png"
                alt="עמיחי שקל"
                className="w-full h-auto"
              />
            </div>
            <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl -mx-4 mt-1" />
          </div>

          {/* Tablet mockup */}
          <div className="hidden md:block absolute -left-8 md:-left-16 top-8 w-28 md:w-36 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 shadow-xl shadow-blue-500/10 rotate-[-6deg] border border-white/10">
            <div className="rounded overflow-hidden">
              <img src="/images/amichai-hero.png" alt="" className="w-full h-auto opacity-80" />
            </div>
          </div>

          {/* Phone mockup */}
          <div className="hidden md:block absolute -right-6 md:-right-12 bottom-4 w-20 md:w-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 shadow-xl shadow-blue-500/10 rotate-[6deg] border border-white/10">
            <div className="rounded overflow-hidden">
              <img src="/images/amichai-hero.png" alt="" className="w-full h-auto opacity-80" />
            </div>
          </div>
        </div>

        {/* Premium CTA Button with glow ring */}
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-l from-blue-600 via-blue-400 to-orange-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <a
            href="#signup"
            onClick={scrollToSignup}
            className="relative inline-flex items-center gap-2 bg-gradient-to-l from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-base md:text-xl font-bold px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            אני רוצה לשמוע פרטים על המועדון
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Down arrow */}
        <div className="animate-bounce opacity-40">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
