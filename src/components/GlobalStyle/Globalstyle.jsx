import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin : 0;
padding : 0; 
box-sizing : border-box ;
font-family : font-family: 'Major Mono Display', monospace;

}

html{
font-size: 62.5%;
overflow-x: hidden;
}
body {
  background: rgb(2,25,64);
  background: linear-gradient(0deg, rgba(2,25,64,1) 0%, rgba(2,25,64,1) 100%);
  }
  
  
  
  
  h1{
    color:${({ theme }) => theme.colors.heading};ß
    font-size: 6rem;
    font-weight: 900;
  }
  
  h2 {
     color: ${({ theme }) => theme.colors.heading};
     font-size: 4.4rem;
     font-weight: 3000;
     white-space: normal;
     text-align: center;
     
    }
  
    h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: .7;
    font-size: 1.65rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight:400;
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  //998px 
  @media (max-width:${({ theme }) => theme.media.tab}) {
    .container{
      padding: 0 3.2rem;
    }

      .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

    html{
      font-size: 50%;
    }

    .grid{
      gap: 3.2rem;
    }

    .grid-two-column, .grid-three-column, .grid-four-column{
      grid-template-columns: 1fr;
    }
}

`;