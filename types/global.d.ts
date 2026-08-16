export {};

declare global {
  interface Window {
    AdstreamStarted?: boolean;
    ad_placement_id?: string;
    ad_placement_id_300x250?: string;
    atstring?: {
      push: (config: { slot: string }) => void;
    };
  }
}
