/**
 * File: CopyField.tsx
 * Purpose: Copy-to-clipboard code snippet with accessible button.
 */

import React from 'react'
import { Copy } from 'lucide-react'

/**
 * CopyField
 * Displays a CLI command and copies it to clipboard on button press.
 */
export default function CopyField(props: { label?: string; command: string }) {
  const { label = 'Kopiuj polecenie', command } = props
  const [copied, setCopied] = React.useState(false)

  /** Copies the command to the clipboard and shows a brief visual state. */
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // No-op: Clipboard may be unavailable; in real deployment show toast.
    }
  }

  return (
    <div className="flex items-stretch rounded-md border border-field-border overflow-hidden bg-field-recessed">
      <code className="flex-1 px-3 py-2 text-xs sm:text-sm font-mono text-signal-amber overflow-x-auto select-all" aria-label="Polecenie CLI">
        {command}
      </code>
      <button
        onClick={onCopy}
        className="px-3 py-2 inline-flex items-center gap-1.5 text-xs font-mono font-medium bg-field-card hover:bg-field-ground text-field-text border-l border-field-border focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber transition-colors"
        aria-live="polite"
        aria-label={label}
      >
        <Copy size={14} className={copied ? 'text-mesh-green' : 'text-signal-amber'} aria-hidden="true" />
        {copied ? 'Skopiowano!' : 'Kopiuj'}
      </button>
    </div>
  )
}
