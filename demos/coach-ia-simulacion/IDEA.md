# Coach IA: ronda clave y simulación de decisiones

- **Autor:** Jere
- **Fecha:** 27/11/2026
- **Estado:** propuesta
- **Demo:** [index.html](index.html)

## En una frase

El coach reconstruye la ronda donde te equivocaste, te hace decidir de nuevo y te muestra qué hubiera pasado con cada opción.

## Problema del jugador

El jugador ve en qué ronda murió, pero no entiende qué decisión le costó la ronda ni qué tendría que haber hecho. Leer un análisis no alcanza: hace falta verlo y practicarlo.

## Para quién es la demo

Equipo e inversores: muestra hacia dónde puede crecer el coach más allá del análisis de estadísticas.

## Momento clave

La ronda se pausa en el segundo del error y pregunta "¿Qué hacés?". Al elegir, aparece cuántas de cada 100 simulaciones gana cada opción y se ve animada la mejor jugada junto a lo que pasó de verdad.

## Qué muestra la demo

1. **Ronda clave.** La ronda reconstruida en un mapa 2D con jugadores, campos de visión, humos, flashes y bajas. Se pausa en el error, el jugador elige entre tres opciones y ve el resultado simulado de cada una, con el porqué. La vista "Comparar" superpone el recorrido real y el simulado, con la curva de probabilidad de ganar de cada uno. Dos rondas de ejemplo: R14 (pelea aislada en mid) y R19 (salir a buscar la rotación en post-plant).
2. **Relato del coach con voz.** Narración sincronizada con la ronda (voz del navegador) y preguntas al coach con respuestas separadas en Dato e Interpretación, citando rondas.
3. **Momentos decisivos.** El impacto de cada ronda en la probabilidad de ganar la partida, para encontrar las decisiones que la definieron.
4. **Briefing previo.** Mapa de riesgo para la próxima partida, tres reglas para la meta y la opción de escucharlo.
5. **Detector de tilt.** Detecta cuándo el juego empeora después de perder y propone una pausa guiada.

## Fuera de la demo

- Datos reales de partidas: todo es de ejemplo.
- Coaching en vivo durante la partida (aparece solo como "próximamente").
- Mapas oficiales: se usa un esquema propio.

## Requerimientos

**Esfuerzo estimado:** XL en total (estimación de la IA, a validar por el CTO). Por partes va de S a XL.
**Primera versión posible:** detector de tilt y relato con voz, que se pueden hacer con los datos que ya tenemos (S a M). Después, momentos decisivos con un modelo simple de probabilidad (L). La simulación de decisiones en el mapa queda para el final (XL).

### Datos

| Dato | Para qué | Fuente | ¿Lo tenemos? |
| --- | --- | --- | --- |
| Estadísticas por partida (rating, duelos, intercambios) | Detector de tilt, briefing | Leetify / FACEIT | Sí |
| Historial de sesiones del jugador | Comparar la sesión de hoy con las anteriores | Base de datos de GAMEWISE | Sí, parcial |
| Posiciones de cada jugador momento a momento | Dibujar la ronda en el mapa | Demos `.dem` (demoparser2) | No: probado, no en producción |
| Eventos de la ronda (bajas, granadas, bomba, tiempo) | Momento del error, relato, curva de probabilidad | Demos `.dem` | No |
| Miles de rondas de referencia | Entrenar el modelo de probabilidad de ganar | Demos públicas o propias | No |

### Librerías de la demo

- Ninguna: mapa, curvas y gráficos hechos a mano con SVG.
- Voz con la API del navegador (`speechSynthesis`).

### Para la versión real

- **Backend:** bajar y procesar las demos `.dem` de cada partida, guardar posiciones y eventos, y detectar automáticamente los momentos clave de cada ronda.
- **IA:** un modelo propio de probabilidad de ganar la ronda (jugadores vivos, armas, bomba, tiempo, economía). Para las alternativas, arrancar comparando con rondas parecidas en lugar de simular. El LLM actual alcanza para el relato y para proponer las opciones de decisión.
- **Frontend:** reproductor de ronda en 2D con línea de tiempo, pantalla de decisión y comparación, gráfico de impacto por ronda.
- **Servicios externos:** almacenamiento para las demos procesadas. Voz: la del navegador, o un servicio de voz si se quiere una más natural.

### Riesgos y dudas

- Las simulaciones tienen que ser creíbles: si el jugador ve un resultado absurdo, deja de confiar en el coach.
- ¿Podemos bajar las demos de cada jugador de forma automática y legal?
- Costo de procesar demos completas en lugar de estadísticas agregadas.
- Mapas: hay que dibujar esquemas propios, no copiar los radares de Valve.

## Decisión del equipo

_Pendiente. Se presenta en la reunión semanal._

<!-- Cuando se decida, completar:
- **Fecha:**
- **Resultado:** aprobada / descartada / en evaluación
- **Motivo:**
- **Próximo paso:**
-->
