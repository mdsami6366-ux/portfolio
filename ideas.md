# MD SAMI Portfolio — Ground-Truth Design Specification

The attached reference screenshot is the ground truth for the visual direction. The site should read as a premium liquid-glass interface floating inside a soft atmospheric environment: a pale cool canvas, translucent surfaces, restrained lavender/violet/pink reflections, dark navy typography, floating bubbles, and a confident asymmetrical hero composition. Fidelity to this reference takes priority over generic portfolio conventions.

## Chosen Direction

### Design Movement

Contemporary liquid-glass editorialism: the visual restraint of a premium digital product mixed with the soft refraction and layered depth of translucent physical material.

### Core Principles

1. **Depth before decoration.** Blur, refraction, soft shadow, and overlap should create the sense of atmosphere; ornament should remain sparse.
2. **Simple content, crafted presentation.** Keep MD SAMI’s student profile honest and concise while giving every section intentional typography, spacing, and motion.
3. **Cool, restrained color.** Lavender, muted violet, dusty pink, and pale blue appear as reflections and glows rather than solid blocks.
4. **Asymmetric confidence.** Use offset compositions, editorial whitespace, and a portrait-led hero instead of a centered template grid.

### Color Philosophy

The base is a nearly white cool-grey so the interface feels light and premium. Dark navy text provides seriousness and contrast. The signature color is **mist violet `#A9A7D8`**, used as a small active-state and reflection cue. Pink and blue remain whispers in the atmosphere so the work feels sophisticated and masculine without becoming harsh or neon.

### Layout Paradigm

Use a fixed floating navbar and long-scroll editorial sections. The hero is a two-column composition with text anchored left and a circular liquid-glass portrait composition offset right. Subsequent sections alternate between wide glass panels, two-column layouts, and a horizontal-to-vertical journey line so the page never becomes a stack of identical cards.

### Signature Elements

- A translucent organic ring surrounding the replaceable portrait image.
- Tiny bubbles and a single floating “Building ideas / Writing code / Creating impact” glass note.
- Hairline section dividers, quiet glass surfaces, and a small mist-violet active navigation dot.

### Interaction Philosophy

Interactions should feel tactile and quiet: buttons lift a few pixels, arrows drift on hover, skills brighten subtly, the project carousel changes with a controlled crossfade, and the hero glass ring responds minimally to a desktop pointer. Mobile removes pointer parallax and preserves touch-friendly targets.

### Animation

Use staggered entrance reveals for the hero and IntersectionObserver-based section reveals. Keep transforms and opacity as the primary animated properties, use short ease-out timings for controls, a slower float for decorative bubbles, and always respect `prefers-reduced-motion`.

### Typography System

Use **Space Grotesk** for display headings and **Sora** for body copy, navigation, labels, and buttons. Use **DM Mono** sparingly for project numbers, dates, and technical micro-labels. Headings are tight, dark, and bold; supporting copy is relaxed and readable with generous line-height.

### Brand Essence

**A serious computer science student building practical digital experiences while continuously sharpening his craft.** Personality: curious, composed, quietly ambitious.

### Brand Voice

Headlines are direct and self-aware. CTAs are active without overselling. Microcopy names the state of the work honestly.

> “Build with intent. Learn in public.”

> “A student portfolio with room to grow.”

### Wordmark & Logo

The wordmark pairs the text “MD SAMI” with a compact, interlocking abstract mark generated for the site. The mark should stay recognizable at favicon size and appear as a soft-glass emblem in the navbar rather than as a default text logo.

### Signature Brand Color

**Mist Violet `#A9A7D8`** — a low-saturation violet that reads as a soft refraction, not a loud accent.

