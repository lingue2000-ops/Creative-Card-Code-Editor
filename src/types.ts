export interface CardTemplate {
  id: string;
  name: string;
  iconName: string;
  html: string;
  css: string;
  description: string;
}

export interface EditorFile {
  name: string;
  type: 'html' | 'css';
  content: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  type: 'hover' | 'click' | 'edit' | 'reset';
  message: string;
}
