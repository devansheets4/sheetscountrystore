import React, { Component } from "react";
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from "react-mdl";
import SheetsCircle from "../assets/SheetsCircle.png";

class Access extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="secondary-grid">
          <Cell col={3} hidePhone hideTablet>
            <div className="logo">
              <img src={SheetsCircle}></img>
            </div>
          </Cell>
          <Cell col={9} hidePhone hideTablet>
            <div className="titleHome">
              <p>
                <a href="/">Home</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/access">River Access</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/gear">Outfitters</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/deli">Deli</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/about">About</a>
              </p>
            </div>
            <hr></hr>
            <div className="riverGear">
              <p> NEW RIVER ACCESS </p>
            </div>
          </Cell>
          <Cell col={12} hidePhone hideTablet>
            <hr></hr>
          </Cell>
          {/* ------------------------- End of Standard Header & Links----------------------------- */}
        </Grid>
        <Footer size="mini">
          <FooterSection type="left" logo="Sheets Country Store">
            <FooterLinkList>
              <a href="/">Help</a>
              <a href="/">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default Access;
