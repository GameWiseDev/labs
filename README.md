# GAMEWISE Labs

Demos de ideas para GAMEWISE, hechas para mostrarlas al equipo y decidir si se pueden llevar a cabo.

**En línea:** https://gamewise-labs.vercel.app

Labs no depende del roadmap: acá entra cualquier idea que valga la pena ver funcionando. Las que el equipo elige pasan al roadmap más adelante, o se adelantan a otros desarrollos si hace falta.

## Hacer una demo con IA

No hace falta saber programar. Bajá el repo, abrilo con tu herramienta de IA (Claude, Cursor, Antigravity, OpenCode, Copilot o un chat web) y escribí:

> Quiero hacer una demo nueva para GAMEWISE Labs. Guiame con preguntas.

La IA lee las instrucciones del repo, te hace preguntas para entender la idea, te muestra una ficha para que la confirmes, arma la demo con la marca de GAMEWISE y deja escrito qué haría falta para hacerla real.

La guía paso a paso está en **[EMPEZAR.md](EMPEZAR.md)**.

## Qué hay en el repo

| Archivo o carpeta | Para qué |
| --- | --- |
| `index.html` | Catálogo de demos, con estado y requerimientos de cada una |
| `demos.js` | Lista de demos que lee el catálogo |
| `demos/<nombre>/` | Cada demo: `index.html` y su ficha `IDEA.md` |
| `demos/_plantilla/` | Punto de partida de toda demo nueva |
| `EMPEZAR.md` | Guía para el equipo: cómo hacer una demo con IA |
| `AGENTS.md` | Instrucciones para la IA (lo leen todas las herramientas) |
| `docs/proceso.md` | Cómo la IA guía a la persona, de la idea a la demo publicada |
| `docs/marca.md` | Colores, tipografías, componentes y librerías permitidas |
| `docs/dominio.md` | Qué hace GAMEWISE, qué datos tenemos y vocabulario de CS2 |
| `docs/requerimientos.md` | Cómo escribir el resumen de requerimientos de cada ficha |
| `CLAUDE.md`, `GEMINI.md`, `.cursor/`, `.github/`, `.claude/`, `.opencode/` | Enlaces a `AGENTS.md` para cada herramienta y el comando `/nueva-demo` |

## Reglas de una demo

- **Solo HTML, CSS y JS**, en un único archivo. Librerías por CDN con versión exacta. Nada de build, backend ni claves de API.
- **Datos de ejemplo, y que se note.** Toda demo muestra la marca "Ejemplo · datos simulados". Nada de testimonios ni números presentados como reales.
- **Autocontenida.** Se abre con doble clic.
- **Con la marca de GAMEWISE** (manual v1.1, resumido en `docs/marca.md`).
- **Con ficha y requerimientos.** Cada demo tiene su `IDEA.md`: el problema, el momento clave, qué datos, librerías, modelos y servicios necesitaría la versión real, el esfuerzo estimado y la decisión del equipo.
- **El repo es público.** Nada de montos de la ronda, precios internos ni datos personales.

## Publicación

El repo está conectado a Vercel (proyecto `gamewise-labs`): cada push a `main` publica el catálogo y las demos en https://gamewise-labs.vercel.app. Las ramas y los pull requests generan una vista previa, que pide iniciar sesión en Vercel.

Las demos nuevas llegan por pull request desde una rama `demo/<nombre>`. Las aprueba un dev y se presentan en la reunión semanal.

## Estados

| Estado | Qué significa |
| --- | --- |
| `propuesta` | La demo está lista para mostrar. |
| `evaluacion` | El equipo la está analizando: costo, datos, riesgos. |
| `aprobada` | Se va a hacer. Falta ubicarla en el roadmap. |
| `roadmap` | Ya tiene lugar y fechas en el roadmap (Linear, espacio Vierek). |
| `descartada` | No se hace por ahora. La ficha dice por qué, por si se retoma. |

Cuando cambia el estado, se actualiza en `demos.js` y en la sección "Decisión del equipo" de la ficha, con fecha y motivo.

## Demos

| Demo | Estado | Esfuerzo | Ficha |
| --- | --- | --- | --- |
| Coach IA: ronda clave y simulación de decisiones | propuesta | XL | [IDEA.md](demos/coach-ia-simulacion/IDEA.md) |
