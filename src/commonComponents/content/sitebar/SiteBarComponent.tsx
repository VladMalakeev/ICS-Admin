import React, {useState} from 'react';
import {
        SiteBarWrap,
        SiteBarComponentsWrap,
        SiteBarMenuComponent,
        SiteBarBurgerButton,
        SiteBarMenu,
        SiteBarMenuLink} from "./SiteBarStyled";
        
import {
        MenuUnfoldOutlined,
        MenuFoldOutlined, 
        StarOutlined
    } from "@ant-design/icons/lib"; 

export const SiteBarComponent:React.FC<any> = ():any => {
    const [status, setStatus] = useState(false);

    return(
        <SiteBarWrap status={status}>
            <SiteBarComponentsWrap>
                <SiteBarBurgerButton onClick={() =>setStatus(!status)}>
                    {status && <MenuUnfoldOutlined style={{fontSize:'25px'}} />}
                    {!status && <MenuFoldOutlined style={{fontSize:'25px'}} />}
                </SiteBarBurgerButton>
                
                <SiteBarMenuComponent>
                    <SiteBarMenu>
                        <StarOutlined style={{fontSize:'20px'}} />
                        {status && <SiteBarMenuLink to={'#'}>Новости</SiteBarMenuLink>}
                    </SiteBarMenu>
                </SiteBarMenuComponent>
                
                <SiteBarMenuComponent>
                    <SiteBarMenu>
                        <StarOutlined style={{fontSize:'20px'}} />
                        {status && <SiteBarMenuLink to={'#'}>Кафедры</SiteBarMenuLink>}
                    </SiteBarMenu>

                    <SiteBarMenu>
                        <StarOutlined style={{fontSize:'20px'}} />
                        {status && <SiteBarMenuLink to={'#'}>Преподаватели</SiteBarMenuLink>}
                    </SiteBarMenu>
                </SiteBarMenuComponent>
                
                <SiteBarMenuComponent>
                    <SiteBarMenu>
                        <StarOutlined style={{fontSize:'20px'}} />
                        {status && <SiteBarMenuLink to={'#'}>Курсы</SiteBarMenuLink>}
                    </SiteBarMenu>

                    <SiteBarMenu>
                        <StarOutlined style={{fontSize:'20px'}} />
                        {status && <SiteBarMenuLink to={'#'}>Семестры</SiteBarMenuLink>}
                    </SiteBarMenu>
                </SiteBarMenuComponent>
            </SiteBarComponentsWrap>
        </SiteBarWrap>
    )
};