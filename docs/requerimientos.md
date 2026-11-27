# Resumen de requerimientos

Cada ficha (`IDEA.md`) termina con un resumen de lo que haría falta para que la idea funcione de verdad en GAMEWISE. Sirve para que el equipo decida rápido si conviene hacerla y cuánto cuesta.

Lo escribe la IA a partir de la demo y de [dominio.md](dominio.md). No hace falta que sea exacto: tiene que ser honesto y fácil de revisar por Pablo (CTO) y Tamara (Producto).

## Qué incluye

### 1. Datos

Una fila por dato que la idea necesita, separando lo que ya tenemos de lo que no.

| Dato | Para qué | Fuente | ¿Lo tenemos? |
| --- | --- | --- | --- |
| Estadísticas por partida | Comparar rendimiento entre partidas | Leetify / FACEIT | Sí |
| Posiciones por momento | Dibujar la ronda en el mapa | Demos `.dem` | No: probado, no en producción |

### 2. Librerías de la demo

Las que usa el `index.html`, con versión. Si no usa ninguna, decilo ("Ninguna: SVG y CSS a mano").

### 3. Para la versión real

Lo que habría que sumar al producto, en lenguaje simple:

- **Backend:** procesos, endpoints o tareas nuevas.
- **IA:** qué tiene que hacer el modelo (narrar, clasificar, predecir) y si alcanza con el LLM que ya usamos o hace falta un modelo propio.
- **Frontend:** pantallas o componentes nuevos en la app.
- **Servicios externos:** APIs, almacenamiento, voz, video.

### 4. Esfuerzo estimado

Una escala simple, marcada como estimación de la IA a validar por el CTO:

| Talla | Referencia |
| --- | --- |
| S | Días. Usa datos que ya tenemos y suma una pantalla. |
| M | 1 a 3 semanas. Algo de backend nuevo o un prompt nuevo del coach. |
| L | 1 a 2 meses. Datos nuevos (por ejemplo, procesar demos) o un modelo propio. |
| XL | Más de 2 meses o investigación con resultado incierto. |

Si la idea se puede hacer por partes, proponé una **primera versión chica** que entregue valor con lo que ya existe.

### 5. Riesgos y dudas

Lo que puede salir mal o falta saber: dependencia de terceros, costo por usuario, precisión del modelo, cuestiones legales o de marca.

## Cómo se ve en la ficha

```markdown
## Requerimientos

**Esfuerzo estimado:** M (estimación de la IA, a validar por el CTO)
**Primera versión posible:** ...

### Datos
| Dato | Para qué | Fuente | ¿Lo tenemos? |
| --- | --- | --- | --- |

### Librerías de la demo
- ...

### Para la versión real
- **Backend:** ...
- **IA:** ...
- **Frontend:** ...
- **Servicios externos:** ...

### Riesgos y dudas
- ...
```

Además, en `demos.js` va un resumen corto en el campo `necesita` (2 a 4 elementos), que se muestra en el catálogo.
