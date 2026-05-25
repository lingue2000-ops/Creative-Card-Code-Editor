import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  ChevronRight, 
  ChevronDown, 
  Code, 
  Palette,
  Terminal,
  FileText,
  Smartphone,
  FolderClosed,
  StickyNote
} from 'lucide-react';
import { CardTemplate } from '../types';

interface ProjectFilesProps {
  templates: CardTemplate[];
  selectedTemplateId: string;
  activeFileType: 'html' | 'css';
  onSelectFile: (templateId: string, fileType: 'html' | 'css') => void;
}

export default function ProjectFiles({
  templates,
  selectedTemplateId,
  activeFileType,
  onSelectFile
}: ProjectFilesProps) {
  // Drive which folders are expanded in the workspace
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    templates.forEach((t, i) => {
      initial[t.id] = i === 0; // expand first by default
    });
    return initial;
  });

  const toggleFolder = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedFolders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Maps custom template IDs to respective styled icons
  const getTemplateIcon = (id: string) => {
    switch (id) {
      case 'lavagna':
        return <FolderClosed className="w-4 h-4 text-emerald-400" />;
      case 'cartella':
        return <FolderClosed className="w-4 h-4 text-amber-400" />;
      case 'quaderno':
        return <FolderClosed className="w-4 h-4 text-sky-400" />;
      case 'computer':
        return <FolderClosed className="w-4 h-4 text-green-400" />;
      case 'telefono':
        return <FolderClosed className="w-4 h-4 text-fuchsia-400" />;
      case 'blocknote':
        return <FolderClosed className="w-4 h-4 text-yellow-400" />;
      case 'astronave':
        return <FolderClosed className="w-4 h-4 text-pink-400" />;
      case 'cassa':
        return <FolderClosed className="w-4 h-4 text-orange-500" />;
      case 'cinema':
        return <FolderClosed className="w-4 h-4 text-red-500" />;
      default:
        return <FolderClosed className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#111111] text-zinc-300 border-r border-[#333] text-sm overflow-hidden select-none" id="workspace-sidebar">
      {/* File Explorer Header */}
      <div className="px-4 py-3 border-b border-[#333] flex items-center justify-between bg-[#1A1A1A]">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#888] font-bold">DIRECTORY_TREE</span>
        <span className="text-[9px] bg-[#252525] border border-[#333] text-[#00FF00] px-1.5 py-0.5 font-mono uppercase font-bold">{templates.length}_items</span>
      </div>

      {/* Main Files Tree */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        
        {/* Project Base root folder */}
        <div className="flex items-center gap-1.5 px-2 py-1.5 font-bold text-zinc-100 font-mono text-xs">
          <FolderOpen className="w-4 h-4 text-[#00FF00]" />
          <span>template_library/</span>
        </div>

        {/* Templates subdirectories folders */}
        <div className="pl-3 space-y-1">
          {templates.map(template => {
            const isFolderExpanded = expandedFolders[template.id];
            const isInsideSelected = selectedTemplateId === template.id;

            return (
              <div key={template.id} className="space-y-0.5">
                {/* Folder Row */}
                <div 
                  onClick={(e) => {
                    toggleFolder(template.id, e);
                    // Automatically open HTML of clicked template folder
                    onSelectFile(template.id, 'html');
                  }}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded cursor-pointer transition-colors duration-150 group ${
                    isInsideSelected 
                      ? 'bg-[#252525] text-white border-l-2 border-[#00FF00] font-bold' 
                      : 'hover:bg-[#1A1A1A] text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="text-zinc-600 group-hover:text-zinc-400">
                    {isFolderExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </span>
                  {getTemplateIcon(template.id)}
                  <span className="truncate flex-1 font-mono text-xs ml-0.5">{template.id}_card/</span>
                </div>

                {/* Folder Contents (Files) */}
                {isFolderExpanded && (
                  <div className="pl-6 space-y-0.5 border-l border-[#222] ml-3.5 mt-0.5">
                    
                    {/* card.html file item */}
                    <div 
                      onClick={() => onSelectFile(template.id, 'html')}
                      className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-all ${
                        isInsideSelected && activeFileType === 'html'
                          ? 'bg-[#00FF00]/5 text-[#00FF00] font-bold border-l-2 border-[#00FF00] pl-1.5'
                          : 'text-zinc-500 hover:text-zinc-300 hover:bg-[#161616]'
                      }`}
                    >
                      <Code className="w-3.5 h-3.5 text-orange-400" />
                      <span className="font-mono text-xs">card.html</span>
                    </div>

                    {/* style.css file item */}
                    <div 
                      onClick={() => onSelectFile(template.id, 'css')}
                      className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-all ${
                        isInsideSelected && activeFileType === 'css'
                          ? 'bg-[#00FF00]/5 text-[#00FF00] font-bold border-l-2 border-[#00FF00] pl-1.5'
                          : 'text-zinc-500 hover:text-zinc-300 hover:bg-[#161616]'
                      }`}
                    >
                      <Palette className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-mono text-xs">style.css</span>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Readme file - visual decoration only to look authentic */}
        <div className="pl-3 mt-4 pt-2 border-t border-[#222]">
          <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-700 font-mono text-xs rounded cursor-not-allowed">
            <FileText className="w-3.5 h-3.5 text-zinc-700" />
            <span>ISTRE_CSS_LIVE.md</span>
          </div>
        </div>

      </div>

      {/* Footer System Status Panel */}
      <div className="p-3 bg-[#161616] border-t border-[#333] text-xs text-[#888] font-mono">
        <div className="space-y-1 text-[11px]">
          <div className="flex justify-between">
            <span>LIVE_PREVIEW:</span>
            <span className="text-[#00FF00] font-bold">ACTIVE</span>
          </div>
          <div className="flex justify-between">
            <span>CSS_INJECTOR:</span>
            <span className="text-blue-400">REALTIME</span>
          </div>
          <div className="flex justify-between">
            <span>LAYOUT_MODE:</span>
            <span>SINGLE_VIEW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
