import styled from 'styled-components';

export const StyledCursor =styled.div`
.circle {
    position: fixed;
    background-color: #2e293c;
    width: 10px;
    height: 10px;
    left:-10px;
    top:-10px;
    border-radius: 100%;
    z-index: 1;
    z-index: 10000;
    transform: scale(1);
    &.active {
        opacity: 1;
        transform: scale(0);
    }
}
.circle-follow {
   position: fixed;
    border:1px solid #2e293c;
    width: 30px;
    height: 30px;
  left:-21px;
  top:-21px;
    border-radius: 100%;
    z-index: 1;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
    //overflow: hidden;
    transform: scale(1);
    &.active {
        transform: scale(3);
    }  
}
`;