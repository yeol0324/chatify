// src/core/index.ts

// 1. 필요한 타입과 전문가(모듈)들을 모두 불러옵니다.
import { ChatifyOptions, Message } from "./core/types.js";
import { Renderer } from "./core/renderer.js";
// import { Animator } from './core/animator';
// import { Scroller } from './core/scroller';

/**
 * Chatify 라이브러리의 메인 클래스.
 * 렌더링, 애니메이션, 스크롤 등 모든 하위 모듈을 총괄하고
 * 외부로 공개되는 API를 제공합니다.
 */
export class Chatify {
  // --- Private 속성: 내부적으로만 사용하는 변수들 ---

  private container: HTMLElement;
  private options: ChatifyOptions;

  // 각 전문가(모듈)의 인스턴스를 저장합니다.
  // CEO가 각 부서의 책임자들을 알고 있는 것과 같습니다.
  private renderer: Renderer;
  // private animator: Animator;
  // private scroller: Scroller;

  /**
   * 새로운 Chatify 인스턴스를 생성합니다.
   * @param container 채팅 인터페이스가 렌더링될 HTML 엘리먼트
   * @param options 라이브러리 설정을 위한 옵션 객체
   */
  constructor(container: HTMLElement, options: ChatifyOptions) {
    // 1. 필수 값들을 확인하고 클래스 속성으로 저장합니다.
    if (!container) {
      throw new Error("Chatify: Container element not found.");
    }
    this.container = container;
    this.options = options;

    // 2. 각 전문 모듈들을 초기화(인스턴스화)합니다.
    // 디자인 부서, 특수효과 팀, UX 팀을 실제로 설립하는 과정입니다.
    this.renderer = new Renderer(this.container, this.options);
    // this.animator = new Animator();
    // this.scroller = new Scroller(this.container);

    // 3. 모든 준비가 끝나면 초기 실행 메소드를 호출합니다.
    this.init();
  }

  /**
   * Chatify 인스턴스가 생성된 후 처음 실행되는 내부 초기화 메소드입니다.
   */
  private init() {
    // 디자인 부서(Renderer)에게 초기 화면을 그리라고 지시합니다.
    this.renderer.renderInitial(this.options.data);
    // UX 팀(Scroller)에게 스크롤을 맨 아래로 내리라고 지시합니다.
    // this.scroller.scrollToBottom();
  }

  // --- Public API: 라이브러리 사용자가 직접 호출할 수 있는 공개 메소드들 ---

  /**
   * 새로운 메시지를 채팅창에 추가합니다.
   * @param message 추가할 메시지 객체
   */
  public addMessage(message: Message) {
    // 1. 원본 데이터 배열에도 새 메시지를 추가합니다.
    this.options.data.push(message);
    // 2. Renderer에게 새 메시지를 화면에 추가하라고 지시합니다.
    this.renderer.appendMessage(message); // [TODO] renderer.ts에 이 메소드 구현 필요
    // 3. Scroller에게 새 메시지가 추가되었으니 스크롤을 맨 아래로 내리라고 지시합니다.
    // this.scroller.scrollToBottom();
  }

  /**
   * Chatify 인스턴스를 파괴하고 모든 관련 DOM 요소와 이벤트 리스너를 제거합니다.
   * 메모리 누수를 방지하기 위해 컴포넌트가 사라질 때 반드시 호출해야 합니다.
   */
  public destroy() {
    this.renderer.destroy();
    // this.scroller.destroy();
    // this.animator.destroy(); // 만약 Animator에도 정리할 내용이 있다면 추가
    console.log("Chatify instance destroyed.");
  }
}
