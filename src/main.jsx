import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['✦', 'Corte y estilismo', 'Diseño, precisión y un acabado que se mueve contigo.', '$ 520'],
  ['◒', 'Coloración', 'Color dimensional y cuidado para revelar tu mejor tono.', '$ 1,350'],
  ['◌', 'Manicure', 'Manos impecables con atención a cada detalle.', '$ 380'],
  ['◔', 'Pedicure', 'Un ritual de pausa, suavidad y color.', '$ 480'],
  ['✧', 'Maquillaje', 'Una versión luminosa de ti para cada ocasión.', '$ 850'],
  ['⌇', 'Tratamientos capilares', 'Hidratación y reparación personalizada.', '$ 690'],
];

function Button({ children, secondary = false, href = '#reserva' }) { return <a className={`button ${secondary ? 'secondary' : ''}`} href={href}>{children}<span>↗</span></a> }
function SectionTitle({ eyebrow, title, text }) { return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="intro">{text}</p>}</div> }

function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const close = () => setOpen(false);
  return <>
    <header className="nav"><a className="brand" href="#inicio">Aura <i>Studio</i></a><button className="menu" aria-label="Abrir menú" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button><nav className={open ? 'open' : ''}>{['Inicio','Servicios','Galería','Nosotros','Contacto'].map(x => <a onClick={close} key={x} href={`#${x.toLowerCase().replace('í','i')}`}>{x}</a>)}<Button>Agendar cita</Button></nav></header>
    <main>
      <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">Estudio de belleza · CDMX</p><h1>Tu estilo,<br/><em>tu esencia</em></h1><p>Belleza, cuidado y estilo en un espacio creado para ti.</p><div className="actions"><Button href="#servicios">Ver servicios</Button><Button secondary>Agendar cita</Button></div><div className="hero-note"><span>01</span><small>Un momento para volver a ti</small></div></div><div className="hero-image"><div className="image-label">Rituales de belleza<br/><b>con intención</b></div></div></section>
      <section className="services wrap" id="servicios"><SectionTitle eyebrow="Nuestros servicios" title="Detalles que hacen la diferencia" text="Cada servicio comienza con una escucha atenta y termina con una versión de ti que se siente auténtica."/><div className="service-grid">{services.map(([icon,title,desc,price]) => <article className="service-card" key={title}><span className="service-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div><strong>{price}</strong><span className="arrow">↗</span></article>)}</div></section>
      <section className="experience"><div className="experience-photo"></div><div className="experience-copy"><p className="eyebrow">Servicio destacado</p><h2>Experiencia <em>Aura</em></h2><p>Un ritual creado para detener el ritmo. Incluye diagnóstico, tratamiento capilar profundo, masaje de cuero cabelludo, estilismo y manicure express.</p><div className="package"><span>150 min · Paquete demo</span><strong>$ 1,980</strong></div><Button>Quiero esta experiencia</Button></div></section>
      <section className="gallery wrap" id="galeria"><SectionTitle eyebrow="Galería" title="Un espacio para inspirarte"/><div className="gallery-grid"><figure className="g-one"><span>Cabello</span></figure><figure className="g-two"><span>Manicure</span></figure><figure className="g-three"><span>Maquillaje</span></figure><figure className="g-four"><span>El estudio</span></figure></div><p className="gallery-caption">Imágenes conceptuales para esta demo de portafolio.</p></section>
      <section className="about wrap" id="nosotros"><div><p className="eyebrow">Sobre Aura</p><h2>La belleza se siente mejor cuando es <em>tuya.</em></h2></div><div className="about-text"><p>En Aura Studio creemos en los rituales cotidianos: esos pequeños espacios para cuidarte, expresarte y reconectar contigo.</p><p>Nuestra filosofía ficticia une técnica, diseño y atención cercana para crear una experiencia tan personal como tu estilo.</p><a href="#reserva" className="text-link">Conoce nuestra experiencia <span>→</span></a></div></section>
      <section className="booking wrap" id="reserva"><div className="booking-heading"><p className="eyebrow">Reserva tu momento</p><h2>Tu próxima cita<br/><em>empieza aquí.</em></h2><p>Completa tus datos y te contactaremos para confirmar tu solicitud. Este formulario es una demostración visual.</p></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent ? <div className="success"><span>✦</span><h3>¡Solicitud recibida!</h3><p>Demo: no se ha enviado ninguna información.</p></div> : <><label>Nombre<input required placeholder="Tu nombre" /></label><label>Servicio<select required defaultValue=""><option value="" disabled>Selecciona un servicio</option>{services.map(s=><option key={s[1]}>{s[1]}</option>)}</select></label><div className="form-row"><label>Fecha<input type="date" required/></label><label>Hora<input type="time" required/></label></div><label>Teléfono<input type="tel" required placeholder="55 0000 0000" /></label><button className="submit">Enviar solicitud <span>↗</span></button></>}</form></section>
      <section className="contact" id="contacto"><div className="wrap contact-grid"><SectionTitle eyebrow="Contacto" title="Estamos cerca de ti"/><div className="contact-list"><a href="https://wa.me/525500000000">WhatsApp <b>+52 55 0000 0000</b><span>↗</span></a><a href="https://instagram.com">Instagram <b>@aurastudio.demo</b><span>↗</span></a><div>Horario <b>Mar — Sáb · 10:00 — 19:00</b></div><div>Dirección <b>Av. Demo 123, Col. Ejemplo, CDMX<br/><small>Dirección ficticia para portafolio.</small></b></div></div></div></section>
      <section className="final-cta"><p className="eyebrow">Un momento para ti</p><h2>Agenda tu próxima cita</h2><Button href="https://wa.me/525500000000">Contactar por WhatsApp</Button></section>
    </main><footer><a className="brand" href="#inicio">Aura <i>Studio</i></a><span>Proyecto DEMO — Portafolio Web</span><span>© 2026</span></footer>
  </>
}
createRoot(document.getElementById('root')).render(<App />);
