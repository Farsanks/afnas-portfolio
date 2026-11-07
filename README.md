# Afnas — Digital Marketing Portfolio

A premium, dark-themed portfolio website for **Afnas**, a Digital Marketing Specialist based in Kerala, India.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 8 + JavaScript (JSX) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Fonts | Space Grotesk · Inter · Orbitron (Google Fonts) |

---

## Premium Features

- **Scroll progress bar** — thin green line at the top showing reading position
- **Text scramble effect** — AFNAS name scrambles into place on hero load
- **Particle canvas** — animated connected-dot network behind the hero
- **3D tilt cards** — services cards tilt on mouse movement (perspective)
- **Flip cards** — certifications flip on hover to reveal verify button
- **Live Results Dashboard** — animated KPI cards (ROAS, CTR, CPC, traffic), bar chart, channel mix bars
- **Animated counters** — stats count up with ease-out curve on scroll
- **Animated timeline** — experience timeline with scroll-triggered line draw
- **Case study modals** — portfolio cards open full detail (challenge/strategy/execution/results)
- **Category filter** — portfolio and skills sections filterable by category
- **Horizontal logo strip** — tool logos auto-scroll marquee
- **Custom cursor** — dot + ring cursor with hover scaling (desktop only)
- **Floating socials sidebar** — fixed vertical social icons (xl screens)
- **WhatsApp floating button** — pulse animation, pre-filled message
- **Mobile hamburger menu** — spring-animated slide panel
- **Fully responsive** — 320px → 1920px

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## How to Edit Personal Information

All content is in one file:

```
src/data/portfolioData.js
```

Edit these exports:

| Export | What to change |
|---|---|
| `personalInfo` | Name, email, phone, WhatsApp number, location, resume path |
| `socialLinks` | LinkedIn, Instagram, Facebook URLs |
| `heroRoles` | Rotating job titles in the hero |
| `stats` | Years, projects, clients, certifications numbers |
| `services` | Service cards (title, description, tags) |
| `skillCategories` | Skill groups and individual skills |
| `experience` | Job roles, companies, dates, responsibilities |
| `certifications` | Cert name, issuer, year, credential URL |
| `projects` | Portfolio case studies |
| `testimonials` | Client quotes, names, roles |
| `processSteps` | How I Work steps |
| `whyMe` | Why Work With Me cards |

---

## How to Replace Images

| Image | Path |
|---|---|
| Profile photo | `public/images/profile/afnas.webp` |
| Portfolio projects | `public/images/projects/project-1.jpg` etc. |
| Certificate images | `public/images/certificates/google-ads.jpg` etc. |
| Testimonial avatars | `public/images/testimonials/client-1.jpg` etc. |
| OG social preview | `public/images/og/social-preview.jpg` (1200×630) |

**Image tips:**
- Use `.webp` format for best performance
- Profile photo: portrait orientation, min 400×500px
- Keep file sizes under 200KB per image

---

## How to Add Your CV

Place your PDF at:
```
public/Afnas-CV.pdf
```

The Download CV button links to this automatically.

---

## How to Connect a Real Contact Form

The form currently uses `mailto:`. For server-side sending:

**Option A — Formspree (easiest):**
1. Sign up at formspree.io
2. Create a form, get your endpoint URL
3. In `Contact.jsx`, replace the `handleSubmit` function with a `fetch` POST to your Formspree URL

**Option B — EmailJS:**
1. Install: `npm install @emailjs/browser`
2. Configure your EmailJS service/template
3. Use `emailjs.sendForm()` in the submit handler

---

## Deployment — Vercel

```bash
# 1. Initialize Git
git init
git add .
git commit -m "Afnas portfolio website"

# 2. Create GitHub repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/afnas-portfolio.git
git branch -M main
git push -u origin main

# 3. Go to vercel.com → Import → Select repo
# Build command:   npm run build
# Output dir:      dist
# Framework:       Vite (auto-detected)
# → Deploy
```

Your site will be live at: `https://afnas-portfolio.vercel.app`

---

## Custom Domain

After deploying on Vercel:
1. Go to your project → Settings → Domains
2. Add your domain (e.g. `afnasdigital.com`)
3. Update your domain's DNS with the records Vercel provides
4. SSL is automatic

---

## Environment Variables

No API keys or secrets are needed for the base build.

If you add EmailJS later, store keys in a `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Never commit `.env` files to Git.**

---

## SEO

`index.html` includes:
- Title + meta description
- Open Graph tags (Facebook/LinkedIn preview)
- Twitter Card tags
- JSON-LD Person structured data
- Canonical URL

Update the canonical URL and OG image path after deployment.

---

© 2026 Afnas. Built with React + Vite + Tailwind CSS.
