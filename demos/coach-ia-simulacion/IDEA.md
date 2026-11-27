# Coach IA: ronda clave y simulación de decisiones

- **Autor:** Jere
- **Fecha:** 27/11/2026
- **Estado:** propuesta
- **Demo:** [index.html](index.html)

## Problema del jugador

El jugador ve en qué ronda murió, pero no entiende qué decisión le costó la ronda ni qué tendría que haber hecho. Leer un análisis no alcanza: hace falta verlo y practicarlo.

## Qué muestra la demo

1. **Ronda clave.** La ronda reconstruida en un mapa 2D. Se pausa en el segundo del error y pregunta "¿Qué hacés?" con tres opciones. Al elegir, muestra cuántas de cada 100 simulaciones gana cada opción, explica por qué y anima la mejor jugada. La vista "Comparar" superpone el recorrido real y el simulado, con la curva de probabilidad de ganar de cada uno.
2. **Relato del coach con voz.** Narración sincronizada con la ronda (voz del navegador) y preguntas al coach con respuestas separadas en Dato e Interpretación, citando rondas.
3. **Momentos decisivos.** El impacto de cada ronda en la probabilidad de ganar la partida, para encontrar las decisiones que la definieron.
4. **Briefing previo.** Mapa de riesgo para la próxima partida, tres reglas para la meta y la opción de escucharlo.
5. **Detector de tilt.** Detecta cuándo el juego empeora después de perder y propone una pausa guiada.

## Qué haría falta para hacerlo real

A validar por Pablo y Tamara.

| Pieza | Qué se necesita | Dudas |
| --- | --- | --- |
| Posiciones por tick | Parsear las demos `.dem` (demoparser2 ya se probó como fuente alternativa) | ¿Podemos bajar las demos de cada jugador de forma automática? |
| Probabilidad de victoria por ronda | Un modelo entrenado con miles de rondas: jugadores vivos, armas, bomba, tiempo, economía | ¿Con qué dataset lo entrenamos? |
| Simulación de alternativas | Estimar la probabilidad de ganar de cada opción desde una situación dada | Es la pieza más difícil. Se puede arrancar comparando con rondas parecidas en lugar de simular. |
| Opciones de decisión | Que la IA proponga 2 o 3 alternativas razonables para cada momento clave | ¿Reglas tácticas fijas, LLM o una mezcla? |
| Relato y voz | El LLM narra a partir de los eventos; la voz puede ser la del navegador | Bajo costo. Se podría hacer primero. |
| Detector de tilt | Comparar las partidas de la sesión con el historial del jugador | Se puede hacer con los datos actuales de Leetify y FACEIT. |

## Riesgos y dudas

- Las simulaciones tienen que ser creíbles: si el jugador ve un resultado absurdo, deja de confiar en el coach.
- Costo de procesar demos completas en lugar de estadísticas agregadas.
- Mapas: para mostrarlos hay que usar esquemas propios, no copiar los radares de Valve.

## Decisión del equipo

_Pendiente. Se presenta en la reunión semanal._

<!-- Cuando se decida, completar:
- **Fecha:**
- **Resultado:** aprobada / descartada / en evaluación
- **Motivo:**
- **Próximo paso:**
-->
