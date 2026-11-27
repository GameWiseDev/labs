# Hacer una demo con IA

Esta guía es para cualquiera del equipo, sepa o no programar. Vos traés la idea y la IA hace el resto: te hace preguntas para entenderla, arma la demo con la marca de GAMEWISE y deja escrito qué haría falta para hacerla real.

## 1. Bajá el repo

- **Sin cuenta de GitHub:** entrá a https://github.com/GameWiseDev/labs, tocá el botón verde **Code** y después **Download ZIP**. Descomprimilo donde quieras.
- **Con git:** `git clone https://github.com/GameWiseDev/labs.git`

## 2. Abrilo con tu herramienta de IA

Cualquiera de estas lee sola las instrucciones del repo al abrir la carpeta:

| Herramienta | Cómo abrir la carpeta |
| --- | --- |
| Claude (app de escritorio o Claude Code) | Agregá la carpeta `labs` al chat o abrí la terminal en esa carpeta y escribí `claude` |
| Cursor | Archivo → Abrir carpeta → `labs` |
| Antigravity | Abrí la carpeta `labs` como workspace |
| OpenCode | Abrí la terminal en la carpeta y escribí `opencode` |
| VS Code con Copilot | Archivo → Abrir carpeta → `labs`, y abrí el chat de Copilot en modo agente |

**Si solo tenés un chat web** (Claude.ai, ChatGPT o Gemini): subí estos archivos al chat y seguí igual.

- `AGENTS.md`
- los cuatro archivos de la carpeta `docs/`
- `demos/_plantilla/index.html` y `demos/_plantilla/IDEA.md`

Al final, la IA te va a dar el `index.html` y el `IDEA.md` de tu demo: guardalos en una carpeta nueva dentro de `demos/`.

## 3. Arrancá la charla

Escribí algo así (o usá el comando `/nueva-demo` si tu herramienta lo muestra):

> Quiero hacer una demo nueva para GAMEWISE Labs. Guiame con preguntas.

Si ya tenés la idea, sumala: "Quiero hacer una demo de un coach que te habla durante la partida".

## 4. Respondé las preguntas

La IA te va a preguntar de a poco: qué problema resuelve, para quién es la demo, qué tiene que entender alguien en 30 segundos, qué se ve y qué se toca. Para que la demo quede fiel a lo que imaginás:

- **Pensá en el momento clave:** la escena que querés que la gente recuerde. Todo lo demás la acompaña.
- **Contalo como una película:** "abro la pantalla, veo esto, toco acá y pasa aquello".
- **Dá ejemplos:** una app que te guste, una situación de una partida que te haya pasado.
- **Revisá la ficha con calma:** antes de construir, la IA te muestra un resumen de la idea. Corregí todo lo que no te cierre. Es lo que más influye en el resultado.
- **Pedí cambios concretos:** "el botón más grande", "que primero aparezca el mapa", "esto sobra".

## 5. Mirá la demo

Abrí con doble clic `demos/<nombre-de-tu-demo>/index.html`. Funciona sin internet, salvo por las fuentes. Recorrela entera y decile a la IA qué cambiar hasta que quede como querías.

## 6. Compartila

- **Si tu herramienta usa git y tenés cuenta de GitHub:** pedile a la IA que la suba en una rama y abra un pull request. Cuando un dev lo apruebe, aparece sola en https://gamewise-labs.vercel.app.
- **Si no:** comprimí la carpeta de tu demo y pasásela a Jere o a Pablo.

La demo se presenta en la reunión semanal y ahí se decide si avanza.

## Lo que la IA ya sabe (y no tenés que explicarle)

- Los colores, las tipografías y el estilo de GAMEWISE.
- Qué hace la app hoy y qué datos tenemos.
- Que la demo va en HTML, CSS y JavaScript, con datos de ejemplo.
- Cómo escribir el resumen de requerimientos: qué datos, librerías, modelos y servicios necesitaría la versión real, cuánto llevaría y en qué fases. Lo deja en la ficha y en una sección "Qué haría falta" al final de la demo.

Y recordá: el repo es público. No pongas montos de la ronda, precios internos ni datos personales.
