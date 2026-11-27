# Proceso guiado: de la idea a la demo

Esta guía es para la IA. Describe cómo acompañar a una persona, sepa o no programar, para que su idea termine en una demo fiel a lo que quiere mostrar.

## Cómo conversar

- **Pocas preguntas por vez:** una o dos por mensaje, nunca un formulario largo.
- **Con opciones:** cuando la pregunta es abierta, ofrecé 2 o 3 ejemplos concretos para elegir ("¿Lo verías más como A, B o algo distinto?"). Si la herramienta tiene botones de opción, usalos.
- **Nada técnico:** no preguntes por librerías, archivos ni lenguajes. Eso lo decidís vos.
- **Devolvé lo que entendiste:** cada tanto resumí en una o dos líneas para que la persona corrija a tiempo.
- **Llevá la cuenta:** decí en qué paso están ("Paso 2 de 7: armemos la ficha").
- **Si la persona ya trae todo claro,** no repitas preguntas: confirmá lo que falta y avanzá.
- **Sé honesto:** si algo no se puede mostrar en una demo sin backend, decilo y proponé cómo simularlo.

## Paso 1 · Entender la idea

Objetivo: saber qué quiere mostrar, a quién y por qué importa. Preguntá en este orden, salteando lo que ya se sepa:

1. **La idea en una frase.** "Contame la idea como se la contarías a un amigo en el bondi."
2. **El problema del jugador.** "¿Qué le pasa hoy al jugador que esto resuelve? ¿Te pasó a vos?"
3. **Para quién es la demo.** El equipo (¿se puede hacer?), inversores (visión) o jugadores (¿lo usarían?). Cambia el tono y cuánto pulir.
4. **El momento clave.** "Si alguien mira la demo 30 segundos, ¿qué tiene que entender o sentir?" Este es el centro de la demo: todo lo demás lo acompaña.
5. **El recorrido.** "Imaginá que la abrís: ¿qué ves primero? ¿Qué tocás? ¿Qué pasa después?" Pedí el paso a paso, aunque sea desordenado.
6. **Referencias.** "¿Hay alguna app, juego o página que haga algo parecido o que te guste cómo se ve?" Si nombra una, preguntá qué parte le gusta.
7. **Lo que no entra.** "¿Hay algo que NO querés que aparezca, o que dejamos para después?"
8. **Datos de ejemplo.** "¿Pensás en una situación concreta? Por ejemplo: un jugador de rango medio que pierde duelos en Mirage." Si no tiene, proponé vos una situación creíble de CS2 (ver [dominio.md](dominio.md)).

Si la idea es muy grande, ayudá a recortarla: "Para la demo, ¿qué parte es la que más querés mostrar?"

## Paso 2 · Ficha de la idea (confirmación)

Antes de construir, mostrale esta ficha y pedí que la confirme o la corrija:

```
Nombre: ...
En una frase: ...
Problema del jugador: ...
Para quién es la demo: ...
Momento clave (lo que se entiende en 30 s): ...
Recorrido:
  1. Ves ...
  2. Tocás ...
  3. Pasa ...
Datos de ejemplo: ...
Fuera de la demo: ...
```

No sigas hasta tener un "sí" o las correcciones. Si corrige, mostrá la ficha de nuevo.

## Paso 3 · Plan de la demo

En lenguaje simple, contale qué vas a armar:

- Las pantallas o secciones (máximo 3 o 4 para una primera versión).
- Qué se puede tocar en cada una y qué responde.
- Cómo vas a simular la parte "inteligente" (textos preparados, cálculos con datos de ejemplo, animaciones).

Elegí un nombre de carpeta corto en minúsculas y con guiones (por ejemplo `replay-con-voz`) y avisale cuál es. Pedí un "dale" antes de construir.

## Paso 4 · Construir

1. Copiá `demos/_plantilla/` a `demos/<nombre>/`.
2. Armá primero **el momento clave** funcionando, aunque el resto esté vacío.
3. Mostráselo a la persona: decile cómo abrirlo (doble clic en `demos/<nombre>/index.html`) o abrilo vos si la herramienta tiene vista previa. Preguntá: "¿Esto es lo que imaginabas? ¿Qué cambiarías?"
4. Ajustá y completá el resto del recorrido.

Seguí siempre [marca.md](marca.md) y las reglas de [AGENTS.md](../AGENTS.md).

## Paso 5 · Revisar juntos

Pedile que recorra la demo de punta a punta y preguntá:

- ¿Se entiende el momento clave sin explicación?
- ¿Falta algo del recorrido?
- ¿Hay algo que confunde o sobra?

Corregí hasta que diga que la demo muestra lo que quería. Después pasá el control de [AGENTS.md](../AGENTS.md#control-antes-de-decir-listo).

## Paso 6 · Ficha y requerimientos

Completá `demos/<nombre>/IDEA.md` con lo hablado y el resumen de requerimientos, siguiendo [requerimientos.md](requerimientos.md). Mostrale a la persona la parte de requerimientos y explicala en dos o tres líneas: qué ya tenemos, qué habría que construir y qué es lo más difícil.

Sumá la demo a `demos.js` (estado `propuesta`) y a la tabla del `README.md`.

## Paso 7 · Compartir

- **Si la herramienta puede usar git:** creá la rama `demo/<nombre>`, hacé commit con un mensaje claro ("Demo: <nombre>") y ofrecé subirla y abrir un pull request en GameWiseDev/labs. Explicá que, cuando un dev lo apruebe, la demo aparece sola en https://gamewise-labs.vercel.app.
- **Si no puede o la persona no tiene cuenta de GitHub:** pedile que comprima la carpeta `demos/<nombre>` y se la pase a Jere o a Pablo.
- Recordale que la demo se presenta en la reunión semanal y que ahí se decide su estado.
