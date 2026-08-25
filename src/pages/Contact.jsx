import { useState } from "react";
import PageHero from "../components/common/PageHero.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { siteConfig, contactPage } from "../data/siteConfig.js";
import "./contact.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" />
  </svg>
);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = { name: "", email: "", company: "", topic: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "We need an email address to reply to.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "That doesn't look like a valid email address.";
  if (!values.message.trim()) errors.message = "Please describe what you're trying to solve.";
  else if (values.message.trim().length < 20) errors.message = "A little more detail helps us give you a useful answer.";
  return errors;
}

/** The enquiry as plain text — used for both the mailto: body and the
    copy-to-clipboard fallback. */
function composeMessage(values) {
  return [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.company.trim() && `Company: ${values.company.trim()}`,
    values.topic && `Topic: ${values.topic}`,
    "",
    values.message.trim(),
  ]
    .filter(Boolean)
    .join("\n");
}

function mailtoHref(values) {
  const subject = `Enquiry from ${values.name.trim()}`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeMessage(values))}`;
}

function Field({ id, label, error, children, hint }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {hint && !error && <span className="field__hint">{hint}</span>}
      {error && <span className="field__error" id={`${id}-error`}>{error}</span>}
    </div>
  );
}

export default function Contact() {
  const intro = useReveal(0, "contact-intro");
  const panel = useReveal(100, "contact-panel");

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | manual | error
  const [composed, setComposed] = useState("");
  const [copied, setCopied] = useState(false);

  const update = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
  };

  const fieldProps = (id) => ({
    id,
    name: id,
    value: values[id],
    onChange: update(id),
    "aria-invalid": errors[id] ? "true" : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    /*
      No endpoint configured. A static site can't send mail on its own, so
      we try to open the visitor's mail client — but that silently does
      nothing on a machine with no mail handler registered. So we always
      also show the composed message with a copy button, which means the
      visitor is never left staring at a button that appears to do nothing.
    */
    if (!siteConfig.contactEndpoint) {
      setComposed(composeMessage(values));
      setCopied(false);
      setStatus("manual");
      window.location.href = mailtoHref(values);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          // Extra fields some providers require (e.g. Web3Forms access_key).
          ...siteConfig.contactEndpointFields,
          subject: `Enquiry from ${values.name.trim()}`,
          ...values,
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setValues(EMPTY);
      setStatus("sent");
    } catch {
      // Falling back rather than dead-ending the visitor.
      setComposed(composeMessage(values));
      setCopied(false);
      setStatus("error");
    }
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(composed);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <PageHero title="Contact Us" />

      <section className="section contact-grid">
        <div {...intro}>
          <span className="kicker">{contactPage.kicker}</span>
          <h2>{contactPage.heading}</h2>
          <p className="contact-lead">{contactPage.body}</p>

          <ul className="contact-details">
            <li>
              <span className="contact-details__icon"><MailIcon /></span>
              <div>
                <span className="contact-details__label">Email</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </li>
            <li>
              <span className="contact-details__icon"><PinIcon /></span>
              <div>
                <span className="contact-details__label">Where we are</span>
                <span>{siteConfig.location}</span>
              </div>
            </li>
          </ul>

          <p className="contact-note">{contactPage.responseNote}</p>
        </div>

        <div {...panel}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <Field id="name" label="Your name *" error={errors.name}>
                <input type="text" autoComplete="name" {...fieldProps("name")} />
              </Field>
              <Field id="email" label="Email *" error={errors.email}>
                <input type="email" autoComplete="email" {...fieldProps("email")} />
              </Field>
            </div>

            <div className="field-row">
              <Field id="company" label="Company" error={errors.company} hint="Optional">
                <input type="text" autoComplete="organization" {...fieldProps("company")} />
              </Field>
              <Field id="topic" label="What's this about?" error={errors.topic} hint="Optional">
                <select {...fieldProps("topic")} data-placeholder={values.topic === "" ? "true" : undefined}>
                  <option value="">Choose a topic</option>
                  {contactPage.topics.map((topic) => (
                    <option value={topic} key={topic}>{topic}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field
              id="message"
              label="What are you trying to solve? *"
              error={errors.message}
              hint="A couple of sentences is plenty."
            >
              <textarea rows={6} {...fieldProps("message")} />
            </Field>

            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
              <span className="icon-circle"><ArrowIcon /></span>
            </button>

            <div className="form-status" role="status" aria-live="polite">
              {status === "sent" && (
                <p>Thanks — your message is with us. We&rsquo;ll be in touch shortly.</p>
              )}

              {(status === "manual" || status === "error") && (
                <div className="form-fallback">
                  <p>
                    {status === "error"
                      ? "That didn't send, sorry."
                      : "If your email app didn't open, no problem."}{" "}
                    Copy the message below and send it to{" "}
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
                  </p>

                  <pre className="form-fallback__message">{composed}</pre>

                  <div className="form-fallback__actions">
                    <button type="button" className="btn btn-outline" onClick={copyMessage}>
                      {copied ? "Copied" : "Copy message"}
                    </button>
                    <a className="form-fallback__mail" href={mailtoHref(values)}>
                      Open in email app
                    </a>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
