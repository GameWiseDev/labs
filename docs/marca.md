# Marca y estilo de las demos

Resumen del manual de marca de GAMEWISE v1.1 y del sistema de la app ("Scoreboard táctico"). La plantilla `demos/_plantilla/index.html` ya trae todo esto como variables CSS: usalas en lugar de escribir colores sueltos.

## Nombre

Siempre **GAMEWISE**, en mayúsculas y en una sola palabra. Nunca GameWise, Gamewise ni Game Wise. En la cabecera de una demo va el wordmark en texto: `GAME` en blanco y `WISE` en cian.

## Colores

La app es oscura. Las demos también, sin modo claro.

| Variable | Valor | Uso |
| --- | --- | --- |
| `--bg` | `#0F1219` | Fondo de la página (carbón profundo) |
| `--side` | `#141821` | Menú lateral o cabecera |
| `--card` | `#191D27` | Tarjetas |
| `--hi` | `#20252F` | Bloques dentro de tarjetas, filas, botones secundarios |
| `--tip` | `#2A3142` | Tooltips, mensajes del usuario en un chat |
| `--line` | `#262C38` | Bordes y divisores |
| `--mute` | `#313847` | Elementos apagados, fondo de barras |
| `--ink` | `#F1F3F7` | Texto principal y números |
| `--ink2` | `#A3ABBA` | Texto secundario |
| `--ink3` | `#858EA0` | Etiquetas, ejes, ayudas |
| `--acc` | `#12BEF2` | **Cian de marca y de acción:** botones principales, foco, selección, meta, progreso, paso actual |
| `--accp` | `#0A8EC0` | Cian presionado |
| `--blue` | `#2F8BFF` | **Azul, solo para datos:** lado CT, series de gráficos, etiqueta "Dato". Nunca en botones |
| `--green` | `#6FD36B` | Mejora, victoria |
| `--red` | `#E5574F` | Derrota, empeora |
| `--purple` | `#B48CF2` | Empate |
| `--warn` | `#F2A93B` | **Ámbar, solo advertencias:** "datos de ejemplo", riesgo medio. Nunca decorativo |

Lado T en mapas: `--t` `#D9774A` (en la plantilla). Lado CT: `--blue`.

Reglas:

- **Nada se comunica solo con color.** Un estado lleva siempre texto o ícono además del tono ("Vas mejorando ↑", "✕ Ronda perdida").
- Los colores de metas y rangos identifican, no califican.
- Nada de degradados violetas, neón ni brillos decorativos.

## Tipografía

Desde Google Fonts (ya enlazadas en la plantilla):

- **Barlow** para texto (400, 500, 600, 700).
- **Barlow Semi Condensed** para títulos y números grandes (600, 700).

| Elemento | Estilo |
| --- | --- |
| Título de página | Barlow Semi Condensed 700, 28 a 40 px |
| Título de tarjeta | Barlow Semi Condensed 700, 19 a 22 px |
| Texto | Barlow 16 px, interlineado 1,55 |
| Etiqueta de sección | 12 px, negrita, mayúsculas, espaciado 0,08 em, color `--ink2` |
| Números grandes | Barlow Semi Condensed 700, cifras tabulares |

Nada por debajo de 12 px. Los títulos dicen el hallazgo, no el tema: "Perdiste 11–13 por dos decisiones" y no "Análisis de la partida".

## Componentes de la plantilla

| Clase | Qué es |
| --- | --- |
| `.note` | Marca "Ejemplo · datos simulados" (obligatoria, arriba de todo) |
| `.card` | Tarjeta con borde y esquinas de 14 px |
| `.lbl` | Etiqueta de sección |
| `.btn` / `.btn.ghost` | Botón principal cian / botón secundario |
| `.chip` / `.chip.on` | Opción seleccionable tipo píldora |
| `.k.f` / `.k.i` | Etiquetas "Dato" (azul) e "Interpretación" (gris) |
| `.kpi` | Cifra grande con su explicación |
| `.bar` | Barra de progreso o comparación |
| `.coach` | Burbuja de respuesta del coach |

## Voz

- Español rioplatense con voseo: "tus partidas", "mejorá", "probá".
- El coach habla con datos: primero el hecho, después la interpretación, y pocas recomendaciones concretas.
- Si no hay datos suficientes, el coach lo dice ("Todavía no tengo información suficiente") en lugar de inventar.
- Términos de CS2 en su forma habitual en la comunidad: ronda, duelo, intercambio (trade), utilidad, humo, flash, rotación, post-plant.

## Movimiento

- Una animación con propósito por pantalla (que algo cuente, se llene o aparezca en orden), no decoración.
- El confeti con los colores del logo (`#12BEF2`, `#2F8BFF`, `#0070D8`, `#FFFFFF`) se reserva para festejar una meta cumplida.
- Todo se apaga con `prefers-reduced-motion: reduce`.

## Accesibilidad

- Botones y controles de al menos 44 px de alto, con foco visible (contorno cian).
- Contraste suficiente: texto principal sobre fondo oscuro, nunca gris sobre gris.
- Los diálogos se cierran con Escape y llevan el foco a la opción segura.
- La demo funciona en celular (360 px) y en escritorio.

## Librerías

Primero intentá hacerlo a mano: SVG para mapas y gráficos simples, CSS para animaciones. Si de verdad hace falta una librería, usá una de estas con la versión exacta:

| Para qué | Librería | Enlace |
| --- | --- | --- |
| Gráficos estándar | Chart.js 4.4.1 | `https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js` |
| Visualizaciones a medida | D3 7.9.0 | `https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js` |
| Animaciones encadenadas | GSAP 3.12.5 | `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js` |
| Festejo de meta | canvas-confetti 1.9.3 | `https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js` |
| 3D | Three.js 0.160.0 | `https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js` (como módulo) |

Si necesitás otra, elegí una que tenga versión UMD en cdnjs o jsDelivr, fijá la versión y anotala en la ficha. Voz del coach: la API del navegador `speechSynthesis` (con `lang = 'es-AR'`), sin librerías.
