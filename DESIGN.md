# Design System Strategy: The Architectural Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "The Silent Curator"**

This design system is built on the philosophy of *Architectural Minimalism*. It treats the digital screen as a physical gallery space where the void (whitespace) is as structural as the content itself. We are moving away from "web templates" toward a high-end editorial experience that feels permanent, authoritative, and quiet.

The system breaks the standard digital mold through **Intentional Asymmetry**. Instead of centering all content, we utilize a rigorous grid where elements are often offset to create a sense of tension and sophisticated "white space." This isn't just a portfolio; it is an exercise in restraint.

---

## 2. Colors: The Monochrome Spectrum
The palette is strictly limited to a monochrome scale to ensure the typography and the work are the sole focuses.

| Role | Token | Hex | Application |
| :--- | :--- | :--- | :--- |
| **Surface** | `surface` | `#f9f9f9` | The primary "paper" of the site. |
| **Primary** | `primary` | `#000000` | High-contrast text and structural accents. |
| **Secondary** | `secondary` | `#5f5e5e` | Supporting metadata and secondary labels. |
| **Neutral** | `outline-variant` | `#c6c6c6` | Soft, architectural divisions. |
| **Inverse** | `inverse_surface` | `#2f3131` | For "Dark Mode" sections or call-to-action blocks. |

### The "No-Gradient" Rule
This system prohibits the use of gradients or shadows. Depth is achieved exclusively through **Tonal Layering**. 
*   **Layering Principle:** To separate content, stack `surface_container_lowest` (#ffffff) cards against a `surface` (#f9f9f9) background. 
*   **The 1px Boundary:** Unlike softer systems, we embrace the **Architectural Line**. Use `outline-variant` (#c6c6c6) at 1px width for structural dividers, but only where white space alone fails to define the boundary.

---

## 3. Typography: Editorial Authority
Typography is the protagonist. We utilize a high-contrast pairing of *Manrope* for structural impact and *Inter* for functional clarity.

*   **Display (Manrope Bold):** Used for project titles and major headers. These should feature **negative letter-spacing (-0.02em)** to create a tight, "locked-in" architectural feel.
*   **Headlines (Manrope Medium):** Used for section starts. Set with generous leading to allow the eye to breathe.
*   **Body (Inter Regular):** Set in `on_surface_variant` (#474747) to reduce ocular strain and create a sophisticated "ink-on-paper" look.
*   **Labels (Inter Bold / All Caps):** Used for categories and metadata. Increase letter-spacing to **+0.1em** for a premium, utilitarian aesthetic.

---

## 4. Elevation & Depth: The Flat Plane
We reject the concept of "z-axis" shadows. In this system, "up" is indicated by "lighter" and "down" is indicated by "darker."

*   **The Layering Scale:**
    1.  **Base Layer:** `surface` (#f9f9f9)
    2.  **Raised Elements:** `surface_container_lowest` (#ffffff)
    3.  **Recessed Elements:** `surface_container` (#eeeeee)
*   **Interaction States:** Use opacity shifts instead of color changes. A button hover should transition from `primary` (100% opacity) to `primary` (80% opacity), suggesting a subtle "ghosting" effect rather than a tactile click.
*   **Zero-Radius Policy:** All tokens in the `Roundedness Scale` are set to `0px`. Sharp corners convey precision, confidence, and a professional, architectural edge.

---

## 5. Components: Precision Primitive

### Buttons
*   **Primary:** Solid `primary` (#000000) background, `on_primary` (#e2e2e2) text. Square corners. No shadow.
*   **Secondary:** 1px border using `outline` (#777777). No background fill.
*   **Tertiary:** Text only with a 1px `primary` underline that appears on hover.

### Input Fields
*   **Text Inputs:** No background fill. A single 1px bottom border using `outline-variant` (#c6c6c6). Labels are always `label-sm` in all caps, positioned above the line.
*   **Focus State:** The bottom border transitions to `primary` (#000000) with a 0.3s ease.

### Cards & Projects
*   **The "No-Divider" Rule:** Do not use lines to separate list items or cards. Use `80px` of vertical whitespace (from your Spacing Scale) to create separation.
*   **Project Cards:** Use `surface_container_low` (#f3f3f4) as the image placeholder. Text metadata should be left-aligned, utilizing `title-md` for the title and `label-md` for the year/category.

### Navigation
*   **Minimalist Header:** Fixed to the top. `0px` border-bottom using `outline-variant`. Use `surface_container_lowest` (#ffffff) with a 95% opacity to allow content to subtly "ghost" underneath as the user scrolls.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use extreme whitespace. If a section feels "empty," it’s likely working.
*   **Do** use asymmetrical layouts (e.g., a 12-column grid where the content occupies columns 3 through 10).
*   **Do** ensure all text is perfectly aligned to a baseline grid to maintain the architectural feel.

### Don’t:
*   **Don’t** use border-radius. Ever. A 1px radius ruins the "High-End" precision of this system.
*   **Don’t** use drop shadows. If you need depth, use a slightly different shade of gray for the background.
*   **Don’t** use icons unless absolutely necessary. Rely on typography to communicate action.
*   **Don’t** use "pure" blue-blacks. Stick to the refined grays defined in the `primary_fixed_dim` and `secondary` tokens for a more natural, sophisticated palette.