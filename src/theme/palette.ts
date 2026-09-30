export type Palette = {
  paper: string;
  ink: string;
  card: string;
  muted: string;
  line: string;
  progress: string;
  track: string;
  stamp: string;
  header: string;
  onHeader: string;
  onHeaderMuted: string;
  tint: string;
  onNeon: string;
  field: string;
};

const neon = '#C6FF3D';

export const lightPalette: Palette = {
  paper: '#F4F4F4',
  ink: '#111111',
  card: '#FFFFFF',
  muted: '#8A8A8A',
  line: '#E8E8E8',
  progress: neon,
  track: '#EEEEEE',
  stamp: neon,
  header: '#111111',
  onHeader: '#FFFFFF',
  onHeaderMuted: '#B5B5B5',
  tint: '#F3F3F3',
  onNeon: '#111111',
  field: '#EFEFEF',
};

export const darkPalette: Palette = {
  paper: '#0A0A0A',
  ink: '#FFFFFF',
  card: '#161616',
  muted: '#8E8E8E',
  line: '#2A2A2A',
  progress: neon,
  track: '#2A2A2A',
  stamp: neon,
  header: '#000000',
  onHeader: '#FFFFFF',
  onHeaderMuted: '#A3A3A3',
  tint: '#222222',
  onNeon: '#111111',
  field: '#1C1C1C',
};
