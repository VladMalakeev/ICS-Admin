import styled from "styled-components";
import {NavLink} from "react-router-dom"; 
import {
    SiteBarPadding, 
    HeaderHeight,
    MobileCollapsedSiteBarWidth,
    MobileSiteBarWidth,
    MobileSiteBarPadding,
    MediaScreenSize
} from "../../commonStyle";


export const SiteBarWrap = styled.div<any>`
    height:auto;
    width:20%;
    background:#CDE0F3;
    position:relative;
    padding: ${SiteBarPadding}px;

    @media(max-width:${MediaScreenSize.WIDE}px){
        width:25%;
    }

    @media(max-width:${MediaScreenSize.MEDIUM}px){
        width:30%;
    }

    @media(max-width:${MediaScreenSize.SMALL}px){
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

    @media(max-width:${MediaScreenSize.SMALL}px){
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


export const SiteBarMenu = styled(NavLink)`
    margin:5px 0;
    display:flex;
    align-items:center;
    height:25px;
    svg{
        font-size:25px;
    }
`;

export const SiteBarMenuIcon = styled.div`
    margin:0 3px;
    display:flex;
`;

export const SiteBarMenuLink = styled.span`
    font-size:20px;
    margin-left:10px;
`;

export const SiteBarBurgerButton = styled.span`
    margin:5px 7px;
    display:none;

    @media(max-width:${MediaScreenSize.SMALL}px){
        display:block;
    }
`;