/* app.js — lógica del sitio. Los textos y precios viven en data.js */
const D = HENA, $ = (s, r = document) => r.querySelector(s);
const wa = t => `https://wa.me/${D.whatsapp}?text=${encodeURIComponent(t)}`;

// 1) Colores desde data.js hacia variables CSS
Object.entries(D.colores).forEach(([k, v]) => document.documentElement.style.setProperty('--' + k, v));

// 2) Iconos de línea
const P = {
  plano:'<rect x="4" y="6" width="28" height="22" rx="1"/><path d="M4 14h28M12 6v22"/>',
  cartel:'<rect x="8" y="3" width="20" height="30" rx="1"/><path d="M13 12h10M13 18h10M13 24h6"/>',
  hoja:'<path d="M9 3h13l6 6v24H9z"/><path d="M22 3v6h6"/>',
  scan:'<path d="M4 18h28M6 8v-3h4M26 5h4v3M6 28v3h4M30 28v3h-4"/>',
  rollo:'<ellipse cx="12" cy="18" rx="6" ry="10"/><path d="M12 8h18v20H12"/>',
  sticker:'<path d="M5 5h26v18l-8 8H5z"/><path d="M23 31v-8h8"/>',
  cd:'<circle cx="18" cy="18" r="14"/><circle cx="18" cy="18" r="4"/>',
  whats:'<path d="M5 31l2-7a13 13 0 1 1 5 5z"/>',
  regla:'<path d="M3 24L24 3l9 9L12 33z"/><path d="M10 17l4 4M15 12l3 3M20 7l3 3"/>',
  est:'<path d="M18 5L2 13l16 8 16-8z"/><path d="M8 17v8c4 4 16 4 20 0v-8"/>'
};
const ico = n => `<svg class="ico" viewBox="0 0 36 36">${P[n]||P.hoja}</svg>`;

// 3) Vistas
const V = {};
V.inicio = () => `
<div class="hero">
  <div>
    <div class="trust"><b>★ ${D.rating.nota}</b> en Google · ${D.rating.resenas} reseñas</div>
    <h1>Impresión de planos en Xalapa</h1>
    <p class="lead">Rápido, preciso y a buen precio. Envía tu archivo por WhatsApp, paga y recógelo.</p>
    <div class="btns">
      <a class="btn btn-rojo" data-wa="Hola, quiero enviar un archivo para imprimir.">Envía tu archivo</a>
      <a class="btn btn-naranja" href="#precios">Ver precios</a>
    </div>
  </div>
  <svg class="plano" viewBox="0 0 400 300" role="img" aria-label="Plano dibujándose">
    <path class="l" style="--i:0;--len:1200" d="M40 40H360V240H40Z"/>
    <path class="l" style="--i:1;--len:300" d="M40 120H170V240"/>
    <path class="l" style="--i:2;--len:300" d="M170 40V80M170 120H240V40"/>
    <path class="l" style="--i:3;--len:250" d="M240 160H360"/>
    <path class="l o" style="--i:4;--len:120" d="M290 40a30 30 0 0 0 30 30"/>
    <path class="l r" style="--i:5;--len:340" d="M40 265H360M40 258v14M360 258v14"/>
    <path class="l r" style="--i:6;--len:220" d="M385 40v200M378 40h14M378 240h14"/>
    <text x="150" y="285">120 cm</text><text x="342" y="150" transform="rotate(90 342 150)">90 cm</text>
  </svg>
</div>
<div class="franja">
  <div>${ico('plano')}Planos desde 1 pieza</div><div>${ico('hoja')}Varios formatos</div>
  <div>${ico('est')}Tarifa para estudiantes</div><div>${ico('whats')}Envío por WhatsApp</div>
</div>`;

V.servicios = () => `
<h2>Servicios</h2><div class="cota"><span>Qué imprimimos</span></div>
<div class="grid">${D.servicios.map(s => `<article class="card">${ico(s.ico)}<h3>${s.t}</h3><p>${s.d}</p>
<a class="btn btn-claro" data-wa="Hola, quiero cotizar ${s.wa}.">Cotizar</a></article>`).join('')}</div>
<h2 class="sub">Para quién trabajamos</h2>
<div class="grid">${D.clientes.map(c => `<article class="card"><h3>${c.t}</h3><p>${c.d}</p>
<a class="btn btn-claro" data-wa="Hola, ${c.wa} y quiero información.">Escríbenos</a></article>`).join('')}</div>`;

