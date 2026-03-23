import { useState } from 'react';

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('נא להזין כתובת מייל תקינה');
      return;
    }

    if (!agreed) {
      setError('נא לאשר קבלת דיוור שיווקי');
      return;
    }

    window.location.href = 'https://www.cardcom.solutions/e/qTMq';
  };

  return (
    <section id="signup" className="py-10 md:py-24 bg-background text-foreground text-center">
      <div className="max-w-2xl mx-auto px-5 md:px-4">
        {/* Headline */}
        <h2 className="text-xl md:text-3xl font-bold mb-6 leading-snug">
          אז אם כבר הבנת שהמהפכה הבאה כבר כאן ואתה לא רוצה להישאר מאחור:
        </h2>

        <p className="text-2xl md:text-4xl font-bold mb-4">עכשיו&hellip;</p>

        <p className="text-lg md:text-2xl mb-8">
          תמלא את המייל בטופס כאן למטה{' '}
          <span role="img" aria-label="finger pointing down">
            &#x1F447;
          </span>
        </p>

        {/* Special offer reminder */}
        <p className="text-gray-400 text-base md:text-lg mb-8">
          הצטרף עכשיו ב-10 ש&quot;ח בלבד לחודש הראשון, מחיר השקה מיוחד!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-10">
          {/* Email */}
          <label
            htmlFor="signup-email"
            className="block text-right text-sm font-bold mb-2 text-gray-300"
          >
            כתובת המייל שלך
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 text-left focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
            dir="ltr"
          />

          {/* Checkbox */}
          <label className="flex items-start gap-3 text-right text-sm text-gray-300 mb-6 cursor-pointer min-h-[44px]">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 rounded border-gray-600 bg-gray-900 text-blue-500 focus:ring-blue-500"
            />
            <span>
              אני מאשר/ת קבלת דיוור שיווקי ועדכונים על המועדון (חובה)
            </span>
          </label>

          {/* Coupon notice */}
          <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4 mb-6 text-sm md:text-base text-gray-300">
            השתמש בקוד הקופון{' '}
            <span className="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-sm mx-1">
              AIMASTER10
            </span>{' '}
            לקבלת גישה למועדון ב-10 ש&quot;ח בלבד לחודש הראשון
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-l from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-lg md:text-2xl font-bold px-8 py-4 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
          >
            <img
              src="/images/coin10.png"
              alt=""
              className="w-8 h-8 object-contain"
            />
            <span>&#x20AA;10 הצטרף עכשיו ב-</span>
          </button>
        </form>

        {/* Payment methods */}
        <div className="flex justify-center mt-8 mb-6">
          <img
            src="/images/payment-methods.png"
            alt="אמצעי תשלום"
            className="max-w-xs md:max-w-md w-full"
          />
        </div>

        {/* Price note */}
        <p className="text-gray-500 text-xs md:text-sm mb-6">
          (המחיר של 47 &#8362; יישמר לך אוטומטית מהחודש השני והלאה)
        </p>

        {/* Cancel easy image */}
        <div className="flex justify-center">
          <img
            src="/images/cancel-easy.jpeg"
            alt="ביטול קל"
            className="w-32 md:w-40 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
