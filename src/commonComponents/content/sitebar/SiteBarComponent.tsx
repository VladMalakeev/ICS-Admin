import React, {useState, useEffect} from 'react';
import {
        SiteBarWrap,
        SiteBarComponentsWrap,
        SiteBarMenuComponent,
        SiteBarBurgerButton,
        SiteBarMenu,
        SiteBarMenuLink,
        SiteBarMenuIcon} from "./SiteBarStyled";
import {MediaScreenSize} from "../../commonStyle";
        
import {
        MenuUnfoldOutlined,
        MenuFoldOutlined
    } from "@ant-design/icons/lib";
import SiteBarTexts from "../../../assets/txt/siteBar"; 

export const SiteBarComponent:React.FC<any> = ():any => {
    const [drawerIsOpen, changeDrawerState] = useState(window.innerWidth > MediaScreenSize.SMALL);

    useEffect(() => {
        window.addEventListener('resize', checkInnewWidth);

        return () => {
            window.removeEventListener('resize', checkInnewWidth);
        }
    });

    const checkInnewWidth = () => {
        if(window.innerWidth > MediaScreenSize.SMALL && !drawerIsOpen){
            changeDrawerState(true);
        }else if(window.innerWidth < MediaScreenSize.SMALL && drawerIsOpen){
            changeDrawerState(false);
        }
    };

    return(
        <SiteBarWrap status={drawerIsOpen}>
            <SiteBarComponentsWrap>
                <SiteBarBurgerButton onClick={() =>changeDrawerState(!drawerIsOpen)}>
                    {drawerIsOpen && <MenuUnfoldOutlined style={{fontSize:'25px'}} />}
                    {!drawerIsOpen && <MenuFoldOutlined style={{fontSize:'25px'}} />}
                </SiteBarBurgerButton>

                {SiteBarTexts.blocks.map(block => {
                   return (
                    <SiteBarMenuComponent>
                        {block.elements.map(element => {
                            return (
                                <SiteBarMenu to={element.link}> 
                                    <SiteBarMenuIcon>{element.ico}</SiteBarMenuIcon>
                                    <SiteBarMenuLink>{element.title}</SiteBarMenuLink>
                                </SiteBarMenu>
                            )
                        })}
                    </SiteBarMenuComponent>
                   ) 
                })}
            </SiteBarComponentsWrap>
        </SiteBarWrap>
    )
};