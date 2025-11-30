import { siteData } from '../data/siteData';

export default function Contact() {
  const { contact } = siteData;
  return (
    <main className="page">
      <h1>{contact.title}</h1>
      <img src={contact.image} alt="Contact" className="page-image" />
      <section className="contact-info">
        <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
        <p><strong>Address:</strong> {contact.address}</p>
        <p><strong>Hours:</strong> {contact.hours}</p>
      </section>
    </main>
  );
}