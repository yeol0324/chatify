// src/index.ts

/**
 * Interface defining the configuration options for the Chatify instance
 * @interface ChatifyOptions
 * @property {any[]} data - Array of chat messages in JSON format
 * @property {Object} [options] - Additional configuration options for customization
 *   - Design customization
 *   - Animation settings
 *   - Event callbacks
 */
interface ChatifyOptions {
  data: any[]; // Array of chat messages in JSON format
  // ... Additional options for design/animation customization and callback functions
}

/**
 * Chatify - A customizable chat interface library
 * This class handles the creation and management of chat UI elements
 */
export class Chatify {
  private container: HTMLElement;
  private options: ChatifyOptions;

  /**
   * Creates a new Chatify instance
   * @param {HTMLElement} container - The HTML element where the chat interface will be rendered
   * @param {ChatifyOptions} options - Configuration options for the chat interface
   * @throws {Error} If the container element is not found
   */
  constructor(container: HTMLElement, options: ChatifyOptions) {
    if (!container) {
      throw new Error("Chatify: Container element not found.");
    }
    this.container = container;
    this.options = options;

    this.render();
  }

  /**
   * Core method for rendering the chat interface
   * This method is responsible for:
   * - Creating the chat UI structure
   * - Rendering message bubbles based on the provided data
   * - Setting up initial event listeners
   */
  private render() {
    this.container.innerHTML = `<h1>Chatify Rendered!</h1>`;
    // Logic for rendering message bubbles based on JSON data will be implemented here
    console.log("Rendering chat with options:", this.options);
  }

  /**
   * Adds a new message to the chat interface
   * @param {any} message - The message object to be added
   * This method will:
   * - Create a new message bubble
   * - Animate the message entry
   * - Update the chat history
   */
  public addMessage(message: any) {
    console.log("Adding new message:", message);
    // Implementation for adding new messages will go here
  }

  /**
   * Cleanup method to properly destroy the Chatify instance
   * This method is crucial for:
   * - Removing all event listeners
   * - Cleaning up DOM elements
   * - Preventing memory leaks
   * Should be called when the chat interface is no longer needed
   */
  public destroy() {
    console.log("Chatify instance destroyed.");
    // Remove all event listeners and clean up created DOM elements
    this.container.innerHTML = "";
  }
}
