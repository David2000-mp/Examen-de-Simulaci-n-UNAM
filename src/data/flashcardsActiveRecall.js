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
    prompt: "Nombre del punto de llegada disciplinar que sustituye ayuda intuitiva por intervencion con base teorico-metodologica.",
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
  },
  {
    id: "M-021-D",
    eje: "Metodología",
    sourceId: 21,
    kind: "direct",
    prompt: "Nombre del marco que integra teoria, metodo y tecnicas para intervenir de forma planificada en Trabajo Social.",
    answer: "Metodologia en Trabajo Social.",
    note: "Integra diagnostico, intervencion y evaluacion; no equivale a una tecnica aislada."
  },
  {
    id: "M-021-I",
    eje: "Metodología",
    sourceId: 21,
    kind: "inverse",
    prompt: "Marco integrador que organiza procedimientos y tecnicas con fundamento teorico y orientacion al cambio social.",
    answer: "Metodologia en Trabajo Social.",
    note: "Alcance: individual, grupal, comunitario e institucional."
  },
  {
    id: "M-021-A",
    eje: "Metodología",
    sourceId: 21,
    kind: "cloze",
    prompt: "El error clasico aqui es reducir _____ a un conjunto de tecnicas sueltas.",
    answer: "la metodologia.",
    note: "Alerta de examen: distinguir metodologia de tecnicas e instrumentos."
  },
  {
    id: "M-022-D",
    eje: "Metodología",
    sourceId: 22,
    kind: "direct",
    prompt: "Proceso ciclico que produce conocimiento sistematico sobre la realidad y, al mismo tiempo, fundamenta y evalua la intervencion.",
    answer: "Investigacion social como fundamento metodologico.",
    note: "Intervencion e investigacion se retroalimentan."
  },
  {
    id: "M-022-I",
    eje: "Metodología",
    sourceId: 22,
    kind: "inverse",
    prompt: "Base que informa la intervencion, evalua practicas y convierte experiencia en conocimiento sistematico.",
    answer: "Investigacion social como fundamento metodologico.",
    note: "No es una fase separada del trabajo profesional."
  },
  {
    id: "M-022-A",
    eje: "Metodología",
    sourceId: 22,
    kind: "cloze",
    prompt: "Separar por completo investigacion e intervencion rompe su relacion _____.",
    answer: "ciclica.",
    note: "Alerta de examen: conectar investigacion con sistematizacion y evaluacion."
  },
  {
    id: "M-023-D",
    eje: "Metodología",
    sourceId: 23,
    kind: "direct",
    prompt: "Conjunto de aproximaciones que prioriza significados, experiencias, contexto y complejidad por encima de la sola medicion numerica.",
    answer: "Metodos cualitativos en intervencion social.",
    note: "Incluyen observacion, entrevista profunda, grupos focales y analisis narrativo."
  },
  {
    id: "M-023-I",
    eje: "Metodología",
    sourceId: 23,
    kind: "inverse",
    prompt: "Aproximacion que captura sentidos, interpreta experiencias y profundiza en dimensiones ocultas del fenomeno social.",
    answer: "Metodos cualitativos en intervencion social.",
    note: "Su fuerza esta en la comprension densa del contexto."
  },
  {
    id: "M-023-A",
    eje: "Metodología",
    sourceId: 23,
    kind: "cloze",
    prompt: "Estos metodos son pertinentes cuando la pregunta exige comprender _____ antes que medir magnitudes.",
    answer: "significados y experiencias.",
    note: "Alerta de examen: justificar cuando conviene un enfoque cualitativo."
  },
  {
    id: "M-024-D",
    eje: "Metodología",
    sourceId: 24,
    kind: "direct",
    prompt: "Aproximacion que cuantifica fenomenos, detecta patrones y trabaja con instrumentos estandarizados y analisis numerico.",
    answer: "Metodos cuantitativos en intervencion social.",
    note: "Permiten estimar proporciones, distribuciones y correlaciones."
  },
  {
    id: "M-024-I",
    eje: "Metodología",
    sourceId: 24,
    kind: "inverse",
    prompt: "Uso de medicion estandarizada, datos numericos y analisis estadistico para identificar patrones generalizables.",
    answer: "Metodos cuantitativos en intervencion social.",
    note: "Aportan alcance comparativo y medicion consistente."
  },
  {
    id: "M-024-A",
    eje: "Metodología",
    sourceId: 24,
    kind: "cloze",
    prompt: "La ventaja principal aqui no es comprender sentidos finos, sino _____, patrones y distribuciones.",
    answer: "cuantificar fenomenos.",
    note: "Alerta de examen: reconocer fortalezas sin caer en cientificismo."
  },
  {
    id: "M-025-D",
    eje: "Metodología",
    sourceId: 25,
    kind: "direct",
    prompt: "Integracion deliberada de metodos cualitativos y cuantitativos para validar hallazgos y construir una lectura multidimensional.",
    answer: "Enfoque mixto o triangulacion metodologica.",
    note: "No es yuxtaposicion superficial; requiere diseno intencional."
  },
  {
    id: "M-025-I",
    eje: "Metodología",
    sourceId: 25,
    kind: "inverse",
    prompt: "Diseno que combina fortalezas de distintos metodos para contrastar datos y ampliar la comprension del fenomeno.",
    answer: "Enfoque mixto o triangulacion metodologica.",
    note: "Busca validacion cruzada y profundidad."
  },
  {
    id: "M-025-A",
    eje: "Metodología",
    sourceId: 25,
    kind: "cloze",
    prompt: "Si solo se yuxtaponen tecnicas sin articulacion epistemica, el resultado es _____.",
    answer: "yuxtaposicion superficial.",
    note: "Alerta de examen: argumentar la pertinencia del enfoque mixto."
  },
  {
    id: "M-026-D",
    eje: "Metodología",
    sourceId: 26,
    kind: "direct",
    prompt: "Proceso analitico previo a la accion que identifica problemas, recursos, fortalezas y contextos para construir comprension fundamentada.",
    answer: "Diagnostico social.",
    note: "No es descripcion neutra; organiza la interpretacion de la situacion."
  },
  {
    id: "M-026-I",
    eje: "Metodología",
    sourceId: 26,
    kind: "inverse",
    prompt: "Lectura sistematica de actores, recursos, carencias y condiciones macrosociales antes de intervenir.",
    answer: "Diagnostico social.",
    note: "Integra miradas de participantes y contexto historico."
  },
  {
    id: "M-026-A",
    eje: "Metodología",
    sourceId: 26,
    kind: "cloze",
    prompt: "El diagnostico deja de ser tal cuando se reduce a simple _____.",
    answer: "descripcion.",
    note: "Alerta de examen: enfatizar su caracter analitico e interpretativo."
  },
  {
    id: "M-027-D",
    eje: "Metodología",
    sourceId: 27,
    kind: "direct",
    prompt: "Secuencia que va de exploracion inicial a recoleccion intensiva, analisis, triangulacion y comunicacion de resultados.",
    answer: "Fases del diagnostico social.",
    note: "Cada etapa condiciona a las demas."
  },
  {
    id: "M-027-I",
    eje: "Metodología",
    sourceId: 27,
    kind: "inverse",
    prompt: "Exploracion preliminar, recoleccion de datos, interpretacion, triangulacion y devolucion como estructura secuencial.",
    answer: "Fases del diagnostico social.",
    note: "No son compartimentos estancos."
  },
  {
    id: "M-027-A",
    eje: "Metodología",
    sourceId: 27,
    kind: "cloze",
    prompt: "Aprender esta secuencia exige reconocer no solo cada etapa, sino tambien sus _____.",
    answer: "interdependencias.",
    note: "Alerta de examen: describir la logica entre fases y no solo enlistarlas."
  },
  {
    id: "M-028-D",
    eje: "Metodología",
    sourceId: 28,
    kind: "direct",
    prompt: "Herramientas para obtener datos de forma sistematica, seleccionadas segun problema, contexto y finalidad analitica.",
    answer: "Tecnicas de recoleccion de informacion.",
    note: "Entrevistas, observacion, grupos focales, encuestas y documentos son algunas de ellas."
  },
  {
    id: "M-028-I",
    eje: "Metodología",
    sourceId: 28,
    kind: "inverse",
    prompt: "Instrumentos concretos que permiten levantar datos y cuya pertinencia depende del problema y del contexto.",
    answer: "Tecnicas de recoleccion de informacion.",
    note: "Se eligen estrategicamente, no por costumbre."
  },
  {
    id: "M-028-A",
    eje: "Metodología",
    sourceId: 28,
    kind: "cloze",
    prompt: "La eleccion correcta aqui depende de la pertinencia contextual y de la _____ metodologica.",
    answer: "justificacion.",
    note: "Alerta de examen: seleccionar tecnicas con argumentos, no por preferencia personal."
  },
  {
    id: "M-029-D",
    eje: "Metodología",
    sourceId: 29,
    kind: "direct",
    prompt: "Conjunto de criterios que garantiza que el diagnostico mida lo que pretende y lo haga con consistencia.",
    answer: "Validez y confiabilidad en diagnostico.",
    note: "Se fortalecen con triangulacion, validacion con participantes y credibilidad analitica."
  },
  {
    id: "M-029-I",
    eje: "Metodología",
    sourceId: 29,
    kind: "inverse",
    prompt: "Calidad de una estrategia diagnostica cuando sus hallazgos son pertinentes y consistentes.",
    answer: "Validez y confiabilidad en diagnostico.",
    note: "La primera apunta a pertinencia; la segunda, a estabilidad."
  },
  {
    id: "M-029-A",
    eje: "Metodología",
    sourceId: 29,
    kind: "cloze",
    prompt: "Medir consistentemente algo equivocado mejora la confiabilidad, pero no la _____.",
    answer: "validez.",
    note: "Alerta de examen: diferenciar ambos criterios sin confundirlos."
  },
  {
    id: "M-030-D",
    eje: "Metodología",
    sourceId: 30,
    kind: "direct",
    prompt: "Operacion analitica que descompone problemas complejos en dimensiones, causas, actores y recursos sin culpabilizar a las victimas.",
    answer: "Analisis de problemas sociales.",
    note: "Exige una mirada holistica y estructural."
  },
  {
    id: "M-030-I",
    eje: "Metodología",
    sourceId: 30,
    kind: "inverse",
    prompt: "Proceso que reconstruye causas, mapea actores, identifica recursos y evita explicaciones superficiales sobre una problematica.",
    answer: "Analisis de problemas sociales.",
    note: "Se opone al reduccionismo causal y al individualismo patologizante."
  },
  {
    id: "M-030-A",
    eje: "Metodología",
    sourceId: 30,
    kind: "cloze",
    prompt: "El sesgo que debe evitarse aqui consiste en trasladar la causa principal al individuo y no a la trama _____.",
    answer: "estructural.",
    note: "Alerta de examen: aplicar pensamiento critico frente a explicaciones simplistas."
  },
  {
    id: "M-031-D",
    eje: "Metodología",
    sourceId: 31,
    kind: "direct",
    prompt: "Proceso de producir, organizar y transferir saber profesional a partir de documentacion y sistematizacion de experiencias.",
    answer: "Gestion del conocimiento en practica social.",
    note: "Convierte experiencia dispersa en aprendizaje transferible."
  },
  {
    id: "M-031-I",
    eje: "Metodología",
    sourceId: 31,
    kind: "inverse",
    prompt: "Documentacion, sistematizacion, generacion de aprendizajes y difusion de resultados como base de saber profesional acumulable.",
    answer: "Gestion del conocimiento en practica social.",
    note: "Favorece formacion y mejora continua."
  },
  {
    id: "M-031-A",
    eje: "Metodología",
    sourceId: 31,
    kind: "cloze",
    prompt: "Sin sistematizacion, la experiencia queda como vivencia util pero no como _____ transferible.",
    answer: "conocimiento.",
    note: "Alerta de examen: valorar la sistematizacion como parte del trabajo metodologico."
  },
  {
    id: "M-032-D",
    eje: "Metodología",
    sourceId: 32,
    kind: "direct",
    prompt: "Construccion ordenada de acciones, objetivos, recursos y tiempos con base en diagnostico y apertura a ajustes.",
    answer: "Planificacion de intervenciones sociales.",
    note: "Articula diagnostico, accion y evaluacion."
  },
  {
    id: "M-032-I",
    eje: "Metodología",
    sourceId: 32,
    kind: "inverse",
    prompt: "Proceso que organiza objetivos, estrategias, actividades y cronograma sin perder flexibilidad ni participacion.",
    answer: "Planificacion de intervenciones sociales.",
    note: "Un buen plan no es rigido."
  },
  {
    id: "M-032-A",
    eje: "Metodología",
    sourceId: 32,
    kind: "cloze",
    prompt: "La virtud de un plan no es su rigidez, sino su coherencia y su _____ frente al contexto emergente.",
    answer: "flexibilidad.",
    note: "Alerta de examen: distinguir planificacion rigurosa de planificacion inflexible."
  },
  {
    id: "M-033-D",
    eje: "Metodología",
    sourceId: 33,
    kind: "direct",
    prompt: "Conjunto de enfoques para construir planes segun el problema, el nivel de participacion y el tipo de decision requerido.",
    answer: "Metodos de planificacion en Trabajo Social.",
    note: "Incluyen planificacion participativa, estrategica, situacional y desde capacidades locales."
  },
  {
    id: "M-033-I",
    eje: "Metodología",
    sourceId: 33,
    kind: "inverse",
    prompt: "Diferentes enfoques que varian en dimensiones priorizadas, niveles de participacion y modo de decidir una intervencion.",
    answer: "Metodos de planificacion en Trabajo Social.",
    note: "La seleccion depende de la pertinencia contextual."
  },
  {
    id: "M-033-A",
    eje: "Metodología",
    sourceId: 33,
    kind: "cloze",
    prompt: "No existe un metodo universal de planificacion; la clave es la _____ contextual.",
    answer: "pertinencia.",
    note: "Alerta de examen: caracterizar y comparar metodos, no memorizar uno solo."
  },
  {
    id: "M-034-D",
    eje: "Metodología",
    sourceId: 34,
    kind: "direct",
    prompt: "Operacion de formular metas especificas, medibles, alcanzables, relevantes y delimitadas en el tiempo.",
    answer: "Establecimiento de objetivos en intervencion.",
    note: "Distingue objetivos de proceso, producto e impacto."
  },
  {
    id: "M-034-I",
    eje: "Metodología",
    sourceId: 34,
    kind: "inverse",
    prompt: "Definicion rigurosa de metas que orientan el proceso, los resultados inmediatos y los cambios duraderos de una intervencion.",
    answer: "Establecimiento de objetivos en intervencion.",
    note: "Su coherencia debe derivarse del diagnostico."
  },
  {
    id: "M-034-A",
    eje: "Metodología",
    sourceId: 34,
    kind: "cloze",
    prompt: "Un objetivo bien formulado no solo debe ser claro; tambien debe ser temporalmente _____.",
    answer: "delimitado.",
    note: "Alerta de examen: formular objetivos con criterio metodologico riguroso."
  },
  {
    id: "M-035-D",
    eje: "Metodología",
    sourceId: 35,
    kind: "direct",
    prompt: "Administracion estrategica de recursos humanos, economicos y materiales para maximizar efectividad en una intervencion.",
    answer: "Gestion de recursos en intervencion social.",
    note: "Implica inventariar, asignar, optimizar y rendir cuentas."
  },
  {
    id: "M-035-I",
    eje: "Metodología",
    sourceId: 35,
    kind: "inverse",
    prompt: "Proceso que moviliza disponibilidades, optimiza usos y combina creatividad con rendicion de cuentas.",
    answer: "Gestion de recursos en intervencion social.",
    note: "Tambien incluye activacion de potencialidades locales y acceso a fondos externos."
  },
  {
    id: "M-035-A",
    eje: "Metodología",
    sourceId: 35,
    kind: "cloze",
    prompt: "Manejar recursos con calidad no significa gastar mas, sino asignar de forma _____.",
    answer: "estrategica.",
    note: "Alerta de examen: evaluar eficiencia y efectividad sin reducir todo a costos."
  },
  {
    id: "M-036-D",
    eje: "Metodología",
    sourceId: 36,
    kind: "direct",
    prompt: "Parametros que permiten monitorear actividades y medir cambios producidos por una intervencion.",
    answer: "Indicadores de proceso y resultado.",
    note: "Deben ser relevantes, verificables y utiles."
  },
  {
    id: "M-036-I",
    eje: "Metodología",
    sourceId: 36,
    kind: "inverse",
    prompt: "Medidas construidas para seguir el desarrollo de acciones y apreciar transformaciones en poblaciones o contextos.",
    answer: "Indicadores de proceso y resultado.",
    note: "Los primeros observan trayecto; los segundos, efectos inmediatos."
  },
  {
    id: "M-036-A",
    eje: "Metodología",
    sourceId: 36,
    kind: "cloze",
    prompt: "Confundir actividades con cambios reales lleva a mezclar indicadores de proceso con indicadores de _____.",
    answer: "resultado.",
    note: "Alerta de examen: formular indicadores rigurosos y no superficiales."
  },
  {
    id: "M-037-D",
    eje: "Metodología",
    sourceId: 37,
    kind: "direct",
    prompt: "Proceso critico-reflexivo que determina eficacia, eficiencia e impacto mediante distintas preguntas y momentos de valoracion.",
    answer: "Evaluacion de intervenciones sociales.",
    note: "Puede ser diagnostica, de proceso, de resultado o de impacto."
  },
  {
    id: "M-037-I",
    eje: "Metodología",
    sourceId: 37,
    kind: "inverse",
    prompt: "Valoracion sistematica de una accion social para saber como se desarrolla, que logra y que cambios deja.",
    answer: "Evaluacion de intervenciones sociales.",
    note: "No es una simple medicion final."
  },
  {
    id: "M-037-A",
    eje: "Metodología",
    sourceId: 37,
    kind: "cloze",
    prompt: "Reducir la evaluacion al cierre del proyecto elimina su dimension de _____ y ajuste.",
    answer: "monitoreo.",
    note: "Alerta de examen: diferenciar tipos y funciones de la evaluacion."
  },
  {
    id: "M-038-D",
    eje: "Metodología",
    sourceId: 38,
    kind: "direct",
    prompt: "Metodologia que ordena reflexivamente experiencias para convertirlas en conocimiento explicito y comunicable.",
    answer: "Sistematizacion de experiencias.",
    note: "Implica ordenamiento, interpretacion y extrapolacion."
  },
  {
    id: "M-038-I",
    eje: "Metodología",
    sourceId: 38,
    kind: "inverse",
    prompt: "Proceso que transforma una practica vivida en saber explicitado, analizado y compartible.",
    answer: "Sistematizacion de experiencias.",
    note: "Produce aprendizaje colectivo y mejora continua."
  },
  {
    id: "M-038-A",
    eje: "Metodología",
    sourceId: 38,
    kind: "cloze",
    prompt: "La diferencia decisiva aqui no es entre hacer y escribir, sino entre vivir una experiencia y _____.",
    answer: "sistematizarla.",
    note: "Alerta de examen: distinguir experiencia de sistematizacion."
  },
  {
    id: "M-039-D",
    eje: "Metodología",
    sourceId: 39,
    kind: "direct",
    prompt: "Perspectiva que funda la intervencion en dignidad humana, titularidad de derechos y obligaciones estatales.",
    answer: "Enfoque de derechos en metodologia.",
    note: "Reemplaza la tutela asistencialista por reconocimiento y exigibilidad."
  },
  {
    id: "M-039-I",
    eje: "Metodología",
    sourceId: 39,
    kind: "inverse",
    prompt: "Marco de intervencion que trata a las personas como titulares de derechos y no como receptoras pasivas de ayuda.",
    answer: "Enfoque de derechos en metodologia.",
    note: "Transforma la relacion profesional-usuario."
  },
  {
    id: "M-039-A",
    eje: "Metodología",
    sourceId: 39,
    kind: "cloze",
    prompt: "El cambio central aqui consiste en pasar del asistencialismo a la _____.",
    answer: "titularidad de derechos.",
    note: "Alerta de examen: aplicar el enfoque de derechos de forma consistente."
  },
  {
    id: "M-040-D",
    eje: "Metodología",
    sourceId: 40,
    kind: "direct",
    prompt: "Metodologia centrada en acompanamiento personalizado de situaciones particulares sin perder de vista determinantes sociales.",
    answer: "Trabajo Social de casos individual.",
    note: "Combina relacion de ayuda, diagnostico contextual y seguimiento."
  },
  {
    id: "M-040-I",
    eje: "Metodología",
    sourceId: 40,
    kind: "inverse",
    prompt: "Intervencion profesional focalizada en una persona y su situacion especifica, articulada con su contexto.",
    answer: "Trabajo Social de casos individual.",
    note: "No debe confundirse con patologizacion individual."
  },
  {
    id: "M-040-A",
    eje: "Metodología",
    sourceId: 40,
    kind: "cloze",
    prompt: "La condicion metodologica clave aqui es no perder la lectura _____ del caso.",
    answer: "contextual.",
    note: "Alerta de examen: evitar reducir el problema a rasgos personales."
  },
  {
    id: "M-041-D",
    eje: "Metodología",
    sourceId: 41,
    kind: "direct",
    prompt: "Vinculo profesional basado en respeto, confidencialidad, autenticidad y orientacion hacia la autonomia del usuario.",
    answer: "Relacion de ayuda profesional.",
    note: "No es amistad ni horizontalidad despreocupada."
  },
  {
    id: "M-041-I",
    eje: "Metodología",
    sourceId: 41,
    kind: "inverse",
    prompt: "Interaccion profesional con limites claros, roles definidos y finalidad de empoderamiento.",
    answer: "Relacion de ayuda profesional.",
    note: "Exige manejo de limites y de transferencias."
  },
  {
    id: "M-041-A",
    eje: "Metodología",
    sourceId: 41,
    kind: "cloze",
    prompt: "Confundir este vinculo con amistad elimina su caracter _____.",
    answer: "profesional.",
    note: "Alerta de examen: distinguirla de otras relaciones interpersonales."
  },
  {
    id: "M-042-D",
    eje: "Metodología",
    sourceId: 42,
    kind: "direct",
    prompt: "Metodologia que utiliza la interaccion colectiva y el apoyo mutuo para procesos educativos, organizativos y transformadores.",
    answer: "Trabajo Social grupal.",
    note: "El grupo tiene potencia propia; no es suma de individuos."
  },
  {
    id: "M-042-I",
    eje: "Metodología",
    sourceId: 42,
    kind: "inverse",
    prompt: "Uso del grupo como espacio de aprendizaje, identificacion colectiva y movilizacion sobre problemas comunes.",
    answer: "Trabajo Social grupal.",
    note: "Permite procesos que exceden la intervencion individual."
  },
  {
    id: "M-042-A",
    eje: "Metodología",
    sourceId: 42,
    kind: "cloze",
    prompt: "Reducir el grupo a personas aisladas impide comprender su dinamica _____.",
    answer: "colectiva.",
    note: "Alerta de examen: reconocer el potencial especifico del trabajo grupal."
  },
  {
    id: "M-043-D",
    eje: "Metodología",
    sourceId: 43,
    kind: "direct",
    prompt: "Tecnicas que aprovechan la interaccion grupal para generar confianza, aprendizaje y reflexion compartida.",
    answer: "Dinamicas de grupo como herramienta metodologica.",
    note: "Incluyen juegos, dramatizaciones, colaboracion y analisis colectivo."
  },
  {
    id: "M-043-I",
    eje: "Metodología",
    sourceId: 43,
    kind: "inverse",
    prompt: "Uso intencional de actividades grupales para profundizar aprendizajes y fortalecer vinculos.",
    answer: "Dinamicas de grupo como herramienta metodologica.",
    note: "La tecnica siempre debe estar subordinada al objetivo."
  },
  {
    id: "M-043-A",
    eje: "Metodología",
    sourceId: 43,
    kind: "cloze",
    prompt: "Una dinamica vale metodologicamente cuando tiene _____, no solo entretenimiento.",
    answer: "intencionalidad.",
    note: "Alerta de examen: evaluar logros educativos y no solo animacion."
  },
  {
    id: "M-044-D",
    eje: "Metodología",
    sourceId: 44,
    kind: "direct",
    prompt: "Intervencion a nivel colectivo que promueve organizacion, participacion y movilizacion de recursos para transformar contextos.",
    answer: "Trabajo Social comunitario.",
    note: "La comunidad es sujeto colectivo, no receptora pasiva."
  },
  {
    id: "M-044-I",
    eje: "Metodología",
    sourceId: 44,
    kind: "inverse",
    prompt: "Metodo que fortalece organizacion y protagonismo de la comunidad para transformar su propio entorno.",
    answer: "Trabajo Social comunitario.",
    note: "Se opone al asistencialismo."
  },
  {
    id: "M-044-A",
    eje: "Metodología",
    sourceId: 44,
    kind: "cloze",
    prompt: "El principio central aqui es reemplazar la pasividad comunitaria por _____.",
    answer: "protagonismo.",
    note: "Alerta de examen: promover participacion y organizacion genuinas."
  },
  {
    id: "M-045-D",
    eje: "Metodología",
    sourceId: 45,
    kind: "direct",
    prompt: "Enfoque pedagogico dialogico que convierte educacion en conciencia critica y accion transformadora.",
    answer: "Educacion popular como metodologia.",
    note: "Rechaza la transmision vertical de saberes."
  },
  {
    id: "M-045-I",
    eje: "Metodología",
    sourceId: 45,
    kind: "inverse",
    prompt: "Metodo que problematiza la realidad, reconoce saberes previos y construye aprendizaje en dialogo.",
    answer: "Educacion popular como metodologia.",
    note: "Los participantes son sujetos activos de transformacion."
  },
  {
    id: "M-045-A",
    eje: "Metodología",
    sourceId: 45,
    kind: "cloze",
    prompt: "Cuando el conocimiento baja verticalmente desde un experto, se niega la logica _____.",
    answer: "dialogica.",
    note: "Alerta de examen: evitar manipulacion disfrazada de participacion."
  },
  {
    id: "M-046-D",
    eje: "Metodología",
    sourceId: 46,
    kind: "direct",
    prompt: "Involucramiento con poder real de decision en procesos que afectan a las personas y comunidades.",
    answer: "Participacion social como metodologia.",
    note: "No equivale a consulta decorativa."
  },
  {
    id: "M-046-I",
    eje: "Metodología",
    sourceId: 46,
    kind: "inverse",
    prompt: "Metodo que redistribuye poder, abre informacion y permite influencia efectiva de la poblacion en la intervencion.",
    answer: "Participacion social como metodologia.",
    note: "Exige respeto genuino a saberes comunitarios."
  },
  {
    id: "M-046-A",
    eje: "Metodología",
    sourceId: 46,
    kind: "cloze",
    prompt: "Cuando se escucha pero no se cede poder, la participacion se vuelve _____.",
    answer: "superficial.",
    note: "Alerta de examen: criticar el participacionismo vacio."
  },
  {
    id: "M-047-D",
    eje: "Metodología",
    sourceId: 47,
    kind: "direct",
    prompt: "Proceso por el cual personas y comunidades amplian control sobre su vida, acceso a recursos y capacidad de decision.",
    answer: "Empoderamiento como proceso metodologico.",
    note: "No se entrega desde arriba; se construye."
  },
  {
    id: "M-047-I",
    eje: "Metodología",
    sourceId: 47,
    kind: "inverse",
    prompt: "Construccion reflexiva, organizacional y politica de mayor autonomia, poder y protagonismo.",
    answer: "Empoderamiento como proceso metodologico.",
    note: "Debe producir cambios reales en capacidad de decidir."
  },
  {
    id: "M-047-A",
    eje: "Metodología",
    sourceId: 47,
    kind: "cloze",
    prompt: "Si no cambia la capacidad real de decidir, el llamado empoderamiento queda en pura _____.",
    answer: "retorica.",
    note: "Alerta de examen: evaluar si hubo cambios efectivos en poder y autonomia."
  },
  {
    id: "M-048-D",
    eje: "Metodología",
    sourceId: 48,
    kind: "direct",
    prompt: "Coordinacion sostenida entre instituciones y sectores para abordar problemas de forma integral y no fragmentada.",
    answer: "Trabajo en red e intersectoralidad.",
    note: "Requiere aliados, roles claros y comunicacion constante."
  },
  {
    id: "M-048-I",
    eje: "Metodología",
    sourceId: 48,
    kind: "inverse",
    prompt: "Articulacion entre salud, educacion, vivienda, empleo y otros campos sin perder autonomia institucional.",
    answer: "Trabajo en red e intersectoralidad.",
    note: "Su objetivo es el abordaje integral."
  },
  {
    id: "M-048-A",
    eje: "Metodología",
    sourceId: 48,
    kind: "cloze",
    prompt: "El problema que esta metodologia busca evitar es la _____ de las respuestas sociales.",
    answer: "fragmentacion.",
    note: "Alerta de examen: evaluar la calidad real de la coordinacion."
  },
  {
    id: "M-049-D",
    eje: "Metodología",
    sourceId: 49,
    kind: "direct",
    prompt: "Intervencion de tercera parte que facilita comunicacion y construccion de acuerdos entre actores enfrentados.",
    answer: "Mediacion y resolucion de conflictos.",
    note: "Busca soluciones mutuamente satisfactorias, no imponerse."
  },
  {
    id: "M-049-I",
    eje: "Metodología",
    sourceId: 49,
    kind: "inverse",
    prompt: "Metodo para canalizar conflictos con neutralidad vigilante, empatia hacia ambas partes y creatividad en opciones.",
    answer: "Mediacion y resolucion de conflictos.",
    note: "Difiere de la imposicion autoritaria de una salida."
  },
  {
    id: "M-049-A",
    eje: "Metodología",
    sourceId: 49,
    kind: "cloze",
    prompt: "Cuando el tercero decide por las partes, deja de mediar y empieza a _____.",
    answer: "imponer.",
    note: "Alerta de examen: distinguir mediacion de imposicion de soluciones."
  },
  {
    id: "M-050-D",
    eje: "Metodología",
    sourceId: 50,
    kind: "direct",
    prompt: "Marco que entiende la fragilidad y la exposicion al dano como resultados de exclusion, dinamicas economicas y falta de proteccion social.",
    answer: "Vulnerabilidad y riesgo social.",
    note: "No son meros atributos individuales."
  },
  {
    id: "M-050-I",
    eje: "Metodología",
    sourceId: 50,
    kind: "inverse",
    prompt: "Conceptualizacion que une probabilidad de dano con debilidad de capacidades para afrontarlo en contextos estructuralmente desiguales.",
    answer: "Vulnerabilidad y riesgo social.",
    note: "Relaciona exposicion con protecciones disponibles."
  },
  {
    id: "M-050-A",
    eje: "Metodología",
    sourceId: 50,
    kind: "cloze",
    prompt: "El error que debe evitarse es explicar la vulnerabilidad como falla _____ del sujeto.",
    answer: "individual.",
    note: "Alerta de examen: conectar vulnerabilidad con determinantes macrosociales."
  },
  {
    id: "M-051-D",
    eje: "Metodología",
    sourceId: 51,
    kind: "direct",
    prompt: "Intervencion breve y rapida orientada a contencion, estabilizacion inmediata y activacion de recursos ante una ruptura aguda.",
    answer: "Abordaje de situaciones de crisis.",
    note: "No resuelve todo el problema de fondo; abre paso a recuperacion posterior."
  },
  {
    id: "M-051-I",
    eje: "Metodología",
    sourceId: 51,
    kind: "inverse",
    prompt: "Respuesta metodologica que alivia sufrimiento agudo, restaura funcionalidad basica y prepara una recuperacion posterior.",
    answer: "Abordaje de situaciones de crisis.",
    note: "Su temporalidad es inmediata."
  },
  {
    id: "M-051-A",
    eje: "Metodología",
    sourceId: 51,
    kind: "cloze",
    prompt: "La diferencia con una terapia de fondo esta en que aqui prima la _____ inmediata.",
    answer: "estabilizacion.",
    note: "Alerta de examen: diferenciar intervencion en crisis de otros procesos largos."
  },
  {
    id: "M-052-D",
    eje: "Metodología",
    sourceId: 52,
    kind: "direct",
    prompt: "Intervencion psicosocial que reconoce dano, cuida la seguridad emocional y evita reactivar violentamente la herida.",
    answer: "Abordaje de trauma social.",
    note: "Integra recuperacion, recursos comunitarios y busqueda de justicia."
  },
  {
    id: "M-052-I",
    eje: "Metodología",
    sourceId: 52,
    kind: "inverse",
    prompt: "Metodo que combina reconocimiento del dano, prevencion de retraumatizacion y movilizacion de apoyo social ante violencia.",
    answer: "Abordaje de trauma social.",
    note: "La justicia puede ser parte del proceso reparador."
  },
  {
    id: "M-052-A",
    eje: "Metodología",
    sourceId: 52,
    kind: "cloze",
    prompt: "Una practica correcta aqui debe evitar, por encima de todo, la _____.",
    answer: "retraumatizacion.",
    note: "Alerta de examen: integrar dimension psicosocial y de justicia."
  },
  {
    id: "M-053-D",
    eje: "Metodología",
    sourceId: 53,
    kind: "direct",
    prompt: "Enfoque investigativo donde las comunidades participan como coinvestigadoras y el conocimiento se vincula con transformacion.",
    answer: "Metodologia participativa en investigacion social.",
    note: "Rompe la figura del investigador neutral y aislado."
  },
  {
    id: "M-053-I",
    eje: "Metodología",
    sourceId: 53,
    kind: "inverse",
    prompt: "Produccion colectiva de conocimiento que reconoce saberes comunitarios y convierte investigar en accion transformadora.",
    answer: "Metodologia participativa en investigacion social.",
    note: "Busca rigor y emancipacion a la vez."
  },
  {
    id: "M-053-A",
    eje: "Metodología",
    sourceId: 53,
    kind: "cloze",
    prompt: "La tension clave en este enfoque no es participacion versus rigor, sino como sostener _____.",
    answer: "ambos.",
    note: "Alerta de examen: evaluar el balance entre transformacion y calidad investigativa."
  },
  {
    id: "M-054-D",
    eje: "Metodología",
    sourceId: 54,
    kind: "direct",
    prompt: "Uso de fotografia, mapeo, cine y otras expresiones visuales para comprender y transformar realidades sociales.",
    answer: "Metodos visuales en intervencion social.",
    note: "Amplian la expresion mas alla del lenguaje escrito."
  },
  {
    id: "M-054-I",
    eje: "Metodología",
    sourceId: 54,
    kind: "inverse",
    prompt: "Herramientas que capturan complejidad y facilitan conciencia mediante lenguajes visuales y sensorio-emotivos.",
    answer: "Metodos visuales en intervencion social.",
    note: "Son utiles cuando la palabra no basta."
  },
  {
    id: "M-054-A",
    eje: "Metodología",
    sourceId: 54,
    kind: "cloze",
    prompt: "La fortaleza distintiva aqui consiste en valorar formas de expresion _____.",
    answer: "no verbales.",
    note: "Alerta de examen: integrar metodologias creativas con fundamento."
  },
  {
    id: "M-055-D",
    eje: "Metodología",
    sourceId: 55,
    kind: "direct",
    prompt: "Conjunto de principios que orienta toda intervencion hacia respeto, consentimiento, justicia y responsabilidad profesional.",
    answer: "Etica en practica metodologica.",
    note: "Exige deliberacion constante frente a dilemas complejos."
  },
  {
    id: "M-055-I",
    eje: "Metodología",
    sourceId: 55,
    kind: "inverse",
    prompt: "Marco que combina confidencialidad, autonomia, transparencia y justicia distributiva en la accion profesional.",
    answer: "Etica en practica metodologica.",
    note: "No ofrece respuestas automaticas; pide juicio responsable."
  },
  {
    id: "M-055-A",
    eje: "Metodología",
    sourceId: 55,
    kind: "cloze",
    prompt: "La etica profesional no elimina dilemas; exige _____ sobre ellos.",
    answer: "deliberacion.",
    note: "Alerta de examen: argumentar posiciones ante conflictos etico-metodologicos."
  },
  {
    id: "M-056-D",
    eje: "Metodología",
    sourceId: 56,
    kind: "direct",
    prompt: "Proceso reflexivo de extraer teoria practica a partir de lo vivido, preguntando que ocurrio y por que.",
    answer: "Sistematizacion de aprendizajes.",
    note: "Sirve para autoformacion y mejora de practicas."
  },
  {
    id: "M-056-I",
    eje: "Metodología",
    sourceId: 56,
    kind: "inverse",
    prompt: "Conversion de experiencias en saber comunicable util para corregir, formar y enriquecer el acervo disciplinario.",
    answer: "Sistematizacion de aprendizajes.",
    note: "Es teoria desde la practica."
  },
  {
    id: "M-056-A",
    eje: "Metodología",
    sourceId: 56,
    kind: "cloze",
    prompt: "El objetivo no es acumular recuerdos de intervencion, sino convertirlos en _____ explicito.",
    answer: "aprendizaje.",
    note: "Alerta de examen: valorar la sistematizacion como autoformacion continua."
  },
  {
    id: "M-057-D",
    eje: "Metodología",
    sourceId: 57,
    kind: "direct",
    prompt: "Seguimiento permanente que recoge informacion, compara con la linea base y permite corregir el curso de una accion.",
    answer: "Monitoreo continuado de intervenciones.",
    note: "Su valor esta en la deteccion temprana y el ajuste oportuno."
  },
  {
    id: "M-057-I",
    eje: "Metodología",
    sourceId: 57,
    kind: "inverse",
    prompt: "Sistema de seguimiento con analisis frecuente y retroalimentacion para mejorar iterativamente una intervencion.",
    answer: "Monitoreo continuado de intervenciones.",
    note: "Debe ser funcional y no burocratico."
  },
  {
    id: "M-057-A",
    eje: "Metodología",
    sourceId: 57,
    kind: "cloze",
    prompt: "Cuando el seguimiento solo produce papeles y no decisiones, el monitoreo cae en _____.",
    answer: "burocracia esteril.",
    note: "Alerta de examen: disenar sistemas que realmente orienten ajustes."
  },
  {
    id: "M-058-D",
    eje: "Metodología",
    sourceId: 58,
    kind: "direct",
    prompt: "Proceso de consolidar practicas eficaces dentro de estructuras estables, presupuestos y politicas duraderas.",
    answer: "Institucionalizacion de practicas exitosas.",
    note: "Busca sostenibilidad mas alla de iniciativas personales."
  },
  {
    id: "M-058-I",
    eje: "Metodología",
    sourceId: 58,
    kind: "inverse",
    prompt: "Documentacion, capacitacion, adecuacion institucional y financiamiento para sostener intervenciones que funcionaron.",
    answer: "Institucionalizacion de practicas exitosas.",
    note: "Permite ampliar beneficios a mayor escala."
  },
  {
    id: "M-058-A",
    eje: "Metodología",
    sourceId: 58,
    kind: "cloze",
    prompt: "El riesgo permanente al consolidar una practica es su _____.",
    answer: "burocratizacion.",
    note: "Alerta de examen: evaluar factibilidad de institucionalizacion sin perder sentido."
  },
  {
    id: "M-059-D",
    eje: "Metodología",
    sourceId: 59,
    kind: "direct",
    prompt: "Proceso colectivo de adaptar, comunicar y hacer util conocimiento nuevo dentro de contextos concretos de intervencion.",
    answer: "Transferencia de conocimiento en Trabajo Social.",
    note: "No es transmision vertical ni receta descontextualizada."
  },
  {
    id: "M-059-I",
    eje: "Metodología",
    sourceId: 59,
    kind: "inverse",
    prompt: "Circulacion de saber profesional mediante capacitacion, documentacion y redes de aprendizaje con adaptacion local.",
    answer: "Transferencia de conocimiento en Trabajo Social.",
    note: "El conocimiento cambia cuando circula."
  },
  {
    id: "M-059-A",
    eje: "Metodología",
    sourceId: 59,
    kind: "cloze",
    prompt: "El principal error aqui es convertir el conocimiento en una _____ sin contexto.",
    answer: "receta.",
    note: "Alerta de examen: promover adaptacion creativa y no copia automatica."
  },
  {
    id: "M-060-D",
    eje: "Metodología",
    sourceId: 60,
    kind: "direct",
    prompt: "Valoracion de una intervencion construida con los beneficiarios como actores centrales del criterio, los datos y las decisiones.",
    answer: "Evaluacion participativa.",
    note: "Desplaza la figura del experto solitario."
  },
  {
    id: "M-060-I",
    eje: "Metodología",
    sourceId: 60,
    kind: "inverse",
    prompt: "Proceso evaluativo donde quienes viven la intervencion participan en definir criterios, analizar hallazgos y reorientar acciones.",
    answer: "Evaluacion participativa.",
    note: "Aporta perspectivas que ningun observador externo posee por si solo."
  },
  {
    id: "M-060-A",
    eje: "Metodología",
    sourceId: 60,
    kind: "cloze",
    prompt: "Si la poblacion solo aparece para validar una decision ya tomada, la participacion es _____.",
    answer: "tokenista.",
    note: "Alerta de examen: evaluar la autenticidad de la participacion."
  },
  {
    id: "M-061-D",
    eje: "Metodología",
    sourceId: 61,
    kind: "direct",
    prompt: "Enfoque que estudia experiencias vividas, sentidos y estructuras de la experiencia desde la perspectiva del sujeto.",
    answer: "Metodos fenomenologicos en Trabajo Social.",
    note: "Capturan dimensiones existenciales, simbolicas y emocionales."
  },
  {
    id: "M-061-I",
    eje: "Metodología",
    sourceId: 61,
    kind: "inverse",
    prompt: "Metodo que privilegia el primer orden de la vivencia y busca comprender como se experimenta un fenomeno.",
    answer: "Metodos fenomenologicos en Trabajo Social.",
    note: "No reemplaza el contexto; lo articula con la experiencia."
  },
  {
    id: "M-061-A",
    eje: "Metodología",
    sourceId: 61,
    kind: "cloze",
    prompt: "Su error opuesto seria convertir la experiencia en un dato puramente _____.",
    answer: "externo.",
    note: "Alerta de examen: comprender la fenomenologia con rigor y no como impresionismo."
  },
  {
    id: "M-062-D",
    eje: "Metodología",
    sourceId: 62,
    kind: "direct",
    prompt: "Procedimientos para estudiar documentos, discursos y narrativas identificando patrones, significados y relaciones de poder.",
    answer: "Metodos de analisis textual.",
    note: "Incluyen analisis tematico, narrativo, del discurso y hermeneutico."
  },
  {
    id: "M-062-I",
    eje: "Metodología",
    sourceId: 62,
    kind: "inverse",
    prompt: "Estrategias que leen textos y relatos para decodificar sentidos implicitos y reconstruir realidades desde el lenguaje.",
    answer: "Metodos de analisis textual.",
    note: "Requieren rigor interpretativo."
  },
  {
    id: "M-062-A",
    eje: "Metodología",
    sourceId: 62,
    kind: "cloze",
    prompt: "El riesgo de este enfoque es quedarse en una lectura _____ sin trabajo analitico.",
    answer: "superficial.",
    note: "Alerta de examen: sostener profundidad metodologica en la interpretacion textual."
  },
  {
    id: "M-063-D",
    eje: "Metodología",
    sourceId: 63,
    kind: "direct",
    prompt: "Aproximacion que reconstruye trayectorias vitales para leer en ellas procesos historicos y estructuras sociales.",
    answer: "Metodos de historias de vida.",
    note: "Conectan singularidad biografica con condicion social."
  },
  {
    id: "M-063-I",
    eje: "Metodología",
    sourceId: 63,
    kind: "inverse",
    prompt: "Uso de narrativas longitudinales y memoria reflexiva para entender como lo personal expresa lo historico y lo politico.",
    answer: "Metodos de historias de vida.",
    note: "No deben caer en psicologismo."
  },
  {
    id: "M-063-A",
    eje: "Metodología",
    sourceId: 63,
    kind: "cloze",
    prompt: "La consigna analitica clave aqui es unir lo singular con lo _____.",
    answer: "estructural.",
    note: "Alerta de examen: evitar leer una biografia como hecho aislado."
  },
  {
    id: "M-064-D",
    eje: "Metodología",
    sourceId: 64,
    kind: "direct",
    prompt: "Perspectiva que entiende situaciones como resultado de interacciones reciprocas entre personas y multiples contextos.",
    answer: "Enfoque ecosistemico en intervencion.",
    note: "Rechaza la separacion individuo-ambiente."
  },
  {
    id: "M-064-I",
    eje: "Metodología",
    sourceId: 64,
    kind: "inverse",
    prompt: "Lectura multinivel de influencias reciprocas entre sujeto, familia, comunidad, instituciones y estructura.",
    answer: "Enfoque ecosistemico en intervencion.",
    note: "Busca integracion y efectividad."
  },
  {
    id: "M-064-A",
    eje: "Metodología",
    sourceId: 64,
    kind: "cloze",
    prompt: "La clave teorica aqui es romper la dicotomia entre individuo y _____.",
    answer: "ambiente.",
    note: "Alerta de examen: evaluar siempre multiples niveles de influencia."
  },
  {
    id: "M-065-D",
    eje: "Metodología",
    sourceId: 65,
    kind: "direct",
    prompt: "Practica reflexiva mediante la cual el profesional revisa fortalezas, limites y errores para mejorar continuamente.",
    answer: "Autoevaluacion de practicas profesionales.",
    note: "Requiere honestidad, apertura y compromiso con el cambio."
  },
  {
    id: "M-065-I",
    eje: "Metodología",
    sourceId: 65,
    kind: "inverse",
    prompt: "Herramienta de desarrollo profesional basada en reflexion critica sobre la propia accion.",
    answer: "Autoevaluacion de practicas profesionales.",
    note: "Debe fortalecer, no paralizar."
  },
  {
    id: "M-065-A",
    eje: "Metodología",
    sourceId: 65,
    kind: "cloze",
    prompt: "El equilibrio correcto aqui evita tanto la complacencia como la _____.",
    answer: "autoflagelacion.",
    note: "Alerta de examen: promover reflexion critica productiva."
  },
  {
    id: "T-066-D",
    eje: "Teoría Social",
    sourceId: 66,
    kind: "direct",
    prompt: "Concepto general que organiza explicaciones sobre estructura, accion y cambio social.",
    answer: "Teoria social.",
    note: "No es mera descripcion; busca explicar y guiar."
  },
  {
    id: "T-066-I",
    eje: "Teoría Social",
    sourceId: 66,
    kind: "inverse",
    prompt: "Marco conceptual capaz de explicar fenomenos sociales, ofrecer interpretacion fundamentada y orientar la practica.",
    answer: "Teoria social.",
    note: "Teoria y practica se alimentan mutuamente."
  },
  {
    id: "T-066-A",
    eje: "Teoría Social",
    sourceId: 66,
    kind: "cloze",
    prompt: "La diferencia decisiva aqui es entre simple descripcion y _____.",
    answer: "explicacion fundamentada.",
    note: "Alerta de examen: comprender la teoria como herramienta y no como ornamento."
  },
  {
    id: "T-067-D",
    eje: "Teoría Social",
    sourceId: 67,
    kind: "direct",
    prompt: "Conjunto de aportes que incluye explicar, predecir, identificar patrones, guiar la accion y criticar injusticias.",
    answer: "Funciones de la teoria social.",
    note: "Su poder es hermeneutico y tambien transformador."
  },
  {
    id: "T-067-I",
    eje: "Teoría Social",
    sourceId: 67,
    kind: "inverse",
    prompt: "Capacidades analiticas y practicas que permiten comprender fenomenos y orientar intervenciones sobre ellos.",
    answer: "Funciones de la teoria social.",
    note: "No se limita a la abstraccion academica."
  },
  {
    id: "T-067-A",
    eje: "Teoría Social",
    sourceId: 67,
    kind: "cloze",
    prompt: "Cuando la teoria se desconecta de la accion, pierde parte de su potencia _____.",
    answer: "transformadora.",
    note: "Alerta de examen: conectar teoria con aplicabilidad concreta."
  },
  {
    id: "T-068-D",
    eje: "Teoría Social",
    sourceId: 68,
    kind: "direct",
    prompt: "Categorias generales como estructura, agencia, poder, legitimidad, cambio y desigualdad que permiten analizar lo social.",
    answer: "Conceptos fundamentales en teoria social.",
    note: "Funcionan como andamiaje comun para distintas corrientes."
  },
  {
    id: "T-068-I",
    eje: "Teoría Social",
    sourceId: 68,
    kind: "inverse",
    prompt: "Nucleo de categorias que organiza reflexiones coherentes sobre patrones, capacidades de accion, jerarquias y transformaciones.",
    answer: "Conceptos fundamentales en teoria social.",
    note: "Su valor esta tambien en sus interrelaciones."
  },
  {
    id: "T-068-A",
    eje: "Teoría Social",
    sourceId: 68,
    kind: "cloze",
    prompt: "Aprender estas categorias exige no solo definirlas, sino articular sus _____.",
    answer: "interrelaciones.",
    note: "Alerta de examen: aplicarlas en analisis concretos."
  },
  {
    id: "T-069-D",
    eje: "Teoría Social",
    sourceId: 69,
    kind: "direct",
    prompt: "Tension teorica entre perspectivas que destacan estabilidad e integracion y otras que subrayan conflicto y transformacion.",
    answer: "Equilibrio vs. cambio en teoria social.",
    note: "La vida social combina reproduccion y movimiento."
  },
  {
    id: "T-069-I",
    eje: "Teoría Social",
    sourceId: 69,
    kind: "inverse",
    prompt: "Debate sobre si las sociedades se orientan principalmente a la estabilidad o si el conflicto impulsa su transformacion.",
    answer: "Equilibrio vs. cambio en teoria social.",
    note: "Una mirada sofisticada reconoce ambos polos."
  },
  {
    id: "T-069-A",
    eje: "Teoría Social",
    sourceId: 69,
    kind: "cloze",
    prompt: "El error comun consiste en caer en un unico polo: determinismo del orden o voluntarismo del _____.",
    answer: "cambio.",
    note: "Alerta de examen: evitar reducciones a un solo principio dinamico."
  },
  {
    id: "T-070-D",
    eje: "Teoría Social",
    sourceId: 70,
    kind: "direct",
    prompt: "Problema teorico referido al grado en que las estructuras constrinen o habilitan la libertad humana.",
    answer: "Determinismo estructural y libertad de accion.",
    note: "Las posturas refinadas sostienen que ambas dimensiones coexisten."
  },
  {
    id: "T-070-I",
    eje: "Teoría Social",
    sourceId: 70,
    kind: "inverse",
    prompt: "Dilema entre ver a los sujetos como automatas estructurales o como agentes totalmente libres.",
    answer: "Determinismo estructural y libertad de accion.",
    note: "La respuesta madura piensa marcos de posibilidad."
  },
  {
    id: "T-070-A",
    eje: "Teoría Social",
    sourceId: 70,
    kind: "cloze",
    prompt: "La salida teorica mas solida aqui consiste en pensar estructuras que constrinen y tambien _____.",
    answer: "habilitan.",
    note: "Alerta de examen: evitar los dos reduccionismos opuestos."
  },
  {
    id: "T-071-D",
    eje: "Teoría Social",
    sourceId: 71,
    kind: "direct",
    prompt: "Conjunto de mecanismos por los cuales una sociedad mantiene estructuras, privilegios y desigualdades a traves del tiempo.",
    answer: "Reproduccion social.",
    note: "Opera mediante socializacion, instituciones y hegemonia cultural."
  },
  {
    id: "T-071-I",
    eje: "Teoría Social",
    sourceId: 71,
    kind: "inverse",
    prompt: "Proceso que normaliza lo existente, transmite privilegios y hace que ciertos ordenes parezcan naturales.",
    answer: "Reproduccion social.",
    note: "Comprenderla permite detectar puntos de ruptura."
  },
  {
    id: "T-071-A",
    eje: "Teoría Social",
    sourceId: 71,
    kind: "cloze",
    prompt: "La clave critica aqui es mostrar que la desigualdad no se mantiene sola: requiere trabajo de _____.",
    answer: "reproduccion.",
    note: "Alerta de examen: identificar mecanismos que perpetuan el orden social."
  },
  {
    id: "T-072-D",
    eje: "Teoría Social",
    sourceId: 72,
    kind: "direct",
    prompt: "Proceso por el cual cambian estructuras, practicas e instituciones, de forma gradual, abrupta o combinada.",
    answer: "Transformacion social.",
    note: "Exige actores colectivos, crisis y construccion de alternativas."
  },
  {
    id: "T-072-I",
    eje: "Teoría Social",
    sourceId: 72,
    kind: "inverse",
    prompt: "Cambio de ordenamientos sociales impulsado por sujetos colectivos, conflictos de legitimidad y capacidad de instituir alternativas.",
    answer: "Transformacion social.",
    note: "Puede ser incremental o abrupta."
  },
  {
    id: "T-072-A",
    eje: "Teoría Social",
    sourceId: 72,
    kind: "cloze",
    prompt: "No hay transformacion sostenida sin sujetos colectivos y crisis de _____.",
    answer: "legitimidad.",
    note: "Alerta de examen: identificar mecanismos y actores del cambio social."
  },
  {
    id: "T-073-D",
    eje: "Teoría Social",
    sourceId: 73,
    kind: "direct",
    prompt: "Conjunto de formas de orientacion de la accion que incluye calculo instrumental, valores, tradicion y afectos.",
    answer: "Racionalidad social.",
    note: "No se reduce al calculo utilitario."
  },
  {
    id: "T-073-I",
    eje: "Teoría Social",
    sourceId: 73,
    kind: "inverse",
    prompt: "Modo en que las personas deciden y actuan segun fines, valores, costumbres o emociones dentro de un contexto social.",
    answer: "Racionalidad social.",
    note: "Ampliar su concepto evita llamar irracional a lo que solo sigue otra logica."
  },
  {
    id: "T-073-A",
    eje: "Teoría Social",
    sourceId: 73,
    kind: "cloze",
    prompt: "Error clasico: reducir toda racionalidad al calculo _____.",
    answer: "instrumental.",
    note: "Alerta de examen: valorar formas multiples de orientacion de la accion."
  },
  {
    id: "T-074-D",
    eje: "Teoría Social",
    sourceId: 74,
    kind: "direct",
    prompt: "Aceptacion de un orden social o politico porque se le considera valido por tradicion, carisma, legalidad, desempeno o valores compartidos.",
    answer: "Legitimidad politica y social.",
    note: "Su quiebre suele anticipar cambios profundos."
  },
  {
    id: "T-074-I",
    eje: "Teoría Social",
    sourceId: 74,
    kind: "inverse",
    prompt: "Fundamento de aceptacion de un sistema que evita depender solo de la represion abierta.",
    answer: "Legitimidad politica y social.",
    note: "Puede basarse en fuentes diferentes."
  },
  {
    id: "T-074-A",
    eje: "Teoría Social",
    sourceId: 74,
    kind: "cloze",
    prompt: "Cuando un orden pierde aceptacion, empieza a sostenerse cada vez mas por _____.",
    answer: "represion.",
    note: "Alerta de examen: identificar crisis legitimatorias."
  },
  {
    id: "T-075-D",
    eje: "Teoría Social",
    sourceId: 75,
    kind: "direct",
    prompt: "Distincion entre imposicion sin consentimiento y obediencia aceptada porque se la considera valida.",
    answer: "Poder como dominacion y autoridad.",
    note: "La primera recurre mas al miedo; la segunda, a la legitimidad."
  },
  {
    id: "T-075-I",
    eje: "Teoría Social",
    sourceId: 75,
    kind: "inverse",
    prompt: "Diferencia entre poder impuesto coercitivamente y poder obedecido por reconocimiento de su validez.",
    answer: "Poder como dominacion y autoridad.",
    note: "Ambas formas pueden ser estables o injustas."
  },
  {
    id: "T-075-A",
    eje: "Teoría Social",
    sourceId: 75,
    kind: "cloze",
    prompt: "La autoridad se distingue de la dominacion porque incorpora _____.",
    answer: "legitimidad.",
    note: "Alerta de examen: analizar tipos de poder en contextos concretos."
  },
  {
    id: "T-076-D",
    eje: "Teoría Social",
    sourceId: 76,
    kind: "direct",
    prompt: "Problema teorico que busca explicar por que existen jerarquias persistentes y como se producen historicamente.",
    answer: "Desigualdad social: naturaleza y origenes.",
    note: "Las respuestas van de la funcionalidad a la explotacion y combinan dimensiones multiples."
  },
  {
    id: "T-076-I",
    eje: "Teoría Social",
    sourceId: 76,
    kind: "inverse",
    prompt: "Explicaciones sobre desigualdades que las leen como motivacion necesaria o como resultado de dominacion historica.",
    answer: "Desigualdad social: naturaleza y origenes.",
    note: "Ninguna desigualdad es natural por si misma."
  },
  {
    id: "T-076-A",
    eje: "Teoría Social",
    sourceId: 76,
    kind: "cloze",
    prompt: "El punto critico aqui es no _____ la desigualdad.",
    answer: "naturalizar.",
    note: "Alerta de examen: reconocer su caracter historico y construido."
  },
  {
    id: "T-077-D",
    eje: "Teoría Social",
    sourceId: 77,
    kind: "direct",
    prompt: "Estructuras jerarquicas que distribuyen posiciones, oportunidades y experiencias de vida de manera desigual.",
    answer: "Sistemas de estratificacion social.",
    note: "Pueden organizarse por clase, estatus, poder o combinaciones."
  },
  {
    id: "T-077-I",
    eje: "Teoría Social",
    sourceId: 77,
    kind: "inverse",
    prompt: "Ordenamiento social que ubica a poblaciones en lugares diferenciados segun recursos, prestigio o capacidad de decision.",
    answer: "Sistemas de estratificacion social.",
    note: "Moldean oportunidades e identidades."
  },
  {
    id: "T-077-A",
    eje: "Teoría Social",
    sourceId: 77,
    kind: "cloze",
    prompt: "El analisis correcto aqui debe reconocer tambien sus dimensiones _____.",
    answer: "interseccionales.",
    note: "Alerta de examen: ver como clase, estatus y poder se combinan."
  },
  {
    id: "T-078-D",
    eje: "Teoría Social",
    sourceId: 78,
    kind: "direct",
    prompt: "Agrupamientos definidos por posicion semejante en relacion con la economia, los recursos y las oportunidades.",
    answer: "Clases sociales.",
    note: "Pueden leerse desde relacion con medios de produccion o desde chances de vida."
  },
  {
    id: "T-078-I",
    eje: "Teoría Social",
    sourceId: 78,
    kind: "inverse",
    prompt: "Categorias sociales que no son solo estadisticas, sino potenciales actores politicos con intereses compartidos.",
    answer: "Clases sociales.",
    note: "Son clave para leer oportunidades y limites estructurales."
  },
  {
    id: "T-078-A",
    eje: "Teoría Social",
    sourceId: 78,
    kind: "cloze",
    prompt: "El error comun es convertir la clase en una variable fija y olvidar su dimension _____.",
    answer: "politica.",
    note: "Alerta de examen: evitar determinismo de clase sin borrar su fuerza explicativa."
  },
  {
    id: "T-079-D",
    eje: "Teoría Social",
    sourceId: 79,
    kind: "direct",
    prompt: "Red de confianza, reciprocidad y participacion que facilita cooperacion y acceso a recursos.",
    answer: "Capital social.",
    note: "Puede fortalecer la accion colectiva, aunque no siempre de forma inclusiva."
  },
  {
    id: "T-079-I",
    eje: "Teoría Social",
    sourceId: 79,
    kind: "inverse",
    prompt: "Conjunto de relaciones y normas civicas que permite resolver problemas colectivos y mediar acceso a bienes.",
    answer: "Capital social.",
    note: "No es solo recurso individual; depende de pertenencias sociales."
  },
  {
    id: "T-079-A",
    eje: "Teoría Social",
    sourceId: 79,
    kind: "cloze",
    prompt: "Debe valorarse sin _____, porque algunas redes tambien excluyen y cierran oportunidades.",
    answer: "romantizarlo.",
    note: "Alerta de examen: reconocer tanto su potencia como sus limites."
  },
  {
    id: "T-080-D",
    eje: "Teoría Social",
    sourceId: 80,
    kind: "direct",
    prompt: "Proceso continuo por el que se aprenden normas, valores, roles y comportamientos dentro de una cultura.",
    answer: "Socializacion.",
    note: "No termina en la infancia; atraviesa toda la vida."
  },
  {
    id: "T-080-I",
    eje: "Teoría Social",
    sourceId: 80,
    kind: "inverse",
    prompt: "Aprendizaje permanente de pautas culturales en familia, escuela, pares, medios y trabajo.",
    answer: "Socializacion.",
    note: "Tambien abre la pregunta por la resocializacion."
  },
  {
    id: "T-080-A",
    eje: "Teoría Social",
    sourceId: 80,
    kind: "cloze",
    prompt: "El rasgo decisivo aqui es su caracter _____, no exclusivamente infantil.",
    answer: "continuo.",
    note: "Alerta de examen: pensarla como proceso permanente."
  },
  {
    id: "T-081-D",
    eje: "Teoría Social",
    sourceId: 81,
    kind: "direct",
    prompt: "Sistema de simbolos, codigos y practicas que da sentido compartido a la vida social.",
    answer: "Cultura como sistema simbolico.",
    note: "No es homogenea; contiene conflicto y creatividad."
  },
  {
    id: "T-081-I",
    eje: "Teoría Social",
    sourceId: 81,
    kind: "inverse",
    prompt: "Trama de significados que posibilita comunicacion, interpretacion compartida y transmision intergeneracional.",
    answer: "Cultura como sistema simbolico.",
    note: "Debe entenderse junto con poder y condiciones materiales."
  },
  {
    id: "T-081-A",
    eje: "Teoría Social",
    sourceId: 81,
    kind: "cloze",
    prompt: "El sesgo a evitar aqui es el _____ cultural, que olvida recursos y poder.",
    answer: "reduccionismo.",
    note: "Alerta de examen: no esencializar la cultura."
  },
  {
    id: "T-082-D",
    eje: "Teoría Social",
    sourceId: 82,
    kind: "direct",
    prompt: "Construccion relacional y cambiante del sentido de si, formada por pertenencias, reconocimientos y diferencias.",
    answer: "Identidad social.",
    note: "No es esencia fija; es proceso."
  },
  {
    id: "T-082-I",
    eje: "Teoría Social",
    sourceId: 82,
    kind: "inverse",
    prompt: "Proceso social por el cual una persona se reconoce y es reconocida desde multiples pertenencias activadas contextualmente.",
    answer: "Identidad social.",
    note: "Puede ser emancipadora o volverse encierro."
  },
  {
    id: "T-082-A",
    eje: "Teoría Social",
    sourceId: 82,
    kind: "cloze",
    prompt: "La advertencia principal es no convertir la identidad en una _____ fija.",
    answer: "esencia.",
    note: "Alerta de examen: aplicar mirada interseccional y no esencialista."
  },
  {
    id: "T-083-D",
    eje: "Teoría Social",
    sourceId: 83,
    kind: "direct",
    prompt: "Sistema social que organiza diferencias, jerarquias y relaciones de poder alrededor del sexo.",
    answer: "Genero como categoria social.",
    note: "No es biologia; es construccion historico-social."
  },
  {
    id: "T-083-I",
    eje: "Teoría Social",
    sourceId: 83,
    kind: "inverse",
    prompt: "Marco de analisis que explica divisiones del trabajo, acceso desigual al poder y violencias especificas como producto social.",
    answer: "Genero como categoria social.",
    note: "Es imprescindible para leer opresiones persistentes."
  },
  {
    id: "T-083-A",
    eje: "Teoría Social",
    sourceId: 83,
    kind: "cloze",
    prompt: "El error a combatir es la _____ de las desigualdades de genero.",
    answer: "naturalizacion.",
    note: "Alerta de examen: aplicar el analisis de genero sin reducirlo a biologia."
  },
  {
    id: "T-084-D",
    eje: "Teoría Social",
    sourceId: 84,
    kind: "direct",
    prompt: "Proceso por el cual diferencias culturales son convertidas en marcas supuestamente naturales que justifican jerarquias.",
    answer: "Etnicidad y procesos de racializacion.",
    note: "La etnicidad puede ser pertenencia; la racializacion, dominacion."
  },
  {
    id: "T-084-I",
    eje: "Teoría Social",
    sourceId: 84,
    kind: "inverse",
    prompt: "Analisis de pertenencias culturales y de la fabricacion social de razas para explotar, excluir o jerarquizar.",
    answer: "Etnicidad y procesos de racializacion.",
    note: "Permite pensar fortaleza identitaria y racismo estructural a la vez."
  },
  {
    id: "T-084-A",
    eje: "Teoría Social",
    sourceId: 84,
    kind: "cloze",
    prompt: "La tesis clave es que la raza no posee base biologica suficiente; es una _____ social.",
    answer: "construccion.",
    note: "Alerta de examen: historicizar la racializacion y sus efectos."
  },
  {
    id: "T-085-D",
    eje: "Teoría Social",
    sourceId: 85,
    kind: "direct",
    prompt: "Marco que rechaza simplificaciones lineales y entiende la realidad social como multidimensional, no lineal e incierta.",
    answer: "Complejidad y pensamiento complejo.",
    note: "Trabaja con emergencia, paradoja e interdependencia."
  },
  {
    id: "T-085-I",
    eje: "Teoría Social",
    sourceId: 85,
    kind: "inverse",
    prompt: "Enfoque teorico que pide tolerar incertidumbre y pensar interacciones multiples en lugar de causalidad simple.",
    answer: "Complejidad y pensamiento complejo.",
    note: "No equivale a vaguedad; exige mas rigor, no menos."
  },
  {
    id: "T-085-A",
    eje: "Teoría Social",
    sourceId: 85,
    kind: "cloze",
    prompt: "La consigna metodologica central aqui es evitar el _____.",
    answer: "reduccionismo.",
    note: "Alerta de examen: no simplificar en exceso lo social."
  },
  {
    id: "T-086-D",
    eje: "Teoría Social",
    sourceId: 86,
    kind: "direct",
    prompt: "Dialogo entre saberes que produce comprensiones nuevas y no una mera suma de enfoques aislados.",
    answer: "Interdisciplinariedad teorica.",
    note: "Es rasgo constitutivo del Trabajo Social."
  },
  {
    id: "T-086-I",
    eje: "Teoría Social",
    sourceId: 86,
    kind: "inverse",
    prompt: "Sintesis creativa entre sociologia, psicologia, antropologia, politica y economia para entender lo social.",
    answer: "Interdisciplinariedad teorica.",
    note: "Su desafio es integrar sin fragmentar."
  },
  {
    id: "T-086-A",
    eje: "Teoría Social",
    sourceId: 86,
    kind: "cloze",
    prompt: "El problema aqui no es la mezcla de disciplinas, sino la _____.",
    answer: "fragmentacion.",
    note: "Alerta de examen: integrar perspectivas multiples sin perder coherencia."
  },
  {
    id: "T-087-D",
    eje: "Teoría Social",
    sourceId: 87,
    kind: "direct",
    prompt: "Enfoque que estudia como la realidad social se constituye desde experiencias vividas y significados compartidos.",
    answer: "Fenomenologia social.",
    note: "No niega estructuras; muestra como son vividas y reproducidas."
  },
  {
    id: "T-087-I",
    eje: "Teoría Social",
    sourceId: 87,
    kind: "inverse",
    prompt: "Perspectiva que pregunta por el sentido de la experiencia y por como los actores constituyen su mundo cotidiano.",
    answer: "Fenomenologia social.",
    note: "Aporta herramientas para comprender vivencias concretas."
  },
  {
    id: "T-087-A",
    eje: "Teoría Social",
    sourceId: 87,
    kind: "cloze",
    prompt: "La tarea teorica consiste en vincular experiencia vivida con _____.",
    answer: "estructuras sociales.",
    note: "Alerta de examen: evitar tanto individualismo como estructuralismo ciego."
  },
  {
    id: "T-088-D",
    eje: "Teoría Social",
    sourceId: 88,
    kind: "direct",
    prompt: "Nombre de la objecion que cuestiona estudiar lo social como naturaleza regida por leyes mecanicas.",
    answer: "Critica del positivismo en teoria social.",
    note: "Resalta significado, reflexividad y contexto."
  },
  {
    id: "T-088-I",
    eje: "Teoría Social",
    sourceId: 88,
    kind: "inverse",
    prompt: "Argumento que pide complementar explicacion causal con comprension hermeneutica dada la especificidad del objeto social.",
    answer: "Critica del positivismo en teoria social.",
    note: "No implica renunciar al rigor."
  },
  {
    id: "T-088-A",
    eje: "Teoría Social",
    sourceId: 88,
    kind: "cloze",
    prompt: "La critica no pide abandonar la ciencia, sino reconocer que lo social requiere tambien interpretacion _____.",
    answer: "hermeneutica.",
    note: "Alerta de examen: evitar caricaturizar la critica al positivismo."
  },
  {
    id: "T-089-D",
    eje: "Teoría Social",
    sourceId: 89,
    kind: "direct",
    prompt: "Revision de los supuestos de progreso lineal, eurocentrismo y dominio que estructuran la modernidad occidental.",
    answer: "Critica de la razon moderna.",
    note: "Senala que la modernidad emancipa y domina al mismo tiempo."
  },
  {
    id: "T-089-I",
    eje: "Teoría Social",
    sourceId: 89,
    kind: "inverse",
    prompt: "Perspectiva que cuestiona la fe ciega en el progreso y en la separacion sujeto-objeto como bases incontestables.",
    answer: "Critica de la razon moderna.",
    note: "No equivale a rechazo ingenuo de toda modernidad."
  },
  {
    id: "T-089-A",
    eje: "Teoría Social",
    sourceId: 89,
    kind: "cloze",
    prompt: "La lectura equilibrada aqui evita tanto la idealizacion como el _____ ingenuo de la modernidad.",
    answer: "rechazo.",
    note: "Alerta de examen: aplicar la critica con reflexividad."
  },
  {
    id: "T-090-D",
    eje: "Teoría Social",
    sourceId: 90,
    kind: "direct",
    prompt: "Debate sobre si el eje normativo central debe ser la autonomia individual o la interdependencia comunitaria.",
    answer: "Comunitarismo vs. individualismo.",
    note: "Trabajo Social necesita una sintesis practicable entre ambos."
  },
  {
    id: "T-090-I",
    eje: "Teoría Social",
    sourceId: 90,
    kind: "inverse",
    prompt: "Discusion teorica entre primacia de derechos individuales y prioridad de bienes comunes y responsabilidades colectivas.",
    answer: "Comunitarismo vs. individualismo.",
    note: "Ningun extremo alcanza por si solo."
  },
  {
    id: "T-090-A",
    eje: "Teoría Social",
    sourceId: 90,
    kind: "cloze",
    prompt: "La clave aqui no es elegir un extremo, sino construir una _____.",
    answer: "sintesis.",
    note: "Alerta de examen: evitar reducciones individualistas o comunitaristas puras."
  },
  {
    id: "T-091-D",
    eje: "Teoría Social",
    sourceId: 91,
    kind: "direct",
    prompt: "Enfoque que une critica de estructuras injustas con busqueda activa de emancipacion.",
    answer: "Teoria critica y emancipacion.",
    note: "No se conforma con describir; busca transformar."
  },
  {
    id: "T-091-I",
    eje: "Teoría Social",
    sourceId: 91,
    kind: "inverse",
    prompt: "Perspectiva que expone contradicciones del orden social y senala posibilidades de cambio liberador.",
    answer: "Teoria critica y emancipacion.",
    note: "Su desafio es no imponer emancipacion desde fuera."
  },
  {
    id: "T-091-A",
    eje: "Teoría Social",
    sourceId: 91,
    kind: "cloze",
    prompt: "La apuesta distintiva aqui es pasar de la critica a la _____.",
    answer: "emancipacion.",
    note: "Alerta de examen: aplicar la critica respetando la autonomia de los afectados."
  },
  {
    id: "T-092-D",
    eje: "Teoría Social",
    sourceId: 92,
    kind: "direct",
    prompt: "Idea de organizacion politica que exige mas que elecciones: requiere incidencia real, informacion y respeto a minorias.",
    answer: "Democracia y participacion politica.",
    note: "Apunta a una democracia sustantiva."
  },
  {
    id: "T-092-I",
    eje: "Teoría Social",
    sourceId: 92,
    kind: "inverse",
    prompt: "Modelo politico en el que la ciudadania participa activamente y no solo delega periodicamente el poder.",
    answer: "Democracia y participacion politica.",
    note: "Trabajo Social puede fortalecer poder ciudadano."
  },
  {
    id: "T-092-A",
    eje: "Teoría Social",
    sourceId: 92,
    kind: "cloze",
    prompt: "La advertencia central consiste en no confundir democracia formal con democracia _____.",
    answer: "sustantiva.",
    note: "Alerta de examen: cuestionar visiones meramente electorales."
  },
  {
    id: "T-093-D",
    eje: "Teoría Social",
    sourceId: 93,
    kind: "direct",
    prompt: "Desacuerdo inherente a la vida social que puede degradar la convivencia o impulsar reconocimiento y cambio.",
    answer: "Conflicto social.",
    note: "No es patologia en si mismo."
  },
  {
    id: "T-093-I",
    eje: "Teoría Social",
    sourceId: 93,
    kind: "inverse",
    prompt: "Enfrentamiento entre intereses o posiciones cuya gestion puede ser destructiva o transformadora.",
    answer: "Conflicto social.",
    note: "La tarea no es negarlo, sino canalizarlo."
  },
  {
    id: "T-093-A",
    eje: "Teoría Social",
    sourceId: 93,
    kind: "cloze",
    prompt: "La mirada critica correcta no romantiza el conflicto, pero tampoco lo trata como pura _____.",
    answer: "patologia.",
    note: "Alerta de examen: reconocer sus potenciales transformadores y sus riesgos."
  },
  {
    id: "T-094-D",
    eje: "Teoría Social",
    sourceId: 94,
    kind: "direct",
    prompt: "Condicion de pertenencia politica que incorpora derechos civiles, politicos y sociales conquistados historicamente.",
    answer: "Ciudadania y derechos sociales.",
    note: "No son regalo benigno, sino resultado de luchas."
  },
  {
    id: "T-094-I",
    eje: "Teoría Social",
    sourceId: 94,
    kind: "inverse",
    prompt: "Estatus que combina libertades, participacion y garantias materiales para una pertenencia plena a la comunidad politica.",
    answer: "Ciudadania y derechos sociales.",
    note: "La ciudadania activa requiere exigibilidad y acceso real."
  },
  {
    id: "T-094-A",
    eje: "Teoría Social",
    sourceId: 94,
    kind: "cloze",
    prompt: "La distincion clave aqui es entre ciudadania formal y ciudadania _____.",
    answer: "sustantiva.",
    note: "Alerta de examen: evaluar el acceso real a derechos y no solo su declaracion."
  },
  {
    id: "T-095-D",
    eje: "Teoría Social",
    sourceId: 95,
    kind: "direct",
    prompt: "Pregunta normativa por la distribucion justa de bienes, cargas y oportunidades en la sociedad.",
    answer: "Justicia social.",
    note: "Puede pensarse desde igualdad, libertad o capacidades."
  },
  {
    id: "T-095-I",
    eje: "Teoría Social",
    sourceId: 95,
    kind: "inverse",
    prompt: "Principio que orienta la reduccion de desigualdades y el reconocimiento de la dignidad mediante acceso equitativo a bienes sociales.",
    answer: "Justicia social.",
    note: "Es compromiso constitutivo del Trabajo Social."
  },
  {
    id: "T-095-A",
    eje: "Teoría Social",
    sourceId: 95,
    kind: "cloze",
    prompt: "Toda intervencion que invoque este principio debe traducirlo en implicaciones _____.",
    answer: "practicas.",
    note: "Alerta de examen: articular una nocion de justicia con accion concreta."
  },
  {
    id: "T-096-D",
    eje: "Teoría Social",
    sourceId: 96,
    kind: "direct",
    prompt: "Diferencia entre dar a todos lo mismo y ajustar recursos segun necesidades para alcanzar resultados justos.",
    answer: "Equidad vs. igualdad.",
    note: "La igualdad formal puede reproducir desigualdades de partida."
  },
  {
    id: "T-096-I",
    eje: "Teoría Social",
    sourceId: 96,
    kind: "inverse",
    prompt: "Distincion normativa donde el trato igual no basta si las condiciones iniciales son profundamente desiguales.",
    answer: "Equidad vs. igualdad.",
    note: "Justifica medidas diferenciadas para poblaciones en desventaja."
  },
  {
    id: "T-096-A",
    eje: "Teoría Social",
    sourceId: 96,
    kind: "cloze",
    prompt: "La tesis principal es que el trato igual puede ser injusto sin criterios de _____.",
    answer: "equidad.",
    note: "Alerta de examen: argumentar medidas diferenciadas con base teorica."
  },
  {
    id: "T-097-D",
    eje: "Teoría Social",
    sourceId: 97,
    kind: "direct",
    prompt: "Planteamiento segun el cual la justicia requiere tanto distribucion material justa como respeto a la dignidad y a la diferencia.",
    answer: "Reconocimiento y redistribucion.",
    note: "Una dimension sin la otra deja formas activas de injusticia."
  },
  {
    id: "T-097-I",
    eje: "Teoría Social",
    sourceId: 97,
    kind: "inverse",
    prompt: "Doble criterio de justicia que une acceso equitativo a recursos y superacion del estigma o desprecio social.",
    answer: "Reconocimiento y redistribucion.",
    note: "Su integracion es indispensable."
  },
  {
    id: "T-097-A",
    eje: "Teoría Social",
    sourceId: 97,
    kind: "cloze",
    prompt: "Ninguna politica de justicia se completa si distribuye recursos pero niega _____.",
    answer: "reconocimiento.",
    note: "Alerta de examen: evaluar politicas con ambos criterios simultaneamente."
  },
  {
    id: "T-098-D",
    eje: "Teoría Social",
    sourceId: 98,
    kind: "direct",
    prompt: "Idea de que la fragilidad no es anomalia individual, sino condicion humana y social distribuida de modo desigual.",
    answer: "Vulnerabilidad como condicion teorica.",
    note: "Algunas poblaciones cargan vulnerabilidades amplificadas por exclusion estructural."
  },
  {
    id: "T-098-I",
    eje: "Teoría Social",
    sourceId: 98,
    kind: "inverse",
    prompt: "Marco que desplaza la mirada desde sujetos defectuosos hacia ordenamientos sociales que intensifican o protegen fragilidades.",
    answer: "Vulnerabilidad como condicion teorica.",
    note: "Cambia el foco de ayuda individual a reorganizacion protectora."
  },
  {
    id: "T-098-A",
    eje: "Teoría Social",
    sourceId: 98,
    kind: "cloze",
    prompt: "La advertencia decisiva es no tratar la vulnerabilidad como _____.",
    answer: "estigma.",
    note: "Alerta de examen: pensarla criticamente como condicion y no como defecto."
  },
  {
    id: "T-099-D",
    eje: "Teoría Social",
    sourceId: 99,
    kind: "direct",
    prompt: "Conjunto de procesos para reconocer danos, reparar victimas, exigir cuentas y evitar la repeticion tras periodos de violencia.",
    answer: "Justicia transicional.",
    note: "Combina memoria, reparacion, responsabilidad y garantias de no repeticion."
  },
  {
    id: "T-099-I",
    eje: "Teoría Social",
    sourceId: 99,
    kind: "inverse",
    prompt: "Marco que busca reconstruir convivencia despues del conflicto mediante verdad, reparacion y rendicion de cuentas.",
    answer: "Justicia transicional.",
    note: "No busca borrar el conflicto, sino procesarlo."
  },
  {
    id: "T-099-A",
    eje: "Teoría Social",
    sourceId: 99,
    kind: "cloze",
    prompt: "La pieza preventiva central aqui son las garantias de no _____.",
    answer: "repeticion.",
    note: "Alerta de examen: comprender su caracter multidimensional."
  },
  {
    id: "T-100-D",
    eje: "Teoría Social",
    sourceId: 100,
    kind: "direct",
    prompt: "Principio que define al Trabajo Social como profesion no neutral comprometida con justicia y transformacion.",
    answer: "Responsabilidad social profesional.",
    note: "Excede el deber tecnico y exige rendicion de cuentas a las comunidades."
  },
  {
    id: "T-100-I",
    eje: "Teoría Social",
    sourceId: 100,
    kind: "inverse",
    prompt: "Deber constitutivo de una profesion no neutral orientada al bienestar de poblaciones vulneradas y a la transformacion social.",
    answer: "Responsabilidad social profesional.",
    note: "Es oportunidad y desafio permanente."
  },
  {
    id: "T-100-A",
    eje: "Teoría Social",
    sourceId: 100,
    kind: "cloze",
    prompt: "La idea central es que el Trabajo Social no es tecnicamente neutro, sino socialmente _____.",
    answer: "responsable.",
    note: "Alerta de examen: reflexionar sobre el compromiso etico-politico profesional."
  }
];

export default flashcardsActiveRecall;