// // ============================================================
// // DATA — edit this block to update site content, no HTML digging required
// // ============================================================
// const ICON = (slug, variant = 'original') =>
//   `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

// const DATA = {
//   stack: [
//     {
//       group: 'Languages',
//       items: [
//         { name: 'Java', icon: ICON('java') },
//         { name: 'JavaScript', icon: ICON('javascript') },
//       ],
//     },
//     {
//       group: 'Frameworks',
//       items: [
//         { name: 'Spring Boot', icon: ICON('spring') },
//         { name: 'Spring Cloud', icon: ICON('spring') },
//         { name: 'Hibernate / JPA', icon: ICON('hibernate') },
//         { name: 'Node.js', icon: ICON('nodejs') },
//         { name: 'Express.js', icon: ICON('express') },
//       ],
//     },
//     {
//       group: 'Frontend',
//       items: [
//         { name: 'React', icon: ICON('react') },
//       ],
//     },
//     {
//       group: 'Databases & Messaging',
//       items: [
//         { name: 'PostgreSQL', icon: ICON('postgresql') },
//         { name: 'MySQL', icon: ICON('mysql') },
//         { name: 'Apache Kafka', icon: ICON('apachekafka') },
//       ],
//     },
//     {
//       group: 'Integrations & Auth',
//       items: [
//         { name: 'REST APIs', icon: null },
//         { name: 'xAPI / LRS', icon: null },
//         { name: 'QuickBooks SDK', icon: null },
//         { name: 'JWT', icon: null },
//         { name: 'AWS S3', icon: ICON('amazonwebservices', 'original-wordmark') },
//         { name: 'Selenium', icon: null },
//         { name: 'Make.com', icon: null },
//       ],
//     },
//     {
//       group: 'Cloud & DevOps',
//       items: [
//         { name: 'Docker', icon: ICON('docker') },
//         { name: 'Jenkins', icon: ICON('jenkins') },
//         { name: 'CI/CD', icon: null },
//       ],
//     },
//     {
//       group: 'Tools',
//       items: [
//         { name: 'Git', icon: ICON('git') },
//         { name: 'IntelliJ IDEA', icon: ICON('intellij') },
//         { name: 'VS Code', icon: ICON('vscode') },
//         { name: 'Postman', icon: ICON('postman') },
//         { name: 'Swagger', icon: null },
//       ],
//     },
//   ],

//   changelog: [
//     {
//       version: 'v2.0',
//       role: 'Associate Consultant — Development',
//       company: 'Oodles Technologies Pvt. Ltd. · Gurugram, Haryana',
//       dates: 'Nov 2024 — Present',
//       points: [
//         'Designed and developed backend microservices using Java, Spring Boot and REST APIs across LMS systems, quoting/e-commerce tools and internal automation utilities.',
//         'Integrated QuickBooks Online, GrassBlade xAPI/LRS and AWS S3, enabling secure data exchange, real-time accounting sync and scalable content delivery.',
//         'Built secure, token-based authentication (JWT, xAPI Key/Secret) for cross-service communication between LMS platforms, SCORM players and external Learning Record Stores.',
//         'Developed automated data-collection workflows using Selenium and Make.com for scenario-based integration pipelines.',
//         'Implemented role-based access and multi-tenant data models for complex registration and subscription workflows.',
//       ],
//     },
//     {
//       version: 'v1.0',
//       role: 'Graduate Engineer Trainee',
//       company: 'STL Digital · Pune, Maharashtra',
//       dates: 'Oct 2023 — Jun 2024',
//       points: [
//         'Revamped an e-commerce application using Spring Boot, React and MySQL, improving transaction throughput and data flow by 25%.',
//         'Implemented microservice-based architecture with JWT authentication, boosting scalability and strengthening security compliance by 40%.',
//         'Redesigned UI workflows for Login, Signup and Product Details, improving user navigation by 30%.',
//       ],
//     },
//   ],

