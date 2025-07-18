import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::selection {
  background: ${({ theme }) => theme.colors.primary}; /* لون خلفية التحديد */
  color: #fff;         /* لون النص داخل التحديد */
}

  }
  html{
    /* font-family: 'Tajawal', sans-serif !important; */
    font-size: 10px;
  }
  body{
    background-color: #fff;
    /* font-family: 'Tajawal', sans-serif !important; */
    padding-top: var(--height-nav);
  }
 
  :root{
    --primary: ${({ theme }) => theme.colors.primary} ; 
    --p-container: 60px ;
    @media screen and (max-width: 567px) {
      --p-container:30px;
    }
    @media screen and (max-width: 400px) {
      --p-container:5px;
    }
    --height-nav:   100px ;
    --m-top : 50px ;
    --big-text: 4.2rem ; 
    --normal-text: 2.4rem; 
    --small-text: 20px; 
    --min-text: 1.6rem; 
    --text:"#000";
    @media (min-width: 769px) and (max-width: 992px){
      --big-text: 2.8rem ; 
      --normal-text: 1.6rem; 
      --small-text: 16px; 
      --min-text: 1.4rem; 
      
    }
    @media (max-width: 768px){
      --big-text: 2.4rem ; 
      --normal-text: 1.8rem; 
      --small-text: 16px; 
      --min-text: 1.2rem; 
     --height-nav: 75px 
    }
  }

  /**
   * LATO FAMILY
   * ------------------------------------------
   * Lato-Thin            100 normal
   * Lato-ThinItalic      100 italic
   * Lato-Regular         400 normal
   * Lato-Italic          400 italic
   * Lato-LightItalic     300 italic
   * Lato-Bold            700 normal
   * Lato-BoldItalic      700 italic
   * Lato-Black           900 normal
   * Lato-BlackItalic     900 italic
   */
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  /**
   * TAJAWAL FAMILY
   * ------------------------------------------
   * Tajawal-ExtraLight   200 normal
   * Tajawal-Light        300 normal
   * Tajawal-Regular      400 normal
   * Tajawal-Medium       500 normal
   * Tajawal-ExtraBold    800 normal
   * Tajawal-Black        900 normal
   */
  @font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-ExtraLight.ttf") format("truetype");
  font-weight: 200;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Light.ttf") format("truetype");
  font-weight: 300;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Regular.ttf") format("truetype");
  font-weight: 400;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Medium.ttf") format("truetype");
  font-weight: 500;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Bold.ttf") format("truetype");
  font-weight: 700;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-ExtraBold.ttf") format("truetype");
  font-weight: 800;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Black.ttf") format("truetype");
  font-weight: 900;
    font-display: swap;

}

  /* 3. اختيار العائلة على أساس لغة الصفحة */
  html[lang="ar"] {
   body{
     font-family: 'Tajawal', sans-serif !important;
 

    }
  }
  html[lang="en"] {
    body{
      font-family: 'Lato', sans-serif !important;
    }
}
`;
