export default function Footer() {
  const legalLinks = [
    { label: 'תקנון האתר', href: '/terms' },
    { label: 'מדיניות ביטולים', href: '/cancellation' },
    { label: 'מדיניות פרטיות', href: '/privacy' },
    { label: 'זכויות יוצרים', href: '/copyrights' },
    { label: 'הצהרת נגישות', href: '/accessibility' },
  ];

  return (
    <footer className="py-12 bg-gray-950 text-gray-400 text-center">
      <div className="max-w-2xl mx-auto px-4">
        {/* Brand */}
        <h3 className="text-white text-2xl font-bold mb-2">AI Master</h3>
        <p className="text-gray-400 mb-8">מועדון ה-AI המעשי של ישראל.</p>

        {/* Legal links */}
        <h4 className="text-sm text-gray-500 mb-4">קישורים משפטיים ונגישות</h4>
        <ul className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <h4 className="text-sm text-gray-500 mb-3">צור קשר</h4>
        <a
          href="mailto:asheqel@gmail.com"
          className="text-gray-400 hover:text-white transition-colors underline underline-offset-2 text-sm"
        >
          asheqel@gmail.com
        </a>

        {/* Copyright */}
        <p className="mt-8 text-gray-600 text-xs">
          &copy; 2026 AI Master. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
