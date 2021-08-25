import React from "react";
import { colors, widths } from "../styles";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer></LogoContainer>
              <Title>
                <h3>Brief News</h3>
                <div>Your News Center</div>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: `solid 1px ${colors.grey.light}`,
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  padding: "5px 30px",
  minHeight: 80,
  backgroundColor: "white",
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeLink = styled(Link)({
  textDecoration: "none",
});

const HomeButtonContainer = styled.div({
  display: "flex",
  flex: 1,
});

const HomeButton = styled.div({
  display: "flex",
  flexDirection: "row",
  color: colors.text,
  alignItems: "center",
  ":hover": {
    color: colors.grey.dark,
  },
});

const LogoContainer = styled.div({ display: "flex", alignSelf: "center" });

const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8,
});

const Title = styled.div({
  display: "flex",
  flexDirection: "column",
  h3: {
    lineHeight: "1em",
    marginBottom: 0,
  },
  div: {
    fontSize: "0.9em",
    lineHeight: "0.8em",
    paddingLeft: 2,
  },
});
