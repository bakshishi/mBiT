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
    <div className="flex items-stretch rounded-md border border-slate-300 overflow-hidden bg-white">
      <code className="flex-1 px-3 py-2 text-sm text-slate-800 overflow-x-auto" aria-label="Polecenie CLI">
        {command}
      </code>
      <button
        onClick={onCopy}
        className="px-3 py-2 inline-flex items-center gap-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        aria-live="polite"
        aria-label={label}
      >
        <Copy size={16} aria-hidden="true" />
        {copied ? 'Skopiowano' : 'Kopiuj'}
      </button>
    </div>
  )
}
