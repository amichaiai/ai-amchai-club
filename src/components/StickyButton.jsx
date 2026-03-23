export default function StickyButton() {
  return (
    <a
      href="#signup"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 md:hidden"
    >
      <img src="/images/coin10.png" alt="10 NIS" className="w-8 h-8" />
      <span>הצטרפות ב-10 ₪ בלבד</span>
    </a>
  )
}
