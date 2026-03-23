export default function PricingSection() {
  return (
    <section className="relative py-10 md:py-24 bg-black text-white text-center overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-4">
        {/* Social proof headline */}
        <h2 className="text-xl md:text-4xl font-bold mb-6 leading-snug">
          חברות ענק כבר שילמו לי על כל הידע הזה מעל{' '}
          <span
            className="text-3xl md:text-6xl font-black block mt-2"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            6,000&#8362;
          </span>{' '}
          <span className="block mt-2">להרצאה בודדת</span>
        </h2>

        {/* Lectures proof image in glass card */}
        <div className="glass-card p-3 max-w-sm md:max-w-lg mx-auto mb-10">
          <img
            src="/images/lectures-proof.png"
            alt="הוכחת הרצאות"
            className="w-full rounded-lg"
          />
        </div>

        {/* Pricing comparison card */}
        <div className="glass-card p-8 md:p-10 max-w-md mx-auto mb-10">
          {/* Original price */}
          <p className="text-gray-400 text-base md:text-lg mb-4">
            והאמת? חשבתי שיהיה ריאלי גם לדרוש על זה{' '}
            <span className="line-through text-gray-500">297</span> שקל לחודש..
          </p>

          {/* Monthly price - crossed out */}
          <p className="text-3xl md:text-5xl font-black mb-4 line-through text-gray-600">
            <span className="text-blue-400/50">&#8362;47</span>
            <span className="text-gray-500 text-xl md:text-2xl">/חודש</span>
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent my-6" />

          {/* Special offer */}
          <p className="text-white text-base md:text-lg font-bold mb-6 leading-relaxed">
            אבל רגע, בגלל שזו השקה &ndash; בחודש הראשון בלבד אני נותן לך להיכנס
            ולנסות את המועדון ב-10 ש&quot;ח בלבד!
          </p>

          {/* Giant launch price */}
          <p
            className="text-4xl md:text-6xl font-black mb-2"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
            }}
          >
            ב-&#8362;10 בלבד.
          </p>
        </div>

        {/* Coin image with glow */}
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full scale-75 pointer-events-none" />
          <img
            src="/images/coin10.png"
            alt="10 שקלים"
            className="relative max-w-[150px] md:max-w-[200px] w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
