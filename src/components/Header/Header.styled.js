import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  top: 0;
  position: sticky;
  background-color: rgba(255, 255, 255, 1);
  padding: 0 16px;
  visibility: visible;

  .LoginBtnsWrapperDesk {
    visibility: hidden;
    display: none;
  }

  @media screen and (min-width: 767px) {
    padding-bottom: 10px;
    padding-top: 10px;
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
    padding: 0;

    .LoginBtnsWrapper {
      display: none;
      visibility: hidden;
    }

    .LoginBtnsWrapperDesk {
      display: flex;
      visibility: visible;
    }
  }
`;

export const LogoAndBtnsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 767px) {
    width: auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.div`
  display: block;
  font-weight: 700;
  font-size: 24px;

  @media screen and (min-width: 767px) {
    font-size: 28px;
  }
`;

export const LoginBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledUserEmail = styled.p`
  font-size: 16px;

  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
`;
