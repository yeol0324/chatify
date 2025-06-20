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
  /**
   * 현재 사용자의 ID
   * 이 ID를 기준으로 "나"의 메시지와
   * "상대방"의 메시지를 구분
   */
  currentUserId: string | number;
  // - Design customization
  // - Animation settings
  // - Event callbacks
}
