// Catálogo de demos de GAMEWISE Labs.
// Para sumar una demo, agregá un objeto a la lista. El catálogo (index.html) se arma solo.
// Estados: propuesta · evaluacion · aprobada · roadmap · descartada
// necesita: resumen corto de los requerimientos (2 a 4 elementos), ver docs/requerimientos.md
// esfuerzo: S · M · L · XL (estimación a validar por el CTO)

window.DEMOS = [
  {
    slug: 'coach-ia-simulacion',
    nombre: 'Coach IA: ronda clave y simulación de decisiones',
    resumen: 'Reconstruye la ronda en un mapa 2D, se pausa en el momento del error, te pide que decidas y simula las alternativas con su probabilidad de ganar.',
    incluye: ['Simulación de decisiones', 'Momentos decisivos', 'Briefing previo con voz', 'Detector de tilt'],
    necesita: ['Procesar demos .dem (posiciones y eventos)', 'Modelo de probabilidad de ganar la ronda', 'Reproductor 2D en la app'],
    esfuerzo: 'XL',
    estado: 'propuesta',
    autor: 'Jere',
    fecha: '2026-11-27'
  }
];
