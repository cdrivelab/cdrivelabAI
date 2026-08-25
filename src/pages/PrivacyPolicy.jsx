import { useEffect } from "react";
import PageHero from "../components/common/PageHero.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./privacy.css";

const PAGE_TITLE = "Privacy Policy | C-Drive Lab";
const PAGE_DESCRIPTION =
  "Privacy Policy for C-Drive Lab Pvt. Ltd. — how we collect, use, and protect your personal information across our AI consultancy services.";
const LAST_UPDATED = "Last Updated: August 2026";

const policySections = [
  {
    id: "s1",
    title: "1. Who We Are",
    content:
      "The data controller responsible for the personal information described in this Privacy Policy is:<br/><br/>" +
      "<strong>C-Drive Lab Pvt. Ltd.</strong><br/>" +
      "Location: Odisha, India<br/>" +
      "Website: C-Drive Lab<br/>" +
      "Privacy Contact: <a class=\"inline-link\" href=\"mailto:cdrivelab@gmail.com\">cdrivelab@gmail.com</a><br/><br/>" +
      "If you have questions about how we process your personal information or want to exercise your privacy rights, you can contact us using the details above."
  },
  {
    id: "s2",
    title: "2. Scope of This Privacy Policy",
    content:
      "This Privacy Policy applies to personal information collected through:<br/><br/>" +
      "<ul>" +
      "<li>Our website and web pages;</li>" +
      "<li>Contact and enquiry forms;</li>" +
      "<li>Consultation or service-request forms;</li>" +
      "<li>Business communications with C-Drive Lab;</li>" +
      "<li>AI-powered tools or assistants made available through our website;</li>" +
      "<li>Emails and other communications with us;</li>" +
      "<li>Marketing and communication activities.</li>" +
      "</ul>" +
      "<p>This policy does not necessarily apply to third-party websites, applications, platforms, or services that may be linked from our website. Those services have their own privacy policies and terms.</p>"
  },
  {
    id: "s3",
    title: "3. Personal Information We May Collect",
    content:
      "<h3>Information You Provide Directly</h3>" +
      "<p>When you contact us, request a consultation, submit an enquiry, or communicate with us, we may collect:</p>" +
      "<ul>" +
      "<li>Full name;</li>" +
      "<li>Business email address;</li>" +
      "<li>Telephone or mobile number;</li>" +
      "<li>Company or organisation name;</li>" +
      "<li>Job title or professional role;</li>" +
      "<li>Country or region;</li>" +
      "<li>Information about your business or project;</li>" +
      "<li>Requirements or service interests;</li>" +
      "<li>Information included in messages or enquiries;</li>" +
      "<li>Information you voluntarily provide.</li>" +
      "</ul>" +
      "<h3>Technical and Usage Information</h3>" +
      "<p>Depending on your browser, device, hosting configuration, and consent preferences, we may automatically receive information such as IP address, browser type, device type, operating system, language, referring website, pages visited, interaction data, access time, technical logs, and security information.</p>"
  },
  {
    id: "s4",
    title: "4. Information Collected Through AI Features",
    content:
      "<p>C-Drive Lab may provide AI-powered tools, assistants, demonstrations, or consultancy-related features. If you interact with an AI feature, information you enter may include questions, prompts, business requirements, project descriptions, technical information, text, uploaded materials where supported, and conversation history where storage is enabled.</p>" +
      "<p>We use such information only for the purposes described at the point of collection and in this Privacy Policy.</p>" +
      "<p>Please do not submit passwords, payment credentials, government identification numbers, confidential authentication information, or highly sensitive personal information into a public AI tool unless the feature specifically states that it is required and provides appropriate safeguards.</p>" +
      "<p>Where third-party AI technology providers are used, information may be processed on our behalf or independently according to the relevant contractual arrangements and privacy terms. We will not state that information is used for AI model training unless that processing actually occurs.</p>"
  },
  {
    id: "s5",
    title: "5. How We Use Personal Information",
    content:
      "<h3>To Respond to Enquiries</h3>" +
      "<p>We may use contact information to respond to questions, provide requested information, discuss projects, schedule consultations, understand requirements, and prepare proposals.</p>" +
      "<h3>To Provide Our Services</h3>" +
      "<p>Where you engage C-Drive Lab, we may process information necessary to deliver technology and AI consulting services, communicate with clients, manage projects, provide technical support, coordinate service delivery, maintain records, and perform contractual obligations.</p>" +
      "<h3>To Improve Our Website and Services</h3>" +
      "<p>Where permitted by law and your consent preferences, we may analyse website usage to improve content, services, usability, and performance.</p>" +
      "<h3>To Maintain Security</h3>" +
      "<p>We may process technical information to detect abuse, protect systems, investigate security incidents, maintain reliability, and prevent unauthorised access.</p>" +
      "<h3>Marketing and Legal Compliance</h3>" +
      "<p>Where legally permitted, we may send relevant service or promotional communications. We may also process information where necessary to comply with applicable laws, lawful requests, legal proceedings, or regulatory requirements.</p>"
  },
  {
    id: "s6",
    title: "6. Legal Bases for Processing",
    content:
      "<p>Where GDPR applies, we process personal information only when an appropriate legal basis exists. Depending on the circumstances, these may include:</p>" +
      "<ul>" +
      "<li><strong>Consent</strong> — for certain analytics, marketing, or non-essential cookies.</li>" +
      "<li><strong>Contract</strong> — where processing is necessary to enter into or perform a contract.</li>" +
      "<li><strong>Pre-contractual steps</strong> — to respond to proposals, consultations, or quotations.</li>" +
      "<li><strong>Legitimate interests</strong> — including security, fraud prevention, administration, and service improvement.</li>" +
      "<li><strong>Legal obligation</strong> — where processing is required by applicable law.</li>" +
      "</ul>"
  },
  {
    id: "s7",
    title: "7. Cookies and Similar Technologies",
    content:
      "<p>Our website may use cookies and similar technologies. These may include strictly necessary cookies, analytics technologies, and marketing technologies.</p>" +
      "<p>Strictly necessary cookies may be used where required for website operation and security. Where consent is legally required, analytics and marketing technologies will be activated only after the relevant consent is provided.</p>" +
      "<p>Where applicable, you can accept, reject, or manage non-essential cookies through our cookie-consent mechanism. You should be able to change or withdraw your preferences after initially providing them.</p>" +
      "<p>For more information, please see our Cookie Policy.</p>"
  },
  {
    id: "s8",
    title: "8. Third-Party Services",
    content:
      "<p>We may use selected third-party providers to operate our website and business, including hosting, cloud infrastructure, email, analytics, CRM, scheduling, payments, security, AI, marketing, and advertising providers.</p>" +
      "<p>Third-party providers may process personal information where necessary for their services, subject to applicable contractual, legal, and security requirements.</p>" +
      "<p><strong>We do not sell your personal information to third parties.</strong></p>"
  },
  {
    id: "s9",
    title: "9. International Data Transfers",
    content:
      "<p>C-Drive Lab is based in India and may work with customers, partners, and providers in different countries. Personal information may therefore be transferred to or processed outside the European Economic Area.</p>" +
      "<p>Where GDPR applies, we will use an appropriate legal transfer mechanism where required, such as an adequacy decision, European Commission Standard Contractual Clauses, or another legally recognised safeguard.</p>"
  },
  {
    id: "s10",
    title: "10. How Long We Keep Personal Information",
    content:
      "<p>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer period is required or permitted by law.</p>" +
      "<ul>" +
      "<li>The purpose for which information was collected;</li>" +
      "<li>Whether there is an ongoing business relationship;</li>" +
      "<li>Contractual or legal requirements;</li>" +
      "<li>Accounting and regulatory obligations;</li>" +
      "<li>Security and dispute-resolution requirements.</li>" +
      "</ul>" +
      "<p>When information is no longer required, we will take reasonable steps to delete, anonymise, or securely dispose of it.</p>"
  },
  {
    id: "s11",
    title: "11. Data Security",
    content:
      "<p>We take reasonable technical and organisational measures designed to protect personal information against unauthorised access, accidental loss, unauthorised disclosure, destruction, alteration, and misuse.</p>" +
      "<p>Measures may include access controls, authentication, secure communications, monitoring, restricted access, and other safeguards appropriate to the information and processing activity.</p>" +
      "<p>No internet transmission or electronic storage system can be guaranteed to be completely secure.</p>"
  },
  {
    id: "s12",
    title: "12. Your Privacy Rights Under GDPR",
    content:
      "<p>If GDPR applies, you may have rights including:</p>" +
      "<ul>" +
      "<li><strong>Access</strong> — request confirmation and a copy of personal information.</li>" +
      "<li><strong>Rectification</strong> — ask us to correct inaccurate or incomplete information.</li>" +
      "<li><strong>Erasure</strong> — request deletion in certain circumstances.</li>" +
      "<li><strong>Restriction</strong> — request restriction of processing in certain circumstances.</li>" +
      "<li><strong>Data portability</strong> — receive applicable information in a structured, commonly used, machine-readable format.</li>" +
      "<li><strong>Object</strong> — object to certain processing, including some direct marketing.</li>" +
      "<li><strong>Withdraw consent</strong> — withdraw consent where processing is based on consent.</li>" +
      "<li><strong>Automated decisions</strong> — rights concerning certain solely automated decisions where applicable.</li>" +
      "</ul>" +
      "<p>These rights are subject to the conditions and exceptions provided by applicable law.</p>"
  },
  {
    id: "s13",
    title: "13. How to Exercise Your Rights",
    content:
      "<p>To exercise a privacy right or ask a question about our processing of personal information, contact us at:</p>" +
      "<div class=\"contact-card\"><p><a class=\"inline-link\" href=\"mailto:cdrivelab@gmail.com\">cdrivelab@gmail.com</a></p></div>" +
      "<p>Please include enough information for us to understand your request. For security reasons, we may need to verify your identity before fulfilling certain requests.</p>" +
      "<p>We will respond to valid GDPR rights requests without undue delay and generally within the timeframe required by applicable law.</p>"
  },
  {
    id: "s14",
    title: "14. Right to Lodge a Complaint",
    content:
      "<p>If you believe your personal information has been processed in a manner that violates applicable data protection law, you may lodge a complaint with a competent data protection supervisory authority.</p>" +
      "<p>You may also contact us first so that we can try to address your concern directly.</p>"
  },
  {
    id: "s15",
    title: "15. Marketing Communications",
    content:
      "<p>We may communicate with you about C-Drive Lab services, technology solutions, AI consulting, updates, or other business information. Where consent is required, we will obtain it before sending marketing communications.</p>" +
      "<p>You can unsubscribe at any time using the unsubscribe mechanism included in the communication or by contacting us.</p>"
  },
  {
    id: "s16",
    title: "16. Automated Decision-Making and Profiling",
    content:
      "<p>C-Drive Lab may use artificial intelligence and automated technologies to support certain website or business functions.</p>" +
      "<p>Unless specifically stated otherwise, we do not use personal information collected through this website to make decisions based solely on automated processing that produce legal effects or similarly significant effects concerning individuals.</p>"
  },
  {
    id: "s17",
    title: "17. Children's Privacy",
    content:
      "<p>Our website and services are primarily intended for businesses, professionals, organisations, and other users who are legally able to use our services.</p>" +
      "<p>We do not knowingly seek to collect personal information from children where doing so would violate applicable law.</p>"
  },
  {
    id: "s18",
    title: "18. Third-Party Websites",
    content:
      "<p>Our website may contain links to third-party websites, applications, social media platforms, or services. We are not responsible for their privacy practices, security, or content. We recommend reviewing their privacy policy before submitting personal information.</p>"
  },
  {
    id: "s19",
    title: "19. Business Transactions",
    content:
      "<p>If C-Drive Lab undergoes a merger, acquisition, restructuring, sale of assets, investment transaction, or similar corporate event, personal information may be transferred as part of that transaction where legally permitted and subject to applicable privacy requirements.</p>"
  },
  {
    id: "s20",
    title: "20. Changes to This Privacy Policy",
    content:
      "<p>We may update this Privacy Policy from time to time to reflect changes in our services, website functionality, technology, processing practices, or legal requirements.</p>" +
      "<p>When we make material changes, we may update the \"Last Updated\" date and provide additional notice where required.</p>"
  },
  {
    id: "s21",
    title: "21. Contact Us",
    content:
      "<p>If you have questions about this Privacy Policy, our data-processing practices, or your privacy rights, please contact:</p>" +
      "<div class=\"contact-card\"><p><strong>C-Drive Lab Pvt. Ltd.</strong></p><p>Odisha, India</p><p>Email: <a class=\"inline-link\" href=\"mailto:cdrivelab@gmail.com\">cdrivelab@gmail.com</a></p><p>Privacy requests: <em>\"Privacy Request – C-Drive Lab\"</em></p></div>"
  },
  {
    id: "s22",
    title: "22. Legal and Regulatory Framework",
    content:
      "<p>Where applicable, our processing of personal information is intended to comply with relevant data protection requirements, including:</p>" +
      "<ul>" +
      "<li>Regulation (EU) 2016/679 — General Data Protection Regulation (GDPR);</li>" +
      "<li>Applicable European data protection and electronic communications requirements;</li>" +
      "<li>Applicable data protection laws in jurisdictions where we operate or provide services.</li>" +
      "</ul>" +
      "<p>This Privacy Policy should be read together with our Cookie Policy and Terms of Service, where applicable.</p>" +
      '<a class="back-top" href="#top">↑ Back to top</a>'
  }
];

function PolicySection({ section }) {
  const heading = useReveal();

  return (
    <section className="policy-section" id={section.id}>
      <h2 {...heading}>{section.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: section.content }} />
    </section>
  );
}

export default function PrivacyPolicy() {
  /*
    Title and description are swapped in an effect and restored on unmount.
    They used to be written at module scope and during render, which meant
    they applied the moment App.jsx imported this file — so every page on
    the site reported the Privacy Policy title. The robots meta and the
    Organization JSON-LD are static site-wide facts and now live in
    index.html rather than being injected here.
  */
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const previousTitle = document.title;
    const previousDescription = meta ? meta.getAttribute("content") : null;

    document.title = PAGE_TITLE;
    if (meta) meta.setAttribute("content", PAGE_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <div id="top">
      <PageHero title="Privacy Policy">
        <p className="policy-updated">{LAST_UPDATED}</p>
      </PageHero>

      <div className="doc">
        <div className="container">
          {policySections.map((section) => (
            <PolicySection section={section} key={section.id} />
          ))}

          <div className="policy-note">
            {LAST_UPDATED} · © {new Date().getFullYear()} C-Drive Lab Pvt. Ltd.
            All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}