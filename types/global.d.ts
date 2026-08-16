export {};

declare global {
  interface Window {
    AdstreamStarted?: boolean;
    atstring?: {
      push: (config: { slot: string }) => void;
    };
  }
}
