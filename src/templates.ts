import { CardTemplate } from './types';

export const DEFAULT_TEMPLATES: CardTemplate[] = [
  {
    id: 'lavagna',
    name: 'Lavagna di Ardesia',
    iconName: 'Boards',
    description: 'Una lavagna in ardesia scura con cornice lignea, scritte in gesso colorato e collegamenti che si illuminano o mostrano cerchiature fatte a mano sul passaggio del mouse.',
    html: `<div class="blackboard-container">
  <div class="wooden-frame">
    <div class="slate-surface">
      <!-- Chalk Dust Textures -->
      <div class="chalk-dust-1"></div>
      <div class="chalk-dust-2"></div>
      
      <!-- Blackboard Header -->
      <div class="blackboard-header">
        <h1>Compiti di Oggi (Matematica & Code)</h1>
        <p class="subtitle">~ Non cancellare questa lavagna! ~</p>
      </div>
      
      <!-- Core Content -->
      <div class="blackboard-list">
        <div class="item">
          <span class="bullet">✎</span>
          <div class="item-content">
            <a href="https://classroom.google.com" target="_blank" class="chalk-link chalk-pink">
              1. Piattaforma Didattica Online
            </a>
            <span class="annotation">(Scadenza Venerdì)</span>
          </div>
        </div>
        
        <div class="item">
          <span class="bullet">✎</span>
          <div class="item-content">
            <a href="https://github.com" target="_blank" class="chalk-link chalk-blue">
              2. Repository Progetto Finale
            </a>
            <span class="annotation">(Inviare commit entro mezzanotte)</span>
          </div>
        </div>
        
        <div class="item">
          <span class="bullet">✎</span>
          <div class="item-content">
            <a href="https://wikipedia.org" target="_blank" class="chalk-link chalk-yellow">
              3. Ricerca Storica: Origine dei Calcolatori
            </a>
            <span class="annotation">(Leggi dispensa integrativa)</span>
          </div>
        </div>

        <div class="item">
          <span class="bullet">✎</span>
          <div class="item-content">
            <a href="https://stackoverflow.com" target="_blank" class="chalk-link chalk-green">
              4. Forum Supporto e Risoluzione Bug
            </a>
            <span class="annotation">(Chiedi aiuto per algoritmi)</span>
          </div>
        </div>
      </div>
      
      <!-- Footer sketch -->
      <div class="blackboard-footer">
        <div class="chalk-sketch"></div>
        <p class="chalk-quote">"Il codice è come il gesso: cancella gli errori e ricomincia."</p>
      </div>
      
      <!-- Eraser piece placed at bottom -->
      <div class="eraser-holder">
        <div class="eraser">
          <span class="eraser-felt"></span>
          <span class="eraser-wood">Cancellino</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

body {
  background: radial-gradient(circle, #2e2e2e 0%, #171717 100%);
  font-family: 'Caveat', cursive, sans-serif;
  color: #f5f5f5;
  padding: 1rem;
}

.blackboard-container {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  perspective: 1000px;
}

/* Beautiful Wooden Border Frame With Corner Joints */
.wooden-frame {
  background: #5c3a21;
  background-image: linear-gradient(135deg, #4d301b 25%, #5c3a21 25%, #5c3a21 50%, #4d301b 50%, #4d301b 75%, #5c3a21 75%, #5c3a21 100%);
  background-size: 56.57px 56.57px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.6),
    inset 0 4px 10px rgba(255,255,255,0.2),
    inset 0 -4px 12px rgba(0,0,0,0.8);
  border: 4px solid #331d10;
}

/* Authentic Dark Green Slate Board Surface */
.slate-surface {
  position: relative;
  background: #193124; /* Classic chalk green board color */
  border-radius: 4px;
  padding: 32px 24px 60px 24px;
  box-shadow: inset 0 10px 30px rgba(0,0,0,0.9);
  overflow: hidden;
  border: 4px solid #112118;
}

/* Realistic chalk smudges and dusty overlays */
.chalk-dust-1 {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 250px;
  height: 120px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 70%);
  transform: rotate(-15deg);
  pointer-events: none;
}

.chalk-dust-2 {
  position: absolute;
  bottom: 15%;
  right: 15%;
  width: 300px;
  height: 150px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 80%);
  transform: rotate(20deg);
  pointer-events: none;
}

.blackboard-header h1 {
  font-size: 2.1rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 0 4px rgba(255,255,255,0.7), 1px 1px 2px rgba(0,0,0,0.8);
  text-align: center;
  margin: 0;
  letter-spacing: 0.5px;
}

.blackboard-header .subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
  margin-bottom: 28px;
  font-style: italic;
}

/* Blackboard Items & Bullets */
.blackboard-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.bullet {
  font-size: 1.5rem;
  color: #ebdbb2;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  margin-top: -2px;
}

.item-content {
  display: flex;
  flex-direction: column;
}

.annotation {
  font-size: 0.95rem;
  color: rgba(255, 250, 240, 0.55);
  margin-top: 1px;
}

/* Chalky Link Base & Colors with Unique Hover Behaviors */
.chalk-link {
  font-size: 1.45rem;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: all 0.25s ease;
  position: relative;
}

/* Different colorful slate chalk variations */
.chalk-pink {
  color: #ff9fb2;
  text-shadow: 0 0 2px rgba(255, 159, 178, 0.6);
}

.chalk-blue {
  color: #a0dbf0;
  text-shadow: 0 0 2px rgba(160, 219, 240, 0.6);
}

.chalk-yellow {
  color: #ffeb95;
  text-shadow: 0 0 2px rgba(255, 235, 149, 0.6);
}

.chalk-green {
  color: #a8f5b4;
  text-shadow: 0 0 2px rgba(168, 245, 180, 0.6);
}

/* MAGICAL HOVER EFFECTS:
   1. Dynamic draw circle outline around chalk link
   2. Chalky glow expansion
   3. Subtle pencil rotation jitter */
.chalk-link::after {
  content: '';
  position: absolute;
  left: -8px;
  right: -8px;
  bottom: -4px;
  height: 6px;
  border-radius: 50%;
  border-bottom: 3px double currentColor;
  opacity: 0;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease;
  pointer-events: none;
}

.chalk-link:hover {
  transform: rotate(-1.5deg) scale(1.05);
  text-shadow: 
    0 0 8px currentColor,
    1px 2px 2px rgba(0, 0, 0, 0.5);
}

.chalk-link:hover::after {
  opacity: 0.85;
  transform: scaleX(1);
}

/* Decorative Footer */
.blackboard-footer {
  margin-top: 36px;
  border-top: 1px dashed rgba(255, 255, 255, 0.2);
  padding-top: 16px;
  text-align: center;
}

.chalk-quote {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin: 0;
}

/* Cancellino (Eraser) */
.eraser-holder {
  position: absolute;
  bottom: 8px;
  right: 16px;
  pointer-events: none;
}

.eraser {
  display: flex;
  flex-direction: column;
  width: 76px;
  height: 24px;
  box-shadow: 1px 4px 6px rgba(0,0,0,0.5);
  border-radius: 3px;
  overflow: hidden;
}

.eraser-wood {
  background: #c19a6b;
  color: #5c3a21;
  font-size: 0.65rem;
  font-weight: bold;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eraser-felt {
  background: #444;
  height: 16px;
  border-top: 1px solid #222;
}
`
  },
  {
    id: 'cartella',
    name: 'Cartella d\'Archivio',
    iconName: 'FolderClosed',
    description: 'Una tipica cartella di cartone per documenti d\'ufficio sospesa con linguetta superiore, fermaglio e pinna che si allarga ed elenca i link come etichette scorrevoli schedulate.',
    html: `<div class="folder-container">
  <!-- Folder Tab Tag at index top -->
  <div class="folder-tab">
    <span class="tab-label">PROG_2026</span>
    <span class="sec-badge">CONFIDENZIALE</span>
  </div>

  <div class="folder-body shadow-2xl">
    <!-- Cover Elements -->
    <div class="folder-texture"></div>
    <div class="vintage-stamp">REGISTRO NAZIONALE</div>
    
    <!-- Metal central clip fastener -->
    <div class="folder-metal-clip">
      <div class="screw left-screw"></div>
      <div class="plate">🔒 CLASSIFICATO</div>
      <div class="screw right-screw"></div>
    </div>
    
    <!-- Paper Sheet Inside -->
    <div class="inner-sheet">
      <div class="lines-background"></div>
      
      <div class="sheet-title">
        <h3>ALLEGATI ESSENZIALI DI PROGETTO</h3>
        <p class="meta-info font-mono">Dossier #9220-A - Archivio Attivo (Vite/Node)</p>
      </div>
      
      <!-- List of documents to click -->
      <nav class="document-nav">
        <a href="https://vite.dev" target="_blank" class="document-item">
          <div class="folder-icon-wrapper">📁</div>
          <div class="doc-text">
            <span class="doc-title">Sito Ufficiale Vite Engine</span>
            <span class="doc-desc">Documentazione compilatore e asset pipeline.</span>
          </div>
          <div class="hover-arrow">➙</div>
        </a>

        <a href="https://react.dev" target="_blank" class="document-item">
          <div class="folder-icon-wrapper">📁</div>
          <div class="doc-text">
            <span class="doc-title">Documentazione React 19 API</span>
            <span class="doc-desc">Guida ai componenti funzionali e hook asincroni.</span>
          </div>
          <div class="hover-arrow">➙</div>
        </a>

        <a href="https://tailwindcss.com" target="_blank" class="document-item">
          <div class="folder-icon-wrapper">📁</div>
          <div class="doc-text">
            <span class="doc-title">Cheatsheet Integrale Tailwind</span>
            <span class="doc-desc">Classi di utilità per design rapidi e controlli layout.</span>
          </div>
          <div class="hover-arrow">➙</div>
        </a>

        <a href="https://google.com" target="_blank" class="document-item">
          <div class="folder-icon-wrapper">📁</div>
          <div class="doc-text">
            <span class="doc-title">Motore di Ricerca Google</span>
            <span class="doc-desc">Strumento universale di debugging e consultazione.</span>
          </div>
          <div class="hover-arrow">➙</div>
        </a>
      </nav>
      
      <div class="sheet-footer font-mono">
        MARCHIO DEPOSITATO • ARCHIVIO DIGITALE AUTOMATIZZATO
      </div>
    </div>
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');

body {
  background-color: #f0eae1;
  font-family: 'Inter', sans-serif;
  color: #3e3226;
  padding: 1rem;
}

.folder-container {
  width: 100%;
  max-width: 580px;
  margin: 1.5rem auto 0 auto;
  position: relative;
}

/* Top folder index tab */
.folder-tab {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #d8c29d;
  background-image: linear-gradient(to top, #cbb58f, #e5d1ae);
  padding: 8px 24px;
  border-radius: 12px 24px 0 0;
  box-shadow: 1px -3px 8px rgba(0,0,0,0.06);
  border: 1px solid #b7a17d;
  border-bottom: none;
  margin-left: 20px;
  position: relative;
  z-index: 10;
}

.tab-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4e3f30;
  letter-spacing: 1.5px;
  font-family: 'Space Mono', monospace;
}

.sec-badge {
  background-color: rgba(217, 83, 79, 0.15);
  color: #d9534f;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 2px 6px;
  border: 1px solid rgba(217,83,79,0.3);
  border-radius: 4px;
  font-family: 'Space Mono', monospace;
}

/* Heavy Kraft Manila Folder Canvas Outer Frame */
.folder-body {
  position: relative;
  background: #e6cb9f;
  background-image: linear-gradient(135deg, #dfc498 25%, #e6cb9f 25%, #e6cb9f 50%, #dfc498 50%, #dfc498 75%, #e6cb9f 75%, #e6cb9f 100%);
  background-size: 40px 40px;
  border: 1px solid #bba580;
  border-radius: 0 16px 16px 16px;
  padding: 16px 16px 20px 16px;
  z-index: 2;
  box-shadow: 
    0 25px 50px -12px rgba(89, 71, 48, 0.4),
    inset 0 2px 4px rgba(255,255,255,0.4);
}

.folder-texture {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.03) 100%);
  pointer-events: none;
  border-radius: inherit;
}

.vintage-stamp {
  position: absolute;
  right: 20px;
  bottom: 12px;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  font-weight: bold;
  opacity: 0.25;
  color: #7a0000;
  border: 2px solid currentColor;
  padding: 2px 6px;
  transform: rotate(-5deg);
}

/* Metal central binder design */
.folder-metal-clip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #8c8c8c;
  background-image: linear-gradient(to bottom, #b3b3b3, #666666);
  border: 1px solid #555;
  border-radius: 4px;
  height: 20px;
  margin: 4px auto 14px auto;
  width: 90%;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.folder-metal-clip .plate {
  font-size: 0.65rem;
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  color: #333;
}

.folder-metal-clip .screw {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #444;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.4);
}

/* Styled Document Sheet lying inside */
.inner-sheet {
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  padding: 28px 24px;
  border: 1px solid #e0d0b0;
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.08),
    0 -5px 10px rgba(0,0,0,0.04);
  overflow: hidden;
}

.lines-background {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(#f0f7ff 1px, transparent 1px);
  background-size: 100% 24px;
  pointer-events: none;
  opacity: 0.45;
}

.sheet-title {
  position: relative;
  z-index: 5;
  border-bottom: 2px solid #3e3226;
  padding-bottom: 12px;
  margin-bottom: 18px;
}

.sheet-title h3 {
  font-size: 1.15rem;
  font-weight: bold;
  color: #3e3226;
  letter-spacing: 0.5px;
}

.meta-info {
  font-size: 0.72rem;
  color: #7b634c;
  margin-top: 4px;
}

/* Action Document Items as clickable links */
.document-nav {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.document-item {
  display: flex;
  align-items: center;
  background-color: #faf8f5;
  border: 1px solid #e8e2d4;
  border-radius: 6px;
  padding: 10px 14px;
  text-decoration: none;
  color: #4e3f30;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
}

.folder-icon-wrapper {
  font-size: 1.25rem;
  margin-right: 12px;
  filter: sepia(0.3);
  transition: transform 0.2s ease;
}

.doc-text {
  flex-grow: 1;
}

.doc-title {
  display: block;
  font-weight: 600;
  font-size: 0.92rem;
  transition: color 0.15s ease;
}

.doc-desc {
  display: block;
  font-size: 0.75rem;
  color: #8c7660;
  margin-top: 1px;
}

.hover-arrow {
  font-size: 1.1rem;
  color: #bfa88f;
  font-weight: bold;
  transform: translateX(-4px);
  opacity: 0;
  transition: all 0.25s ease;
}

/* MAGICAL HOVER STATES
   1. Sliding left outline and shadow expansion
   2. Horizontal Arrow push transition
   3. File folder icon tilting */
.document-item:hover {
  background-color: #ffffff;
  border-color: #caaf88;
  transform: translateX(4px);
  box-shadow: 0 4px 10px rgba(115, 95, 71, 0.1);
}

.document-item:hover .folder-icon-wrapper {
  transform: scale(1.18) rotate(5deg);
}

.document-item:hover .doc-title {
  color: #9c6c2e;
}

.document-item:hover .hover-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #9c6c2e;
}

.sheet-footer {
  margin-top: 24px;
  padding-top: 12px;
  border-top: 1px solid #e8e2d4;
  font-size: 0.65rem;
  text-align: center;
  color: #b1a08f;
  letter-spacing: 1px;
}
`
  },
  {
    id: 'quaderno',
    name: 'Foglio di Quaderno',
    iconName: 'FileText',
    description: 'Foglio a quadretti classico con fori laterali da raccoglitore, margine sinistro rosso e link scritti a penna evidenziati in giallo brillante al passaggio mouse.',
    html: `<div class="binder-leaf-container">
  <!-- Ring holes on the left gutter margin -->
  <div class="binder-rings">
    <div class="ring-hole"></div>
    <div class="ring-hole"></div>
    <div class="ring-hole"></div>
    <div class="ring-hole"></div>
    <div class="ring-hole"></div>
  </div>
  
  <div class="notebook-sheet shadow-lg">
    <!-- Crimson red left margin line -->
    <div class="margin-line"></div>
    
    <div class="sheet-content">
      <!-- Notebook Header -->
      <header class="sheet-header">
        <div class="notebook-metadata">
          <span class="field">Materia: <strong class="written">Programmazione_Web</strong></span>
          <span class="field">Data: <strong class="written">25 Maggio</strong></span>
        </div>
        <h2 class="ruled-h2">SITI UTILI DA AGGIUNGERE AI PREFERITI</h2>
      </header>
      
      <!-- List and handwriting -->
      <ul class="notebook-links">
        <li>
          <span class="checkbox-box">&#9634;</span>
          <a href="https://dev.to" target="_blank" class="ink-link">
            Dev.to Community Portal
          </a>
          <span class="handwritten-comment">~ Ottimi articoli sul web-dev</span>
        </li>
        
        <li>
          <span class="checkbox-box">&#9634;</span>
          <a href="https://github.com/trending" target="_blank" class="ink-link">
            GitHub Trending Repositories
          </a>
          <span class="handwritten-comment">~ Scoprire codici sorgenti freschi</span>
        </li>
        
        <li>
          <span class="checkbox-box">&#9634;</span>
          <a href="https://codepen.io" target="_blank" class="ink-link">
            CodePen Creative Sandbox
          </a>
          <span class="handwritten-comment">~ Ispirazione CSS & animazioni</span>
        </li>

        <li>
          <span class="checkbox-box">&#9634;</span>
          <a href="https://css-tricks.com" target="_blank" class="ink-link">
            CSS Tricks Guides
          </a>
          <span class="handwritten-comment">~ Tutorial pazzeschi sui flex/grid</span>
        </li>
      </ul>
      
      <!-- Pencil doodle drawings -->
      <div class="doodle-corner">
        <div class="doodle-star">★</div>
        <div class="doodle-cube"></div>
      </div>
    </div>
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400;500;700&display=swap');

body {
  background-color: #dfe6e9;
  font-family: 'Caveat', cursive, sans-serif;
  color: #1e272e;
  padding: 1rem;
}

.binder-leaf-container {
  display: flex;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  position: relative;
}

/* Notebook Binding rings simulation */
.binder-rings {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  padding: 40px 0;
  background-color: transparent;
  z-index: 10;
}

.ring-hole {
  width: 14px;
  height: 14px;
  background-color: #2c3e50;
  border-radius: 50%;
  box-shadow: 
    inset 2px 2px 4px rgba(0,0,0,0.8),
    2px 2px 0px rgba(255,255,255,0.4);
  position: relative;
  left: 21px;
}

/* Authentic squared math notebook grid */
.notebook-sheet {
  flex-grow: 1;
  background-color: #f7f9fa;
  background-image: 
    linear-gradient(rgba(200, 224, 240, 0.45) 1px, transparent 1.5px),
    linear-gradient(90deg, rgba(200, 224, 240, 0.45) 1px, transparent 1.5px);
  background-size: 16px 16px; /* 1.6cm scale grid lines */
  border-radius: 3px 12px 12px 3px;
  border: 1px solid #ccd1d9;
  border-left: 2px solid #aab2bd;
  padding: 24px 24px 24px 44px; /* Space for rings and margin red strip */
  position: relative;
  box-shadow: 
    0 10px 25px -5px rgba(0, 0, 0, 0.15),
    inset -1px 0px 5px rgba(0,0,0,0.05);
}

/* Vertically aligned Red line margin representing typical notebook folders */
.margin-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  background-color: rgba(235, 77, 75, 0.6);
  pointer-events: none;
}

.notebook-metadata {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #aab2bd;
  padding-bottom: 6px;
  margin-bottom: 16px;
  font-family: 'Caveat', cursive;
  font-size: 1.2rem;
  color: #4b6584;
}

.written {
  color: #0c2461;
  font-weight: bold;
}

.ruled-h2 {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #57606f;
  margin: 12px 0 24px 0;
}

/* Rule items list */
.notebook-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.notebook-links li {
  display: flex;
  flex-direction: column;
  position: relative;
}

.checkbox-box {
  position: absolute;
  left: -28px;
  top: 2px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #778ca3;
}

.handwritten-comment {
  font-size: 1.1rem;
  color: #57606f;
  margin-top: 1px;
}

/* MAGICAL HOVER EFFECTS: 
   1. Real highlighter highlighter effect (yellow marker) expanding underneath 
   2. Pen calligraphy stroke weight changes */
.ink-link {
  font-size: 1.35rem;
  font-weight: bold;
  color: #0c2461; /* Classic blue ink ballpoint pen style */
  text-decoration: none;
  display: inline-block;
  align-self: flex-start;
  transition: all 0.3s ease;
  padding: 0 4px;
  border-radius: 4px;
  position: relative;
}

/* Highlighter visual marker overlay background */
.ink-link::before {
  content: '';
  position: absolute;
  inset: 1px -2px;
  background-color: #fff200;
  opacity: 0;
  z-index: -1;
  border-radius: 4px 10px 4px 6px;
  transform: scaleY(0.7) scaleX(0);
  transform-origin: left center;
  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.15s ease;
}

.ink-link:hover {
  color: #000000;
  transform: rotate(-0.5deg) scale(1.02);
}

.ink-link:hover::before {
  opacity: 0.65;
  transform: scaleY(1) scaleX(1);
}

/* Pencil hand doodles at corner representing student drawer sketch */
.doodle-corner {
  position: absolute;
  bottom: 12px;
  right: 20px;
  opacity: 0.4;
  pointer-events: none;
}

.doodle-star {
  font-size: 1.4rem;
  color: #4b6584;
}

.doodle-cube {
  width: 16px;
  height: 16px;
  border: 1.5px solid #4b6584;
  margin-top: 4px;
  transform: rotate(15deg);
}
`
  },
  {
    id: 'computer',
    name: 'Computer Terminal Retro',
    iconName: 'Laptop',
    description: 'La cassa beige bombata di un vecchio monitor CRT con lo schermo incurvato, la griglia dei fosfori verdi luccicanti, riflessi, glitch ed un cursore intermittente.',
    html: `<div class="retro-pc-case">
  <!-- Glowing CRT Glass Bezel Cover -->
  <div class="monitor-glass shadow-2xl">
    <!-- Screen Scanlines Mesh -->
    <div class="crt-scanlines"></div>
    <div class="crt-flicker"></div>
    <div class="screen-glare"></div>
    
    <!-- System Shell Prompt Header -->
    <div class="terminal-shell">
      <div class="sys-info font-mono">
        BIOS v4.12 - MEM: 640KB BASE OK
        <br>[CODELINK INC. - SISTEMA OPERATIVO ATTIVO]
      </div>
      
      <!-- List of Hyperlinks in Matrix console screen -->
      <div class="console-entries mt-6">
        <div class="row">
          <span class="prompt">></span>
          <a href="https://stackoverflow.com" target="_blank" class="matrix-link">
            RUN_MAN_STACKOVERFLOW.EXE
          </a>
          <span class="status font-mono">[READY]</span>
        </div>
        
        <div class="row">
          <span class="prompt">></span>
          <a href="https://github.com" target="_blank" class="matrix-link">
            COM_LAUNCH_GITHUB.SYS
          </a>
          <span class="status font-mono">[READY]</span>
        </div>
        
        <div class="row">
          <span class="prompt">></span>
          <a href="https://npmjs.com" target="_blank" class="matrix-link">
            GET_DEPENDENCIES_NPM.BAT
          </a>
          <span class="status font-mono">[STABLE]</span>
        </div>
        
        <div class="row">
          <span class="prompt">></span>
          <a href="https://w3schools.com" target="_blank" class="matrix-link">
            READ_W3DOCS_ONLINE.HLP
          </a>
          <span class="status font-mono">[ONLINE]</span>
        </div>
      </div>
      
      <!-- Interactive Input Prompt with blinking cursors -->
      <div class="active-prompt mt-4 font-mono">
        <span class="prompt">></span>
        <span class="typing-placeholder">ATTESA UTENTE...</span>
        <span class="blinking-cursor">▒</span>
      </div>
    </div>
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

body {
  background-color: #121815;
  font-family: 'VT323', monospace;
  color: #3bf13b; /* Vibrant Phosphor green screen print */
  padding: 1rem;
}

.retro-pc-case {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  background-color: #ded1b8; /* Classic vintage beige computer case color */
  border-radius: 20px;
  padding: 24px;
  box-shadow: 
    0 30px 60px rgba(0,0,0,0.8),
    inset 0 4px 8px rgba(255,255,255,0.7),
    inset 0 -10px 20px rgba(0,0,0,0.4);
  border: 8px solid #bbaaa0;
  position: relative;
}

/* Curved CRT screen frame */
.monitor-glass {
  position: relative;
  background-color: #071c08;
  border-top: 15px solid #202b21;
  border-left: 15px solid #28372a;
  border-right: 15px solid #28372a;
  border-bottom: 20px solid #334635;
  border-radius: 30px;
  padding: 24px 20px 32px 20px;
  box-shadow: 
    inset 0 10px 30px rgba(0,0,0,0.95),
    0 10px 0 #333333;
  overflow: hidden;
}

/* CRT Scanlines overlays */
.crt-scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%, 
    rgba(0, 0, 0, 0.45) 50%
  ), linear-gradient(
    90deg, 
    rgba(255, 0, 0, 0.05), 
    rgba(0, 255, 0, 0.02), 
    rgba(0, 0, 255, 0.05)
  );
  background-size: 100% 4px, 6px 100%;
  z-index: 10;
  pointer-events: none;
}

/* Screen Flicker loop for realistic Retro atmosphere */
@keyframes crt-flicker-anim {
  0% { opacity: 0.98; }
  50% { opacity: 1; }
  100% { opacity: 0.97; }
}

.crt-flicker {
  position: absolute;
  inset: 0;
  background: rgba(18, 255, 18, 0.02);
  opacity: 0.15;
  animation: crt-flicker-anim 0.1s infinite;
  z-index: 9;
  pointer-events: none;
}

/* Glass mirror reflection */
.screen-glare {
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 150%;
  background: linear-gradient(
    135deg, 
    rgba(255,255,255,0.15) 0%, 
    rgba(255,255,255,0) 40%
  );
  transform: rotate(-30deg) translate(-20%, -20%);
  pointer-events: none;
  z-index: 8;
}

.terminal-shell {
  position: relative;
  z-index: 5;
}

.sys-info {
  font-size: 1.2rem;
  line-height: 1.25;
  letter-spacing: 0.5px;
  color: #82e0aa;
  text-shadow: 0 0 2px rgba(130, 224, 170, 0.5);
  border-bottom: 1px dashed rgba(59, 241, 59, 0.3);
  padding-bottom: 8px;
}

.console-entries {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.prompt {
  font-size: 1.5rem;
  color: #3bf13b;
  text-shadow: 0 0 4px #3bf13b;
}

.status {
  font-size: 1.1rem;
  color: #27ae60;
  margin-left: auto;
}

/* MAGICAL HOVER EFFECTS
   1. Matrix terminal neon text selection block
   2. Reverse coloring phosphor fill
   3. Terminal prompt shifting */
.matrix-link {
  font-size: 1.5rem;
  font-weight: 500;
  color: #3bf13b;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 2px 6px;
  transition: all 0.15s ease;
  letter-spacing: 0.5px;
  display: inline-block;
}

.matrix-link:hover {
  background-color: #3bf13b;
  color: #071c08;
  border-radius: 2px;
  text-shadow: none;
  box-shadow: 0 0 10px rgba(59, 241, 59, 0.89);
  transform: translateX(4px);
}

.active-prompt {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2ecc71;
  font-size: 1.25rem;
}

.typing-placeholder {
  opacity: 0.6;
}

@keyframes cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.blinking-cursor {
  animation: cursor-blink 1s infinite;
  font-weight: bold;
}
`
  },
  {
    id: 'telefono',
    name: 'Smartphone Moderno',
    iconName: 'Smartphone',
    description: 'Il corpo curvo di un telefono moderno con notch della fotocamera superiore, barra di stato, interfacce mobile-friendly ed icone con un effetto hover espandente.',
    html: `<div class="smartphone-bezel shadow-2xl">
  <!-- Top notch and speaker -->
  <div class="top-ears">
    <div class="notch-camera"></div>
    <div class="ear-speaker"></div>
  </div>

  <div class="smartphone-screen">
    <!-- Screen Header Status Bar -->
    <div class="status-bar font-mono">
      <span class="time">16:15</span>
      <div class="symbols">
        <span>5G</span>
        <span>🔋 99%</span>
      </div>
    </div>
    
    <!-- App UI Home Content -->
    <div class="screen-layout-container">
      <div class="app-brand">
        <h2>Codice Rapido App</h2>
        <p>Tocca per navigare all'istante</p>
      </div>
      
      <!-- List of app layout links styled like grid tiles -->
      <div class="app-links-grid">
        <a href="https://nextjs.org" target="_blank" class="app-tile">
          <div class="tile-icon">⚡</div>
          <span class="tile-title">Next.js Framework</span>
          <span class="tile-category">Development</span>
        </a>

        <a href="https://npmtrends.com" target="_blank" class="app-tile">
          <div class="tile-icon">📈</div>
          <span class="tile-title">NPM Trends</span>
          <span class="tile-category">Statistiche</span>
        </a>

        <a href="https://caniuse.com" target="_blank" class="app-tile">
          <div class="tile-icon">🎯</div>
          <span class="tile-title">Can I Use?</span>
          <span class="tile-category">Supporto Web</span>
        </a>

        <a href="https://mdn.mozilla.org" target="_blank" class="app-tile">
          <div class="tile-icon">📚</div>
          <span class="tile-title">MDN Web Docs</span>
          <span class="tile-category">Documentazione</span>
        </a>
      </div>
      
      <!-- Dock indicator bar at bottom center -->
      <div class="home-indicator"></div>
    </div>
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

body {
  background: radial-gradient(circle, #24242e 0%, #15151b 100%);
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  padding: 1rem;
}

.smartphone-bezel {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  border-radius: 40px;
  border: 12px solid #2d3436;
  background-color: #0b0c10;
  position: relative;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.7),
    inset 0 2px 5px rgba(255,255,255,0.15);
  box-sizing: border-box;
}

/* Smartphone Top bar Details */
.top-ears {
  height: 20px;
  background-color: #2d3436;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 20%;
  right: 20%;
  border-radius: 0 0 16px 16px;
  z-index: 20;
}

.notch-camera {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #0f1013;
  margin-right: 12px;
  box-shadow: inset 1px 1px 2px rgba(255,255,255,0.2);
}

.ear-speaker {
  width: 48px;
  height: 4px;
  border-radius: 2px;
  background-color: #1e272e;
}

/* Smartphone Internal OLED glow Screen */
.smartphone-screen {
  background-color: #0d1117;
  border-radius: 28px;
  overflow: hidden;
  padding: 16px 16px 20px 16px;
  position: relative;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.65);
  padding: 4px 6px;
  margin-bottom: 24px;
}

.symbols {
  display: flex;
  gap: 8px;
}

/* Page inner layout content */
.screen-layout-container {
  display: flex;
  flex-direction: column;
}

.app-brand {
  margin-bottom: 24px;
  text-align: center;
}

.app-brand h2 {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #0cebeb, #20e3b2, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-brand p {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.45);
  margin-top: 2px;
}

/* Grid layout for Smartphone App Tiles */
.app-links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 32px;
}

.app-tile {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 16px 12px;
  text-decoration: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

.tile-icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
  transition: transform 0.2s ease;
}

.tile-title {
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.25;
}

.tile-category {
  font-size: 0.62rem;
  color: rgba(255,255,255,0.45);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
}

/* MAGICAL HOVER STATE: 
   1. Dynamic futuristic zoom scale and cyan/blue border neon glow
   2. Expanding internal circle backing */
.app-tile::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(12, 235, 235, 0.1) 0%, rgba(0, 114, 255, 0) 70%);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease;
  pointer-events: none;
}

.app-tile:hover {
  background-color: rgba(255, 255, 255, 0.07);
  border-color: #0cebeb;
  transform: translateY(-4px);
  box-shadow: 
    0 12px 20px rgba(12, 235, 235, 0.15),
    0 0 10px rgba(12, 235, 235, 0.1);
}

.app-tile:hover .tile-icon {
  transform: scale(1.15) translateY(-2px);
}

.app-tile:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

/* Home Indicator Bar */
.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(255,255,255,0.4);
}
`
  },
  {
    id: 'blocknote',
    name: 'Blocknote Giallo',
    iconName: 'StickyNote',
    description: 'Il classico blocco-notes a righine orizzontali gialle con spirale metallica superiore, strappo irregolare del foglio e link appunti agganciati come clip colorate.',
    html: `<div class="notepad-wrapper">
  <!-- Top spiral metal binding bindings details -->
  <div class="notepad-spirals">
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
    <div class="wire-loop"></div>
  </div>

  <div class="note-paper shadow-2xl">
    <!-- Red torn perforation stripe at the very top -->
    <div class="torn-perforation"></div>
    
    <div class="paper-body">
      <!-- Notebook branding -->
      <div class="paper-brand font-mono">MEMO PAD • EXTRA FINO</div>
      
      <div class="note-headline">
        <h2>Appunti di Studio & Link Rapidi</h2>
        <div class="date font-mono">PAG_01 / RIF_2026</div>
      </div>
      
      <!-- Notebook elements grouped -->
      <div class="memo-links-container">
        <a href="https://v2.tailwindcss.com" target="_blank" class="memo-item-link" style="--clip-color: #ff4757;">
          <span class="paperclip">📎</span>
          <div class="memo-details">
            <span class="memo-title">Tailwind v2 Docs</span>
            <span class="memo-quote">Rivedi le configurazioni webpack e utility legacy.</span>
          </div>
        </a>

        <a href="https://codesandbox.io" target="_blank" class="memo-item-link" style="--clip-color: #ffa502;">
          <span class="paperclip">📎</span>
          <div class="memo-details">
            <span class="memo-title">CodeSandbox Web IDE</span>
            <span class="memo-quote">Test veloci di piccoli prototipi React.</span>
          </div>
        </a>

        <a href="https://typescriptlang.org" target="_blank" class="memo-item-link" style="--clip-color: #2ed573;">
          <span class="paperclip">📎</span>
          <div class="memo-details">
            <span class="memo-title">TypeScript Playground</span>
            <span class="memo-quote">Perfetto per testare tipi statici ed enum compilate.</span>
          </div>
        </a>

        <a href="https://vite.dev/guide/" target="_blank" class="memo-item-link" style="--clip-color: #1e90ff;">
          <span class="paperclip">📎</span>
          <div class="memo-details">
            <span class="memo-title">Vite Plugins Guide</span>
            <span class="memo-quote">Come estendere la configurazione del dev server.</span>
          </div>
        </a>
      </div>
      
      <div class="signature font-mono text-center">
        -- NON DIMENTICARE DI CONDIVIDERE IL CODICE --
      </div>
    </div>
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Kalam:wght@400;700&display=swap');

body {
  background-color: #1e272e;
  font-family: 'Kalam', cursive;
  color: #2d3436;
  padding: 1rem;
}

.notepad-wrapper {
  width: 100%;
  max-width: 580px;
  margin: 1.5rem auto 0 auto;
  position: relative;
}

/* Spiral notepad bindings layout */
.notepad-spirals {
  display: flex;
  justify-content: space-around;
  width: 88%;
  margin: 0 auto;
  position: relative;
  top: 14px;
  z-index: 10;
}

.wire-loop {
  width: 12px;
  height: 32px;
  background: linear-gradient(90deg, #747d8c 20%, #ced6e0 50%, #747d8c 80%);
  border-radius: 6px;
  box-shadow: 
    0 4px 4px rgba(0,0,0,0.3),
    inset 0 1px 2px rgba(255,255,255,0.4);
}

/* Classic yellow legal note paper sheet */
.note-paper {
  background-color: #fef5d1; /* Soft warm yellow/buff notepad paper */
  background-image: linear-gradient(#f9eaad 1px, transparent 1px);
  background-size: 100% 28px; /* Lined paper lines */
  border-radius: 0 0 12px 12px;
  padding: 24px 24px 28px 24px;
  border-left: 2px solid #ecd38c;
  border-right: 1px solid #dfc783;
  border-bottom: 3px solid #b7a268;
  position: relative;
}

.torn-perforation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background-color: #e04d4d; /* Perforation tear strip red guide */
  background-image: radial-gradient(circle, transparent 4px, #fef5d1 4px);
  background-size: 12px 16px;
  background-position: center top -8px;
  z-index: 5;
}

.paper-body {
  margin-top: 10px;
}

.paper-brand {
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  color: #90845a;
  opacity: 0.7;
  text-align: right;
  margin-bottom: 12px;
}

.note-headline h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e272e;
  line-height: 1.25;
}

.note-headline .date {
  font-size: 0.8rem;
  color: #90845a;
  margin-top: 2px;
  margin-bottom: 24px;
}

/* List of active memo item folders and clips */
.memo-links-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.memo-item-link {
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: #2d3436;
  padding: 10px 12px 10px 32px; /* Space on left for paperclip overlay */
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  background-color: rgba(255, 255, 255, 0); /* transparent base */
}

/* Colored visual utility metal paperclip */
.paperclip {
  position: absolute;
  left: 6px;
  top: 6px;
  font-size: 1.3rem;
  transition: all 0.25s ease;
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.15));
}

.memo-details {
  display: flex;
  flex-direction: column;
}

.memo-title {
  font-family: 'Kalam', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.1;
  color: #1e272e;
}

.memo-quote {
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  color: #635f49;
  line-height: 1.2;
  margin-top: 2px;
}

/* MAGICAL HOVER STATE:
   1. Paper clip rotates slightly and changes shadow depth
   2. Highlighter / document peel transform effect 
   3. Color-coded clip backdrop glow */
.memo-item-link::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.45);
  border-left: 4px solid var(--clip-color, #1e90ff);
  opacity: 0;
  z-index: -1;
  border-radius: 4px;
  transition: opacity 0.2s ease;
}

.memo-item-link:hover {
  transform: scale(1.02) rotate(0.5deg);
  padding-left: 36px;
}

.memo-item-link:hover .paperclip {
  transform: rotate(-15deg) scale(1.15) translateY(-2px);
  filter: drop-shadow(2px 3px 2px rgba(0,0,0,0.25));
}

.memo-item-link:hover::after {
  opacity: 1;
}

.signature {
  margin-top: 32px;
  padding-top: 12px;
  border-top: 1px dashed rgba(45, 52, 54, 0.2);
  font-size: 0.85rem;
  color: #7b704c;
  word-spacing: 2px;
}
`
  },
  {
    id: 'astronave',
    name: 'Pannello Astronave',
    iconName: 'Cpu',
    description: 'Un cockpit spaziale futuristico. Presenta indicatori d\'assetto, griglie stellari rotanti, barre di potenza neon e dock d\'attracco con collegamenti ad emissione fotonica al passaggio mouse.',
    html: `<div class="starship-cockpit text-[#00FFFF]">
  <div class="bezel-overlay"></div>
  
  <!-- Diagnostic Cockpit info -->
  <div class="hud-header">
    <div class="system-status"> SENSORI DEEP_SPACE • ATTIVI </div>
    <div class="target-grid">
      <div class="grid-radar font-sans">
        <div class="radar-sweep"></div>
        <div class="radar-dot"></div>
      </div>
      <div class="hud-coordinates font-mono">
        <span class="coord">SECTOR: TR-82</span>
        <span class="coord">WARP DRIVE: 4.8</span>
      </div>
    </div>
  </div>

  <!-- Space Thrusters / Power meters (decorative progress bars) -->
  <div class="hud-power-meters font-mono">
    <div class="power-bar">
      <span class="label">REATTORE_FUSIONE</span>
      <div class="bar"><div class="bar-fill filled-92"></div></div>
    </div>
    <div class="power-bar">
      <span class="label">SCUDI_DEFLETTORI</span>
      <div class="bar"><div class="bar-fill filled-75"></div></div>
    </div>
  </div>

  <!-- Space routes hyperlinks -->
  <div class="starship-nav">
    <h3 class="nav-title font-mono uppercase tracking-widest text-fuchsia-500 font-bold mb-3">DESTINAZIONI DI IPER-SALTO</h3>
    
    <a href="https://www.nasa.gov" target="_blank" class="warp-dock-link">
      <span class="indicator-led"></span>
      <div class="link-label">
        <span class="destination font-mono">STAZIONE_NASA_CORP.SYS</span>
        <span class="sub-destination font-mono">Coordinate: Alpha_Centauri_C</span>
      </div>
      <span class="warp-charge font-mono">[DOCK_LINK]</span>
    </a>

    <a href="https://www.spacex.com" target="_blank" class="warp-dock-link">
      <span class="indicator-led"></span>
      <div class="link-label">
        <span class="destination font-mono">CANTIERE_NAVALE_SPACEX</span>
        <span class="sub-destination font-mono">Coordinate: Mars_Base_One</span>
      </div>
      <span class="warp-charge font-mono">[DOCK_LINK]</span>
    </a>

    <a href="https://it.wikipedia.org/wiki/Via_Lattea" target="_blank" class="warp-dock-link">
      <span class="indicator-led"></span>
      <div class="link-label">
        <span class="destination font-mono">GUIDA_GALATTICA_MILKYWAY</span>
        <span class="sub-destination font-mono">Database: Settore_Solare_01</span>
      </div>
      <span class="warp-charge font-mono">[DOCK_LINK]</span>
    </a>
  </div>
  
  <div class="cockpit-footer font-mono">
    DRIVE_STATE: IPER-SPAZIO DETECT_STABLE
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

body {
  background-color: #02040c;
  font-family: 'Share Tech Mono', monospace;
  color: #00FFFF;
  padding: 1rem;
}

.starship-cockpit {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: #050a1b;
  border: 2px solid #00FFFF;
  padding: 24px;
  box-shadow: 
    0 0 35px rgba(0, 255, 255, 0.25),
    inset 0 0 20px rgba(0, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}

/* Glass glare scanning CRT sheen */
.bezel-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 255, 255, 0.05) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 255, 255, 0.03) 100%
  );
  pointer-events: none;
  z-index: 10;
}

.hud-header {
  border-bottom: 1px solid rgba(0, 255, 255, 0.3);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.system-status {
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
  margin-bottom: 8px;
}

.target-grid {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Circle radar rotating sweep simulation */
.grid-radar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(0, 255, 255, 0.4);
  position: relative;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 80%);
}

.radar-sweep {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(0, 255, 255, 0.4) 0deg, transparent 90deg);
  animation: sweep 4s linear infinite;
}

@keyframes sweep {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.radar-dot {
  position: absolute;
  top: 24%;
  left: 65%;
  width: 5px;
  height: 5px;
  background-color: #FF007F;
  border-radius: 50%;
  box-shadow: 0 0 8px #FF007F;
  animation: pulse-dot 1.5s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.hud-coordinates {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.75rem;
  color: rgba(0, 255, 255, 0.6);
}

/* Simulated diagnostic level bars */
.hud-power-meters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.power-bar {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.power-bar .label {
  font-size: 0.65rem;
  color: rgba(0, 255, 255, 0.5);
  letter-spacing: 1px;
}

.power-bar .bar {
  height: 6px;
  background-color: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #00FFFF, #FF007F);
  box-shadow: 0 0 6px #00FFFF;
}

.filled-92 { width: 92%; }
.filled-75 { width: 75%; }

/* Navigation Hyperlinks Warp Docks with Futuristic micro-glow triggers */
.warp-dock-link {
  display: flex;
  align-items: center;
  background-color: rgba(0, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.2);
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 12px;
  text-decoration: none;
  color: #c9fbfb;
  position: relative;
  transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
}

.warp-dock-link:last-child {
  margin-bottom: 0;
}

.indicator-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #00FFFF;
  box-shadow: 0 0 6px #00FFFF;
  margin-right: 14px;
  transition: all 0.25s ease;
}

.link-label {
  flex-grow: 1;
}

.destination {
  display: block;
  font-weight: bold;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.sub-destination {
  display: block;
  font-size: 0.68rem;
  color: rgba(0, 255, 255, 0.5);
}

.warp-charge {
  font-size: 0.7rem;
  color: rgba(0, 255, 255, 0.6);
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
}

/* MEGA SPACECRAFT DOCKING HOVER STATES */
.warp-dock-link:hover {
  background-color: rgba(0, 255, 255, 0.08);
  border-color: #FF007F;
  transform: scale(1.02) translateX(4px);
  box-shadow: 
    0 0 15px rgba(255, 0, 127, 0.3),
    inset 0 0 10px rgba(0, 255, 255, 0.1);
}

.warp-dock-link:hover .indicator-led {
  background-color: #FF007F;
  box-shadow: 0 0 10px #FF007F;
  transform: scale(1.3);
}

.warp-dock-link:hover .warp-charge {
  color: #FF007F;
  text-shadow: 0 0 6px #FF007F;
  transform: scale(1.05);
}

.cockpit-footer {
  border-top: 1px dashed rgba(0, 255, 255, 0.2);
  padding-top: 10px;
  font-size: 0.62rem;
  text-align: center;
  color: rgba(0, 255, 255, 0.4);
}`
  },
  {
    id: 'cassa',
    name: 'Cassa di Spedizione',
    iconName: 'Package',
    description: 'Una cassa doganale in mogano scuro e legno granuloso. Dispone di timbri fragili, codici a barre industriali e collegamenti che tirano fuori bollette di dazio doganale.',
    html: `<div class="shipping-crate-container">
  <div class="crate-wooden-surface shadow-2xl">
    
    <!-- Heavy plank joiner borders -->
    <div class="plank-vertical-grooves"></div>
    
    <!-- Shipping label adhesive paper piece overlay -->
    <div class="customs-manifest">
      <div class="manifest-stamp">FRAGILE</div>
      
      <div class="manifest-header pb-2 mb-3">
        <h2 class="manifest-title font-bold tracking-tight text-black text-xs uppercase">BOLLA DI CARGO INTERNAZIONALE</h2>
        <p class="manifest-meta text-[9px] font-mono mt-1 text-neutral-600">ID: #3210-CR_9A • DOGANA GENERALE</p>
      </div>

      <!-- Links disguised as freight custom bills -->
      <div class="cargo-bill-links">
        
        <a href="https://www.ups.com" target="_blank" class="manifest-bill">
          <div class="barcode-stub">
            <div class="barcode-line"></div>
            <span class="freight-stub">CARGO_01</span>
          </div>
          <div class="bill-desc">
            <span class="cargo-title text-xs font-bold block text-black">Piattaforma Spedizioni S.p.A.</span>
            <span class="cargo-details block text-[9px] text-neutral-600 font-sans">Tracciamento container logistica marittima.</span>
          </div>
          <div class="stamp-check">✓ APERTO</div>
        </a>

        <a href="https://www.fedex.com" target="_blank" class="manifest-bill">
          <div class="barcode-stub">
            <div class="barcode-line"></div>
            <span class="freight-stub">CARGO_02</span>
          </div>
          <div class="bill-desc">
            <span class="cargo-title text-xs font-bold block text-black">Centro Smistamento Aereo</span>
            <span class="cargo-details block text-[9px] text-neutral-600 font-sans">Consegne globali ultrarapide via cargo.</span>
          </div>
          <div class="stamp-check font-bold">✓ APERTO</div>
        </a>

        <a href="https://www.amazon.it" target="_blank" class="manifest-bill">
          <div class="barcode-stub">
            <div class="barcode-line"></div>
            <span class="freight-stub">CARGO_03</span>
          </div>
          <div class="bill-desc">
            <span class="cargo-title text-xs font-bold block text-black">Rimessa Logistica Globale</span>
            <span class="cargo-details block text-[9px] text-neutral-600 font-sans">Evasione scorte e catena di fornitura.</span>
          </div>
          <div class="stamp-check">✓ APERTO</div>
        </a>

      </div>

      <!-- Footer Barcode -->
      <div class="crate-manifest-barcode pt-2 mt-4 flex items-center justify-between">
        <div class="barcode-strips flex items-stretch h-8">
          <div class="w-1 bg-black mr-0.5"></div>
          <div class="w-0.5 bg-black mr-1"></div>
          <div class="w-1.5 bg-black mr-0.5"></div>
          <div class="w-0.5 bg-black mr-0.5"></div>
          <div class="w-1 bg-black mr-1"></div>
          <div class="w-2 bg-black"></div>
        </div>
        <p class="barcode-text font-mono text-[8px] text-neutral-700 uppercase">SWISS_DOCK_VERIFIED_AUTH</p>
      </div>

    </div>

    <!-- Wooden stenciled stamps on the outer crate body -->
    <div class="stenciled-cargo-stamp font-mono italic">
      LOCK_PORT_X7
    </div>
  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

body {
  background-color: #3e2723;
  font-family: 'Special Elite', cursive, monospace;
  color: #efebe9;
  padding: 1rem;
}

.shipping-crate-container {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
}

.crate-wooden-surface {
  background-color: #a1887f; /* Warm sandy/brown wood tint */
  background-image: 
    linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.04) 50%),
    linear-gradient(rgba(255,255,255,0.03) 50%, transparent 50%);
  background-size: 80px 100%, 100% 80px;
  border: 14px solid #5d4037; /* Dark mahogany outer frame borders */
  padding: 24px;
  border-radius: 4px;
  box-shadow: 
    0 25px 60px rgba(0,0,0,0.7),
    inset 0 4px 6px rgba(255,255,255,0.2),
    inset 0 -10px 15px rgba(0,0,0,0.5);
  position: relative;
  overflow: hidden;
}

/* Horizontal planks joins */
.plank-vertical-grooves {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 33%;
  width: 4px;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: inset 1px 0 2px rgba(255,255,255,0.1);
  pointer-events: none;
}

/* Adhesive customs document wrapper */
.customs-manifest {
  background-color: #f1ebd9; /* Old yellowed shipping paper */
  padding: 24px;
  border-radius: 2px;
  color: #1a1a1a;
  box-shadow: 
    2px 10px 20px rgba(0,0,0,0.4),
    inset 0 0 12px rgba(93, 64, 55, 0.15);
  border: 1px solid #dcd3b8;
  position: relative;
  z-index: 5;
  transform: rotate(-1.5deg);
}

.manifest-stamp {
  position: absolute;
  top: 14px;
  right: 14px;
  color: #c62828;
  border: 3px double #c62828;
  border-radius: 4px;
  padding: 3px 10px;
  font-size: 0.85rem;
  font-weight: bold;
  transform: rotate(12deg);
  opacity: 0.8;
  letter-spacing: 1px;
}

.manifest-header {
  border-bottom: 2px solid #1a1a1a;
}

.cargo-bill-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.manifest-bill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f6e8;
  border: 1.5px dashed #8d8d8d;
  padding: 10px 14px;
  text-decoration: none;
  color: #1a1a1a;
  transition: all 0.25s ease;
  position: relative;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.barcode-stub {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #bbb;
  padding-right: 12px;
  margin-right: 12px;
}

.barcode-line {
  width: 24px;
  height: 12px;
  background: repeating-linear-gradient(90deg, black, black 2px, transparent 2px, transparent 4px);
}

.freight-stub {
  font-size: 0.55rem;
  font-weight: bold;
  color: #444;
  margin-top: 3px;
  font-family: monospace;
}

.bill-desc {
  flex-grow: 1;
}

.stamp-check {
  font-size: 0.62rem;
  color: #2e7d32;
  border: 1px solid #2e7d32;
  padding: 2px 6px;
  border-radius: 3px;
  transform: rotate(-3deg);
  opacity: 0.85;
  font-weight: bold;
}

/* SHAKING CARGO SHIP STAMP HOVER STATES */
.manifest-bill:hover {
  background-color: #ffffff;
  border-color: #1a1a1a;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  z-index: 10;
}

.manifest-bill:hover .stamp-check {
  background-color: #2e7d32;
  color: #ffffff;
  transform: rotate(3deg) scale(1.1);
  opacity: 1;
}

.crate-manifest-barcode {
  border-top: 1px solid #111;
}

.stenciled-cargo-stamp {
  position: absolute;
  left: 20px;
  bottom: 12px;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.35);
  letter-spacing: 1.5px;
}`
  },
  {
    id: 'cinema',
    name: 'Biglietto Cinema Retro',
    iconName: 'Ticket',
    description: 'Un biglietto d\'ingresso vintage perforato ad un vecchio cinema. Dotato di diciture in corsivo, strappi tratteggiati per la matrice di sicurezza e link stampati come file di poltrone.',
    html: `<div class="vintage-ticket-container">
  <div class="ticket-body shadow-2xl">
    
    <!-- Left perforation notches circles simulating tears -->
    <div class="perforation-left">
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
    </div>

    <!-- Ticket Core Guts wrapper -->
    <div class="ticket-content-wrapper">
      
      <div class="ticket-top pb-2 mb-3 text-center">
        <h2 class="ticket-vintage-title font-bold tracking-widest text-[#FFDF00] uppercase text-xs">CINEMA BROADWAY VINTAGE</h2>
        <span class="adm-badge font-mono tracking-wider font-bold">★ AMMETTI_UNO ★ NO_REFUNDS</span>
      </div>

      <!-- Links within seat selections or categories -->
      <div class="cinema-showtimes-navigation font-sans">
        
        <a href="https://www.imdb.com" target="_blank" class="show-link">
          <span class="seat-badge">FILA_A</span>
          <div class="show-label flex-grow pl-3">
            <span class="show-movie-title block text-xs font-bold">IMDb Database Cinema</span>
            <span class="show-meta block text-[9px] text-white/70">Archivio storico attori e recensioni di film d\'epoca.</span>
          </div>
          <span class="price-badge">$10.50</span>
        </a>

        <a href="https://www.netflix.com" target="_blank" class="show-link">
          <span class="seat-badge">FILA_B</span>
          <div class="show-label flex-grow pl-3">
            <span class="show-movie-title block text-xs font-bold">Canale Streaming Netflix</span>
            <span class="show-meta block text-[9px] text-white/70">Catalogo lungometraggi e produzioni moderne.</span>
          </div>
          <span class="price-badge">$12.00</span>
        </a>

        <a href="https://www.youtube.com" target="_blank" class="show-link">
          <span class="seat-badge">FILA_C</span>
          <div class="show-label flex-grow pl-3">
            <span class="show-movie-title block text-xs font-bold">Trailer & Spezzoni Celebri</span>
            <span class="show-meta block text-[9px] text-white/70">Archivio video di trailer e clip cinematografiche d\'epoca.</span>
          </div>
          <span class="price-badge">$08.50</span>
        </a>

      </div>

      <!-- Perforated Tear-off line -->
      <div class="ticket-tear-connector my-4 relative">
        <div class="tear-notch-top"></div>
        <div class="tear-notch-bottom"></div>
      </div>

      <div class="ticket-matrix-stub flex justify-between items-center font-mono">
        <div class="stub-serial">TICKET_SERIAL: #72314-X8</div>
        <div class="stub-icon text-xl text-[#FFDF00]">🎬</div>
      </div>

    </div>

    <!-- Right perforation notches circles simulating tears -->
    <div class="perforation-right">
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
    </div>

  </div>
</div>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Arbutus+Slab&display=swap');

body {
  background-color: #1c1a1b;
  font-family: 'Arbutus Slab', serif, sans-serif;
  color: #fff;
  padding: 1rem;
}

.vintage-ticket-container {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
}

.ticket-body {
  background-color: #bf1727; /* Rich dark-vermilion theater ticket card background */
  border-radius: 8px;
  border: 4px solid #8c0c16;
  padding: 24px 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0,0,0,0.6),
    inset 0 4px 10px rgba(255,255,255,0.2),
    inset 0 -4px 10px rgba(0,0,0,0.4);
}

/* Semi-circle punches on left and right sides */
.perforation-left, .perforation-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px 0;
}

.perforation-left { left: -8px; }
.perforation-right { right: -8px; }

.hole {
  width: 16px;
  height: 16px;
  background-color: #1c1a1b; /* Cut outward match background */
  border-radius: 50%;
  border: 2px solid #8c0c16;
}

.ticket-top {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
}

.adm-badge {
  font-size: 0.72rem;
  color: #ffffff;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 2.5px 10px;
  border-radius: 99px;
  display: inline-block;
  margin-top: 4px;
}

.cinema-showtimes-navigation {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.show-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  color: #bf1727;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.25s ease;
  border: 2px solid transparent;
}

.seat-badge {
  font-size: 0.65rem;
  background-color: #bf1727;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 2px;
  font-family: monospace;
}

.price-badge {
  font-size: 0.68rem;
  background-color: #faf5d9;
  border: 1px solid #bf1727;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: bold;
}

/* DASHED LINE TEAR NOTCHES (Simulating coupon perforation) */
.ticket-tear-connector {
  border-top: 2px dashed rgba(255, 255, 255, 0.4);
}

.tear-notch-top, .tear-notch-bottom {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #1c1a1b;
  border-radius: 50%;
  border: 2px solid #8c0c16;
}

.tear-notch-top {
  top: -7px;
  left: -38px;
}

.tear-notch-bottom {
  bottom: -7px;
  right: -38px;
}

.ticket-matrix-stub {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.7);
}

/* GLORIOUS TEATRE TICKET FLICKERING HOVER STATES */
.show-link:hover {
  background-color: #FFDF00; /* Broadway gold background tint on hover */
  color: #1a1a1a;
  transform: scale(1.03) rotate(-1deg);
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}

.show-link:hover .seat-badge {
  background-color: #1a1a1a;
  color: #FFDF00;
}

.show-link:hover .price-badge {
  background-color: #1a1a1a;
  color: #ffffff;
  border-color: #1a1a1a;
}`
  }
];
