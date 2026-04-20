import "@testing-library/jest-dom/vitest";

// Mock IntersectionObserver for jsdom
class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  constructor(
    private callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit,
  ) {
    // Immediately trigger with isIntersecting: true so content renders
    setTimeout(() => {
      this.callback(
        [
          { isIntersecting: true, intersectionRatio: 1 },
        ] as IntersectionObserverEntry[],
        this as unknown as IntersectionObserver,
      );
    }, 0);
  }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});
