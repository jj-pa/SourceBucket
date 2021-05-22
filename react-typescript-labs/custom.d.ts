declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  export const ReactComponent: React.SFC<SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}
