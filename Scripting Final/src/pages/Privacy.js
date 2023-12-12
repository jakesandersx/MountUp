import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Privacy.css';

function Privacy() {
  return (
    <div>
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy ("Policy") describes how we collect, use, and disclose your personal information when you use our website. Please read this Policy carefully.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We may collect various types of information, including personal information that you provide directly to us and information that we collect automatically when you use our website.
      </p>
      <h3>How We Use Your Information</h3>
      <p>
        We may use your personal information for various purposes, including to provide and maintain our website, to improve our services, to respond to your requests, and to communicate with you. We do not sell, trade, or otherwise transfer your personal information to outside parties. Your information may be disclosed to trusted third parties who assist us in operating our website.
      </p>
      <h3>Security</h3>
      <p>
        We implement security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>
      <h3>Changes to This Policy</h3>
      <p>
        We may update this Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post any revised Policy on this page.
      </p>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default Privacy;
