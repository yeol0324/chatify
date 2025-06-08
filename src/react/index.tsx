// src/react/index.tsx
import React, { useRef, useEffect } from "react";
import { Chatify } from "../index";

/**
 * Interface defining the structure of a chat message
 * @interface ChatifyData
 * @property {string | number} id - Unique identifier for the message
 * @property {string} content - The actual message content
 * @property {Date} timestamp - When the message was sent/received
 */
interface ChatifyData {
  id: string | number;
  content: string;
  timestamp: Date;
  // Additional data fields can be added here as needed
}

/**
 * Props interface for the ChatifyComponent
 * @interface ChatifyComponentProps
 * @property {ChatifyData[]} data - Array of chat messages to be displayed
 */
interface ChatifyComponentProps {
  data: ChatifyData[];
  // Additional configuration options can be added here
}

/**
 * React component that wraps the Chatify library
 * This component manages the lifecycle of the Chatify instance
 * and handles the rendering of the chat interface
 */
const ChatifyComponent = (props: ChatifyComponentProps): React.ReactElement => {
  // Reference to the container div where the chat will be rendered
  const containerRef = useRef<HTMLDivElement>(null);
  // Reference to store the Chatify instance
  const chatifyInstanceRef = useRef<Chatify | null>(null);

  useEffect(() => {
    // Effect runs when component mounts or when data prop changes
    if (containerRef.current) {
      // Clean up existing instance if it exists
      if (chatifyInstanceRef.current) {
        chatifyInstanceRef.current.destroy();
      }
      // Create new Chatify instance with current data
      const options = {
        data: props.data /* Additional props can be passed here */,
      };
      chatifyInstanceRef.current = new Chatify(containerRef.current, options);
    }

    // Cleanup function that runs when component unmounts
    return () => {
      chatifyInstanceRef.current?.destroy();
    };
  }, [props.data]); // Re-run effect when data prop changes

  return <div>hello</div>;
};

export { ChatifyComponent };
