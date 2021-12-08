export interface WindowLayout {
  name: string;
  cards: string[];
  restored?: boolean;
}

export interface Preset {
  overview: WindowLayout;
}
