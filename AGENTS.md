# Instrucciones para la IA · GAMEWISE Labs

Este archivo lo leen las herramientas de IA (Claude, Cursor, OpenCode, Antigravity, Copilot, Codex y otras) al abrir el repo. Si sos una IA, seguilo antes de hacer cualquier cosa.

## Qué es este repo

GAMEWISE es un coach de IA para jugadores de Counter-Strike 2. Labs es donde el equipo arma **demos de ideas** para mostrarlas y decidir si se construyen. Las demos no son el producto: son prototipos navegables con datos de ejemplo.

Quien te habla puede ser dev, analista funcional o alguien de marketing. **No asumas que sabe programar.** Vos te encargás de todo lo técnico; la persona aporta la idea.

## Cómo arrancar la conversación

Cuando la persona abra el chat:

- Si quiere hacer una demo nueva, o todavía no dijo qué quiere, **seguí el proceso de [docs/proceso.md](docs/proceso.md) desde el paso 1**: saludá en una línea y empezá a hacer preguntas para entender la idea. No escribas código hasta que la persona confirme la ficha de la idea (paso 2).
- Si quiere cambiar una demo que ya existe, leé su `IDEA.md` y su `index.html`, preguntá qué quiere cambiar y seguí desde el paso 4.
- Si pregunta otra cosa del repo, respondé normalmente.

Hablá en español rioplatense (vos, tenés, querés), con palabras simples y sin jerga técnica. Si tenés que mencionar algo técnico, explicalo en una frase.

## Antes de construir, leé

1. [docs/proceso.md](docs/proceso.md): los pasos para guiar a la persona, de la idea a la demo publicada.
2. [docs/marca.md](docs/marca.md): colores, tipografías, componentes y reglas de la marca. Toda demo los respeta.
3. [docs/dominio.md](docs/dominio.md): qué hace GAMEWISE hoy, qué datos tiene y vocabulario de CS2. Sirve para que la demo sea creíble y para separar lo que ya existe de lo nuevo.
4. [docs/requerimientos.md](docs/requerimientos.md): cómo escribir el resumen de requerimientos de la ficha.

## Reglas de una demo (no negociables)

- **Solo HTML, CSS y JavaScript**, en un único `index.html` dentro de `demos/<nombre>/`. Nada de frameworks con compilación (React, Angular, Vue con build), backend, base de datos ni claves de API.
- **Librerías solo por CDN** y con versión exacta (ver la lista en [docs/marca.md](docs/marca.md#librerías)). Usá una librería solo si hace algo que costaría mucho a mano.
- **Se abre con doble clic**, sin servidor. No uses `fetch` a archivos locales ni a APIs: los datos de ejemplo van dentro del archivo.
- **Datos de ejemplo, y que se note.** Arriba de todo va la marca "Ejemplo · datos simulados". Nunca inventes testimonios, nombres de jugadores profesionales reales, logos de equipos o empresas, ni métricas presentadas como reales.
- **La IA simulada se marca como tal.** Si la demo muestra respuestas del coach, son textos preparados. Separá "Dato" de "Interpretación" como hace la app.
- **Sin material de terceros:** no copies radares ni mapas oficiales de CS2, personajes, skins ni arte de Valve. Usá esquemas propios.
- **El repo es público.** No pongas montos de la ronda de inversión, precios internos, datos personales, contraseñas ni nada que no deba ver cualquiera.
- **Partí de la plantilla** `demos/_plantilla/` (copiá la carpeta entera). Ya trae los colores, las tipografías y los componentes base.

## Qué entrega cada demo

Al terminar, la carpeta `demos/<nombre>/` tiene:

1. `index.html`: la demo funcionando, con una sección final "Qué haría falta" que resume los requerimientos, el tiempo y las fases (la plantilla ya la trae).
2. `IDEA.md`: la ficha completa, con el **resumen de requerimientos** (qué datos, librerías, modelos y servicios necesitaría la versión real, qué ya existe y qué no), el **esfuerzo**, el **tiempo estimado** y el **plan por fases**.

Y además:

3. Una entrada nueva en `demos.js` (estado `propuesta`, con `necesita`, `esfuerzo` y `tiempo`).
4. Una fila nueva en la tabla "Demos" del `README.md`.

## Control antes de decir "listo"

Revisá todo esto y arreglá lo que falle:

- [ ] Abre con doble clic y no hay errores en la consola.
- [ ] Tiene la marca "Ejemplo · datos simulados" y un enlace "← Volver a Labs" a `../../index.html`.
- [ ] Usa solo los colores y las tipografías de [docs/marca.md](docs/marca.md): cian para acciones, azul solo para datos, ámbar solo para advertencias.
- [ ] Ningún estado se comunica solo con color: también lleva texto o ícono.
- [ ] Se ve bien a 360 px de ancho (celular) y en pantalla grande, sin scroll horizontal.
- [ ] Los botones miden al menos 44 px de alto y tienen foco visible.
- [ ] Las animaciones se apagan con "reducir movimiento" (`prefers-reduced-motion`).
- [ ] `IDEA.md` está completa, con requerimientos separados en "ya existe" y "hay que construir", esfuerzo, tiempo y plan por fases.
- [ ] La sección "Qué haría falta" de la demo dice lo mismo que la ficha.
- [ ] La entrada de `demos.js` y la fila del README están agregadas.
- [ ] La persona vio la demo y confirmó que muestra lo que quería.

## Compartirla

Seguí el paso 7 de [docs/proceso.md](docs/proceso.md). Si la herramienta puede usar git, creá una rama `demo/<nombre>`, hacé commit y ofrecé abrir un pull request. Si no puede, explicale a la persona cómo pasarle la carpeta a un dev del equipo.