V.precios = () => `
<h2>Precios y formatos</h2><div class="cota"><span>Medidas en cm</span></div>
${D.preciosSonEjemplo ? '<p><span class="ejemplo">PRECIOS DE EJEMPLO · POR CONFIRMAR</span></p>' : ''}
<div class="tabla-w"><table><thead><tr><th>Formato</th><th>Medida</th>${D.papeles.map(p => `<th>${p}</th>`).join('')}</tr></thead>
<tbody>${D.formatos.map(f => `<tr><td><b>${f.n}</b></td><td class="mono">${f.medida}</td>${f.p.map(x => `<td class="p">${x == null ? 'Cotizar' : '$' + x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
<p class="aviso">Precios sujetos a cambio. Pregunta por tarifa de estudiante y por volumen.</p>
<h2 class="sub">Calculadora de cotización</h2>
<div class="calc">
  <label>Formato<select id="cf">${D.formatos.map((f, i) => `<option value="${i}">${f.n}</option>`).join('')}</select></label>
  <label>Papel<select id="cp">${D.papeles.map((p, i) => `<option value="${i}">${p}</option>`).join('')}</select></label>
  <label>Cantidad<input id="cc" type="number" min="1" value="1"></label>
  <div><div class="total" id="ct">—</div><a class="btn btn-rojo" id="cw" style="margin-top:.5rem">Enviar por WhatsApp</a></div>
</div>`;

V.pedir = () => `
<h2>Cómo pedir</h2><div class="cota"><span>4 pasos</span></div>
<div class="pasos">${D.pasos.map(p => `<div class="paso"><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('')}</div>
<p style="margin-top:2rem"><a class="btn btn-rojo" data-wa="Hola, quiero enviar mi archivo para imprimir.">Enviar mi archivo por WhatsApp</a></p>`;

V.galeria = () => `
<h2>Galería</h2><div class="cota"><span>El local y nuestros trabajos</span></div>
<div class="galeria">${D.galeria.map(g => `<figure><img src="${g.src}" alt="${g.alt}" loading="lazy"
 onerror="this.parentNode.innerHTML='<div class=vacio>Falta la foto:<br>${g.src}</div>';this.parentNode.style.cursor='default'"></figure>`).join('')}
<figure><div class="vacio">Espacio para más fotos<br>(impresoras, rollos, trabajos)</div></figure></div>`;

V.nosotros = () => `
<h2>Quiénes somos</h2><div class="cota"><span>Hena Plotter 2 · Xalapa</span></div>
<p class="lead">${D.nosotros}</p>
<div class="oscuro"><h2>Por qué elegirnos</h2><div class="grid">${D.porque.map((p, i) =>
 `<div>${ico(['plano','regla','rollo','whats'][i])}<h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('')}</div></div>
<h2>Opiniones</h2><p class="trust"><b>★ ${D.rating.nota}</b> en Google · ${D.rating.resenas} reseñas</p>
<div class="grid">${D.opiniones.map(o => `<blockquote>“${o[0]}”<cite>${o[1]}</cite></blockquote>`).join('')}</div>
<p style="margin-top:1.5rem"><a class="btn btn-claro" href="${D.mapsUrl}" target="_blank" rel="noopener">Ver más en Google</a></p>`;

V.contacto = () => `
<h2>Ubicación y contacto</h2><div class="cota"><span>Av. Venustiano Carranza</span></div>
<div class="dos">
  <div><iframe src="${D.mapsEmbed}" loading="lazy" title="Mapa"></iframe>
    <p style="margin:1rem 0">${D.direccion}.<br><small>${D.referencia}</small></p>
    <p>${D.horario.map(h => `<b>${h[0]}:</b> ${h[1]}`).join('<br>')}</p>
    <p style="margin-top:1rem"><a class="btn btn-claro" href="${D.mapsUrl}" target="_blank" rel="noopener">Cómo llegar</a></p></div>
  <div><h3>Escríbenos</h3><form id="form">
    <label>Nombre<input name="n" required></label><label>Mensaje<textarea name="m" rows="4" required></textarea></label>
    <button class="btn btn-naranja" type="submit">Enviar al correo</button></form>
    <p class="aviso">Tel. ${D.telefono} · ${D.correo} (POR CONFIRMAR)<br><a href="${D.facebook}" target="_blank" rel="noopener">Facebook: Hena Dos Plotter</a></p></div>
</div>
<div class="banda"><h2>¿Tienes un plano para imprimir?</h2><div class="btns">
  <a class="btn btn-wa" data-wa="Hola, tengo un plano para imprimir.">WhatsApp</a>
  <a class="btn btn-naranja" href="tel:+52${D.telefono.replace(/\s/g, '')}">Llamar</a></div></div>
<h2>Preguntas frecuentes</h2>${D.faq.map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}
<footer>© ${new Date().getFullYear()} ${D.nombre}. Todos los derechos reservados · <a href="#contacto">Aviso de privacidad (por redactar)</a></footer>`;

// 4) Menú, vistas y router
const NOMBRES = { inicio:'Inicio', servicios:'Servicios', precios:'Precios', pedir:'Cómo pedir', galeria:'Galería', nosotros:'Nosotros', contacto:'Contacto' };
$('#menu').innerHTML = Object.entries(NOMBRES).map(([k, v]) => `<a href="#${k}" data-v="${k}">${v}</a>`).join('');
$('#app').innerHTML = Object.keys(V).map(k => `<section class="view" id="v-${k}"></section>`).join('');
const hecho = {};

function mostrar() {
  const k = V[location.hash.slice(1)] ? location.hash.slice(1) : 'inicio';
  document.querySelectorAll('.view').forEach(v => v.classList.remove('on'));
  const s = $('#v-' + k);
  if (!hecho[k]) { s.innerHTML = V[k](); hecho[k] = 1; if (k === 'precios') calc(); if (k === 'contacto') form(); }
  s.classList.add('on');
  document.querySelectorAll('#menu a').forEach(a => a.classList.toggle('on', a.dataset.v === k));
  $('#menu').classList.remove('open'); scrollTo(0, 0);
}
addEventListener('hashchange', () => document.startViewTransition ? document.startViewTransition(mostrar) : mostrar());
$('#burger').onclick = () => $('#menu').classList.toggle('open');

// 5) Enlaces de WhatsApp (data-wa = mensaje prellenado)
document.addEventListener('click', e => {
  const a = e.target.closest('[data-wa]');
  if (a) { e.preventDefault(); open(wa(a.dataset.wa), '_blank', 'noopener'); }
  const img = e.target.closest('.galeria img');
  if (img) { $('#lightbox img').src = img.src; $('#lightbox').classList.add('on'); }
  if (e.target.closest('#lightbox')) $('#lightbox').classList.remove('on');
});

// 6) Calculadora (usa los precios de data.js)
function calc() {
  const f = $('#cf'), p = $('#cp'), c = $('#cc'), t = $('#ct'), w = $('#cw');
  const run = () => {
    const fm = D.formatos[f.value], pr = fm.p[p.value], q = Math.max(1, +c.value || 1);
    t.textContent = pr == null ? 'Cotizar' : '$' + pr * q;
    const msg = `Hola, quiero cotizar: ${q} × ${fm.n} en papel ${D.papeles[p.value]}` + (pr == null ? '.' : ` (aprox. $${pr * q}).`);
    w.onclick = () => open(wa(msg), '_blank', 'noopener');
  };
  [f, p, c].forEach(x => x.oninput = run); run();
}

// 7) Formulario: abre el correo del cliente (sin servidor). Para envío real, conectar Formspree/EmailJS.
function form() {
  $('#form').onsubmit = e => { e.preventDefault(); const d = new FormData(e.target);
    location.href = `mailto:${D.correo}?subject=${encodeURIComponent('Contacto web: ' + d.get('n'))}&body=${encodeURIComponent(d.get('m'))}`; };
}

// 8) SEO local (LocalBusiness)
document.head.insertAdjacentHTML('beforeend', `<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: D.nombre, telephone: D.telefono,
  address: { '@type': 'PostalAddress', streetAddress: 'Av. Venustiano Carranza', addressLocality: 'Xalapa', addressRegion: 'Veracruz', postalCode: '91080', addressCountry: 'MX' },
  openingHours: 'Mo-Fr 08:00-20:00' })}</script>`);

mostrar();
