import {useState} from 'react';
import {ArrowRight} from 'lucide-react';
import {Reveal} from '../components/Reveal.jsx';

export function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/unitedheartsdtx@gmail.com', {
        method: 'POST',
        headers: {Accept: 'application/json'},
        body: new FormData(form),
      });
      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error('Unable to send message');
      }

      form.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-visual">
        <img
          src="/images/prosper-delivery-contact.jpg"
          alt="United Hearts completing a donut delivery with Prosper firefighters"
        />
      </div>
      <Reveal className="contact-form-panel">
        <h1>Start the next United Hearts connection.</h1>
        <p>
          Send a bakery lead, frontliner nomination, partnership idea, media opportunity, or question. We will use it
          to move the next operation forward.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_cc" value="subhas.angara@gmail.com" />
          <input type="hidden" name="_subject" value="New United Hearts website message" />
          <input type="hidden" name="_template" value="table" />
          <label className="form-honeypot" aria-hidden="true">
            Leave this field empty
            <input type="text" name="_honey" tabIndex="-1" autoComplete="off" />
          </label>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            I am a
            <select name="role" defaultValue="" required>
              <option value="" disabled>Choose one</option>
              <option>Bakery or food business</option>
              <option>Frontliner or station contact</option>
              <option>Student or volunteer</option>
              <option>Supporter or media contact</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell us what you have in mind." required />
          </label>
          <button type="submit" className="button button--navy" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Sending...' : 'Send message'} <ArrowRight aria-hidden="true" />
          </button>
          {formStatus === 'success' ? (
            <p className="form-status form-status--success" role="status">
              Message sent. Thank you for helping move the next operation forward.
            </p>
          ) : null}
          {formStatus === 'error' ? (
            <p className="form-status form-status--error" role="alert">
              The message could not be sent. Please try again or email unitedheartsdtx@gmail.com.
            </p>
          ) : null}
        </form>
      </Reveal>
    </section>
  );
}
