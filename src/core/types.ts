// src/core/types.ts

export interface Message {
  id: string | number;
  text: string;
  timestamp: string;
  sender: {
    id: string | number;
    name: string;
    avatar?: string; // Image
  };
}

export interface ChatifyOptions {
  data: Message[];
  // TODO: Add options
  // - Design customization
  // - Animation settings
  // - Event callbacks
}
