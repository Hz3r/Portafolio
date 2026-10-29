---
title: From idea to app in a weekend
description: The process I use to go from a vague prompt to a working, deployed app with its own domain.
pubDate: 2026-09-05
tags: [Process, Vibecoding]
---

Here is how I structure a vibecoding weekend so I do not die halfway:

## Friday night: the brief

I write a long prompt describing the app: who uses it, what problem it solves, which screens it has and what it will *not* include. That last part matters the most.

## Saturday: skeleton and data

1. Scaffold the project (Astro + Tailwind in my case)
2. Define the data model before the UI
3. Build the main screens without polishing anything

## Sunday: polish and deploy

- Responsive layout, empty states and errors
- A couple of smoke tests
- Deploy on Railway and point the domain

The result is never perfect, but it is always real. And that is what counts.
