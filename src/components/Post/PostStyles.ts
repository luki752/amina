import styled from "styled-components";

interface PostProps {
  $darkmode: boolean;
  $classicview: boolean;
  $compactview: boolean;
}

export const PostComponent = styled.div<PostProps>`
  display: flex;
  position: relative;
  padding-left: 40px;
  padding-bottom: ${({ $compactview }) => ($compactview ? "13px" : "40px")};
  border-radius: 4px;
  max-width: 100%;
  margin: ${({ $classicview: classicview }) => (classicview ? "0" : "1rem 0")};
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  border: 1px solid #474748;
  background: ${({ $darkmode: darkmode }) =>
    darkmode ? "#1A1A1B" : "#F3F3F3"};
  &:hover {
    border: 1px solid #9c9c9c;
  }
  @media screen and (max-width: 1000px) {
    padding-left: ${({ $classicview: classicview }) =>
      classicview ? "40px" : "10px"};
  }
  .upvotes {
    @media screen and (max-width: 1000px) {
      display: ${({ $classicview }) => ($classicview ? "flex" : "none")};
    }
  }
  .post-tools {
    position: absolute;
    display: ${({ $classicview }) => ($classicview ? "none" : "flex")};
    align-items: center;
    bottom: 0;
    left: 0;
    height: 40px;
    padding-left: 40px;
    @media screen and (max-width: 1000px) {
      padding-left: 100px;
    }
    .upvotes {
      display: none;
      @media screen and (max-width: 1000px) {
        display: ${({ $classicview }) => (!$classicview ? "flex" : "none")};
      }
    }
    .comment-link {
      text-decoration: none;
    }
    button {
      outline: none;
      border: none;
      padding: ${({ $classicview: classicView }) =>
        classicView ? "0.2rem" : "0.4rem"};
      display: flex;
      align-items: center;
      color: ${({ $darkmode: darkMode }) => (darkMode ? "#818384" : "#878a8c")};
      font-weight: bold;
      cursor: pointer;
      background: transparent;
      &:hover {
        background: ${({ $darkmode: darkMode }) =>
          darkMode ? "#2D2D2E" : "#e8e8e8"};
      }
      .icon {
        margin: 0 5px;
      }
    }
  }
  .link {
    text-decoration: none;
    .view {
      background: ${({ $darkmode: darkmode }) =>
        darkmode ? "#1A1A1B" : "#F3F3F3"};
      width: 100%;
      display: flex;
      flex-direction: ${({ $classicview: classicview }) =>
        classicview ? "row" : "column"};
      padding: ${({ $compactview: compactview }) =>
        compactview ? "0" : "0.5rem 0.5rem 0 0.5rem"};
      @media screen and (max-width: 1000px) {
        padding: 0;
      }
      .post-header {
        display: flex;
        flex-direction: column;
        order: ${({ $classicview: classicview }) => (classicview ? "2" : "1")};
        .header-info {
          display: flex;
          align-items: center;
          justify-content: ${({ $classicview: classicView }) =>
            classicView ? "flex-start" : "space-between"};
          order: ${({ $classicview: classicView }) =>
            classicView ? "2" : "1"};
          .author,
          .date {
            margin: 0 5px;
            color: ${({ $darkmode: darkMode }) =>
              darkMode ? "#818384" : "#8F9394"};
            font-size: 10px;
          }
          .logo {
            img {
              height: 1.5rem;
              width: 1.5rem;
              border-radius: 1.5rem;
              margin-right: 5px;
              display: ${({ $classicview: classicView }) =>
                classicView ? "none" : "flex"};
            }
          }
          .name {
            display: flex;
            align-items: center;
            font-size: ${({ $classicview: classicView }) =>
              classicView ? "10px" : "15px"};
            font-weight: bold;
            color: ${({ $darkmode: darkMode }) =>
              darkMode ? "#D7DADC" : "black"};
          }
        }
        .post-tools {
          display: ${({
            $classicview: classicView,
            $compactview: compactView,
          }) => (classicView && !compactView ? "flex" : "none")};
        }
      }
      .post-title {
        width: ${({ $classicview: classicView }) =>
          classicView ? "40vw" : "30vw"};
        word-wrap: break-word;
        order: ${({ $classicview: classicView }) => (classicView ? "1" : "2")};
        font-size: ${({ $classicview: classicView }) =>
          classicView ? "1rem" : "1.5rem"};
        padding: 4px 4px;
        color: ${({ $darkmode: darkMode }) => (darkMode ? "#D4D7D9" : "black")};
        @media screen and (max-width: 1000px) {
          width: ${({ $classicview: classicView }) =>
            classicView ? "60vw" : "80vw"};
        }
      }
      .post-image {
        order: ${({ $classicview: classicView }) => (classicView ? "1" : "2")};
        width: ${({ $classicview: classicView }) =>
          classicView ? "10rem" : "100%"};
        display: ${({ $compactview: compactView }) =>
          compactView ? "none" : "flex"};
        @media screen and (max-width: 1000px) {
          width: ${({ $classicview: classicView }) =>
            classicView ? "5rem" : "100%"};
        }
        img {
          width: ${({ $classicview: classicView }) =>
            classicView ? "10rem" : "100%"};
          min-height: ${({ $classicview: classicView }) =>
            classicView ? "5vw" : "25vw"};
          max-height: ${({ $classicview: classicView }) =>
            classicView ? "5vw" : "35vw"};
          object-fit: cover;
          @media screen and (max-width: 1000px) {
            width: ${({ $classicview: classicView }) =>
              classicView ? "5rem" : "100%"};
            min-height: ${({ $classicview: classicView }) =>
              classicView ? "19vw" : "25vw"};
            max-height: ${({ $classicview: classicView }) =>
              classicView ? "19vw" : "35vw"};
          }
        }
      }
    }
  }
`;
