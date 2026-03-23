export default function BenefitsSection() {
  const weeks = [
    {
      num: 1,
      title: 'מאסטר-קלאס טכני',
      desc: 'לוקחים כלי אחד מוביל ומפרקים אותו לגורמים. לא רק \'מה הוא עושה\', אלא איך מוציאים ממנו 100% יכולת בעבודה שלכם.',
      image: '/images/week1.jpeg',
    },
    {
      num: 2,
      title: 'הזווית המקצועית (הרצאת אורח)',
      desc: 'אירוח מומחה מהשורה הראשונה שייתן לנו פרספקטיבה ייחודית וכלים משלימים.',
      image: '/images/week2.jpeg',
    },
    {
      num: 3,
      title: 'תכל\'ס כסף (Money Time)',
      desc: 'השבוע הכי חשוב בחודש. איך לוקחים את הבינה המלאכותית ומתרגמים אותה להכנסה? רעיונות פרקטיים, מודלים עסקיים ודרכי יישום מיידיות.',
      image: '/images/week3.jpeg',
    },
    {
      num: 4,
      title: 'בכדי שתמיד תישארו בלופ',
      desc: 'מתחילים בסקירה קצרה של כל החידושים שיצאו החודש (כדי שתישארו מעודכנים), וממשיכים ל-Q&A פתוח: פותרים תקלות, עונים על שאלות ועוזרים לכם לדייק את העבודה.',
      image: '/images/week4.jpeg',
    },
  ];

  const benefits = [
    {
      num: 1,
      title: 'גישה לכל הכלים הכי חדשים ורלוונטים',
      desc: 'כל שבוע ביום שלישי בערב ניפגש בזום להרצאה על כלי אחר בעולמות ה-AI. לכל כלי כזה יש פוטנציאל לחסוך לכם עשרות אלפי שקלים ועשרות שעות של עבודה. תיחשפו לכל הכלים המתקדמים ביותר, עם השיטות להשתמש בהם לפני כולם.',
      image: '/images/benefit1.jpeg',
    },
    {
      num: 2,
      title: 'הרצאות אורחים שכבר עובדים עם AI בעסקים שלהם',
      desc: 'אחת לחודש תיפגשו לזום עם המומחים הגדולים ביותר בתחומם בישראל, בכל נושא שרק תוכלו לחשוב עליו (שיווק, מכירות, כוח אדם, פיננסים, התנהלות כלכלית, השקעות). שם הם יראו לכם איך הם מובילים את התעשיות בעזרת AI.',
      image: '/images/benefit2.jpeg',
    },
    {
      num: 3,
      title: 'הצוות שלא מתעייף',
      desc: 'תקבלו גישה לעשרות סוכני AI מאולפים ומוכנים לכל משימה שרק תצטרכו. מעוזר אישי שמסדר לכם את היומן, ועד לסוכני AI שמתקשרים עבורכם לאנשים ומבצעים עבורכם משימות יומיומיות.',
      image: '/images/benefit3.jpeg',
    },
    {
      num: 4,
      title: 'כספת הפרומפטים',
      desc: 'מעל 1,000 פרומפטים מוכנים, לפי תפקיד ומשימה, שיחסכו לכם עשרות שעות של ניסוי וטעייה. רוב האנשים לא מנצלים אפילו 1% מהיכולת של בינה מלאכותית כי אין להם את הפרומפטים הנכונים.',
      image: '/images/benefit4.jpeg',
    },
    {
      num: 5,
      title: 'הנטפליקס של העתיד',
      desc: 'בתוך הנטפליקס תוכלו למצוא את כל התכנים שצולמו במועדון, על כל כלי של בינה מלאכותית שרק שמעתם עליו, כדי שתוודאו שאתם לא מפספסים כלום.',
      image: '/images/benefit5.jpeg',
    },
  ];

  return (
    <section className="py-10 md:py-24 bg-white text-black" dir="rtl">
      <div className="max-w-5xl mx-auto px-5 md:px-4 text-center">
        {/* Section heading */}
        <h2 className="text-2xl md:text-5xl font-black text-center mb-4">
          מה בפועל מקבלים במועדון?
        </h2>
        <p className="text-gray-500 text-center text-lg md:text-xl mb-10">
          תכירו את כל היתרונות שמקבלים חברי המועדון
        </p>

        {/* Sub-heading for weekly program */}
        <h3 className="text-xl md:text-2xl font-bold text-center mb-12">
          תכנים וקורסים שתקבלו גישה אליהם מיד עם ההצטרפות:
        </h3>

        {/* Weekly program cards */}
        <div className="flex flex-col gap-8 md:gap-12 mb-20">
          {weeks.map((week, i) => {
            const isOdd = i % 2 === 0; // 0-indexed: first card (week 1) image on right
            return (
              <div
                key={week.num}
                className={`flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={week.image}
                    alt={week.title}
                    className="w-full aspect-video object-cover rounded-lg md:rounded-xl"
                  />
                </div>
                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                  <span className="inline-block self-start bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    שבוע {week.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">{week.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {week.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefit blocks */}
        <div className="flex flex-col gap-10 md:gap-16 mb-10 md:mb-16">
          {benefits.map((b) => (
            <div key={b.num} className="flex flex-col gap-4">
              <h3 className="text-lg md:text-2xl font-bold">
                <span className="text-blue-600">#{b.num}</span> {b.title}
              </h3>
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-auto rounded-xl object-cover"
              />
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing urgency text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            אם אתם רואים את זה עכשיו, המועדון בתחילת הדרך ויש לכם הזדמנות, לשריין את המחיר הנוכחי לתמיד לפני שהנטפליקס של העתיד מתמלא בתכנים,
          </p>
          <p className="text-xl md:text-2xl font-bold text-red-500">
            כי אז המחיר הולך לשלש את עצמו.
          </p>
        </div>
      </div>
    </section>
  );
}
