import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Terms.css';

function Terms() {
  return (
    <div>
      <h2>Terms of Service</h2>
      <p>
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website.
      </p>
      <p>
        Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.
        These terms apply to all visitors, users, and others who access or use the service.
      </p>
      <h3>Content</h3>
      <p>
        Our service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material. You are responsible for the content you post on the service.
      </p>
      <h3>Links To Other Websites</h3>
      <p>
        Our service may contain links to third-party websites or services that are not owned or controlled by us.
        We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
      </p>
      <h3>Termination</h3>
      <p>
        We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
      </p>
      <h3>Changes</h3>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
      </p>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default Terms;
