# Wingtics — material de distribución

El vídeo y los posts de X/LinkedIn ya salieron (8 sep 2026). Esto es el resto.

---

## 1. Newsletters

Verificado abriendo sus webs, no deducido.

**React Status y JavaScript Weekly** — las publica la misma editorial, Cooper
Press (Louth, UK), 450.000+ suscriptores entre todos sus títulos. No tienen
formulario de envío: el contacto editorial que publican en cooperpress.com es

    editor@cooperpress.com

**Bytes (bytes.dev)** — 100.000 devs, lo hace Fireship. **No acepta envíos.**
Su web solo ofrece Archives y Advertise: la única vía es publicidad de pago.
Descartado como canal gratuito.

**Texto a enviar** (piden 1-2 frases, no un pitch):

> **Wingtics** — Provider-agnostic analytics components for React. One query
> model across Vercel, Plausible, GA4, Umami and PostHog: swap the connector
> and the dashboard stays the same. When a provider can't answer a metric the
> widget says so instead of rendering a zero. MIT.
> https://github.com/educlopez/wingtics

Un solo correo a `editor@cooperpress.com` cubre los dos títulos; no mandes uno
por newsletter.

---

## 2. Show HN

**Título** (sin superlativos, HN los castiga):

> Show HN: Wingtics – React analytics components that work across five providers

**Primer comentario, escrito por ti, antes de que llegue nadie:**

> I kept rebuilding the same dashboard every time a project changed analytics
> provider, so I tried to make the dashboard the part that doesn't change.
>
> Wingtics is a set of React components behind one canonical query model.
> Connectors for Vercel, Plausible, GA4, Umami and PostHog map that model onto
> each vendor's API. Switching provider is a constructor change.
>
> The part I spent longest on is capabilities: every connector declares what it
> can actually answer, so a widget asking for bounce rate on a provider that
> doesn't expose it renders "not supported" instead of a zero. Silently wrong
> numbers were the failure mode I wanted to design out.
>
> It's MIT, the demo runs on the site's own analytics, and the numbers in the
> video are demo data. Happy to answer anything about the connector contract or
> why the query model looks the way it does.

**Reglas que no son opcionales:**
- Entre semana, mañana de la costa este (~9-11 ET).
- Estar disponible varias horas seguidas. Es el requisito, no un consejo.
- Responder a todo, incluso lo hostil, con calma y detalle.
- No pedir upvotes a nadie. Es la forma más rápida de que te penalicen.
- Una sola bala por proyecto.

---

## 3. r/reactjs

Leer sus reglas de autopromoción antes. Si la cuenta es nueva o sin karma, el
automod se lo come — comprobar antigüedad y karma primero.

**Título:**

> I built React analytics components that survive switching provider (Vercel, Plausible, GA4, Umami, PostHog)

**Cuerpo:** el vídeo de 40s + el mismo texto del primer comentario de HN,
acortado, y una pregunta real al final para que haya conversación.

---

## 4. Descartado, y por qué

**awesome-react**: su sección de charts lista recharts (27.5k ★), visx (21k),
xyflow (38.3k), nivo (14.1k), victory (11.2k), react-vis (8.8k). Wingtics tiene
4. La PR se cierra y parece spam. Volver cuando haya tracción real.

---

## 5. Lo que hay que hacer antes que nada

Que el repo aguante la visita. De HN y Reddit el tráfico cae en el README, no
en la landing.
