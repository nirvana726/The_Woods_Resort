export default function FooterDivider() {
  return (
    <div className="flex items-center justify-center w-full my-8">
      <div className="flex-grow border-t border-[#d6cfc3]"></div>
      <span className="mx-6 text-[#d6cfc3]">
        {/* SVG ornament */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g opacity="0.7">
            <circle cx="16" cy="16" r="1.5" fill="#d6cfc3"/>
            <path d="M16 6v4" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 22v4" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 16h4" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M22 16h4" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9.757 9.757l2.828 2.828" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19.415 19.415l2.828 2.828" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9.757 22.243l2.828-2.828" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19.415 12.585l2.828-2.828" stroke="#d6cfc3" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </svg>
      </span>
      <div className="flex-grow border-t border-[#d6cfc3]"></div>
    </div>
  );
} 