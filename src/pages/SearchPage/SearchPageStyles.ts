import styled from "styled-components";

interface SearchProps {
  darkmode: boolean;
}

export const SearchPageComponent = styled.div<SearchProps>`
  .header {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ darkmode }) => (darkmode ? "#1A1A1B" : "white")};
    color: ${({ darkmode }) => (darkmode ? "#C0C3C5" : "black")};
    height: 8rem;
    h1 {
      font-size: 1.3rem;
      padding-bottom: 0.2rem;
    }
    p {
      font-size: 0.8rem;
      color: #848484;
    }
    .links {
      .link {
        text-decoration: none;
        color: ${({ darkmode }) => (darkmode ? "#C0C3C5" : "black")};
        padding: 0.5rem;
        margin: 0 0.5rem;
      }
      .active {
        border-bottom: ${({ darkmode }) =>
          darkmode ? "3px solid #C0C3C5" : "3px solid #0079d3"};
      }
    }
  }
`;
export const Wrapper = styled.div<SearchProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ darkmode }) => (darkmode ? "black" : "#dae0e6")};
  min-height: 80vh;
  padding: 1rem;
  font-size: 0.8rem;
  .subamins {
    width: 80%;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    .community {
      display: flex;
      position: relative;
      justify-content: space-between;
      background-color: ${({ darkmode }) => (darkmode ? "#1A1A1B" : "white")};
      align-items: center;
      padding: 5px;
      border-radius: 10px;
      text-decoration: none;
      .left {
        display: flex;
        align-items: center;

        img {
          height: 3rem;
          width: 3rem;
          border-radius: 3rem;
          object-fit: cover;
        }
        .name-members {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          color: #8c8f90;

          .name {
            color: ${({ darkmode }) => (darkmode ? "#C0C3C5" : "black")};
          }
        }
      }
      .info {
        color: #8c8f90;
      }
    }
  }
  .posts {
    width: 60%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
`;
