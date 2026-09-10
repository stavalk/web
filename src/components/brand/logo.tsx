import React from 'react'
import { SITE_NAME } from '@/config/site'

const ICON_STYLE: React.CSSProperties = { width: 28, height: 28, background: 'var(--ocean-grad)', color: '#fff' }

/** {SITE_NAME} wordmark — bench-vise glyph on the brand gradient. `compact` renders the mark only. */
function LogoInner({ size = 18, compact = false }: { size?: number; compact?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-[9px] font-display font-semibold tracking-[-0.3px] text-foreground"
      style={{ fontSize: size }}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center rounded-lg"
        style={ICON_STYLE}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* fixed jaw */}
          <rect x="3.5" y="4.5" width="5.5" height="14.5" rx="1.5" fill="currentColor" stroke="none" />
          {/* movable jaw */}
          <rect x="11" y="6.5" width="6" height="10.5" rx="1.5" fill="currentColor" stroke="none" opacity="0.85" />
          {/* lead screw */}
          <path d="M17.5 11.75h3.2" />
          {/* screw handle */}
          <path d="M20.7 9.4v4.7" />
          {/* bench base */}
          <path d="M4 19v1.2M12 19v1.2" />
        </svg>
      </span>
      {!compact && (
        <span>
          {SITE_NAME}
        </span>
      )}
    </span>
  )
}
export const Logo = React.memo(LogoInner)
