export default function AboutSection() {
  return (
    <section className="py-10 md:py-24 bg-black">
      <div className="max-w-3xl mx-auto px-5 md:px-4 text-center">
        {/* Opening lines */}
        <p className="text-gray-400 text-lg md:text-xl mb-1">
          בעולם שבו כולם הפכו &quot;מומחי AI&quot;
        </p>
        <p className="text-gray-400 text-lg md:text-xl mb-1">
          נהיה מאתגר לדעת למי כדאי להקשיב,
        </p>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          אז רגע לפני שאתה מחליט ממי ללמוד…
        </p>

        {/* Introduction */}
        <p className="text-white text-lg md:text-3xl mb-2">נעים מאוד,</p>
        <h2 className="text-white text-xl md:text-5xl font-bold mb-4">
          אני עמיחי שקל,
        </h2>
        <p className="text-white text-lg md:text-xl mb-8">
          ומעבר לזה שייעצתי כבר לחברות ענק כמו:
        </p>

        {/* Company logos */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/google-meta-microsoft.png"
            alt="Google, Meta, Microsoft"
            className="max-w-[280px] md:max-w-lg w-full rounded-lg"
          />
        </div>

        {/* Golden quote */}
        <p className="text-amber-400 italic text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          חברות ענק משלמות לי אלפי שקלים על הידע הזה – חברי המועדון מקבלים אותו
          במחיר של אספרסו.
        </p>

        {/* AI in my blood */}
        <p className="text-white text-lg md:text-2xl font-bold mb-1">
          גם דאגתי ש-AI יזרום אצלי בדם
        </p>
        <p className="text-blue-400 text-lg md:text-2xl font-bold mb-10">
          כל יום ב-3 שנים האחרונות
        </p>

        {/* Story */}
        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4 mb-10 max-w-2xl mx-auto">
          <p>
            בסוף 2022, כשהבנה ראשונית של מה זה AI התחילה להגיע לציבור הרחב, אני
            כבר הייתי בעל עסק פעיל עם צוות, לקוחות, ולחצים של יום-יום.
          </p>
          <p>
            יום אחד ישבתי לנסות את ChatGPT בפעם הראשונה – ותוך דקות הבנתי שמשהו
            השתנה לגמרי. הכלי הזה עשה לי ב-30 שניות דברים שלקחו לי{" "}
            <span className="text-white font-bold">שעות של עבודה,</span> ואז
            הרגשתי משהו שלא ציפיתי לו –
          </p>
          <p>
            <span className="text-white font-bold">נתקפתי חרדה עמוקה…</span>
          </p>
          <p>
            כי אם הכלי הזה יכול לעשות את מה שאני עושה, מה יהיה עליי? על העסק
            שלי? על הפרנסה שלי?
          </p>
          <p>
            <span className="text-white font-bold">
              כל כך פחדתי, שפיתחתי אובססיה ל-AI
            </span>{" "}
            – התחלתי ללמוד, לחקור, להתנסות כל יום. כל כלי חדש שיצא – ניסיתי
            אותו. כל טכניקה חדשה – בדקתי אם היא עובדת בפועל. כל שיטת עבודה –
            יישמתי על עצמי ועל העסק שלי.
          </p>
        </div>

        {/* Communities image */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/communities.png"
            alt="קהילות"
            className="max-w-[300px] md:max-w-lg w-full rounded-lg"
          />
        </div>

        {/* Companies reaching out */}
        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4 mb-10 max-w-2xl mx-auto">
          <p>
            בשלב מסוים, חברות כמו Google, Facebook ו-Microsoft התחילו לפנות אליי
            – לא בגלל שאני מהנדס AI, אלא בגלל שאני יודע לתרגם את הטכנולוגיה
            הזאת לשפה שבעלי עסקים מבינים.
          </p>
        </div>

        <p className="text-white text-lg md:text-2xl font-bold mb-8">
          אפילו ערוצים מובילים הזמינו אותי להתראיין
        </p>

        {/* Interview images 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
          <img src="/images/interview1.png" alt="ראיון 1" className="w-full rounded-lg" />
          <img src="/images/interview2.png" alt="ראיון 2" className="w-full rounded-lg" />
          <img src="/images/interview3.jpg" alt="ראיון 3" className="w-full rounded-lg" />
          <img src="/images/interview4.jpg" alt="ראיון 4" className="w-full rounded-lg" />
        </div>

        {/* Google I/O */}
        <p className="text-white text-lg md:text-xl font-bold mb-8 max-w-2xl mx-auto">
          אפילו הוזמנתי להגיע לכנס ה-AI הגדול בעולם של גוגל:{" "}
          <span className="text-blue-400">Google I/O</span>
        </p>

        <div className="flex justify-center mb-12">
          <img
            src="/images/google-io.png"
            alt="Google I/O"
            className="max-w-[300px] md:max-w-lg w-full rounded-lg"
          />
        </div>

        {/* Closing — the gap */}
        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4 mb-10 max-w-2xl mx-auto">
          <p>
            אבל מה שהכי כאב לי לראות – זה הפער. חברות ענק כבר משתמשות ב-AI
            בצורה מטורפת. הן חוסכות מיליונים, מייעלות תהליכים, ומחליפות צוותים
            שלמים. ובזמן הזה – בעלי עסקים קטנים ובינוניים נשארים מאחור.
          </p>
          <p>
            לא בגלל שהם לא מספיק טובים. בגלל שאף אחד לא מראה להם את הדרך – בשפה
            שלהם, בקצב שלהם, עם כלים שהם באמת יכולים ליישם.
          </p>
        </div>

        {/* Dramatic closing */}
        <p className="text-blue-400 text-xl md:text-4xl font-bold mb-8">
          עוד שנה.
        </p>

        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4 max-w-2xl mx-auto">
          <p>
            עוד שנה מהיום, אתה תסתכל אחורה ותשאל את עצמך – למה לא התחלתי קודם?
          </p>
          <p>
            למה חיכיתי? למה נתתי לכולם לרוץ קדימה בזמן שאני עדיין חושב על זה?
          </p>
          <p>
            ה-AI לא מחכה לאף אחד. השאלה היא לא אם ללמוד – אלא ממי, ואיך.
          </p>
        </div>
      </div>
    </section>
  );
}
