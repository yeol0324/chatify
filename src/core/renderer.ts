// src/core/renderer.ts
import { ChatifyOptions, Message } from "./types.js";

export class Renderer {
  private container: HTMLElement;
  private options: ChatifyOptions;

  constructor(container: HTMLElement, options: ChatifyOptions) {
    this.container = container;
    this.options = options;
    console.log("Renderer initialized");
  }

  // 초기 메시지 렌더링
  public renderInitial(messages: Message[]) {
    // initialize container
    this.container.innerHTML = "";

    // create wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "chatify-messages-wrapper";

    // create bubble element
    messages.forEach((message) => {
      const bubbleElement = this.createBubbleElement(message);
      wrapper.appendChild(bubbleElement);
    });

    // append wrapper to container
    this.container.appendChild(wrapper);
  }

  // create bubble element
  private createBubbleElement(message: Message): HTMLElement {
    const bubble = document.createElement("div");

    const isMine = message.sender.id === this.options.currentUserId;

    // set CSS class
    bubble.className = "chatify-message-bubble";
    bubble.classList.add(isMine ? "is-mine" : "is-theirs");

    // set bubble innerHTML
    bubble.innerHTML = `
      <div class="sender-name">${message.sender.name}</div>
      <div class="message-text">${message.text}</div>
    `;
    // [TODO] add timestamp

    return bubble;
  }

  public appendMessage(message: Message) {
    // [TODO]
  }

  public destroy() {
    this.container.innerHTML = "";
  }
}