//   projects: [
//     {
//       name: 'CareH — Learning Management System',
//       desc: 'Multi-tenant LMS handling registration hierarchies, enrollment-based course packages and daily attendance escalation.',
//       flow: ['Client', 'Spring Boot API', 'AWS S3 / GrassBlade LRS'],
//       points: [
//         'Child / parent / non-residing-parent registration with a unique Enrollment ID mapped to configurable course packages.',
//         'Unique Learner ID integrated with GrassBlade LRS, passing xAPI endpoint + Key/Secret to capture Experienced, Answered, Completed and Progress statements.',
//         'Attendance system that notifies parents daily, suppresses alerts on approved leave, and escalates after 7 consecutive absences.',
//       ],
//       tech: ['Java', 'Spring Boot', 'PostgreSQL/MySQL', 'AWS S3', 'xAPI/LRS'],
//     },
//     {
//       name: 'Itinera — QuickBooks Estimate Comparison',
//       desc: 'Backend logic layer over QuickBooks Online for side-by-side estimate comparison across pipeline stages.',
//       flow: ['Sales Rep UI', 'Spring Boot Service', 'QuickBooks Online API'],
//       points: [
//         'Integrated QuickBooks Online to fetch client accounts and all associated product estimates per account.',
//         'Built backend logic to generate and manage multiple estimates per product, enabling client-facing comparison.',
//       ],
//       tech: ['Java', 'Spring Boot', 'QuickBooks SDK', 'REST APIs'],
//     },
//     {
//       name: 'Odoo Lead Scraper',
//       desc: 'Internal browser-automation service that extracts lead data from a target site\u2019s rendered pages.',
//       flow: ['API Trigger', 'Selenium Runner', 'Target Site'],
//       points: [
//         'Automated browser interactions with Selenium to extract lead data from rendered pages.',
//         'Implemented an identity-verification flow triggering a live browser popup on API call, returning extracted data to the UI in real time.',
//       ],
//       tech: ['Java', 'Spring Boot', 'Selenium'],
//     },
//     {
//       name: 'Glow Media — Flex API Quote Integration',
//       desc: 'Product catalog and quote-request pipeline connecting a React storefront to sales via Make.com.',
//       flow: ['React UI', 'Spring Boot API', 'Make.com → Sales'],
//       points: [
//         'Built backend services to fetch product/category data rendered on a React interface with category listings and detailed popups.',
//         'Designed cart and quote-request functionality with two Make.com scenarios routing product logic and submitted quotes to sales reps.',
//       ],
//       tech: ['Java', 'Spring Boot', 'React', 'Make.com'],
//     },
//   ],
// };

// // ============================================================
// // TERMINAL TYPING EFFECT
// // ============================================================
// function initTerminal() {
//   const cmdEl = document.getElementById('typedCommand');
//   const responseEl = document.getElementById('terminalResponse');
//   const cursor = document.getElementById('cmdCursor');
//   const command = 'curl -s api.himanshunainwal.dev/v1/profile';

//   const responseHTML =
// `{
//   <span class="k">"role"</span>: <span class="s">"Backend Developer"</span>,
//   <span class="k">"experience_years"</span>: <span class="v">2.5</span>,
//   <span class="k">"stack"</span>: [<span class="s">"Java"</span>, <span class="s">"Spring Boot"</span>, <span class="s">"PostgreSQL"</span>, <span class="s">"React"</span>],
//   <span class="k">"integrations_shipped"</span>: [<span class="s">"QuickBooks"</span>, <span class="s">"AWS S3"</span>, <span class="s">"xAPI/LRS"</span>],
//   <span class="k">"status"</span>: <span class="s">"open_to_opportunities"</span>
// }`;

//   let i = 0;
//   function typeChar() {
//     if (i <= command.length) {
//       cmdEl.textContent = command.slice(0, i);
//       i++;
//       setTimeout(typeChar, 32);
//     } else {
//       cursor.style.animationDuration = '0.6s';
//       setTimeout(() => {
//         responseEl.innerHTML = responseHTML;
//         responseEl.classList.add('visible');
//       }, 250);
//     }
//   }
//   typeChar();
// }

// // ============================================================
// // RENDER: STACK
// // ============================================================
// function chipHTML(item) {
//   const iconPart = item.icon
//     ? `<img src="${item.icon}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'chip__fallback',textContent:'${item.name.charAt(0)}'}))" />`
//     : `<span class="chip__fallback">${item.name.charAt(0)}</span>`;
//   return `<span class="chip">${iconPart}${item.name}</span>`;
// }

