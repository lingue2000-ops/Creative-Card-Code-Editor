import React, { useRef, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Sparkles, 
  Link, 
  Terminal, 
  Play, 
  Zap,
  Info 
} from 'lucide-react';

interface CodeEditorProps {
  fileName: string;
  fileType: 'html' | 'css';
  codeValue: string;
  onCodeChange: (newValue: string) => void;
  onInsertSnippet: (snippet: string) => void;
  templateDescription: string;
}

export default function CodeEditor({
  fileName,
  fileType,
  codeValue,
  onCodeChange,
  onInsertSnippet,
  templateDescription
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Split lines to calculate line number counts
  const lines = codeValue.split('\n');

  // Fast typing responsive code inserting helpers
  const insertHoverLinkHelper = () => {
    if (fileType === 'html') {
      const linkSnippet = `
<!-- Nuovo Collegamento con Effetto Hover -->
<a href="https://google.com" target="_blank" class="chalk-link chalk-pink">
  🔗 Nuovo Collegamento Codice
</a>
`;
      onInsertSnippet(linkSnippet);
    } else {
      const cssSnippet = `
/* Nuovo effetto Glow neon per link */
.chalk-pink:hover {
  text-shadow: 0 0 12px #ff9fb2, 0 0 20px #ff9fb2;
  transform: translateY(-2px) scale(1.06);
}
`;
      onInsertSnippet(cssSnippet);
    }
  };

  const insertKeyframeHelper = () => {
    if (fileType === 'html') {
      const htmlSnippet = `
<div class="hover-announcement">
  🌟 TOCCO SPECIALE
</div>
`;
      onInsertSnippet(htmlSnippet);
    } else {
      const keyframeSnippet = `
/* Animazione respirazione pulsante */
@keyframes neon-pulse {
  0%, 100% { box-shadow: 0 0 5px rgba(59, 241, 59, 0.5); }
  50% { box-shadow: 0 0 25px rgba(59, 241, 59, 0.9); }
}

.monitor-glass:hover {
  animation: neon-pulse 2s infinite alternate;
}
`;
      onInsertSnippet(keyframeSnippet);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#1A1A1A] border-r border-[#333]" id="code-workbench">
      
      {/* Tab bar header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252525] border-b border-[#333]">
        <div className="flex items-center gap-2">
          {fileType === 'html' ? (
            <Code className="w-4 h-4 text-orange-400" />
          ) : (
            <Palette className="w-4 h-4 text-blue-400" />
          )}
          <span className="font-mono text-xs text-white font-bold">{fileName}</span>
          <span className="text-[9px] bg-[#161616] border border-[#333] text-[#00FF00] px-1.5 py-0.5 rounded uppercase font-mono tracking-wider ml-1 font-bold">
            {fileType}
          </span>
        </div>

        {/* Action badges */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
          <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-[#00FF00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse"></span>
            SYNC_ACTIVE
          </span>
        </div>
      </div>

      {/* Template Scope Info banner */}
      <div className="p-3 bg-[#161616]/75 border-b border-[#333] text-[11px] text-zinc-400 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <span className="font-bold text-zinc-300">NOTE:</span> {templateDescription}
        </p>
      </div>

      {/* Editor Main Work Area */}
      <div className="flex-1 flex overflow-hidden relative font-mono text-xs leading-relaxed" id="editor-wrapper">
        
        {/* Line Numbers Gutter */}
        <div className="py-4 select-none pr-3 pl-4 bg-[#161616] text-right text-[#444] border-r border-[#333] text-[11px] font-mono w-12 shrink-0 overflow-hidden">
          {lines.map((_, i) => (
            <div key={i} className="h-6">
              {String(i + 1).padStart(2, '0')}
            </div>
          ))}
        </div>

        {/* Text Area for raw typing */}
        <div className="flex-grow relative h-full bg-[#1A1A1A]">
          <textarea
            ref={textareaRef}
            id="raw-code-input"
            value={codeValue}
            onChange={(e) => onCodeChange(e.target.value)}
            className="absolute inset-0 w-full h-full p-4 bg-transparent text-[#D4D4D4] font-mono text-xs leading-6 focus:outline-none resize-none overflow-y-auto whitespace-pre tab-size-2 caret-[#00FF00]"
            spellCheck="false"
            placeholder={
              fileType === 'html' 
                ? ' <!-- Scrivi qui il codice HTML della card... -->' 
                : ' /* Scrivi qui le regole CSS... */'
            }
          />
        </div>
      </div>

      {/* Practical quick helpers with zero sliders */}
      <div className="p-3 bg-[#111111] border-t border-[#333] flex flex-wrap gap-2 items-center justify-between text-xs font-mono">
        <div className="flex gap-2">
          {/* Quick link injection */}
          <button 
            onClick={insertHoverLinkHelper}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-[#1A1A1A] border border-[#333] hover:border-[#00FF00] text-zinc-300 hover:text-[#00FF00] hover:bg-[#161616] active:bg-[#000] rounded transition-all font-mono cursor-pointer uppercase"
            title="Inserisci un tag di collegamento ipertestuale con classe hover pronta"
          >
            <Link className="w-3.5 h-3.5 text-orange-400" />
            <span>+ Link Hover</span>
          </button>

          {/* This matches buttons styling */}
          <button 
            onClick={insertKeyframeHelper}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-[#1A1A1A] border border-[#333] hover:border-[#00FF00] text-zinc-300 hover:text-[#00FF00] hover:bg-[#161616] active:bg-[#000] rounded transition-all font-mono cursor-pointer uppercase"
            title="Aggiungi codici o keyframe di animazione"
          >
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>+ Effetto Speciale</span>
          </button>
        </div>

        {/* Diagnostic info details */}
        <div className="text-zinc-500 text-[10px] uppercase tracking-wide">
          <span>RIGHE: <strong className="text-zinc-300 font-bold">{lines.length}</strong></span>
          <span className="mx-2">•</span>
          <span>CHARS: <strong className="text-zinc-300 font-bold">{codeValue.length}</strong></span>
        </div>
      </div>

    </div>
  );
}
