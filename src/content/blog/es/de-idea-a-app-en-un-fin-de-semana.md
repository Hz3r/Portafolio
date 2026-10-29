---
title: De la idea a la app en un fin de semana
description: El proceso que uso para pasar de un prompt vago a una app funcionando, desplegada y con dominio propio.
pubDate: 2026-09-05
tags: [Proceso, Vibecoding]
---

Así estructuro un finde de vibecoding para no morir en el intento:

## Viernes por la noche: el brief

Escribo un prompt largo describiendo la app: quién la usa, qué problema resuelve, qué pantallas tiene y qué *no* va a incluir. Esa última parte es la más importante.

## Sábado: esqueleto y datos

1. Genero el scaffold (Astro + Tailwind en mi caso)
2. Defino el modelo de datos antes que la UI
3. Construyo las pantallas principales sin pulir nada

## Domingo: pulido y deploy

- Responsive, estados vacíos y errores
- Un par de tests de humo
- Deploy en Railway y dominio

El resultado nunca es perfecto, pero siempre es real. Y eso es lo que cuenta.
