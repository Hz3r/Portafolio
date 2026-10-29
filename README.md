# Portafolio

Portafolio personal de vibecoding hecho con **Astro 7** + **Tailwind CSS**. Sitio 100% estático (sin backend), bilingüe (es/en), con tema claro/oscuro, blog y formulario de contacto externo. Desplegado en **Railway**.

## Desarrollo

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # build de producción en dist/
npm run preview    # previsualizar el build
```

## Editar contenido

### Datos personales

Edita `src/data/site.ts`: nombre, email, redes sociales y endpoint del formulario.

### Habilidades

Edita `src/data/skills.ts`.

### Proyectos

Crea un archivo `.md` en `src/content/projects/`:

```yaml
---
title: Mi proyecto
description: Descripción en español
descriptionEn: Description in English
pubDate: 2026-01-01
tags: [Astro, TypeScript]
repo: https://github.com/usuario/repo
demo: https://demo.opcional.com
cover: /images/proyecto.png   # opcional, en public/
featured: true                # aparece en el inicio
draft: false
---
```

### Blog

Crea el post en `src/content/blog/es/titulo.md` y su versión (opcional) en `src/content/blog/en/titulo.md`.

## Formulario de contacto

Crea una cuenta gratuita en [Formspree](https://formspree.io) (o [Web3Forms](https://web3forms.com)), crea un formulario y pega la URL del endpoint en `src/data/site.ts` (`contactFormEndpoint`). Mientras esté vacío, el formulario se muestra desactivado.

## Deploy en Railway

1. Sube los cambios a GitHub
2. En Railway: **New Project → Deploy from GitHub repo →** selecciona este repo
3. Variables del servicio:
   - `RAILPACK_STATIC_FILE_ROOT` = `dist`
4. Build command por defecto (`npm run build`) funciona con Railpack; fija el Node si hace falta con `RAILPACK_NODE_VERSION=22`
5. (Opcional) añade tu dominio en Settings → Networking

## Estructura

```
src/
├── components/     # UI (Header, cards, formularios) y vistas de página
├── content/        # proyectos y blog en markdown
├── data/           # site.ts (tus datos) y skills.ts
├── i18n/           # diccionario es/en y utilidades
├── layouts/        # BaseLayout (meta SEO, tema, view transitions)
└── pages/          # rutas (es en raíz, en/ para inglés)
```