// function renderStack() {
//   const container = document.getElementById('stackGroups');
//   container.innerHTML = DATA.stack.map(group => `
//     <div class="stack__group">
//       <h3>${group.group}</h3>
//       <div class="chip-row">
//         ${group.items.map(chipHTML).join('')}
//       </div>
//     </div>
//   `).join('');
// }

// // ============================================================
// // RENDER: CHANGELOG
// // ============================================================
// function renderChangelog() {
//   const container = document.getElementById('changelog');
//   container.innerHTML = DATA.changelog.map(entry => `
//     <div class="changelog__entry">
//       <div class="changelog__meta">
//         <span class="changelog__version">${entry.version}</span>
//         <span class="changelog__role">${entry.role}</span>
//       </div>
//       <div class="changelog__dates">${entry.dates}</div>
//       <div class="changelog__company">${entry.company}</div>
//       <ul class="changelog__list">
//         ${entry.points.map(p => `<li>${p}</li>`).join('')}
//       </ul>
//     </div>
//   `).join('');
// }

// // ============================================================
// // RENDER: PROJECTS
// // ============================================================
// function flowHTML(nodes) {
//   return `<div class="flow">${nodes
//     .map((n, idx) => `<span class="flow__node">${n}</span>${idx < nodes.length - 1 ? '<span class="flow__arrow"></span>' : ''}`)
//     .join('')}</div>`;
// }

// function renderProjects() {
//   const container = document.getElementById('projects-grid');
//   container.innerHTML = DATA.projects.map(p => `
//     <div class="project-card">
//       <h3>${p.name}</h3>
//       ${flowHTML(p.flow)}
//       <p class="project-card__desc">${p.desc}</p>
//       <ul class="project-card__list">
//         ${p.points.map(pt => `<li>${pt}</li>`).join('')}
//       </ul>
//       <div class="project-card__tech">
//         ${p.tech.map(t => `<span>${t}</span>`).join('')}
//       </div>
//     </div>
//   `).join('');
// }

// // ============================================================
// // SCROLL REVEAL
// // ============================================================
// function initReveal() {
//   const els = document.querySelectorAll('.reveal');
//   const io = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('is-visible');
//         io.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.15 });
//   els.forEach(el => io.observe(el));
// }

// // ============================================================
// // NAV TOGGLE (mobile)
// // ============================================================
// function initNav() {
//   const toggle = document.getElementById('navToggle');
//   const routes = document.getElementById('navRoutes');
//   toggle.addEventListener('click', () => {
//     const isOpen = routes.classList.toggle('is-open');
//     toggle.setAttribute('aria-expanded', String(isOpen));
//   });
//   routes.querySelectorAll('a').forEach(a => {
//     a.addEventListener('click', () => {
//       routes.classList.remove('is-open');
//       toggle.setAttribute('aria-expanded', 'false');
//     });
//   });
// }

// // ============================================================
// // CONTACT FORM — mailto handoff (no backend required for static hosting)
// // ============================================================
// function initContact() {
//   const form = document.getElementById('contactForm');
//   const payload = document.getElementById('contactPayload');
//   const nameEl = document.getElementById('cName');
//   const emailEl = document.getElementById('cEmail');
//   const msgEl = document.getElementById('cMessage');

//   function updatePayload() {
//     payload.innerHTML =
// `{
//   <span class="k">"name"</span>: <span class="v">"${(nameEl.value || '').replace(/"/g, '\\"')}"</span>,
//   <span class="k">"email"</span>: <span class="v">"${(emailEl.value || '').replace(/"/g, '\\"')}"</span>,
//   <span class="k">"message"</span>: <span class="v">"${(msgEl.value || '').replace(/"/g, '\\"')}"</span>
// }`;
//   }
//   [nameEl, emailEl, msgEl].forEach(el => el.addEventListener('input', updatePayload));

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const subject = encodeURIComponent(`Portfolio contact from ${nameEl.value}`);
//     const body = encodeURIComponent(`${msgEl.value}\n\n— ${nameEl.value} (${emailEl.value})`);
//     window.location.href = `mailto:himanshunainwal0@gmail.com?subject=${subject}&body=${body}`;
//   });
// }

