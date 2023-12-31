import {css} from 'styled-components';
export const TitleStyles = css`
    .title{
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .mapa-h1{
            color: #244a57;
            font-weight: 300;
        }
        .mapa-span{
            color: white;
            font-weight: 300;
        }
        .mapa-header{
            
        }
        h1{
            font-size: 3rem;
            text-transform: uppercase;
            span{
                color: #07bcf8;
            }
        }
        .yellow{
            color: #244a57;
        }
        p{
            padding: 0 10vw;
            font-size: 1.1rem;
            line-height: 2rem;
            letter-spacing: 0.1rem;
        }
    }
    @media screen and (min-width: 260px) and (max-width: 1080px){
        .title{
            gap: 1rem;
            h1{
                font-size: 1.4rem;
            }
            p{
                padding: 0 1vw;
            }
        }
    }
`;

export const imageZoomEffect = css`
    img{
        transition: 0.8s ease-in-out;
        &:hover{
            transform: scale(1.2);
        }
    }
`;

