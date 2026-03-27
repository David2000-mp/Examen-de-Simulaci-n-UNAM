/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'src', 'data', 'preguntas.json');
const raw = fs.readFileSync(dataPath, 'utf8').replace(/^\uFEFF/, '');
const questions = JSON.parse(raw);

const newQuestions = [
  {
    id: '020',
    eje: 'Historia',
    tema: 'Reconceptualizacion del Trabajo Social en America Latina',
    lectura_origen: 'Historia del Trabajo Social / Boris Lima',
    pregunta: 'Cual fue el planteamiento central del movimiento de Reconceptualizacion del Trabajo Social latinoamericano en las decadas de 1960 y 1970?',
    opciones: [
      'Adoptar el modelo anglosajón de casework como metodo unico de intervencion profesional.',
      'Cuestionar el caracter asistencialista y acritico del Trabajo Social tradicional, proponiendo una practica comprometida con la transformacion social y la liberacion de los sectores oprimidos.',
      'Separar definitivamente el Trabajo Social de las ciencias sociales para consolidarlo como disciplina tecnica neutral.',
      'Priorizar la formacion academica sobre la intervencion directa con comunidades populares.'
    ],
    respuesta_correcta: 1,
    justificacion: 'La Reconceptualizacion busco superar el asistencialismo y el trasplante acritico de modelos externos, articulando el Trabajo Social con proyectos de transformacion social (pag. 45-50).'
  },
  {
    id: '021',
    eje: 'Metodología',
    tema: 'Triangulacion en la investigacion social',
    lectura_origen: 'Metodologia de la investigacion social / Hernandez Sampieri',
    pregunta: 'En el diseño de una investigacion mixta sobre exclusion social, una investigadora decide combinar encuestas estadisticas con entrevistas en profundidad y analisis documental. Que estrategia metodologica describe esta decision?',
    opciones: [
      'Saturacion teorica, porque se busca el punto en que los datos no aportan informacion nueva.',
      'Triangulacion metodologica, porque se usan multiples fuentes y metodos para contrastar y validar los hallazgos desde distintas perspectivas.',
      'Muestreo teorico, porque la seleccion de informantes sigue criterios conceptuales predefinidos.',
      'Reduccion fenomenologica, porque se suspende el juicio previo del investigador ante las evidencias.'
    ],
    respuesta_correcta: 1,
    justificacion: 'La triangulacion metodologica consiste en combinar diferentes metodos y fuentes para obtener una comprension mas completa y validada del fenomeno estudiado (pag. 557-559).'
  },
  {
    id: '022',
    eje: 'Teoría',
    tema: 'Capital Social y redes de reciprocidad',
    lectura_origen: 'El Capital Social / Pierre Bourdieu',
    pregunta: 'Bourdieu define el capital social como el conjunto de recursos vinculados a la posesion de una red durable de relaciones. En el marco del Trabajo Social comunitario, que implicacion tiene este concepto para el analisis de la pobreza urbana?',
    opciones: [
      'La pobreza es exclusivamente resultado de la carencia de capital economico, por lo que el capital social carece de valor explicativo.',
      'El capital social demuestra que el acceso a recursos no depende solo del ingreso individual, sino tambien de las redes de pertenencia, lo que explica desigualdades invisibles entre grupos con ingresos similares.',
      'Las redes comunitarias solo refuerzan el clientelismo politico y no constituyen un recurso genuino.',
      'El capital social es un concepto aplicable unicamente a elites economicas que acceden a mercados internacionales.'
    ],
    respuesta_correcta: 1,
    justificacion: 'Bourdieu muestra que las redes de relaciones constituyen un capital diferenciado que reproduce o mitiga la desigualdad mas alla del ingreso monetario (pag. 248-249).'
  },
  {
    id: '023',
    eje: 'Historia',
    tema: 'Trabajo Social y derechos humanos',
    lectura_origen: 'Trabajo Social y derechos humanos / Nelia Tello Peon',
    pregunta: 'Por que la perspectiva de derechos humanos representa una ruptura con el enfoque de necesidades en la practica historica del Trabajo Social?',
    opciones: [
      'Porque los derechos humanos son exclusivamente competencia del derecho penal y no de las disciplinas sociales.',
      'Porque el enfoque de necesidades patologiza al sujeto y legitima la intervencion tutelar, mientras que el enfoque de derechos reconoce al sujeto como titular activo de garantias exigibles al Estado.',
      'Porque la perspectiva de derechos elimina la intervencion directa del Trabajo Social, relegandola a un rol exclusivamente juridico.',
      'Porque ambos enfoques son equivalentes: identificar necesidades es sinonimo de garantizar derechos.'
    ],
    respuesta_correcta: 1,
    justificacion: 'El enfoque de derechos desplaza la logica de la caridad y la tutela hacia la ciudadania plena y la exigibilidad de garantias (pag. 12-15).'
  },
  {
    id: '024',
    eje: 'Metodología',
    tema: 'La Observacion Participante como tecnica cualitativa',
    lectura_origen: 'El trabajo de campo etnografico / Rosana Guber',
    pregunta: 'En la observacion participante, cual es la tension metodologica fundamental que enfrenta el investigador y como se resuelve en la practica etnografica?',
    opciones: [
      'La tension entre muestreo probabilistico y muestreo intencional, que se resuelve aumentando el tamaño de la muestra.',
      'La tension entre participar (implicarse en la vida cotidiana) y observar (mantener distancia analitica), que se gestiona mediante la reflexividad constante y el registro sistematico en el diario de campo.',
      'La tension entre usar cuestionarios estructurados y entrevistas abiertas, que se resuelve aplicando primero el cuestionario y luego la entrevista.',
      'La tension entre el tiempo asignado y los recursos financieros, que se supera reduciendo el periodo de trabajo de campo.'
    ],
    respuesta_correcta: 1,
    justificacion: 'La observacion participante exige gestionar la doble posicion insider/outsider mediante reflexividad y registro sistematico para mantener el rigor analitico (pag. 53-56).'
  },
  {
    id: '025',
    eje: 'Teoría',
    tema: 'Fenomenologia y mundo de la vida',
    lectura_origen: 'La construccion social de la realidad / Berger y Luckmann',
    pregunta: 'Berger y Luckmann retoman el concepto husserliano de mundo de la vida (Lebenswelt) para fundamentar su sociologia del conocimiento. Como Schutz caracteriza este mundo de la vida y que implicaciones tiene para la investigacion en Trabajo Social?',
    opciones: [
      'Es el sistema normativo impuesto por el Estado que regula las interacciones sociales y define el conocimiento legitimo.',
      'Es la realidad cotidiana dada por sentado, intersubjetivamente compartida, desde la cual los actores le atribuyen significados a sus acciones; su comprension exige metodos que capturen el sentido subjetivo de los fenomenos sociales.',
      'Equivale a la infraestructura economica marxista que determina las formas de conciencia colectiva.',
      'Es irrelevante para la investigacion cientifica porque no puede ser operacionalizado en variables medibles.'
    ],
    respuesta_correcta: 1,
    justificacion: 'Schutz describe el Lebenswelt como la realidad intersubjetiva dada por sentado, fundamento de todo conocimiento social, orientando al Trabajo Social hacia metodos comprensivos/interpretativos (pag. 37-40).'
  }
];

const insertIdx = questions.findIndex(q => q.id === '026');
questions.splice(insertIdx, 0, ...newQuestions);
fs.writeFileSync(dataPath, JSON.stringify(questions, null, 2));
console.log('Done. Total questions:', questions.length);
