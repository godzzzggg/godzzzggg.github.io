import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      fontColor: string;
      backgroundColor: string;
    };
  }
}
