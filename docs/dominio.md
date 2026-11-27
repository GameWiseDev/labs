# Contexto del producto

Lo que la IA necesita saber de GAMEWISE para que una demo sea creíble y para separar, en los requerimientos, lo que ya existe de lo que habría que construir.

## Qué hace GAMEWISE hoy

Un coach de IA para jugadores de Counter-Strike 2 con memoria: recuerda cómo jugás, aprende qué querés mejorar y te demuestra con datos si estás mejorando.

El jugador entra con su cuenta de Steam y GAMEWISE trae sus partidas solo, sin subir archivos.

### El ciclo de mejora

1. **Meta:** el jugador elige qué quiere mejorar. Hay 6 metas fijas: Puntería, Posicionamiento, Toma de decisiones, Utilidades, Juego en equipo y Constancia. Si hay historial, se sugiere la de puntaje más bajo.
2. **Análisis:** el informe prioriza lo que tiene que ver con la meta.
3. **Patrón con evidencia:** con 5 partidas o más, el coach detecta hábitos que se repiten ("peleás aislado en 7 de tus últimas 10 partidas") y muestra las rondas exactas.
4. **Progreso:** compara el puntaje de la meta contra el inicio del ciclo ("vas +8").
5. **Siguiente foco:** al cerrar el ciclo, propone la próxima meta.

### Lo que ya existe en la app

- Inicio con Steam y lista de partidas.
- Diagnóstico de las últimas partidas, con bloqueos, próxima acción y propuestas de meta.
- Metas medibles, también escritas con palabras propias del jugador (la IA las interpreta y propone una métrica).
- Informes del ciclo con progreso por partida.
- Chat con el coach sobre las propias partidas, con respuestas separadas en Dato e Interpretación, rondas citadas, consejos y ejercicios recomendados.
- Catálogo de ejercicios de Steam Workshop, recomendados según la meta.
- Animaciones: radar de diagnóstico, números que cuentan, confeti al cumplir la meta.

### Reglas del coach

- Diferenciar hecho de interpretación.
- Toda afirmación se apoya en evidencia (rondas o métricas).
- No inventar métricas ni eventos.
- Pocas recomendaciones, concretas.
- Si no hay datos suficientes, decirlo.

## Datos disponibles

| Fuente | Qué trae | Estado |
| --- | --- | --- |
| Leetify (API pública) | Historial de partidas con unas 60 estadísticas por jugador y partida (puntería, utilidad, duelos de apertura, intercambios, etc.) | En uso |
| FACEIT | Partidas y estadísticas de FACEIT | Integrado |
| Steam | Identidad (nombre y avatar) | En uso |
| Steam, descarga directa | Partidas sin depender de Leetify | En desarrollo |
| Demos `.dem` (con demoparser2) | Posiciones de cada jugador momento a momento, eventos de cada ronda (bajas, granadas, bomba), economía | Probado como fuente alternativa, no en producción |

Cuando una idea necesita posiciones en el mapa, trayectorias, visión o el momento exacto de cada evento, depende de las demos `.dem`: eso hoy **no** está en producción y es un requerimiento a construir.

## Vocabulario de CS2

- **Partida:** hasta 24 rondas en Premier o Competitivo (gana el primero en llegar a 13). Mitad de partida en la ronda 12, cuando se cambia de lado.
- **Lados:** T (ataca y planta la bomba) y CT (defiende y la desactiva).
- **Sitios:** A y B, donde se planta la bomba.
- **Duelo de apertura:** la primera baja de la ronda.
- **Intercambio (trade):** cuando un compañero mata al que te mató enseguida. Pelear "aislado" es pelear sin nadie que te pueda intercambiar.
- **Utilidad:** granadas: humo, flash, molotov o incendiaria, HE.
- **Rotación:** cuando los CT se mueven de un sitio al otro.
- **Post-plant:** la parte de la ronda después de plantar la bomba.
- **Retake:** cuando los CT entran a recuperar el sitio.
- **Economía:** el dinero de cada ronda; ronda económica (eco), forzada (force) o compra completa.
- **Rating:** puntaje de rendimiento por partida (alrededor de 1,00 es el promedio).
- **Premier:** modo competitivo con rating numérico (de 0 a más de 30.000).

Mapas habituales: Mirage, Inferno, Nuke, Ancient, Anubis, Dust2, Train. En las demos se pueden nombrar, pero el dibujo es un esquema propio.

## Situaciones creíbles para datos de ejemplo

- Jugador de unos 10.000 a 15.000 de Premier que pierde duelos de apertura en mid.
- Peleas aisladas cuando va perdiendo el marcador.
- Usa poca utilidad o la tira tarde.
- Sale a buscar la rotación en post-plant en lugar de cubrir el sitio.
- Rinde bien las primeras partidas de la sesión y cae después de dos derrotas seguidas.

Usá nombres de compañeros genéricos o apodos inventados (Nico, Tomi, Fede). Nunca nombres de jugadores profesionales reales.
