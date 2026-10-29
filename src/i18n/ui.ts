export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'theme.toggle': 'Cambiar tema',

    'hero.badge': 'vibecoder',
    'hero.title': 'Construyo ideas en código, rápido y con estilo.',
    'hero.description':
      'Portafolio de desarrollos vibecoding, proyectos personales y experimentos. Aquí vivo de convertir prompts en productos reales.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contáctame',
    'hero.terminal.title': 'quien-soy.sh',
    'hero.stat.projects': 'proyectos',
    'hero.stat.posts': 'artículos',
    'hero.stat.stack': 'stack favorito',

    'home.featured': 'Proyectos destacados',
    'home.featured.cta': 'Ver todos los proyectos',
    'home.skills': 'Habilidades',
    'home.skills.cta': 'Ver todas',
    'home.blog': 'Últimos artículos',
    'home.blog.cta': 'Ver el blog',
    'home.contact': '¿Tienes una idea? Hablemos.',

    'projects.title': 'Proyectos',
    'projects.description':
      'Cosas que he construido: apps, herramientas, experimentos y prototipos hechos con vibecoding.',
    'projects.filter.all': 'Todos',
    'projects.empty': 'Aún no hay proyectos publicados.',
    'projects.demo': 'Demo',
    'projects.repo': 'Código',
    'projects.tags': 'Tecnologías',
    'projects.back': 'Volver a proyectos',
    'projects.published': 'Publicado',

    'skills.title': 'Habilidades',
    'skills.description':
      'Las herramientas y tecnologías con las que trabajo día a día.',

    'blog.title': 'Blog',
    'blog.description':
      'Notas sobre vibecoding, desarrollo y cosas que voy aprendiendo.',
    'blog.empty': 'Aún no hay artículos publicados.',
    'blog.back': 'Volver al blog',
    'blog.published': 'Publicado',
    'blog.readTime': 'min de lectura',

    'contact.title': 'Contacto',
    'contact.description':
      '¿Un proyecto, una colaboración o solo quieres saludar? Escríbeme.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado! Te responderé pronto.',
    'contact.error': 'No se pudo enviar. Inténtalo de nuevo o escríbeme por email.',
    'contact.notConfigured':
      'El formulario está desactivado: configura el endpoint en src/data/site.ts (Formspree/Web3Forms).',
    'contact.emailLabel': 'O escríbeme directamente a',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Hecho con Astro + Tailwind y mucho vibecoding.',

    '404.title': '404',
    '404.description': 'Esta página no existe o se ha movido.',
    '404.cta': 'Volver al inicio',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'theme.toggle': 'Toggle theme',

    'hero.badge': 'vibecoder',
    'hero.title': 'I build ideas into code, fast and with style.',
    'hero.description':
      'Portfolio of vibecoding builds, personal projects and experiments. This is where I turn prompts into real products.',
    'hero.cta.projects': 'See projects',
    'hero.cta.contact': 'Get in touch',
    'hero.terminal.title': 'whoami.sh',
    'hero.stat.projects': 'projects',
    'hero.stat.posts': 'posts',
    'hero.stat.stack': 'fav stack',

    'home.featured': 'Featured projects',
    'home.featured.cta': 'See all projects',
    'home.skills': 'Skills',
    'home.skills.cta': 'See all',
    'home.blog': 'Latest posts',
    'home.blog.cta': 'Visit the blog',
    'home.contact': 'Got an idea? Let’s talk.',

    'projects.title': 'Projects',
    'projects.description':
      'Things I have built: apps, tools, experiments and prototypes made with vibecoding.',
    'projects.filter.all': 'All',
    'projects.empty': 'No projects published yet.',
    'projects.demo': 'Demo',
    'projects.repo': 'Code',
    'projects.tags': 'Tech stack',
    'projects.back': 'Back to projects',
    'projects.published': 'Published',

    'skills.title': 'Skills',
    'skills.description':
      'The tools and technologies I work with on a daily basis.',

    'blog.title': 'Blog',
    'blog.description':
      'Notes on vibecoding, development and things I am learning along the way.',
    'blog.empty': 'No posts published yet.',
    'blog.back': 'Back to blog',
    'blog.published': 'Published',
    'blog.readTime': 'min read',

    'contact.title': 'Contact',
    'contact.description':
      'A project, a collaboration or just want to say hi? Drop me a message.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent! I will reply soon.',
    'contact.error': 'Could not send. Try again or email me directly.',
    'contact.notConfigured':
      'Form is disabled: configure the endpoint in src/data/site.ts (Formspree/Web3Forms).',
    'contact.emailLabel': 'Or email me directly at',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro + Tailwind and lots of vibecoding.',

    '404.title': '404',
    '404.description': 'This page does not exist or has moved.',
    '404.cta': 'Back home',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)['es'];