// // ============================================================
// // BOOT
// // ============================================================
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('year').textContent = new Date().getFullYear();
//   initTerminal();
//   renderStack();
//   renderChangelog();
//   renderProjects();
//   initReveal();
//   initNav();
//   initContact();
// });












// ============================================================
// DATA — edit this block to update site content, no HTML digging required
// ============================================================
const ICON = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const DATA = {
  stack: [
    {
      group: 'Languages',
      items: [
        { name: 'Java', icon: ICON('java') },
        { name: 'JavaScript', icon: ICON('javascript') },
      ],
    },
    {
      group: 'Frameworks',
      items: [
        { name: 'Spring Boot', icon: ICON('spring') },
        { name: 'Spring Cloud', icon: ICON('spring') },
        { name: 'Hibernate / JPA', icon: ICON('hibernate') },
        { name: 'Node.js', icon: ICON('nodejs') },
        { name: 'Express.js', icon: ICON('express') },
      ],
    },
    {
      group: 'Frontend',
      items: [
        { name: 'React', icon: ICON('react') },
      ],
    },
    {
      group: 'Databases & Messaging',
      items: [
        { name: 'PostgreSQL', icon: ICON('postgresql') },
        { name: 'MySQL', icon: ICON('mysql') },
        { name: 'Apache Kafka', icon: ICON('apachekafka') },
      ],
    },
    {
      group: 'Integrations & Auth',
      items: [
        { name: 'REST APIs', icon: null },
        { name: 'xAPI / LRS', icon: null },
        { name: 'QuickBooks SDK', icon: null },
        { name: 'JWT', icon: null },
        { name: 'AWS S3', icon: ICON('amazonwebservices', 'original-wordmark') },
        { name: 'Selenium', icon: null },
        { name: 'Make.com', icon: null },
      ],
    },
    {
      group: 'Cloud & DevOps',
      items: [
        { name: 'Docker', icon: ICON('docker') },
        { name: 'Jenkins', icon: ICON('jenkins') },
        { name: 'CI/CD', icon: null },
      ],
    },
    {
      group: 'Tools',
      items: [
        { name: 'Git', icon: ICON('git') },
        { name: 'IntelliJ IDEA', icon: ICON('intellij') },
        { name: 'VS Code', icon: ICON('vscode') },
        { name: 'Postman', icon: ICON('postman') },
        { name: 'Swagger', icon: null },
      ],
    },
  ],

  changelog: [
    {
      version: 'v2.0',
      role: 'Associate Consultant — Development',
      company: 'Oodles Technologies Pvt. Ltd. · Gurugram, Haryana',
      dates: 'Nov 2024 — Present',
      points: [
        'Designed and developed backend microservices using Java, Spring Boot and REST APIs across LMS systems, quoting/e-commerce tools and internal automation utilities.',
        'Integrated QuickBooks Online, GrassBlade xAPI/LRS and AWS S3, enabling secure data exchange, real-time accounting sync and scalable content delivery.',
        'Built secure, token-based authentication (JWT, xAPI Key/Secret) for cross-service communication between LMS platforms, SCORM players and external Learning Record Stores.',
        'Developed automated data-collection workflows using Selenium and Make.com for scenario-based integration pipelines.',
        'Implemented role-based access and multi-tenant data models for complex registration and subscription workflows.',
      ],
    },
    {
      version: 'v1.0',
      role: 'Graduate Engineer Trainee',
      company: 'STL Digital · Pune, Maharashtra',
      dates: 'Oct 2023 — Jun 2024',
      points: [
        'Revamped an e-commerce application using Spring Boot, React and MySQL, improving transaction throughput and data flow by 25%.',
        'Implemented microservice-based architecture with JWT authentication, boosting scalability and strengthening security compliance by 40%.',
        'Redesigned UI workflows for Login, Signup and Product Details, improving user navigation by 30%.',
      ],
    },
  ],

  projects: [
    {
      name: 'CareH — Learning Management System',
      desc: 'Multi-tenant LMS handling registration hierarchies, enrollment-based course packages and daily attendance escalation.',
      flow: ['Client', 'Spring Boot API', 'AWS S3 / GrassBlade LRS'],
      points: [
        'Child / parent / non-residing-parent registration with a unique Enrollment ID mapped to configurable course packages.',
        'Unique Learner ID integrated with GrassBlade LRS, passing xAPI endpoint + Key/Secret to capture Experienced, Answered, Completed and Progress statements.',
        'Attendance system that notifies parents daily, suppresses alerts on approved leave, and escalates after 7 consecutive absences.',
      ],
      tech: ['Java', 'Spring Boot', 'PostgreSQL/MySQL', 'AWS S3', 'xAPI/LRS'],
    },
    {
      name: 'Itinera — QuickBooks Estimate Comparison',
      desc: 'Backend logic layer over QuickBooks Online for side-by-side estimate comparison across pipeline stages.',
      flow: ['Sales Rep UI', 'Spring Boot Service', 'QuickBooks Online API'],
      points: [
        'Integrated QuickBooks Online to fetch client accounts and all associated product estimates per account.',
        'Built backend logic to generate and manage multiple estimates per product, enabling client-facing comparison.',
      ],
      tech: ['Java', 'Spring Boot', 'QuickBooks SDK', 'REST APIs'],
    },
    {
      name: 'Odoo Lead Scraper',
      desc: 'Internal browser-automation service that extracts lead data from a target site\u2019s rendered pages.',
      flow: ['API Trigger', 'Selenium Runner', 'Target Site'],
      points: [
        'Automated browser interactions with Selenium to extract lead data from rendered pages.',
        'Implemented an identity-verification flow triggering a live browser popup on API call, returning extracted data to the UI in real time.',
      ],
      tech: ['Java', 'Spring Boot', 'Selenium'],
    },
    {
      name: 'Glow Media — Flex API Quote Integration',
      desc: 'Product catalog and quote-request pipeline connecting a React storefront to sales via Make.com.',
      flow: ['React UI', 'Spring Boot API', 'Make.com → Sales'],
      points: [
        'Built backend services to fetch product/category data rendered on a React interface with category listings and detailed popups.',
        'Designed cart and quote-request functionality with two Make.com scenarios routing product logic and submitted quotes to sales reps.',
      ],
      tech: ['Java', 'Spring Boot', 'React', 'Make.com'],
    },
  ],
};

