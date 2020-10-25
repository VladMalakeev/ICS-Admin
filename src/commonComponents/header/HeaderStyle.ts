import styled from "styled-components";
import {HeaderHeight} from "../commonStyle";

export const HeaderWrap = styled.div<any>`
    height:${HeaderHeight}px;
    width:100%;
    background:#E4E4E4;
    margin-bottom:15px;
    position:fixed;
    margin:0;
    top:0;
    z-index:1000;
`;