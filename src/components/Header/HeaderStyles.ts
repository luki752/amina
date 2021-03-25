import styled from "styled-components";

type headerProps = {
  darkMode: boolean;
};

export const HeaderComponent = styled.div<headerProps>`
  background: ${({ darkMode }) => (darkMode ? "#1A1A1B" : "white")};
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  height: 4rem;
  align-items: center;
  border-radius: 10px;
  .view {
    display: flex;
  }
  .buttons {
    display: flex;
  }
`;

export const Button = styled.button<headerProps>`
  padding: 0.5rem;
  border: none;
  outline: none;
  color: ${({ darkMode }) => (darkMode ? "#888A8B" : "#7E8183")};
  border-radius: 1rem;
  width: 7rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: ${({ darkMode }) => (darkMode ? "#29292a" : "#EDEDED")};
  }
  @media screen and (max-width: 1200px) {
    width: 4rem;
    margin: 0 0rem;
    font-size: 0.8rem;
  }
  .button-icon {
    margin-right: 10px;
  }
`;

type viewHeight = {
  darkMode: boolean;
  height: string;
  mobileHeight: string;
};

export const ViewOption = styled.div<viewHeight>`
  color: ${({ darkMode }) => (darkMode ? "#888A8B" : "#7E8183")};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  @media screen and (max-width: 1260px) {
    font-size: 0.8rem;
    flex-direction: column;
  }
  &:hover {
    background: ${({ darkMode }) => (darkMode ? "#29292a" : "#EDEDED")};
  }
  .lines {
    margin-right: 5px;
    .line {
      height: ${({ height }) => height};
      margin: 2px 0;
      width: 40px;
      background: ${({ darkMode }) => (darkMode ? "#888A8B" : "#7E8183")};
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 1200px) {
        height: ${({ mobileHeight }) => mobileHeight};
      }
    }
  }
`;