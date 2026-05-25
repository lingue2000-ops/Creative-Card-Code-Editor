import React, { useEffect, useRef, useState } from 'react';
import { 
  Eye, 
  RefreshCw, 
  Copy, 
  Check, 
  Terminal, 
  Layers, 
  Smartphone, 
  Monitor, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { ActivityLog } from '../types';

interface PreviewCanvasProps {
  htmlCode: string;
  cssCode: string;
  templateId: string;
  activityLogs: ActivityLog[];
  onAddLog: (type: 'hover' | 'click' | 'edit' | 'reset', message: string) => void;
  onReset: () => void;
  onClearLogs: () => void;
}

export default function PreviewCanvas({
  htmlCode,
  cssCode,
  templateId,
  activityLogs,
  onAddLog,
  onReset,
  onClearLogs
}: PreviewCanvasProps) {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [iframeHeight, setIframeHeight] = useState('500px');
  
  // Custom device container simulated dimensions
  const getDeviceFrameStyles = () => {
    switch (templateId) {
      case 'telefono':
        return 'max-w-[380px] border-[12px] border-[#222] rounded-[36px] bg-[#000] overflow-hidden shadow-2xl transition-all duration-300';
      case 'computer':
        return 'max-w-[580px] border-[8px] border-[#222] rounded-[20px] bg-[#111] overflow-hidden shadow-2xl transition-all duration-300';
      default:
        // Other layouts have standard clean floating panel frames
        return 'max-w-[600px] w-full rounded-lg overflow-hidden filter transition-all duration-300';
    }
  };

  const iframeRef = useRef<HTMLIFrameElement>(null);
 
  // Re-build and load iframe content whenever HTML/CSS modifies
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Use current css text logic
    const srcDocContent = `
      <!DOCTYPE html>
      <html lang="it">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Card Inside Sandbox</title>
          
          <!-- Tailwind CSS v4 via CDN for absolute style freedom -->
          <script src="https://cdn.tailwindcss.com"></script>
          
          <!-- Lucide icons cdn runtime -->
          <script src="https://unpkg.com/lucide@latest"></script>
          
          <style>
            /* Reset base scrollbars inside iframe */
            ::-webkit-scrollbar {
              width: 6px;
              height: 6px;
            }
            ::-webkit-scrollbar-track {
              background: rgba(0,0,0,0.05);
            }
            ::-webkit-scrollbar-thumb {
              background: rgba(0,0,0,0.25);
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: rgba(0,0,0,0.35);
            }

            /* Custom user's styles inserted here */
            ${cssCode}
          </style>
        </head>
        <body class="bg-transparent m-0 py-10 flex items-center justify-center min-h-screen selection:bg-[#00FF00] selection:text-black">
          
          <!-- Render user's dynamic custom HTML -->
          ${htmlCode}

          <script>
            // Ensure any Lucide vector tags compile visually
            if (window.lucide) {
              lucide.createIcons();
            }

            // Track link mouse over/hover starts
            document.querySelectorAll('a').forEach(link => {
              const href = link.getAttribute('href') || '#';
              const text = link.innerText.trim() || link.getAttribute('title') || 'Collegamento';

              // Track Mouse Hover Enters
              link.addEventListener('mouseenter', () => {
                window.parent.postMessage({
                  type: 'LINK_HOVER',
                  action: 'enter',
                  href: href,
                  text: text
                }, '*');
              });

              // Track Mouse Hover Leaves
              link.addEventListener('mouseleave', () => {
                window.parent.postMessage({
                  type: 'LINK_HOVER',
                  action: 'leave',
                  href: href,
                  text: text
                }, '*');
              });

              // Track Clicks
              link.addEventListener('click', (e) => {
                // If the link points to a placeholder, prevent navigation reload
                if (href === '#' || href === '') {
                  e.preventDefault();
                }
                window.parent.postMessage({
                  type: 'LINK_CLICK',
                  href: href,
                  text: text
                }, '*');
              });
            });
          </script>
        </body>
      </html>
    `;

    iframe.srcdoc = srcDocContent;
  }, [htmlCode, cssCode]);

  // Hook into iframe postMessages to feed activity stream logs dynamically
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data) return;

      const timeString = new Date().toLocaleTimeString();

      if (data.type === 'LINK_HOVER') {
        if (data.action === 'enter') {
          onAddLog('hover', `🔎 HOVER: mouse entrato sul link "${data.text}" (${data.href})`);
        } else {
          onAddLog('hover', `💨 LEAVE: mouse uscito da "${data.text}"`);
        }
      } else if (data.type === 'LINK_CLICK') {
        onAddLog('click', `🚀 CLICK: aperto collegamento "${data.text}" -> ${data.href}`);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onAddLog]);

  const copyHtmlCode = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
    onAddLog('edit', '📋 Codice HTML copiato negli appunti');
  };

  const copyCssCode = () => {
    navigator.clipboard.writeText(cssCode);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
    onAddLog('edit', '📋 Codice CSS copiato negli appunti');
  };

  return (
    <div className="flex flex-col h-full bg-[#0F0F0F] text-zinc-300" id="preview-section">
      
      {/* Upper header controls bar */}
      <div className="flex flex-wrap gap-2 items-center justify-between px-4 py-2 bg-[#252525] border-b border-[#333]">
        <div className="flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-[#00FF00]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888]">
            SANDBOX_PREVIEW
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Reset button to clear custom styling edits */}
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold bg-[#331111] border border-red-900/50 hover:bg-red-900/40 text-rose-300 hover:text-white transition-all cursor-pointer uppercase rounded"
            title="Ripristina il template originale rimuovendo le modifiche personalizzate"
          >
            <RefreshCw className="w-3 h-3 text-red-500" />
            <span>RESET</span>
          </button>

          {/* Export copy buttons */}
          <button
            onClick={copyHtmlCode}
            className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold bg-[#1C1C1C] border border-[#333] hover:border-[#00FF00] hover:text-[#00FF00] transition-all cursor-pointer rounded uppercase"
          >
            {copiedHtml ? <Check className="w-3 h-3 text-[#00FF00]" /> : <Copy className="w-3 h-3 text-orange-400" />}
            <span>COPY_HTML</span>
          </button>

          <button
            onClick={copyCssCode}
            className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold bg-[#1C1C1C] border border-[#333] hover:border-[#00FF00] hover:text-[#00FF00] transition-all cursor-pointer rounded uppercase"
          >
            {copiedCss ? <Check className="w-3.5 h-3.5 text-[#00FF00]" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
            <span>COPY_CSS</span>
          </button>
        </div>
      </div>

      {/* Main preview sandbox rendering area */}
      <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-[#0F0F0F] bg-[radial-gradient(#252525_1px,transparent_1px)] [background-size:16px_16px] relative min-h-[400px]">
        
        {/* Isolated Device simulator wraps */}
        <div className={`${getDeviceFrameStyles()} w-full flex items-center justify-center p-3 relative bg-transparent`}>
          <iframe
            ref={iframeRef}
            title="Card preview sandbox container"
            className="w-full bg-transparent border-0 transition-opacity duration-200"
            style={{ height: iframeHeight }}
          />
        </div>

        {/* Floating Simulated Grid Ruler scale markers inside background */}
        <div className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-wider text-[#555] flex items-center gap-2 pointer-events-none">
          <Layers className="w-3.5 h-3.5" />
          <span>SCOPED_PREVIEW_SANDBOX • TAILWIND_V4</span>
        </div>
      </div>

      {/* Activity Monitor Log Screen Console underneath */}
      <div className="border-t border-[#333] bg-[#0A0A0A] flex flex-col h-[200px] font-mono shrink-0">
        
        <div className="px-4 py-2 border-b border-[#222] bg-[#161616] flex items-center justify-between text-xs select-none">
          <div className="flex items-center gap-2 text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-[#00FF00]" />
            <span className="font-bold uppercase tracking-widest text-[10px] text-[#888]">ACTIVITY_STREAM_LOGS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[9px] text-[#555] uppercase font-bold tracking-wide">IFRAME_LISTENER_ONLINE</span>
            <button 
              onClick={onClearLogs}
              className="text-[9px] text-zinc-500 hover:text-white uppercase font-bold tracking-wider underline hover:no-underline"
            >
              CLEAR_LOGS
            </button>
          </div>
        </div>

        {/* Log rows scroll window */}
        <div className="flex-1 overflow-y-auto p-3 text-xs space-y-1 bg-[#0D0D0D]">
          {activityLogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-600 space-y-1">
              <AlertCircle className="w-4 h-4 text-[#333]" />
              <p className="italic text-[10px] text-zinc-500 uppercase tracking-tight">Nessun evento rilevato. Esegui hover sui link nell'anteprima.</p>
            </div>
          ) : (
            activityLogs.map((log) => (
              <div 
                key={log.id} 
                className={`flex items-start gap-2 text-[10px] font-mono leading-relaxed py-0.5 border-b border-[#1A1A1A] px-1 transition-colors ${
                  log.type === 'click' 
                    ? 'bg-amber-500/5 text-amber-300 font-bold border-l-2 border-amber-500 pl-1.5' 
                    : log.type === 'hover' 
                      ? 'bg-[#00FF00]/5 text-[#00FF00] border-l border-[#00FF00]/30 pl-1.5'
                      : log.type === 'reset'
                        ? 'text-red-400 font-bold'
                        : 'text-zinc-500'
                }`}
              >
                <span className="text-[#444] shrink-0 select-none">[{log.timestamp}]</span>
                <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[#333]" />
                <span className="flex-1 break-all">{log.message}</span>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
