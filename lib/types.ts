export interface Choice {
  label: string;
  target: string;
}

export interface StoryNode {
  text: string;
  isEnding: boolean;
  choices: Choice[];
}

export interface StoryData {
  title: string;
  language: string;
  audience: string;
  start: string;
  nodes: Record<string, StoryNode>;
}
