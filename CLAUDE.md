{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
# Design System Spec: D \'97 DM Sans\
\
Single-family system \'95 DM Sans for headings + body\
\
---\
\
## Color Palette\
\
| Usage | Hex Code | Preview Token |\
| :--- | :--- | :--- |\
| **Primary** | `#1A1A1A` | Dark Charcoal |\
| **Surface** | `#ECEBE7` | Warm Off-White / Gray |\
| **Accent** | `#B35942` | Terracotta / Rust |\
| **Secondary**| `#C2CCBD` | Sage Green |\
| **Muted** | `#737373` | Medium Gray |\
| **Background**| `#FFFFFF` | Pure White |\
\
---\
\
## Type Scale\
\
* **Font Family:** DM Sans (Headings & Body)\
\
| Style | Size | Example Text |\
| :--- | :--- | :--- |\
| **Display** | `52px` | Privacy Review |\
| **H1** | `36px` | The Challenge |\
| **H2** | `28px` | Approach & Strategy |\
| **H3** | `20px` | Mapped the decision architecture |\
| **Body** | `17px` | Teams struggled with fragmented, opaque privacy compliance... |\
| **Caption** | `13px` | SYSTEMS DESIGN \'b7 ENTERPRISE UX \'b7 2025 |\
\
---\
\
## Tailwind Configuration Reference\
*Use this mapping to extend the Tailwind config:*\
\
```json\
\{\
  "theme": \{\
    "extend": \{\
      "colors": \{\
        "portfolio": \{\
          "primary": "#1A1A1A",\
          "surface": "#ECEBE7",\
          "accent": "#B35942",\
          "secondary": "#C2CCBD",\
          "muted": "#737373",\
          "background": "#FFFFFF"\
        \}\
      \},\
      "fontSize": \{\
        "display": ["52px", \{ "lineHeight": "1.2", "fontWeight": "700" \}],\
        "h1": ["36px", \{ "lineHeight": "1.3", "fontWeight": "700" \}],\
        "h2": ["28px", \{ "lineHeight": "1.3", "fontWeight": "600" \}],\
        "h3": ["20px", \{ "lineHeight": "1.4", "fontWeight": "500" \}],\
        "body": ["17px", \{ "lineHeight": "1.6", "fontWeight": "400" \}],\
        "caption": ["13px", \{ "lineHeight": "1.4", "letterSpacing": "0.05em" \}]\
      \}\
    \}\
  \}\
\}}