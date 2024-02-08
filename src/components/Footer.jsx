import React from "react";
import SubFooterLinks from "./SubFooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import CopyRights from "./CopyRights";

const Footer = () => {
  return (
    <div>
      <SocialMediaLinks />
      <SubFooterLinks />
      <CopyRights />
    </div>
  );
};

export default Footer;
