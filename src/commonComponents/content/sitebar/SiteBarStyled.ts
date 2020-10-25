import styled from "styled-components";
import {NavLink} from "react-router-dom"; 
import {
    SiteBarPadding, 
    HeaderHeight,
    MobileCollapsedSiteBarWidth,
    MobileSiteBarWidth,
    MobileSiteBarPadding
} from "../../commonStyle";


export const SiteBarWrap = styled.div<any>`
    height:auto;
    width:20%;
    background:#CDE0F3;
    position:relative;
    padding: ${SiteBarPadding}px;

    @media(max-width:1500px){
        width:25%;
    }

    @media(max-width:1200px){
        width:30%;
    }

    @media(max-width:900px){
        padding:${MobileSiteBarPadding}px;
        position:fixed;
        width:${prop => prop.status ? MobileSiteBarWidth : MobileCollapsedSiteBarWidth}px;
        height:100%;
        padding-top: ${HeaderHeight+MobileSiteBarPadding}px;
        transition:500ms;
    }
`;

export const SiteBarComponentsWrap = styled.div`
    background:yellow;
    position:sticky;
    width:100%;
    height:calc(100vh - ${HeaderHeight + SiteBarPadding + SiteBarPadding}px);
    top: ${HeaderHeight+SiteBarPadding}px;
    overflow:auto;

    @media(max-width:900px){
        height:calc(100vh - ${HeaderHeight + MobileSiteBarPadding + MobileSiteBarPadding}px);
        top: ${HeaderHeight+MobileSiteBarPadding}px;
    }
`;

export const SiteBarMenuComponent = styled.div`
    width:100%;
    background:pink;
    height:auto;
    padding:5px;
    margin-bottom:${SiteBarPadding}px;
`;

export const SiteBarMenu = styled.div`
    margin:10px;
    display:flex;
    align-items:center;
`;

export const SiteBarMenuLink = styled(NavLink)`
    font-size:20px;
    margin-left:5px;
`;

export const SiteBarBurgerButton = styled.span`
    margin:5px 7px;
    display:none;

    @media(max-width:900px){
        display:block;
    }
`;