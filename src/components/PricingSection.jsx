export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* Social proof headline */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
          חברות ענק כבר שילמו לי על כל הידע הזה מעל{' '}
          <span className="text-gradient-blue text-4xl md:text-6xl font-black block mt-2">
            6,000&#8362;
          </span>{' '}
          <span className="block mt-2">להרצאה בודדת</span>
        </h2>

        {/* Lectures proof image */}
        <img
          src="/images/lectures-proof.png"
          alt="הוכחת הרצאות"
          className="max-w-lg w-full mx-auto rounded-lg mb-8"
        />

        {/* Original price - crossed out */}
        <p className="text-gray-400 text-lg md:text-xl mb-6">
          והאמת? חשבתי שיהיה ריאלי גם לדרוש על זה{' '}
          <span className="line-through">297</span> שקל לחודש..
        </p>

        {/* Monthly price */}
        <p
          className="text-4xl md:text-6xl font-black mb-6 line-through"
          style={{
            textShadow:
              '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
          }}
        >
          <span className="text-blue-400">&#8362;47</span>
          <span className="text-white text-2xl md:text-3xl">/חודש</span>
        </p>

        {/* Special offer text */}
        <p className="text-white text-lg md:text-xl font-bold mb-6 max-w-2xl mx-auto leading-relaxed">
          אבל רגע, בגלל שזו השקה &ndash; בחודש הראשון בלבד אני נותן לך להיכנס
          ולנסות את המועדון ב-10 ש&quot;ח בלבד!
        </p>

        {/* Giant launch price */}
        <p
          className="text-5xl md:text-7xl font-black mb-8 animate-glow"
          style={{
            textShadow:
              '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)',
          }}
        >
          <span className="text-gradient-blue">ב-&#8362;10 בלבד.</span>
        </p>

        {/* Coin image with floating animation */}
        <div className="animate-float">
          <img
            src="/images/coin10.png"
            alt="10 שקלים"
            className="max-w-xs w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
