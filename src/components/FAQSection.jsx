import { useState } from 'react';

const faqItems = [
  {
    question: 'האם זה מתאים למתחילים?',
    answer:
      'בהחלט! המועדון מתאים לכל רמה. אנחנו מתחילים מהבסיס ומתקדמים יחד. לא צריך ידע טכני קודם.',
  },
  {
    question: 'מה קורה אחרי החודש הראשון?',
    answer:
      'אחרי החודש הראשון ב-10 ש\u05F4ח, המנוי ממשיך ב-47 ש\u05F4ח לחודש. המחיר הזה נשמר לך לתמיד כמי שהצטרף בהשקה.',
  },
  {
    question: 'איך מבטלים את המנוי למועדון?',
    answer:
      'אפשר לבטל בכל רגע בלחיצת כפתור באזור האישי. בלי שאלות, בלי התחייבות.',
  },
  {
    question: 'האם יש התחייבות או קנסות על ביטול?',
    answer: 'אין שום התחייבות. אפשר לבטל מתי שרוצים ללא קנסות.',
  },
  {
    question: 'מה מקבלים כחברי המועדון?',
    answer:
      'הרצאות שבועיות בזום, גישה לכספת פרומפטים, סוכני AI מוכנים, ארכיון תכנים (נטפליקס), הרצאות אורחים ועוד.',
  },
  {
    question: 'כמה זמן צריך להשקיע כל שבוע?',
    answer:
      'ההרצאות הן פעם בשבוע, כשעה. אפשר גם לצפות בהקלטה. ההשקעה המינימלית היא פחות משעה בשבוע.',
  },
  {
    question: 'האם המועדון מתאים גם לבעלי עסקים?',
    answer:
      'בהחלט! הרבה מהתכנים מתמקדים בשימושים עסקיים של AI \u2013 שיווק, מכירות, ייעול תהליכים ועוד.',
  },
  {
    question: 'כמה אנשים כבר במועדון?',
    answer:
      'המועדון בתחילת הדרך וזו ההזדמנות שלכם לשריין את מחיר ההשקה.',
  },
  {
    question: 'האם צריך ידע טכני?',
    answer:
      'לא! הכל מוסבר בצורה פשוטה ונגישה. אם אתה יודע להשתמש במחשב, אתה יכול להצליח כאן.',
  },
  {
    question: 'למה המחיר כל כך נמוך?',
    answer:
      'כי המטרה שלי היא להנגיש את הידע הזה לכמה שיותר אנשים. המחיר יעלה משמעותית ככל שהמועדון יגדל.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 md:py-12 bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10">
          שאלות נפוצות
        </h2>

        <div className="divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-4 px-1 md:py-5 md:px-2 text-right cursor-pointer focus:outline-none group"
              >
                <span className="text-base md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-right">
                  {item.question}
                </span>
                <span className="text-2xl font-light text-gray-400 ms-4 shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="px-2 pb-5 text-gray-600 text-sm md:text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
