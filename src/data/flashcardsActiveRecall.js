const flashcardsActiveRecall = [
  {
    id: "H-001-D",
    eje: "Historia",
    sourceId: 1,
    kind: "direct",
    prompt: "Punto de inflexion disciplinario que convierte ayudas dispersas en intervencion profesional sustentada en teoria, metodo y practica integrada.",
    answer: "Trabajo Social moderno.",
    note: "Se consolida como disciplina cientifica en el siglo XX."
  },
  {
    id: "H-001-I",
    eje: "Historia",
    sourceId: 1,
    kind: "inverse",
    prompt: "Disciplina cientifica apoyada en metodologias sistematizadas, teorias sociales y practica profesional integrada.",
    answer: "Trabajo Social moderno.",
    note: "Marca la salida del asistencialismo intuitivo."
  },
  {
    id: "H-001-A",
    eje: "Historia",
    sourceId: 1,
    kind: "cloze",
    prompt: "La ruptura decisiva de este concepto no es entre dos tecnicas de ayuda, sino entre _____ y _____.",
    answer: "caridad tradicional e intervencion profesional.",
    note: "Alerta de examen: no confundir ayuda caritativa con consolidacion disciplinaria."
  },
  {
    id: "H-002-D",
    eje: "Historia",
    sourceId: 2,
    kind: "direct",
    prompt: "Raices historicas ubicadas en la reforma social europea, la filantropia organizada y la beneficencia del siglo XIX.",
    answer: "Antecedentes historicos del Trabajo Social.",
    note: "Preceden a la profesionalizacion formal."
  },
  {
    id: "H-002-I",
    eje: "Historia",
    sourceId: 2,
    kind: "inverse",
    prompt: "Conjunto previo a la profesionalizacion formado por iniciativas filantropicas, beneficencia organizada y reforma social europea.",
    answer: "Antecedentes historicos del Trabajo Social.",
    note: "Explican el sustrato historico de la profesion."
  },
  {
    id: "H-002-A",
    eje: "Historia",
    sourceId: 2,
    kind: "cloze",
    prompt: "Antes de la profesionalizacion, la ayuda social paso por _____ y luego por la reforma social moderna.",
    answer: "formas caritativas medievales.",
    note: "Alerta de examen: distinguir caridad medieval de reforma social moderna."
  },
  {
    id: "H-003-D",
    eje: "Historia",
    sourceId: 3,
    kind: "direct",
    prompt: "Proceso regional no lineal en el que modelos importados son confrontados con realidades locales hasta producir identidades profesionales propias.",
    answer: "Evolucion de la profesion en America Latina.",
    note: "Implica adaptacion contextual y reinterpretacion."
  },
  {
    id: "H-003-I",
    eje: "Historia",
    sourceId: 3,
    kind: "inverse",
    prompt: "Adaptacion contextual, dialogo interdisciplinar y reinterpretacion critica de modelos europeos en contextos latinoamericanos.",
    answer: "Evolucion de la profesion en America Latina.",
    note: "No fue copia mecanica."
  },
  {
    id: "H-003-A",
    eje: "Historia",
    sourceId: 3,
    kind: "cloze",
    prompt: "Leer este proceso solo como transplante de modelos externos produce un sesgo de _____.",
    answer: "eurocentrismo.",
    note: "Alerta de examen: relacionar desarrollos regionales con contextos globales sin borrar agencia local."
  },
  {
    id: "H-004-D",
    eje: "Historia",
    sourceId: 4,
    kind: "direct",
    prompt: "Base intelectual temprana que articula teoria sociologica, psicologia social y filosofia del servicio para justificar intervencion sistematica.",
    answer: "Fundamentos teoricos iniciales del Trabajo Social.",
    note: "Organizan el corpus conceptual temprano."
  },
  {
    id: "H-004-I",
    eje: "Historia",
    sourceId: 4,
    kind: "inverse",
    prompt: "Convergencia inicial de teoria sociologica, psicologia social y filosofia del servicio en un corpus coherente.",
    answer: "Fundamentos teoricos iniciales del Trabajo Social.",
    note: "Da sustento a la estructuracion disciplinaria."
  },
  {
    id: "H-004-A",
    eje: "Historia",
    sourceId: 4,
    kind: "cloze",
    prompt: "Entre las influencias tempranas decisivas no figuran solo tecnicas asistenciales; tambien aparecen _____ y _____.",
    answer: "teoria sociologica y psicologia social.",
    note: "Alerta de examen: conectar influencias cientificas con el contexto intelectual del periodo."
  },
  {
    id: "H-005-D",
    eje: "Historia",
    sourceId: 5,
    kind: "direct",
    prompt: "Trayectoria historica por la cual el agente profesional pasa de tareas asistenciales a funciones transformadoras y criticas.",
    answer: "Rol social del trabajador social en contextos historicos.",
    note: "Cambia segun el marco historico-politico."
  },
  {
    id: "H-005-I",
    eje: "Historia",
    sourceId: 5,
    kind: "inverse",
    prompt: "Secuencia de funciones que va de la asistencia a la intermediacion, la movilizacion y la lectura critica de conflictos.",
    answer: "Rol social del trabajador social en contextos historicos.",
    note: "No permanece fijo a lo largo del tiempo."
  },
  {
    id: "H-005-A",
    eje: "Historia",
    sourceId: 5,
    kind: "cloze",
    prompt: "Interpretar este itinerario como un unico rol permanente produce una vision _____.",
    answer: "reduccionista.",
    note: "Alerta de examen: analizar cambios de rol segun contexto historico-politico."
  },
  {
    id: "H-006-D",
    eje: "Historia",
    sourceId: 6,
    kind: "direct",
    prompt: "Proceso de formalizacion que crea escuelas, regulacion, codigos eticos y marcos de actuacion para una profesion.",
    answer: "Institucionalizacion del Trabajo Social.",
    note: "Consolida reconocimiento formal y estandares de formacion."
  },
  {
    id: "H-006-I",
    eje: "Historia",
    sourceId: 6,
    kind: "inverse",
    prompt: "Creacion de escuelas profesionales, regulacion estatal, codigos de etica y espacios formales de intervencion.",
    answer: "Institucionalizacion del Trabajo Social.",
    note: "Da forma estable a la profesion."
  },
  {
    id: "H-006-A",
    eje: "Historia",
    sourceId: 6,
    kind: "cloze",
    prompt: "La institucionalizacion se relaciona con la profesionalizacion, pero no son identicas: la primera formaliza y la segunda _____.",
    answer: "consolida competencias y reconocimiento profesional.",
    note: "Alerta de examen: relacionar institucionalizacion con profesionalizacion sin fusionarlas."
  },
  {
    id: "H-007-D",
    eje: "Historia",
    sourceId: 7,
    kind: "direct",
    prompt: "Configuracion historica multimétodo formada por caso, grupo y comunidad como corrientes organizadoras del pensamiento profesional.",
    answer: "Escuelas historicas del Trabajo Social.",
    note: "Cada una aporta metodologia y nivel de intervencion."
  },
  {
    id: "H-007-I",
    eje: "Historia",
    sourceId: 7,
    kind: "inverse",
    prompt: "Trabajo Social de Casos, Trabajo Social de Grupo y Trabajo Social Comunitario como corrientes articuladoras de una disciplina.",
    answer: "Escuelas historicas del Trabajo Social.",
    note: "Consolidan una estructura multimétodo."
  },
  {
    id: "H-007-A",
    eje: "Historia",
    sourceId: 7,
    kind: "cloze",
    prompt: "Describir estas corrientes exige reconocer no solo nombres, sino tambien _____, marcos conceptuales y niveles de intervencion.",
    answer: "metodologias especificas.",
    note: "Alerta de examen: caracterizar cada escuela y su evolucion."
  },
  {
    id: "H-008-D",
    eje: "Historia",
    sourceId: 8,
    kind: "direct",
    prompt: "Conjunto de cambios macrosociales que desbordaron la caridad y abrieron demanda de intervencion profesional sobre nuevas cuestiones sociales.",
    answer: "Transformaciones sociales que impulsaron el Trabajo Social.",
    note: "Industrializacion, urbanizacion y pobreza urbana son piezas centrales."
  },
  {
    id: "H-008-I",
    eje: "Historia",
    sourceId: 8,
    kind: "inverse",
    prompt: "Industrializacion, urbanizacion, migracion masiva y pobreza urbana como detonantes de respuesta profesional especializada.",
    answer: "Transformaciones sociales que impulsaron el Trabajo Social.",
    note: "Explican la emergencia de nuevas demandas."
  },
  {
    id: "H-008-A",
    eje: "Historia",
    sourceId: 8,
    kind: "cloze",
    prompt: "La genesis disciplinaria no se entiende por filantropia aislada, sino por cambios _____ que produjeron nuevas cuestiones sociales.",
    answer: "economico-estructurales.",
    note: "Alerta de examen: conectar cambios macrosociales con emergencia disciplinaria."
  },
  {
    id: "H-009-D",
    eje: "Historia",
    sourceId: 9,
    kind: "direct",
    prompt: "Lectura inicial que concibe lo social como cuestion a intervenir y que luego migra de visiones patologicas a comprensiones mas estructurales.",
    answer: "Conceptualizaciones tempranas de lo social.",
    note: "Muestran el giro historico en el modo de nombrar lo social."
  },
  {
    id: "H-009-I",
    eje: "Historia",
    sourceId: 9,
    kind: "inverse",
    prompt: "Paso historico desde visiones patologicas hacia comprensiones estructurales y dinamicas de los procesos sociales.",
    answer: "Conceptualizaciones tempranas de lo social.",
    note: "Reformula el objeto de intervencion."
  },
  {
    id: "H-009-A",
    eje: "Historia",
    sourceId: 9,
    kind: "cloze",
    prompt: "Reducir lo social a carencia individual bloquea el giro hacia una comprension mas _____.",
    answer: "estructural.",
    note: "Alerta de examen: evitar reduccionismo asistencialista."
  },
  {
    id: "H-010-D",
    eje: "Historia",
    sourceId: 10,
    kind: "direct",
    prompt: "Intercambio sostenido con otras ciencias que permite a la disciplina ganar legitimacion academica y sofisticacion metodologica.",
    answer: "Dialogos interdisciplinarios en construccion historica.",
    note: "Evitan el encierro empirista."
  },
  {
    id: "H-010-I",
    eje: "Historia",
    sourceId: 10,
    kind: "inverse",
    prompt: "Vinculos con sociologia, psicologia, antropologia y filosofia que enriquecen conceptos y metodos.",
    answer: "Dialogos interdisciplinarios en construccion historica.",
    note: "Son rasgo constitutivo de la disciplina."
  },
  {
    id: "H-010-A",
    eje: "Historia",
    sourceId: 10,
    kind: "cloze",
    prompt: "La interdisciplinariedad historica no cumple solo una funcion de prestamo teorico; tambien aporta _____.",
    answer: "legitimacion academica y sofisticacion metodologica.",
    note: "Alerta de examen: reconocer influencias disciplinarias decisivas."
  },
  {
    id: "H-011-D",
    eje: "Historia",
    sourceId: 11,
    kind: "direct",
    prompt: "Reorientacion historica que denuncia adaptacionismo e individualismo y empuja la intervencion hacia lectura politica y transformacion estructural.",
    answer: "Corrientes criticas en la historia del Trabajo Social.",
    note: "Cuestionan la reproduccion de desigualdades."
  },
  {
    id: "H-011-I",
    eje: "Historia",
    sourceId: 11,
    kind: "inverse",
    prompt: "Enfasis en empoderamiento, lectura politica de problemas sociales y transformacion estructural por encima del ajuste individual.",
    answer: "Corrientes criticas en la historia del Trabajo Social.",
    note: "Se oponen al trabajo social tradicional adaptativo."
  },
  {
    id: "H-011-A",
    eje: "Historia",
    sourceId: 11,
    kind: "cloze",
    prompt: "La oposicion central aqui no es entre teoria y practica, sino entre Trabajo Social tradicional y Trabajo Social _____.",
    answer: "critico.",
    note: "Alerta de examen: comprender el debate entre adaptacion y transformacion."
  },
  {
    id: "H-012-D",
    eje: "Historia",
    sourceId: 12,
    kind: "direct",
    prompt: "Proceso por el que una profesion adquiere autonomia, reconocimiento social e insercion especializada a traves de formacion, etica y produccion teorica.",
    answer: "Consolidacion de identidades profesionales.",
    note: "Fija rasgos de pertenencia disciplinaria."
  },
  {
    id: "H-012-I",
    eje: "Historia",
    sourceId: 12,
    kind: "inverse",
    prompt: "Formacion sistematizada, produccion teorica, codigos eticos y campos de practica especificos como base de autonomia profesional.",
    answer: "Consolidacion de identidades profesionales.",
    note: "Asocia identidad con legitimidad y especializacion."
  },
  {
    id: "H-012-A",
    eje: "Historia",
    sourceId: 12,
    kind: "cloze",
    prompt: "Cuando la profesion gana autonomia y reconocimiento, la identidad profesional se vuelve tambien una fuente de _____.",
    answer: "legitimidad disciplinaria.",
    note: "Alerta de examen: relacionar identidad profesional con legitimidad."
  },
  {
    id: "H-013-D",
    eje: "Historia",
    sourceId: 13,
    kind: "direct",
    prompt: "Marco historico en el que reforma social, movimientos obreros y construccion estatal condicionan el surgimiento profesional.",
    answer: "Contextos politicos de surgimiento disciplinario.",
    note: "La profesion nace en una escena politica concreta."
  },
  {
    id: "H-013-I",
    eje: "Historia",
    sourceId: 13,
    kind: "inverse",
    prompt: "Convergencia de reforma social, demandas democraticas, movimientos obreros y construccion de estados modernos como condicion historica.",
    answer: "Contextos politicos de surgimiento disciplinario.",
    note: "Explican orientaciones y espacios de intervencion."
  },
  {
    id: "H-013-A",
    eje: "Historia",
    sourceId: 13,
    kind: "cloze",
    prompt: "Mirar la disciplina como si hubiera surgido al margen de la politica equivale a _____.",
    answer: "naturalizarla.",
    note: "Alerta de examen: reconocer determinaciones politicas del surgimiento profesional."
  },
  {
    id: "H-014-D",
    eje: "Historia",
    sourceId: 14,
    kind: "direct",
    prompt: "Transicion desde aprendizaje empirico con mentores hacia curricula estructurados e integracion universitaria.",
    answer: "Formacion profesional: evolucion historica.",
    note: "Refleja maduracion disciplinaria."
  },
  {
    id: "H-014-I",
    eje: "Historia",
    sourceId: 14,
    kind: "inverse",
    prompt: "Paso del aprendizaje empirico a programas formales, curriculos estructurados y reconocimiento academico.",
    answer: "Formacion profesional: evolucion historica.",
    note: "Relaciona forma de enseñar con consolidacion profesional."
  },
  {
    id: "H-014-A",
    eje: "Historia",
    sourceId: 14,
    kind: "cloze",
    prompt: "La mejora historica de la formacion no es un lujo academico; se asocia con mayor _____.",
    answer: "efectividad profesional.",
    note: "Alerta de examen: conectar calidad formativa con practica."
  },
  {
    id: "H-015-D",
    eje: "Historia",
    sourceId: 15,
    kind: "direct",
    prompt: "Conjunto de contribuciones fundacionales que convierten experiencia acumulada en metodologia, teoria y modelos de intervencion duraderos.",
    answer: "Aportes de pioneros en construccion teorica.",
    note: "Generan teoria desde la practica."
  },
  {
    id: "H-015-I",
    eje: "Historia",
    sourceId: 15,
    kind: "inverse",
    prompt: "Metodologias innovadoras, marcos conceptuales nuevos y modelos de intervencion aportados por figuras fundacionales.",
    answer: "Aportes de pioneros en construccion teorica.",
    note: "Consolidan fundamentos persistentes."
  },
  {
    id: "H-015-A",
    eje: "Historia",
    sourceId: 15,
    kind: "cloze",
    prompt: "Estudiar a los pioneros exige unir nombres propios con sus _____ concretos.",
    answer: "aportes.",
    note: "Alerta de examen: identificar autores y contribuciones especificas."
  },
  {
    id: "H-016-D",
    eje: "Historia",
    sourceId: 16,
    kind: "direct",
    prompt: "Dinamica regional en la que modelos externos son importados, criticados selectivamente y reconfigurados hasta producir hibridaciones propias.",
    answer: "Influencias europeas en Trabajo Social latinoamericano.",
    note: "Implica adaptacion, no copia pasiva."
  },
  {
    id: "H-016-I",
    eje: "Historia",
    sourceId: 16,
    kind: "inverse",
    prompt: "Transferencia de modelos europeos atravesada por rechazo selectivo, sintesis innovadora y reinterpretacion local.",
    answer: "Influencias europeas en Trabajo Social latinoamericano.",
    note: "La region actua con agencia creativa."
  },
  {
    id: "H-016-A",
    eje: "Historia",
    sourceId: 16,
    kind: "cloze",
    prompt: "Leer este proceso como recepcion pasiva borra la _____ latinoamericana en la construccion disciplinaria.",
    answer: "agencia creativa.",
    note: "Alerta de examen: evitar determinismo europeo."
  },
  {
    id: "H-017-D",
    eje: "Historia",
    sourceId: 17,
    kind: "direct",
    prompt: "Presion historica ejercida por vivienda, desempleo, marginalidad y vulnerabilidad, capaz de forzar desarrollo metodologico y profesionalizacion.",
    answer: "Demandas sociales como motor historico del Trabajo Social.",
    note: "Las necesidades concretas impulsan la teorizacion."
  },
  {
    id: "H-017-I",
    eje: "Historia",
    sourceId: 17,
    kind: "inverse",
    prompt: "Problematicas de vivienda, desempleo, marginalidad urbana y vulnerabilidad como catalizadores de profesionalizacion.",
    answer: "Demandas sociales como motor historico del Trabajo Social.",
    note: "No hay profesionalizacion sin presion social concreta."
  },
  {
    id: "H-017-A",
    eje: "Historia",
    sourceId: 17,
    kind: "cloze",
    prompt: "La logica historica aqui no es problema social sin respuesta, sino problema social como motor de _____.",
    answer: "desarrollo metodologico y profesionalizacion.",
    note: "Alerta de examen: conectar problemas historicos con soluciones profesionales."
  },
  {
    id: "H-018-D",
    eje: "Historia",
    sourceId: 18,
    kind: "direct",
    prompt: "Proceso conflictivo mediante el cual una profesion gana reconocimiento a traves de efectividad, conocimiento, alianzas y validacion social.",
    answer: "Legitimacion social del Trabajo Social.",
    note: "No equivale solo a dominio tecnico."
  },
  {
    id: "H-018-I",
    eje: "Historia",
    sourceId: 18,
    kind: "inverse",
    prompt: "Demostraciones de efectividad, generacion de conocimiento, alianzas institucionales y reconocimiento de actores sociales.",
    answer: "Legitimacion social del Trabajo Social.",
    note: "Se construye entre apoyos y resistencias."
  },
  {
    id: "H-018-A",
    eje: "Historia",
    sourceId: 18,
    kind: "cloze",
    prompt: "Confundir dominio tecnico con aceptacion amplia equivale a mezclar legitimidad tecnica con legitimidad _____.",
    answer: "social.",
    note: "Alerta de examen: distinguir tipos de legitimidad y reconocer controversias."
  },
  {
    id: "H-019-D",
    eje: "Historia",
    sourceId: 19,
    kind: "direct",
    prompt: "Serie historica de marcos de intervencion que va desde la ayuda asistencial hasta horizontes reparadores y emancipadores.",
    answer: "Paradigmas historicos de intervencion social.",
    note: "Cada paradigma redefine objetivos y vinculos con la poblacion."
  },
  {
    id: "H-019-I",
    eje: "Historia",
    sourceId: 19,
    kind: "inverse",
    prompt: "Secuencia compuesta por paradigma asistencial, reparador y emancipador, cada uno con objetivos y relaciones distintos.",
    answer: "Paradigmas historicos de intervencion social.",
    note: "Organizan cambios de fondo en la practica."
  },
  {
    id: "H-019-A",
    eje: "Historia",
    sourceId: 19,
    kind: "cloze",
    prompt: "Caracterizar bien estos marcos exige conectar cada paradigma con sus objetivos, sus metodos y su _____ con la poblacion intervenida.",
    answer: "tipo de relacion.",
    note: "Alerta de examen: no memorizar solo el nombre del paradigma."
  },
  {
    id: "H-020-D",
    eje: "Historia",
    sourceId: 20,
    kind: "direct",
    prompt: "Conjunto de cuestiones historicamente no resueltas que enlazan memoria disciplinaria con tareas contemporaneas.",
    answer: "Perspectivas futuras: desafios historicos pendientes.",
    note: "Conectan historia de la profesion con su porvenir."
  },
  {
    id: "H-020-I",
    eje: "Historia",
    sourceId: 20,
    kind: "inverse",
    prompt: "Equidad de acceso, superacion de desigualdades, articulacion teoria-practica, reconocimiento de saberes populares y participacion genuina.",
    answer: "Perspectivas futuras: desafios historicos pendientes.",
    note: "Muestran problemas abiertos de la disciplina."
  },
  {
    id: "H-020-A",
    eje: "Historia",
    sourceId: 20,
    kind: "cloze",
    prompt: "Pensar el presente disciplinario sin memoria historica impide proyectar sus desafios _____.",
    answer: "pendientes.",
    note: "Alerta de examen: conectar historia con proyeccion futura."
  }
];

export default flashcardsActiveRecall;