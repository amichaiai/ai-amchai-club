export default function PainSection() {
  return (
    <section className="bg-white text-black py-16 md:py-24 px-4" dir="rtl">
      <div className="max-w-3xl mx-auto text-center">
        {/* Opening line */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          אתה שומע את זה בכל מקום..
        </p>

        {/* Bold fear quotes */}
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-2xl md:text-3xl font-black text-gray-900">
            &quot;ה-AI הולך למחוק תעשיות שלמות&quot;
          </p>
          <p className="text-2xl md:text-3xl font-black text-gray-900">
            &quot;הערך שלנו כבני אדם יורד&quot;
          </p>
          <p className="text-2xl md:text-3xl font-black text-gray-900">
            &quot;50% מהמקצועות הולכים להעלם&quot;
          </p>
        </div>

        {/* Pain paragraphs */}
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
          <p>
            ואתה? אתה מרגיש את הפחד עולה.
            <br />
            אתה רואה כלים חדשים צצים כל יום, קוראים עליהם, אבל לא באמת יודע מאיפה להתחיל.
          </p>
          <p>
            אתה רואה אנשים סביבך שכבר עובדים עם AI, משיגים תוצאות מטורפות,
            <br />
            ואתה מרגיש שאתה נשאר מאחור.
          </p>
          <p>
            יום אחד אתה מנסה ChatGPT, יום אחרי אתה שומע על כלי אחר,
            <br />
            ובסוף? אתה לא באמת יודע מה לעשות עם כל זה.
          </p>
          <p>
            אולי ניסית קורסים, ראית סרטונים, קראת פוסטים...
            <br />
            אבל עדיין מרגיש שחסר לך{' '}
            <span className="font-bold text-gray-900">המסלול המסודר</span>,{' '}
            <span className="font-bold text-gray-900">הליווי</span> ו
            <span className="font-bold text-gray-900">הקהילה</span>{' '}
            שיעזרו לך באמת להתקדם.
          </p>
        </div>

        {/* "Not your fault" block */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-700 mb-3">
            קודם כל חשוב שתדע,
          </p>
          <p className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            זו לא אשמתך..
          </p>
          <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              העולם השתנה בקצב מטורף ב-3 השנים האחרונות.
              <br />
              טכנולוגיות שפעם היו רק בסרטי מדע בדיוני הפכו למציאות יומיומית.
            </p>
            <p>
              רוב האנשים לא קיבלו שום הכשרה, שום הכנה, שום מפת דרכים.
              <br />
              פשוט נזרקו למים העמוקים ואמרו להם &quot;תסתדרו&quot;.
            </p>
          </div>
        </div>

        {/* Turning point */}
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            אבל היום? מי שלא יסתגל?
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            ישאר מאחור. לא בעוד 5 שנים. עכשיו. השינוי כבר כאן, וההזדמנות עדיין פתוחה למי שיפעל.
          </p>
        </div>

        {/* Good news transition */}
        <div className="mb-14">
          <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
            מה החדשות הטובות?
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            שאתה לא צריך לעשות את זה לבד. ויש מישהו שכבר סלל את הדרך עבורך.
          </p>
        </div>

        {/* "Who am I" intro */}
        <div>
          <p className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
            מי אני ולמה שתקשיב לי בכלל?
          </p>

          {/* Amichai portrait */}
          <div className="flex justify-center">
            <img
              src="/images/amichai-portrait.png"
              alt="עמיחי שקל"
              className="rounded-2xl max-w-xs md:max-w-md w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