// ============================================================
// TERMINAL TYPING EFFECT
// ============================================================
function initTerminal() {
  const cmdEl = document.getElementById('typedCommand');
  const responseEl = document.getElementById('terminalResponse');
  const cursor = document.getElementById('cmdCursor');
  const command = 'curl -s api.himanshunainwal.dev/v1/profile';

  const responseHTML =
`{
  <span class="k">"role"</span>: <span class="s">"Backend Developer"</span>,
  <span class="k">"experience_years"</span>: <span class="v">2.5</span>,
  <span class="k">"stack"</span>: [<span class="s">"Java"</span>, <span class="s">"Spring Boot"</span>, <span class="s">"PostgreSQL"</span>, <span class="s">"React"</span>],
  <span class="k">"integrations_shipped"</span>: [<span class="s">"QuickBooks"</span>, <span class="s">"AWS S3"</span>, <span class="s">"xAPI/LRS"</span>],
  <span class="k">"status"</span>: <span class="s">"open_to_opportunities"</span>
}`;

  let i = 0;
  function typeChar() {
    if (i <= command.length) {
      cmdEl.textContent = command.slice(0, i);
      i++;
      setTimeout(typeChar, 32);
    } else {
      cursor.style.animationDuration = '0.6s';
      setTimeout(() => {
        responseEl.innerHTML = responseHTML;
        responseEl.classList.add('visible');
      }, 250);
    }
  }
  typeChar();
}

// ============================================================
// RENDER: STACK
// ============================================================
function chipHTML(item) {
  const iconPart = item.icon
    ? `<img src="${item.icon}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'chip__fallback',textContent:'${item.name.charAt(0)}'}))" />`
    : `<span class="chip__fallback">${item.name.charAt(0)}</span>`;
  return `<span class="chip">${iconPart}${item.name}</span>`;
}

