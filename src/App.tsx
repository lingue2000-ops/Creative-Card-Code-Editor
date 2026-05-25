import React, { useState, useEffect, useCallback } from 'react';
import { 
  Cpu, 
  RefreshCw, 
  Sparkles, 
  HelpCircle, 
  Trash2, 
  Layout, 
  Layers, 
  Share2,
  FileCode,
  Link2,
  AlertTriangle
} from 'lucide-react';
import { CardTemplate, ActivityLog } from './types';
import { DEFAULT_TEMPLATES } from './templates';
import ProjectFiles from './components/ProjectFiles';
import CodeEditor from './components/CodeEditor';
import PreviewCanvas from './components/PreviewCanvas';

export default function App() {
  // Load custom templates state (restores edits from local storage)
  const [templates, setTemplates] = useState<CardTemplate[]>(() => {
    const saved = localStorage.getItem('card_code_editor_templates');
    if (saved) {
      try {
        const parsed: CardTemplate[] = JSON.parse(saved);
        // Safely merge: keep existing user edits, and append any new factory templates
        const merged = [...parsed];
        DEFAULT_TEMPLATES.forEach((def) => {
          if (!merged.some((m) => m.id === def.id)) {
            merged.push(def);
          }
        });
        return merged;
      } catch (e) {
        console.error('Errore nel parsing del localStorage dei template', e);
      }
    }
    return DEFAULT_TEMPLATES;
  });

  // Keep track of active workspace selection
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('lavagna');
  const [activeFileType, setActiveFileType] = useState<'html' | 'css'>('html');

  // Interactive activity logging stream
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);

  // Auto-save edited templates into localStorage
  useEffect(() => {
    localStorage.setItem('card_code_editor_templates', JSON.stringify(templates));
  }, [templates]);

  // Retrieve current active template being designed
  const currentTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];
  const activeCodeValue = activeFileType === 'html' ? currentTemplate.html : currentTemplate.css;

  // Append a live feedback log row inside the terminal window
  const addActivityLog = useCallback((type: 'hover' | 'click' | 'edit' | 'reset', message: string) => {
    const newLog: ActivityLog = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      type,
      message
    };
    setActivityLogs(prev => [newLog, ...prev].slice(0, 100)); // cap at 100 entries
  }, []);

  // Set initial welcome log entry
  useEffect(() => {
    addActivityLog('edit', '🚀 Workspace inizializzato con successo. Seleziona un file dall\'esploratore di sinistra.');
  }, [addActivityLog]);

  // Handle direct keyboard keystrokes modifying code
  const handleCodeChange = (newValue: string) => {
    setTemplates(prev => prev.map(template => {
      if (template.id === selectedTemplateId) {
        return {
          ...template,
          [activeFileType]: newValue
        };
      }
      return template;
    }));
  };

  // Insert code snippet helper
  const handleInsertSnippet = (snippet: string) => {
    const currentCode = activeFileType === 'html' ? currentTemplate.html : currentTemplate.css;
    const updatedCode = currentCode + snippet;
    
    handleCodeChange(updatedCode);
    addActivityLog('edit', `⚡ Inserito snippet nel file card.${activeFileType}`);
  };

  // Revert a single template specifically back to default factory parameters
  const handleResetTemplate = () => {
    const original = DEFAULT_TEMPLATES.find(t => t.id === selectedTemplateId);
    if (!original) return;

    if (window.confirm(`Sei sicuro di voler ripristinare il template "${currentTemplate.name}" alle impostazioni di fabbrica? Perderai tutte le modifiche apportate.`)) {
      setTemplates(prev => prev.map(t => {
        if (t.id === selectedTemplateId) {
          return {
            ...t,
            html: original.html,
            css: original.css
          };
        }
        return t;
      }));
      addActivityLog('reset', `♻️ Ripristinato il template "${currentTemplate.name}"`);
    }
  };

  // Completely wipe all templates edits and start entirely fresh
  const handleResetAllToFactory = () => {
    if (window.confirm('Vuoi davvero ripristinare TUTTE le card del catalogo? Questa azione eliminerà ogni progresso salvato in memoria.')) {
      setTemplates(DEFAULT_TEMPLATES);
      setActivityLogs([]);
      addActivityLog('reset', '💥 Ripristino totale: ricaricati tutti i template originali di fabbrica.');
    }
  };

  // Handle sidebar file selections
  const handleSelectFile = (templateId: string, fileType: 'html' | 'css') => {
    setSelectedTemplateId(templateId);
    setActiveFileType(fileType);
    addActivityLog('edit', `📁 Aperto file: ${templateId}_card/card.${fileType}`);
  };

  // Dynamic analytic indicator: Detect matches for <a> links count
  const detectLinksCount = () => {
    const linkRegex = /<a\s+/g;
    const matches = currentTemplate.html.match(linkRegex);
    return matches ? matches.length : 0;
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0F0F0F] text-[#E0E0E0] font-mono select-none" id="studio-root">
      
      {/* Top Bar with Artistic Flair Aesthetics (MacOS style dots & vintage info metrics) */}
      <header className="h-14 border-b border-[#333] flex items-center justify-between px-6 bg-[#161616] z-10 shrink-0">
        
        {/* Logo and Titles with red-yellow-green mini beads */}
        <div className="flex items-center gap-3">
          <div className="flex items-center mr-3 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div>
            <h1 className="text-xs font-bold tracking-widest text-white flex items-center gap-2 uppercase">
              CREATIVE CARD PLAYGROUND
              <span className="text-[9px] uppercase bg-emerald-500/10 border border-[#00FF00]/30 text-[#00FF00] px-2 py-0.5 rounded font-mono font-semibold">
                EXECUTE_RUNTIME
              </span>
            </h1>
            <p className="text-[10px] text-[#888] tracking-tight uppercase mt-0.5 hidden sm:block">
              TEMPLATE CODE EDITOR • CSS LIVE INJECTOR • DYNAMIC CONSOLE STREAM
            </p>
          </div>
        </div>

        {/* Global actions and metrics */}
        <div className="flex items-center gap-5">
          {/* Real-time styled badge info */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#252525] border border-[#333] text-[#888]">
              <Link2 className="w-3.5 h-3.5 text-[#00FF00]" />
              <span className="text-[10px]">LINK_COUNT: <strong className="text-white font-bold">{detectLinksCount()}</strong></span>
            </div>
          </div>

          {/* Reset All helper button */}
          <button
            onClick={handleResetAllToFactory}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-[#252525] border border-[#444] hover:border-[#00FF00] hover:bg-black text-[#D4D4D4] hover:text-[#00FF00] transition-all cursor-pointer uppercase"
            title="Svuota tutti i salvataggi modificati e ricomincia"
          >
            <Trash2 className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden sm:inline">RESET_ALL_SAMPLE</span>
          </button>
        </div>

      </header>

      {/* Primary Split Core Screen Layout */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Leftmost Folder File Tree Navigation Panel */}
        <section className="w-64 shrink-0 h-full border-r border-[#333]">
          <ProjectFiles 
            templates={templates}
            selectedTemplateId={selectedTemplateId}
            activeFileType={activeFileType}
            onSelectFile={handleSelectFile}
          />
        </section>

        {/* Middle Pure Monospace Code Typing Workspace */}
        <section className="flex-1 min-w-[360px] h-full border-r border-[#333]">
          <CodeEditor 
            fileName={`${selectedTemplateId}_card/card.${activeFileType === 'html' ? 'html' : 'css'}`}
            fileType={activeFileType}
            codeValue={activeCodeValue}
            onCodeChange={handleCodeChange}
            onInsertSnippet={handleInsertSnippet}
            templateDescription={currentTemplate.description}
          />
        </section>

        {/* Rightmost Instant Sandbox Renderer and Click Log Console */}
        <section className="flex-1 min-w-[380px] h-full">
          <PreviewCanvas 
            htmlCode={currentTemplate.html}
            cssCode={currentTemplate.css}
            templateId={selectedTemplateId}
            activityLogs={activityLogs}
            onAddLog={addActivityLog}
            onReset={handleResetTemplate}
            onClearLogs={() => setActivityLogs([])}
          />
        </section>

      </main>

      {/* Retro-brutalist tech terminal status-bar */}
      <footer className="h-8 shrink-0 border-t border-[#333] flex items-center justify-between px-6 bg-[#161616] text-[10px] uppercase tracking-widest text-[#666] font-mono select-none">
        <div className="flex items-center gap-4">
          <span>CPU: 12.4%</span>
          <span>FPS: 60.0</span>
          <span>MEMORY_DUMP: OK</span>
          <span className="hidden md:inline">RENDER_ENGINE: WEBKIT_V8</span>
        </div>
        <div className="flex items-center text-[#00FF00] gap-1.5 font-bold">
          <span className="w-2 h-2 bg-[#00FF00] rounded-full animate-ping"></span>
          READY_FOR_INPUT
        </div>
      </footer>

    </div>
  );
}
