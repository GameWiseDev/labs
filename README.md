# GAMEWISE Labs

Demos de ideas para GAMEWISE, hechas para mostrarlas al equipo y decidir si se pueden llevar a cabo.

Labs no depende del roadmap: acá entra cualquier idea que valga la pena ver funcionando. Las que el equipo elige pasan al roadmap más adelante, o se adelantan a otros desarrollos si hace falta.

## Cómo se ve

Abrí `index.html` en el navegador: lista todas las demos con su estado. Cada demo vive en su carpeta dentro de `demos/` y se abre sola, sin servidor ni instalación.

Si el repo se conecta a Vercel, cada push a `main` publica el catálogo y las demos (es un sitio estático, no necesita configuración).

## Reglas de una demo

- **Solo HTML, CSS y JS.** Se pueden usar librerías por CDN (cdnjs, jsDelivr, unpkg). Nada de build, backend ni claves de API.
- **Datos de ejemplo, y que se note.** Toda demo muestra la marca "Ejemplo · datos simulados". Nada de testimonios ni números presentados como reales.
- **Autocontenida.** Todo lo que la demo necesita está en su carpeta. Se puede abrir con doble clic.
- **Con la marca de GAMEWISE.** Colores y tipografías del manual v1.1 (la plantilla ya los trae): carbón `#0F1219`, cian `#12BEF2` para acciones, azul `#2F8BFF` solo para datos, Barlow y Barlow Semi Condensed.
- **Con ficha.** Cada demo tiene su `IDEA.md`: qué problema resuelve, qué haría falta para hacerla real y qué decidió el equipo.

## Sumar una demo

1. Copiá `demos/_plantilla` con un nombre corto en minúsculas y guiones, por ejemplo `demos/replay-3d`.
2. Armá la demo en `index.html` y completá `IDEA.md`.
3. Sumala al catálogo en `demos.js`, con estado `propuesta`.
4. Subila en una rama y abrí un pull request; se presenta en la reunión semanal.

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

| Demo | Estado | Ficha |
| --- | --- | --- |
| Coach IA: ronda clave y simulación de decisiones | propuesta | [IDEA.md](demos/coach-ia-simulacion/IDEA.md) |
