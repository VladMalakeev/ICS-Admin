import styled from "styled-components";
import {HeaderHeight, FooterHeight, MobileCollapsedSiteBarWidth} from "../commonStyle";

export const Body = styled.div`
    min-height: 100vh;
    width:100%;
    background:white;
    display:flex;
    padding-top:${HeaderHeight};
`;

export const Content = styled.div`
    width:80%;
    min-height:100%;
    background:#F3F3F3;
    padding:10px 10px 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width:1500px){
        width:75%;
    }

    @media(max-width:1200px){
        width:70%;
    }

    @media(max-width:900px){
        width:calc(100% - ${MobileCollapsedSiteBarWidth}px);
        margin-left: ${MobileCollapsedSiteBarWidth}px;
    }
`;

export const Information = styled.div`
    width:100%;
    min-height:calc(100% - ${FooterHeight + HeaderHeight}px);
    background:#EAEFF3;
    margin-top:${HeaderHeight}px;
`;


export const TestDiv = styled.div`
    background: green;
    margin-bottom: 10px;
    height:400px;
`;