function renderStack() {
  const container = document.getElementById('stackGroups');
  container.innerHTML = DATA.stack.map(group => `
    <div class="stack__group">
      <h3>${group.group}</h3>
      <div class="chip-row">
        ${group.items.map(chipHTML).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: CHANGELOG
// ============================================================
function renderChangelog() {
  const container = document.getElementById('changelog');
  container.innerHTML = DATA.changelog.map(entry => `
    <div class="changelog__entry">
      <div class="changelog__meta">
        <span class="changelog__version">${entry.version}</span>
        <span class="changelog__role">${entry.role}</span>
      </div>
      <div class="changelog__dates">${entry.dates}</div>
      <div class="changelog__company">${entry.company}</div>
      <ul class="changelog__list">
        ${entry.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ============================================================
// RENDER: PROJECTS
// ============================================================
function flowHTML(nodes) {
  return `<div class="flow">${nodes
    .map((n, idx) => `<span class="flow__node">${n}</span>${idx < nodes.length - 1 ? '<span class="flow__arrow"></span>' : ''}`)
    .join('')}</div>`;
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = DATA.projects.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      ${flowHTML(p.flow)}
      <p class="project-card__desc">${p.desc}</p>
      <ul class="project-card__list">
        ${p.points.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
      <div class="project-card__tech">
        ${p.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

// ============================================================
// NAV TOGGLE (mobile)
// ============================================================
function initNav() {
  const toggle = document.getElementById('navToggle');
  const routes = document.getElementById('navRoutes');
  toggle.addEventListener('click', () => {
    const isOpen = routes.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  routes.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      routes.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// CONTACT FORM — sends real email via EmailJS, routed through YOUR OWN
// connected email account (Gmail/Outlook/etc). No backend server needed.
//
// SETUP (one-time, ~5 minutes):
//   1. Create a free account at https://www.emailjs.com
//   2. Email Services → Add New Service → connect your own Gmail/Outlook/
//      other account. Copy the "Service ID" it gives you.
//   3. Email Templates → Create Template. Use variables named exactly
//      {{from_name}}, {{from_email}}, {{message}} in the template body
//      (these match the params sent below). Copy the "Template ID".
//   4. Account → General → copy your "Public Key".
//   5. Paste all three into EMAILJS_CONFIG below.
//   6. (Recommended) In EmailJS dashboard → Account → Security, restrict
//      allowed origins to your GitHub Pages domain so the public key can't
//      be used from anywhere else.
// ============================================================
const EMAILJS_CONFIG = {
  publicKey: 'zjdWnuAoghg9HNnZO',
  serviceId: 'service_ekh8tud',
  templateId: 'template_bi85myl',
};

function initContact() {
  const form = document.getElementById('contactForm');
  const payload = document.getElementById('contactPayload');
  const statusEl = document.getElementById('contactStatus');
  const submitBtn = document.getElementById('contactSubmit');
  const nameEl = document.getElementById('cName');
  const emailEl = document.getElementById('cEmail');
  const msgEl = document.getElementById('cMessage');

  if (window.emailjs && EMAILJS_CONFIG.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  function updatePayload() {
    payload.innerHTML =
`{
  <span class="k">"name"</span>: <span class="v">"${(nameEl.value || '').replace(/"/g, '\\"')}"</span>,
  <span class="k">"email"</span>: <span class="v">"${(emailEl.value || '').replace(/"/g, '\\"')}"</span>,
  <span class="k">"message"</span>: <span class="v">"${(msgEl.value || '').replace(/"/g, '\\"')}"</span>
}`;
  }
  [nameEl, emailEl, msgEl].forEach(el => el.addEventListener('input', updatePayload));

  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.className = 'contact__status' + (kind ? ` contact__status--${kind}` : '');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (EMAILJS_CONFIG.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
      setStatus('Contact form isn\u2019t configured yet — see the EmailJS setup steps in script.js / README.', 'error');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Sending…', 'sending');

    emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
      from_name: nameEl.value,
      from_email: emailEl.value,
      message: msgEl.value,
    }).then(() => {
      setStatus('Sent — thanks, I\u2019ll get back to you soon.', 'success');
      form.reset();
      updatePayload();
    }).catch((err) => {
      console.error('EmailJS error:', err);
      setStatus('Something went wrong sending that — try emailing me directly instead.', 'error');
    }).finally(() => {
      submitBtn.disabled = false;
    });
  });
}

// ============================================================
// BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initTerminal();
  renderStack();
  renderChangelog();
  renderProjects();
  initReveal();
  initNav();
  initContact();
});