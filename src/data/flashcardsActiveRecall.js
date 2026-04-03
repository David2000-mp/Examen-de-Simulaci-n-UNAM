const flashcardsActiveRecall = [
  {
    id: "H-001-D",
    eje: "Historia",
    sourceId: 1,
    kind: "direct",
    prompt: "¿Cómo definía al Trabajo Social la definición del año 1965?",
    answer: "Lo definía como un auxiliar de profesionales médicos, abogados, maestros, etc.",
    note: "En esa etapa se le consideraba una profesión dependiente dedicada al estudio, prevención y curación de los 'males sociales'."
  },
  {
    id: "H-002-D",
    eje: "Historia",
    sourceId: 2,
    kind: "direct",
    prompt: "Según la definición de 1974, ¿cuál es la tarea fundamental del Servicio Social?",
    answer: "La intervención para modificar o superar los factores que entorpecen el desarrollo humano.",
    note: "Se entendía como una tecnología interesada en el cambio planificado."
  },
  {
    id: "H-003-D",
    eje: "Historia",
    sourceId: 3,
    kind: "direct",
    prompt: "¿Qué propósito tiene la transformación social según la definición de 1978?",
    answer: "Lograr el desarrollo integral del ser humano.",
    note: "Se plantea mediante el conocimiento de problemas, la movilización colectiva y la planificación de acciones."
  },
  {
    id: "H-004-D",
    eje: "Historia",
    sourceId: 4,
    kind: "direct",
    prompt: "Según la definición de 1980, ¿de dónde provienen los marcos de referencia teóricos y metodológicos del Trabajo Social?",
    answer: "De las Ciencias Sociales.",
    note: "Esta definición reconoce al Trabajo Social como una tecnología derivada de dichas ciencias."
  },
  {
    id: "H-005-D",
    eje: "Historia",
    sourceId: 5,
    kind: "direct",
    prompt: "¿A qué se dedican los trabajadores sociales profesionales según la FITS en 2000?",
    answer: "A fomentar el bienestar humano y potenciar la realización de las personas.",
    note: "Buscan satisfacer necesidades individuales y colectivas promoviendo la política social."
  },
  {
    id: "H-006-D",
    eje: "Historia",
    sourceId: 6,
    kind: "direct",
    prompt: "Según la IASSW y la FITS, ¿qué principios son fundamentales para el Trabajo Social?",
    answer: "Los principios de los derechos humanos y la justicia social.",
    note: "Estos principios guían la intervención en la relación entre personas y entorno."
  },
  {
    id: "H-007-D",
    eje: "Historia",
    sourceId: 7,
    kind: "direct",
    prompt: "Según los delegados del Consejo de Europa en 2002, ¿cuáles son algunas funciones del Trabajo Social?",
    answer: "Investigación social, planeación social, administración de programas y educación social.",
    note: "Se orientan a resolver problemas en sociedad, comunidad, grupos e individuos."
  },
  {
    id: "H-008-D",
    eje: "Historia",
    sourceId: 8,
    kind: "direct",
    prompt: "Desde el punto de vista de la división social del trabajo, ¿cómo se conceptualiza el Trabajo Social?",
    answer: "Como una profesión.",
    note: "Cuenta con formación académica, saber certificado y reconocimiento estatal."
  },
  {
    id: "H-009-D",
    eje: "Historia",
    sourceId: 9,
    kind: "direct",
    prompt: "En México, ¿a través de qué documento se obtiene el reconocimiento del Estado para ejercer la profesión?",
    answer: "A través de la Cédula Profesional.",
    note: "Está respaldada por el Artículo 3º Constitucional y la Ley General de Profesiones."
  },
  {
    id: "H-010-D",
    eje: "Historia",
    sourceId: 10,
    kind: "direct",
    prompt: "¿Qué constituye la vertiente epistemológica del Trabajo Social?",
    answer: "Su definición como disciplina de las ciencias sociales.",
    note: "Tiene cuerpo de conocimientos, metodología de intervención y principios éticos propios."
  },
  {
    id: "H-011-D",
    eje: "Historia",
    sourceId: 11,
    kind: "direct",
    prompt: "Según el texto, ¿qué es la situación social?",
    answer: "El conjunto de necesidades homogéneas de los grupos sociales y el influjo de ciertos acontecimientos sobre ellos.",
    note: "Permite ubicar condiciones compartidas y sus efectos colectivos."
  },
  {
    id: "H-012-D",
    eje: "Historia",
    sourceId: 12,
    kind: "direct",
    prompt: "¿Cómo se pueden definir las necesidades sociales?",
    answer: "Como actividades sociales permanentes o de largo plazo, como alimentación, salud, empleo, educación y vivienda.",
    note: "Se entienden como una escasez relativa que requiere desarrollo social para su satisfacción."
  },
  {
    id: "H-013-D",
    eje: "Historia",
    sourceId: 13,
    kind: "direct",
    prompt: "¿Cuál es un objetivo general del Trabajo Social frente a la problemática social?",
    answer: "Investigar la problemática para identificar necesidades y generar políticas preventivas y de atención.",
    note: "La investigación orienta la intervención pública y profesional."
  },
  {
    id: "H-014-D",
    eje: "Historia",
    sourceId: 14,
    kind: "direct",
    prompt: "¿Hacia quiénes va dirigida prioritariamente la atención para el desarrollo humano?",
    answer: "Hacia grupos en posición de desventaja dentro del sistema social.",
    note: "Se les reconoce como grupos de atención prioritaria."
  },
  {
    id: "H-015-D",
    eje: "Historia",
    sourceId: 15,
    kind: "direct",
    prompt: "¿Qué función genérica se relaciona con los servicios institucionales?",
    answer: "Administrar programas y servicios de asistencia, seguridad social y desarrollo social.",
    note: "Vincula la gestión institucional con la atención social."
  },
  {
    id: "H-016-D",
    eje: "Historia",
    sourceId: 16,
    kind: "direct",
    prompt: "¿Qué permite al trabajador social la función específica de investigación social?",
    answer: "Conocer, interpretar y diagnosticar situaciones sociales de los sectores con mayores necesidades.",
    note: "Se realiza mediante una metodología específica."
  },
  {
    id: "H-017-D",
    eje: "Historia",
    sourceId: 17,
    kind: "direct",
    prompt: "¿Qué se realiza en la función de orientación y gestoría?",
    answer: "Se refiere y canaliza a la población hacia recursos institucionales.",
    note: "Requiere conocer instituciones oficiales, privadas y organizaciones de la sociedad civil."
  },
  {
    id: "H-018-D",
    eje: "Historia",
    sourceId: 18,
    kind: "direct",
    prompt: "¿En qué consiste la función de administración en Trabajo Social?",
    answer: "En elaborar, dirigir, ejecutar, evaluar y supervisar programas de bienestar social.",
    note: "Integra planificación, operación y control de programas."
  },
  {
    id: "H-019-D",
    eje: "Historia",
    sourceId: 19,
    kind: "direct",
    prompt: "¿A qué está dirigida la educación social impartida por el profesional?",
    answer: "A generar conciencia sobre potencialidades, recursos, derechos y obligaciones para la convivencia social.",
    note: "Fomenta conductas creativas en ámbitos no formales."
  },
  {
    id: "H-020-D",
    eje: "Historia",
    sourceId: 20,
    kind: "direct",
    prompt: "¿Qué se pretende alcanzar con la organización y promoción social?",
    answer: "Una sociedad más democrática, justa y participativa.",
    note: "Promueve la toma de decisiones poblacional mediante programas de promoción."
  },
  {
    id: "H-021-D",
    eje: "Historia",
    sourceId: 21,
    kind: "direct",
    prompt: "¿Cómo se estructuran los imperativos sociales en una sociedad?",
    answer: "A partir de obstáculos y contradicciones estructurales en la producción y reproducción de la vida social.",
    note: "Se expresan como problemas sociales."
  },
  {
    id: "H-022-D",
    eje: "Historia",
    sourceId: 22,
    kind: "direct",
    prompt: "¿Qué supone la profesionalización de una práctica?",
    answer: "Sistematizar representaciones como saber especializado e institucionalizar su transmisión avalada por una instancia reconocida.",
    note: "Ese proceso produce saber certificado."
  },
  {
    id: "H-023-D",
    eje: "Historia",
    sourceId: 23,
    kind: "direct",
    prompt: "En el contexto de la especificidad, ¿quiénes son los sujetos sociales?",
    answer: "Individuos, grupos o instancias involucrados en la intervención por su participación significativa en el problema social.",
    note: "Su identificación es clave para diseñar la intervención."
  },
  {
    id: "H-024-D",
    eje: "Historia",
    sourceId: 24,
    kind: "direct",
    prompt: "¿Qué constituye el objeto de intervención?",
    answer: "El problema social concreto que demanda atención y que se construye intelectualmente como objeto de conocimiento.",
    note: "No es dato bruto; es construcción analítica y práctica."
  },
  {
    id: "H-025-D",
    eje: "Historia",
    sourceId: 25,
    kind: "direct",
    prompt: "¿Qué es el marco de referencia en la intervención social?",
    answer: "El conjunto de representaciones teóricas desde las que se entiende el problema y a los sujetos sociales.",
    note: "También orienta objetivos y procedimientos."
  },
  {
    id: "H-026-D",
    eje: "Historia",
    sourceId: 26,
    kind: "direct",
    prompt: "¿Qué indican los objetivos específicos de la intervención?",
    answer: "Lo que se busca lograr con la intervención y el tipo de redefinición que debe sufrir el objeto.",
    note: "Funcionan como guía operativa del proceso."
  },
  {
    id: "H-027-D",
    eje: "Historia",
    sourceId: 27,
    kind: "direct",
    prompt: "Como elemento de especificidad, ¿a qué se refiere la función social?",
    answer: "Al impacto de la intervención profesional en las relaciones sociales implicadas en el problema.",
    note: "Evalúa incidencia real, no solo ejecución técnica."
  },
  {
    id: "H-028-D",
    eje: "Historia",
    sourceId: 28,
    kind: "direct",
    prompt: "¿Qué constituyen los procedimientos metodológicos?",
    answer: "La dimensión operativa del proceso de intervención: etapas, actividades y técnicas.",
    note: "Definen qué hacer y cómo hacerlo."
  },
  {
    id: "H-029-D",
    eje: "Historia",
    sourceId: 29,
    kind: "direct",
    prompt: "¿Qué es el saber especializado como dimensión de la profesión?",
    answer: "Una construcción intelectual que reelabora la experiencia en un cuerpo teórico-metodológico sustentado en ciencia, política y doctrina.",
    note: "Da base a la autonomía profesional."
  },
  {
    id: "H-030-D",
    eje: "Historia",
    sourceId: 30,
    kind: "direct",
    prompt: "¿Qué es el currículum profesional?",
    answer: "El conjunto de interacciones pedagógicas que desarrollan la formación profesional.",
    note: "Traduce el saber especializado en procesos de enseñanza-aprendizaje."
  },
  {
    id: "H-031-D",
    eje: "Historia",
    sourceId: 31,
    kind: "direct",
    prompt: "¿Qué representa el mercado de trabajo para el Trabajo Social?",
    answer: "El espacio donde la especificidad aparece como oferta y demanda de capacidades.",
    note: "Allí se objetivan el estatus y el valor social de la profesión."
  },
  {
    id: "H-032-D",
    eje: "Historia",
    sourceId: 32,
    kind: "direct",
    prompt: "¿Qué función tiene el mercado simbólico?",
    answer: "Legitimar o deslegitimar prácticas profesionales mediante mecanismos sociales e ideológicos.",
    note: "Incide en el reconocimiento público de la profesión."
  },
  {
    id: "H-033-D",
    eje: "Historia",
    sourceId: 33,
    kind: "direct",
    prompt: "¿Qué estructura la identidad profesional?",
    answer: "Una imagen social con la que la sociedad reconoce a los profesionales y un espejo interno para el gremio.",
    note: "Articula reconocimiento externo y autopercepción profesional."
  },
  {
    id: "H-034-D",
    eje: "Historia",
    sourceId: 34,
    kind: "direct",
    prompt: "¿De dónde proviene la principal fuente de atribución del estatus profesional?",
    answer: "De la demanda social.",
    note: "Esa demanda define necesidad e importancia de la profesión en la reproducción social."
  },
  {
    id: "H-035-D",
    eje: "Historia",
    sourceId: 35,
    kind: "direct",
    prompt: "¿Qué papel juega el Trabajo Social como sujeto mediador?",
    answer: "Vincula a portadores de necesidades y carencias con portadores de recursos y satisfactores.",
    note: "Opera como intermediación social e institucional."
  },
  {
    id: "H-036-D",
    eje: "Historia",
    sourceId: 36,
    kind: "direct",
    prompt: "Según Boris Lima, ¿cuáles son las cuatro etapas de génesis del Trabajo Social?",
    answer: "Pretécnica, técnica, precientífica y científica.",
    note: "Resume una periodización clásica de la evolución profesional."
  },
  {
    id: "H-037-D",
    eje: "Historia",
    sourceId: 37,
    kind: "direct",
    prompt: "Según Ezequiel Ander-Egg, ¿cuáles son las principales concepciones históricas?",
    answer: "Benéfico-asistencial, paramédica/parajurídica, aséptico-tecnocrática y desarrollista.",
    note: "Estas concepciones permiten leer cambios de enfoque en la profesión."
  },
  {
    id: "H-038-D",
    eje: "Historia",
    sourceId: 38,
    kind: "direct",
    prompt: "En la antigüedad, ¿cómo se definía el sistema de esclavitud?",
    answer: "Como dominio del hombre por el hombre, donde el esclavo era tratado como cosa sin personalidad jurídica ni derecho a propiedad.",
    note: "Describe una forma extrema de desigualdad estructural."
  },
  {
    id: "H-039-D",
    eje: "Historia",
    sourceId: 39,
    kind: "direct",
    prompt: "¿Qué monarca de Mesopotamia introdujo la preocupación moral y la responsabilidad legal?",
    answer: "Hammurabi, rey de Babilonia.",
    note: "Su código establecía reparación obligatoria ante actos de perjuicio."
  },
  {
    id: "H-040-D",
    eje: "Historia",
    sourceId: 40,
    kind: "direct",
    prompt: "En Egipto, ¿quién fue divinizado tras su muerte por destacar como sacerdote curandero?",
    answer: "Imhotep.",
    note: "Fue reconocido como dios egipcio de la salud y la medicina."
  },
  {
    id: "H-041-D",
    eje: "Historia",
    sourceId: 41,
    kind: "direct",
    prompt: "¿Qué opinaba Confucio sobre la limosna?",
    answer: "Que la piedad era más necesaria que el agua o el fuego, y que la limosna podía ser fuente de sabiduría.",
    note: "Plantea una justificación moral de la ayuda."
  },
  {
    id: "H-042-D",
    eje: "Historia",
    sourceId: 42,
    kind: "direct",
    prompt: "Según la filosofía de Lao Tse, ¿cómo lograba el sabio enriquecerse?",
    answer: "Dedicándose al prójimo: cuanto más da, más tiene.",
    note: "Subraya reciprocidad y valor ético del dar."
  },
  {
    id: "H-043-D",
    eje: "Historia",
    sourceId: 43,
    kind: "direct",
    prompt: "¿Qué enseñaba Buda respecto a la subsistencia humana?",
    answer: "Que todos debían trabajar duro y nadie depender de la limosna o la caridad ajena.",
    note: "Enfatiza responsabilidad individual frente a la subsistencia."
  },
  {
    id: "H-044-D",
    eje: "Historia",
    sourceId: 44,
    kind: "direct",
    prompt: "¿Sobre qué estructura religiosa y social fundamentó Moisés a Israel?",
    answer: "Sobre un monoteísmo arraigado que configuró una teocracia.",
    note: "Incluía mandatos de ayuda a huérfanos, viudas y pobres."
  },
  {
    id: "H-045-D",
    eje: "Historia",
    sourceId: 45,
    kind: "direct",
    prompt: "¿Para qué servía el año del jubileo cada cincuenta años en Israel?",
    answer: "Para redistribuir riqueza, abolir deudas, liberar esclavos y devolver tierras a sus dueños originales.",
    note: "Funcionaba como mecanismo periódico de corrección social."
  },
  {
    id: "H-046-D",
    eje: "Historia",
    sourceId: 46,
    kind: "direct",
    prompt: "¿Qué sostenía Platón sobre la riqueza y la pobreza extrema?",
    answer: "Que ambas debían combatirse: la riqueza corrompe y la pobreza empuja a la desvergüenza.",
    note: "Propuso asegurar un mínimo para satisfacer necesidades."
  },
  {
    id: "H-047-D",
    eje: "Historia",
    sourceId: 47,
    kind: "direct",
    prompt: "En la antigua Grecia, ¿qué distinción moral se hacía respecto a los mendigos?",
    answer: "Entre pobres merecedores y no merecedores.",
    note: "La distinción se basaba en si la situación era atribuida a desgracia o a falta de voluntad de trabajo."
  },
  {
    id: "H-048-D",
    eje: "Historia",
    sourceId: 48,
    kind: "direct",
    prompt: "¿Qué era la evosokía en Grecia?",
    answer: "Una institución de acogida hospitalaria para peregrinos, forasteros y desvalidos.",
    note: "Constituye antecedente institucional de ayuda social."
  },
  {
    id: "H-049-D",
    eje: "Historia",
    sourceId: 49,
    kind: "direct",
    prompt: "¿Cuál fue el objetivo de la política de panem et circenses en el Imperio romano?",
    answer: "Perpetuar el statu quo manteniendo relativamente satisfechas a las masas de menores recursos.",
    note: "Combina control político y asistencia mínima."
  },
  {
    id: "H-050-D",
    eje: "Historia",
    sourceId: 50,
    kind: "direct",
    prompt: "¿Qué religión impulsó de forma considerable la ayuda al necesitado basada en el amor al prójimo?",
    answer: "El cristianismo.",
    note: "Colocó la caridad como virtud central."
  },
  {
    id: "H-051-D",
    eje: "Historia",
    sourceId: 51,
    kind: "direct",
    prompt: "En el cristianismo primitivo, ¿quiénes conformaron el modelo más temprano de intervención social?",
    answer: "Los diáconos y diaconisas.",
    note: "Registraban pobres y administraban socorro y limosnas."
  },
  {
    id: "H-052-D",
    eje: "Historia",
    sourceId: 52,
    kind: "direct",
    prompt: "¿Qué institución fundó Fabiola en Roma y Ostia?",
    answer: "Hospitales cristianos para enfermos abandonados.",
    note: "Se fundaron tras el Edicto de Milán."
  },
  {
    id: "H-053-D",
    eje: "Historia",
    sourceId: 53,
    kind: "direct",
    prompt: "¿Sobre qué régimen descansaba el modo de producción feudal?",
    answer: "Sobre el régimen de servidumbre.",
    note: "El señor explotaba la fuerza de trabajo del siervo."
  },
  {
    id: "H-054-D",
    eje: "Historia",
    sourceId: 54,
    kind: "direct",
    prompt: "Durante el feudalismo, ¿qué compensación social ofrecía el señor feudal a sus siervos?",
    answer: "Apoyo en emergencias, invalidez o desamparo.",
    note: "Brindaba cierta estabilidad dentro del orden feudal."
  },
  {
    id: "H-055-D",
    eje: "Historia",
    sourceId: 55,
    kind: "direct",
    prompt: "¿Qué medida sobre mendicidad decretó Carlomagno en 808?",
    answer: "Prohibió dar limosna a mendigos aptos para trabajar y obligó a nobles a sostener a sus indigentes.",
    note: "Introduce una lógica de control y responsabilidad local."
  },
  {
    id: "H-056-D",
    eje: "Historia",
    sourceId: 56,
    kind: "direct",
    prompt: "¿Qué figura de la Edad Media italiana destacó por su caridad hacia todo ser vivo?",
    answer: "San Francisco de Asís.",
    note: "Es referente ético-religioso de ayuda y humildad."
  },
  {
    id: "H-057-D",
    eje: "Historia",
    sourceId: 57,
    kind: "direct",
    prompt: "¿Qué agrupaciones del siglo XI sentaron bases previas a la seguridad social?",
    answer: "Cooperaciones, cofradías y gremios de artesanos.",
    note: "Velaban por bienestar del trabajador ante emergencias."
  },
  {
    id: "H-058-D",
    eje: "Historia",
    sourceId: 58,
    kind: "direct",
    prompt: "¿Qué provocó históricamente el fin del feudalismo y la posterior Revolución Industrial?",
    answer: "La separación de la población respecto de la tierra y la pérdida de la seguridad económica feudal.",
    note: "Los siervos quedaron libres, pero más expuestos socialmente."
  },
  {
    id: "H-059-D",
    eje: "Historia",
    sourceId: 59,
    kind: "direct",
    prompt: "Durante la Edad Media, ¿qué asumió la Iglesia ante la negación de responsabilidad del poder civil?",
    answer: "Fundar y sostener escuelas, hospitales, asilos y orfanatos en Europa.",
    note: "Ejerció de hecho una función asistencial sostenida."
  },
  {
    id: "H-060-D",
    eje: "Historia",
    sourceId: 60,
    kind: "direct",
    prompt: "En la etapa pretécnica, ¿cuál era el objetivo del ejercicio de la caridad?",
    answer: "Salvar el alma mediante buenas obras por amor a Dios.",
    note: "La ayuda material se concretaba en la limosna."
  },
  {
    id: "H-061-D",
    eje: "Historia",
    sourceId: 61,
    kind: "direct",
    prompt: "A diferencia de la caridad, ¿qué motivaba el ejercicio de la filantropía?",
    answer: "Un imperativo ético de ayudar al prójimo (amor al hombre).",
    note: "Niega la limosna como dádiva y promueve ayuda paliativa."
  },
  {
    id: "H-062-D",
    eje: "Historia",
    sourceId: 62,
    kind: "direct",
    prompt: "¿Qué pionero del Renacimiento sostuvo que el socorro a los pobres es función inexcusable del Estado?",
    answer: "Juan Luis Vives.",
    note: "Lo planteó en De subventione pauperum (1526)."
  },
  {
    id: "H-063-D",
    eje: "Historia",
    sourceId: 63,
    kind: "direct",
    prompt: "¿Cuál fue una propuesta clave de Juan Luis Vives frente a la mendicidad?",
    answer: "Recoger, registrar y clasificar a los pobres, investigar sus medios y obligar a los aptos a trabajar o aprender oficio.",
    note: "Introduce criterios de diagnóstico y clasificación social."
  },
  {
    id: "H-064-D",
    eje: "Historia",
    sourceId: 64,
    kind: "direct",
    prompt: "¿A quién se considera el apóstol de la caridad en Francia durante el siglo XVII?",
    answer: "A San Vicente de Paúl.",
    note: "Figura central en la organización de ayuda caritativa."
  },
  {
    id: "H-065-D",
    eje: "Historia",
    sourceId: 65,
    kind: "direct",
    prompt: "¿En qué consistía el Pequeño Método de San Vicente de Paúl?",
    answer: "En visitar amistosamente al pobre en su domicilio para conocer problemas físicos y morales antes de otorgar ayuda.",
    note: "Privilegia diagnóstico cercano antes de intervenir."
  },
  {
    id: "H-066-D",
    eje: "Historia",
    sourceId: 66,
    kind: "direct",
    prompt: "¿Qué dos congregaciones fundó San Vicente de Paúl para atender a los necesitados?",
    answer: "Las Damas de la Caridad y las Hijas de la Caridad.",
    note: "Las segundas se crearon junto con Luisa de Marillac."
  },
  {
    id: "H-067-D",
    eje: "Historia",
    sourceId: 67,
    kind: "direct",
    prompt: "¿Qué proyecto implantó Benjamín Thompson en Múnich en 1790?",
    answer: "Una casa de trabajo militar para inculcar hábito laboral en mendigos.",
    note: "Se confeccionaban uniformes a cambio de comida y salario."
  },
  {
    id: "H-068-D",
    eje: "Historia",
    sourceId: 68,
    kind: "direct",
    prompt: "En Escocia, ¿qué criticaba Thomas Chalmers de la asistencia pública?",
    answer: "Su carácter impersonal e ineficaz.",
    note: "Propuso indagar casos para una ayuda mejor dirigida."
  },
  {
    id: "H-069-D",
    eje: "Historia",
    sourceId: 69,
    kind: "direct",
    prompt: "¿Qué figura introdujo Thomas Chalmers para mejorar la información sobre necesitados?",
    answer: "Los visitadores voluntarios.",
    note: "Investigaban circunstancias personales presentándose como amigos."
  },
  {
    id: "H-070-D",
    eje: "Historia",
    sourceId: 70,
    kind: "direct",
    prompt: "¿Qué ley inglesa de 1601 fue clave para la asistencia social?",
    answer: "La Ley de los Pobres (Poor Law).",
    note: "Reconoció obligación estatal hacia desvalidos y estableció casas de trabajo."
  },
  {
    id: "H-071-D",
    eje: "Historia",
    sourceId: 71,
    kind: "direct",
    prompt: "En la Ley de los Pobres, ¿qué plantea el principio de responsabilidad de los parientes?",
    answer: "Que la familia debe atender económicamente a sus deudos necesitados antes que el Estado.",
    note: "Fija prioridad de cuidado familiar legalmente exigible."
  },
  {
    id: "H-072-D",
    eje: "Historia",
    sourceId: 72,
    kind: "direct",
    prompt: "¿Qué asociación fundada en Londres en 1869 es preludio del Trabajo Social organizado?",
    answer: "La Sociedad para la Organización de la Caridad (C.O.S.).",
    note: "Marcó transición hacia prácticas más sistemáticas de intervención."
  },
  {
    id: "H-073-D",
    eje: "Historia",
    sourceId: 73,
    kind: "direct",
    prompt: "¿Cuál era la exigencia básica de la C.O.S. antes de otorgar ayuda?",
    answer: "Realizar una encuesta escrita exhaustiva de cada caso.",
    note: "Luego una comisión decidía buscando rehabilitación y no solo caridad."
  },
  {
    id: "H-074-D",
    eje: "Historia",
    sourceId: 74,
    kind: "direct",
    prompt: "A fines del siglo XIX, ¿en qué ámbito institucional nace formalmente el Trabajo Social como profesión?",
    answer: "En el seno de prácticas y representaciones de las Organizaciones de la Caridad.",
    note: "La C.O.S. es referencia central de ese proceso."
  },
  {
    id: "H-075-D",
    eje: "Historia",
    sourceId: 75,
    kind: "direct",
    prompt: "¿Qué aportó el Estado a la profesionalización del Trabajo Social a inicios del siglo XX?",
    answer: "Un espacio laboral mediante la asistencia pública y legitimación del rol intermediario como trabajo asalariado.",
    note: "Vinculó ejercicio profesional y estructura estatal."
  },
  {
    id: "H-076-D",
    eje: "Historia",
    sourceId: 76,
    kind: "direct",
    prompt: "¿Quién fue Octavia Hill y qué lema impulsó en la atención a necesitados?",
    answer: "Reformadora británica de programas de vivienda; impulsó el lema 'not alms, but a friend'.",
    note: "Promovía acompañamiento relacional más que limosna puntual."
  },
  {
    id: "H-077-D",
    eje: "Historia",
    sourceId: 77,
    kind: "direct",
    prompt: "¿Dónde surgieron las primeras escuelas formales de Trabajo Social alrededor de 1900?",
    answer: "En Ámsterdam, Londres, Berlín y Nueva York.",
    note: "Aparecieron en centros urbanos industrializados."
  },
  {
    id: "H-078-D",
    eje: "Historia",
    sourceId: 78,
    kind: "direct",
    prompt: "¿Por qué en Estados Unidos el Trabajo Social se orientó históricamente hacia el individuo y los casos?",
    answer: "Por el fuerte individualismo social y la idea de que el fracaso económico tenía causas predominantemente individuales.",
    note: "Esto consolidó el enfoque casework."
  },
  {
    id: "H-079-D",
    eje: "Historia",
    sourceId: 79,
    kind: "direct",
    prompt: "¿Quién es la figura clave del Trabajo Social de casos en Estados Unidos y autora de Social Diagnosis (1917)?",
    answer: "Mary Ellen Richmond.",
    note: "Su obra es fundacional para el diagnóstico social en casework."
  },
  {
    id: "H-080-D",
    eje: "Historia",
    sourceId: 80,
    kind: "direct",
    prompt: "Según Mary Richmond, ¿qué proceso racional es indispensable para realizar Trabajo Social?",
    answer: "La investigación social mediante inducción lógica.",
    note: "Consiste en pasar de hechos particulares a formulaciones generales para el diagnóstico."
  },
  {
    id: "H-081-D",
    eje: "Historia",
    sourceId: 81,
    kind: "direct",
    prompt: "¿Cuál fue el principal mérito psicológico de la obra de Mary Richmond?",
    answer: "Comprender el dinamismo de las relaciones interhumanas para modificar la personalidad del asistido.",
    note: "Destacó la acción de mente a mente en la intervención."
  },
  {
    id: "H-082-D",
    eje: "Historia",
    sourceId: 82,
    kind: "direct",
    prompt: "Durante la concepción benéfico-asistencial en América Latina, ¿cómo era la ayuda?",
    answer: "Paternalista y motivada por razones moralistas o religiosas.",
    note: "Pesaba más la figura del dador que la del receptor."
  },
  {
    id: "H-083-D",
    eje: "Historia",
    sourceId: 83,
    kind: "direct",
    prompt: "¿En qué año y país se fundó la primera escuela de Trabajo Social en América Latina?",
    answer: "En 1925, en Santiago de Chile.",
    note: "Fue fundada por el médico Alejandro del Río."
  },
  {
    id: "H-084-D",
    eje: "Historia",
    sourceId: 84,
    kind: "direct",
    prompt: "Bajo la concepción paramédica en Chile, ¿qué función se asignaba al trabajador social?",
    answer: "La de visitadora social auxiliar, sin autonomía profesional plena.",
    note: "Vigilaba cumplimiento de tratamiento médico e higiene."
  },
  {
    id: "H-085-D",
    eje: "Historia",
    sourceId: 85,
    kind: "direct",
    prompt: "¿Dónde inició la enseñanza profesional bajo una concepción parajurídica?",
    answer: "En Argentina, en 1935, dentro de la Facultad de Derecho y Ciencias Sociales.",
    note: "El rol se enfocó en gestoría y trámite legal de menores infractores."
  },
  {
    id: "H-086-D",
    eje: "Historia",
    sourceId: 86,
    kind: "direct",
    prompt: "¿Qué postulado regía al Estado benefactor que impulsó la concepción aséptico-tecnocrática?",
    answer: "Proteger a grupos de bajos ingresos frente a riesgos de la sociedad industrial.",
    note: "Lo hacía mediante leyes y pensiones, preservando el sistema capitalista."
  },
  {
    id: "H-087-D",
    eje: "Historia",
    sourceId: 87,
    kind: "direct",
    prompt: "¿Por qué se llamó aséptica a la práctica del trabajador social en la posguerra latinoamericana?",
    answer: "Porque se volvió descomprometida ideológica y políticamente.",
    note: "Se aplicaban métodos importados para ajustar disfuncionalidades del sistema."
  },
  {
    id: "H-088-D",
    eje: "Historia",
    sourceId: 88,
    kind: "direct",
    prompt: "¿Qué organismo internacional promovió la creación de escuelas de Trabajo Social en América Latina tras la Segunda Guerra Mundial?",
    answer: "La Organización de las Naciones Unidas (ONU).",
    note: "También impulsó becas de formación hacia Estados Unidos."
  },
  {
    id: "H-089-D",
    eje: "Historia",
    sourceId: 89,
    kind: "direct",
    prompt: "¿Qué tesis originó la concepción desarrollista del Trabajo Social en los años cincuenta?",
    answer: "La tesis de modernización económica elaborada por la CEPAL.",
    note: "Buscó convertir al trabajador social en técnico de apoyo al desarrollo nacional."
  },
  {
    id: "H-090-D",
    eje: "Historia",
    sourceId: 90,
    kind: "direct",
    prompt: "¿Qué programa de Estados Unidos, derivado del contexto de la Revolución Cubana, impactó proyectos sociales en Latinoamérica en 1961?",
    answer: "La Alianza para el Progreso.",
    note: "Fue impulsada por Kennedy para frenar subdesarrollo e influencia socialista."
  },
  {
    id: "H-091-D",
    eje: "Historia",
    sourceId: 91,
    kind: "direct",
    prompt: "¿En qué década surge de lleno el movimiento de reconceptualización del Trabajo Social en América Latina?",
    answer: "En la década de los sesenta, especialmente a mediados y finales.",
    note: "Marca un giro crítico en la profesión regional."
  },
  {
    id: "H-092-D",
    eje: "Historia",
    sourceId: 92,
    kind: "direct",
    prompt: "Según sectores estudiantiles y profesionales, ¿qué definió al movimiento de reconceptualización?",
    answer: "La resistencia a lo dado y la adecuación de la profesión a exigencias reales de Latinoamérica.",
    note: "Incluyó dimensiones políticas, económicas y de dependencia."
  },
  {
    id: "H-093-D",
    eje: "Historia",
    sourceId: 93,
    kind: "direct",
    prompt: "¿Cuáles fueron aportes metodológicos clave del movimiento de reconceptualización para superar modelos importados?",
    answer: "El Método Básico, el Método Único y el Método Integrado.",
    note: "Buscaban mayor pertinencia con la realidad latinoamericana."
  },
  {
    id: "H-094-D",
    eje: "Historia",
    sourceId: 94,
    kind: "direct",
    prompt: "¿Cuál se considera un saldo positivo de la reconceptualización en el plano teórico?",
    answer: "La creación de marcos teóricos sustentados en la realidad latinoamericana y la caída del velo ideológico.",
    note: "Fortaleció producción conceptual situada."
  },
  {
    id: "H-095-D",
    eje: "Historia",
    sourceId: 95,
    kind: "direct",
    prompt: "Menciona un saldo negativo derivado de los excesos del movimiento de reconceptualización.",
    answer: "El uso indiscriminado, como moda, de conceptos derivados del marxismo y el alejamiento de instituciones del Estado.",
    note: "Ejemplos frecuentes: lucha de clases o dialéctica usadas sin rigor analítico."
  },
    {
    id: "M-021-D",
    eje: "Metodología",
    sourceId: 21,
    kind: "direct",
    prompt: "¿Qué constituyen los procedimientos metodológicos dentro de la especificidad profesional del Trabajo Social?",
    answer: "La dimensión operativa del proceso de intervención profesional.",
    note: "Son etapas, actividades y técnicas ordenadas en secuencia para orientar la intervención y modificar el objeto."
  },
  {
    id: "M-022-D",
    eje: "Metodología",
    sourceId: 22,
    kind: "direct",
    prompt: "En la dimensión de la especificidad profesional, ¿cómo interviene la metodología en el saber especializado?",
    answer: "El saber especializado reelabora y sintetiza la experiencia profesional en un cuerpo teórico y metodológico.",
    note: "La metodología estructura y hace transferible ese saber."
  },
  {
    id: "M-023-D",
    eje: "Metodología",
    sourceId: 23,
    kind: "direct",
    prompt: "¿Qué innovación metodológica de recopilación de datos propuso Juan Luis Vives en el siglo XVI?",
    answer: "Investigar medios y verdaderas necesidades de los pobres, con registro riguroso de habitantes y clasificación.",
    note: "Incorpora levantamiento sistemático de información social."
  },
  {
    id: "M-024-D",
    eje: "Metodología",
    sourceId: 24,
    kind: "direct",
    prompt: "Según Juan Luis Vives, ¿qué acción previa a la ayuda es necesaria para llegar a un diagnóstico preciso?",
    answer: "Visitar a los desvalidos en sus casas y registrar sus circunstancias particulares.",
    note: "La ayuda eficaz se apoya en conocimiento directo del caso."
  },
  {
    id: "M-025-D",
    eje: "Metodología",
    sourceId: 25,
    kind: "direct",
    prompt: "¿En qué consistía metodológicamente el Pequeño Método de San Vicente de Paúl?",
    answer: "En visitar al pobre de forma amistosa para identificar problemas físicos y morales antes de definir la ayuda.",
    note: "Deriva intervención pertinente desde diagnóstico relacional."
  },
  {
    id: "M-026-D",
    eje: "Metodología",
    sourceId: 26,
    kind: "direct",
    prompt: "¿Qué postulado metodológico defendía San Vicente de Paúl respecto a la relación con el usuario?",
    answer: "Que no es posible ayudar con eficacia sin establecer una buena relación con la persona.",
    note: "La relación profesional es condición metodológica de efectividad."
  },
  {
    id: "M-027-D",
    eje: "Metodología",
    sourceId: 27,
    kind: "direct",
    prompt: "¿Qué enfoque metodológico introdujo Benjamín Thompson frente a la mendicidad?",
    answer: "Tratamiento individual orientado a la rehabilitación en casas de trabajo.",
    note: "Sustituyó castigo por medidas positivas con trabajo, insumos y salario."
  },
  {
    id: "M-028-D",
    eje: "Metodología",
    sourceId: 28,
    kind: "direct",
    prompt: "¿Qué doble principio metodológico observó Thomas Chalmers al enfrentar un caso de pobreza?",
    answer: "Indagación completa de cada caso y resolución de la causa originaria de la necesidad.",
    note: "Combina diagnóstico individual y enfoque causal."
  },
  {
    id: "M-029-D",
    eje: "Metodología",
    sourceId: 29,
    kind: "direct",
    prompt: "Según Thomas Chalmers, ¿cuál era la secuencia para resolver una necesidad?",
    answer: "Primero automantenimiento; luego parientes y vecinos; después ciudadanos ricos; y al final, fieles de la iglesia.",
    note: "Establece escalafón progresivo de apoyo."
  },
  {
    id: "M-030-D",
    eje: "Metodología",
    sourceId: 30,
    kind: "direct",
    prompt: "¿Cuál era la herramienta fundamental de Thomas Chalmers para recopilar información y diagnosticar?",
    answer: "Los visitadores voluntarios.",
    note: "Levantaban datos de familia, profesión y condiciones de vida del solicitante."
  },
  {
    id: "M-031-D",
    eje: "Metodología",
    sourceId: 31,
    kind: "direct",
    prompt: "En la C.O.S., ¿cuál era el primer paso metodológico obligatorio?",
    answer: "Realizar una encuesta escrita de cada caso por un funcionario profesional competente.",
    note: "La intervención iniciaba con registro formal del caso."
  },
  {
    id: "M-032-D",
    eje: "Metodología",
    sourceId: 32,
    kind: "direct",
    prompt: "¿Cómo decidía la C.O.S. las medidas de intervención tras la encuesta?",
    answer: "La comisión del Comité de Distrito revisaba el caso y definía medidas metódicas.",
    note: "La decisión era colegiada y protocolizada."
  },
  {
    id: "M-033-D",
    eje: "Metodología",
    sourceId: 33,
    kind: "direct",
    prompt: "Según la metodología de la C.O.S., ¿qué papel juega el asistido en su tratamiento?",
    answer: "Ser agente de su propia readaptación con apoyo de su red cercana.",
    note: "Participan parientes, vecinos y amigos."
  },
  {
    id: "M-034-D",
    eje: "Metodología",
    sourceId: 34,
    kind: "direct",
    prompt: "¿Qué instrumento administrativo-metodológico creó la C.O.S. para evitar abusos y duplicidades diagnósticas?",
    answer: "Un fichero central de control y un directorio de instituciones.",
    note: "Permitía trazabilidad de asistidos entre obras de beneficencia."
  },
  {
    id: "M-035-D",
    eje: "Metodología",
    sourceId: 35,
    kind: "direct",
    prompt: "Durante la institucionalización de la beneficencia privada, ¿qué estructura metodológica previa se consolidó?",
    answer: "El estudio, el diagnóstico y la planificación como pasos previos al tratamiento.",
    note: "Se consolidó una secuencia metodológica base."
  },
  {
    id: "M-036-D",
    eje: "Metodología",
    sourceId: 36,
    kind: "direct",
    prompt: "¿Qué aspecto intentó difundir Octavia Hill como núcleo de su abordaje metodológico?",
    answer: "La individualización y la relación persona a persona.",
    note: "Síntesis: limosna no, pero sí un amigo."
  },
  {
    id: "M-037-D",
    eje: "Metodología",
    sourceId: 37,
    kind: "direct",
    prompt: "¿Qué procedimiento lógico utiliza siempre Mary Ellen Richmond en su metodología?",
    answer: "La inducción.",
    note: "Permite pasar de casos particulares a formulaciones generales e inferir hechos nuevos."
  },
  {
    id: "M-038-D",
    eje: "Metodología",
    sourceId: 38,
    kind: "direct",
    prompt: "¿Qué paso consideraba Mary Richmond indispensable antes de realizar Trabajo Social?",
    answer: "La investigación social.",
    note: "Sin investigación social no hay base para intervenir."
  },
  {
    id: "M-039-D",
    eje: "Metodología",
    sourceId: 39,
    kind: "direct",
    prompt: "¿Qué obra publicó Mary Richmond en 1917 que sistematizó el método de caso?",
    answer: "Social Diagnosis.",
    note: "Fue producto de 17 años de investigación y experiencia directa."
  },
  {
    id: "M-040-D",
    eje: "Metodología",
    sourceId: 40,
    kind: "direct",
    prompt: "¿Cuáles son las cuatro acciones que Mary Richmond señala para realizar el tratamiento?",
    answer: "Comprensión individual; comprensión de recursos y medio social; acción directa mente a mente; acción indirecta en el medio social.",
    note: "Integra intervención personal y contextual."
  },
  {
    id: "M-041-D",
    eje: "Metodología",
    sourceId: 41,
    kind: "direct",
    prompt: "¿A qué se refiere Mary Richmond con la acción directa (mind on mind) en el tratamiento?",
    answer: "A la relación persona a persona y su influjo psicológico para modificar una personalidad concreta.",
    note: "Es núcleo relacional del tratamiento individual."
  },
  {
    id: "M-042-D",
    eje: "Metodología",
    sourceId: 42,
    kind: "direct",
    prompt: "¿Qué grupo social considera Mary Richmond como básico durante diagnóstico y tratamiento?",
    answer: "La familia.",
    note: "Implica involucrar miembros y reconocer posibilidades de la dinámica familiar."
  },
  {
    id: "M-043-D",
    eje: "Metodología",
    sourceId: 43,
    kind: "direct",
    prompt: "¿Cuáles son las tres fases sucesivas del método de Mary Richmond que siguen vigentes?",
    answer: "Estudio del caso, diagnóstico y tratamiento.",
    note: "Secuencia clásica del método de caso."
  },
  {
    id: "M-044-D",
    eje: "Metodología",
    sourceId: 44,
    kind: "direct",
    prompt: "¿Cómo operaba metodológicamente el trabajador social bajo la Concepción Paramédica?",
    answer: "Como auxiliar técnico (visitadora social), sin función profesional autónoma.",
    note: "Su tarea principal era vigilar el cumplimiento del tratamiento médico."
  },
  {
    id: "M-045-D",
    eje: "Metodología",
    sourceId: 45,
    kind: "direct",
    prompt: "En la Concepción Aséptico-Tecnocrática, ¿qué crítica se hace al uso de la metodología?",
    answer: "Que se volvió un hacer aséptico y descomprometido, copiando métodos externos sin adecuación local.",
    note: "Buscaba ajustar individuos sin alterar el equilibrio social."
  },
  {
    id: "M-046-D",
    eje: "Metodología",
    sourceId: 46,
    kind: "direct",
    prompt: "Metodológicamente, ¿cómo concibe al Trabajo Social el Movimiento de Reconceptualización?",
    answer: "Como praxis dialéctica donde teoría y práctica se retroalimentan.",
    note: "Su horizonte declarado fue la liberación humana."
  },
  {
    id: "M-047-D",
    eje: "Metodología",
    sourceId: 47,
    kind: "direct",
    prompt: "¿Qué necesidad de revisión planteó la Reconceptualización respecto al marco de referencia?",
    answer: "Revisión crítica de bases científicas y formulación de metodología propia latinoamericana.",
    note: "Cuestionó marcos referenciales importados de realidades distintas."
  },
  {
    id: "M-048-D",
    eje: "Metodología",
    sourceId: 48,
    kind: "direct",
    prompt: "¿Cuáles fueron los tres enfoques teóricos consolidados como nuevas contribuciones metodológicas durante la Reconceptualización?",
    answer: "Método Básico, Método Único y Método Integrado.",
    note: "Constituyen aportes centrales del periodo."
  },
  {
    id: "M-049-D",
    eje: "Metodología",
    sourceId: 49,
    kind: "direct",
    prompt: "¿Cuál fue uno de los principales saldos positivos de la Reconceptualización en materia de intervención?",
    answer: "Incorporación de nuevas estrategias metodológicas sustentadas en marcos teóricos propios de Latinoamérica.",
    note: "Aumentó pertinencia contextual de la intervención."
  },
  {
    id: "M-050-D",
    eje: "Metodología",
    sourceId: 50,
    kind: "direct",
    prompt: "¿Qué exigencia planteó Thomas Chalmers sobre la recolección de datos, anticipando el Trabajo Social de casos?",
    answer: "Obtener información debida de cada caso como paso previo para su mejor resolución.",
    note: "Se opuso a una caridad indiscriminada, intuitiva y desorganizada."
  },

  {
    id: "T-066-D",
    eje: "Teoría Social",
    sourceId: 66,
    kind: "direct",
    prompt: "Concepto general que organiza explicaciones sobre estructura, acción y cambio social.",
    answer: "Teoría social.",
    note: "No es una mera descripción; busca explicar y guiar."
  },
  {
    id: "T-066-I",
    eje: "Teoría Social",
    sourceId: 66,
    kind: "inverse",
    prompt: "Marco conceptual capaz de explicar fenómenos sociales, ofrecer interpretación fundamentada y orientar la práctica.",
    answer: "Teoría social.",
    note: "Teoría y práctica se alimentan mutuamente."
  },
  {
    id: "T-066-A",
    eje: "Teoría Social",
    sourceId: 66,
    kind: "cloze",
    prompt: "La diferencia decisiva aquí se da entre una simple descripción y una _____.",
    answer: "explicación fundamentada.",
    note: "Alerta de examen: comprender la teoría como herramienta y no como ornamento."
  },
  {
    id: "T-067-D",
    eje: "Teoría Social",
    sourceId: 67,
    kind: "direct",
    prompt: "Conjunto de aportes que incluye explicar, predecir, identificar patrones, guiar la acción y criticar injusticias.",
    answer: "Funciones de la teoría social.",
    note: "Su poder es hermenéutico y también transformador."
  },
  {
    id: "T-067-I",
    eje: "Teoría Social",
    sourceId: 67,
    kind: "inverse",
    prompt: "Capacidades analíticas y prácticas que permiten comprender fenómenos y orientar intervenciones sobre ellos.",
    answer: "Funciones de la teoría social.",
    note: "No se limita a la abstracción académica."
  },
  {
    id: "T-067-A",
    eje: "Teoría Social",
    sourceId: 67,
    kind: "cloze",
    prompt: "Cuando la teoría se desconecta de la acción, pierde parte de su potencia _____.",
    answer: "transformadora.",
    note: "Alerta de examen: conectar la teoría con su aplicabilidad concreta."
  },
  {
    id: "T-068-D",
    eje: "Teoría Social",
    sourceId: 68,
    kind: "direct",
    prompt: "Categorías generales como estructura, agencia, poder, legitimidad, cambio y desigualdad que permiten analizar lo social.",
    answer: "Conceptos fundamentales en teoría social.",
    note: "Funcionan como andamiaje común para distintas corrientes."
  },
  {
    id: "T-068-I",
    eje: "Teoría Social",
    sourceId: 68,
    kind: "inverse",
    prompt: "Núcleo de categorías que organiza reflexiones coherentes sobre patrones, capacidades de acción, jerarquías y transformaciones.",
    answer: "Conceptos fundamentales en teoría social.",
    note: "Su valor reside también en sus interrelaciones."
  },
  {
    id: "T-068-A",
    eje: "Teoría Social",
    sourceId: 68,
    kind: "cloze",
    prompt: "Aprender estas categorías exige no solo definirlas, sino articular sus _____.",
    answer: "interrelaciones.",
    note: "Alerta de examen: aplicarlas en análisis concretos."
  },
  {
    id: "T-069-D",
    eje: "Teoría Social",
    sourceId: 69,
    kind: "direct",
    prompt: "Tensión teórica entre las perspectivas que destacan la estabilidad e integración y aquellas que subrayan el conflicto y la transformación.",
    answer: "Equilibrio vs. cambio en teoría social.",
    note: "La vida social combina reproducción y movimiento."
  },
  {
    id: "T-069-I",
    eje: "Teoría Social",
    sourceId: 69,
    kind: "inverse",
    prompt: "Debate sobre si las sociedades se orientan principalmente a la estabilidad o si el conflicto impulsa su transformación.",
    answer: "Equilibrio vs. cambio en teoría social.",
    note: "Una mirada sofisticada reconoce ambos polos."
  },
  {
    id: "T-069-A",
    eje: "Teoría Social",
    sourceId: 69,
    kind: "cloze",
    prompt: "El error común consiste en caer en un único polo: determinismo del orden o voluntarismo del _____.",
    answer: "cambio.",
    note: "Alerta de examen: evitar reducciones a un solo principio dinámico."
  },
  {
    id: "T-070-D",
    eje: "Teoría Social",
    sourceId: 70,
    kind: "direct",
    prompt: "Problema teórico referido al grado en que las estructuras constriñen o habilitan la libertad humana.",
    answer: "Determinismo estructural y libertad de acción.",
    note: "Las posturas refinadas sostienen que ambas dimensiones coexisten."
  },
  {
    id: "T-070-I",
    eje: "Teoría Social",
    sourceId: 70,
    kind: "inverse",
    prompt: "Dilema entre ver a los sujetos como autómatas estructurales o como agentes totalmente libres.",
    answer: "Determinismo estructural y libertad de acción.",
    note: "La respuesta madura piensa en marcos de posibilidad."
  },
  {
    id: "T-070-A",
    eje: "Teoría Social",
    sourceId: 70,
    kind: "cloze",
    prompt: "La salida teórica más sólida aquí consiste en pensar en estructuras que constriñen y también _____.",
    answer: "habilitan.",
    note: "Alerta de examen: evitar los dos reduccionismos opuestos."
  },
  {
    id: "T-071-D",
    eje: "Teoría Social",
    sourceId: 71,
    kind: "direct",
    prompt: "Conjunto de mecanismos por los cuales una sociedad mantiene estructuras, privilegios y desigualdades a través del tiempo.",
    answer: "Reproducción social.",
    note: "Opera mediante socialización, instituciones y hegemonía cultural."
  },
  {
    id: "T-071-I",
    eje: "Teoría Social",
    sourceId: 71,
    kind: "inverse",
    prompt: "Proceso que normaliza lo existente, transmite privilegios y hace que ciertos órdenes parezcan naturales.",
    answer: "Reproducción social.",
    note: "Comprenderla permite detectar puntos de ruptura."
  },
  {
    id: "T-071-A",
    eje: "Teoría Social",
    sourceId: 71,
    kind: "cloze",
    prompt: "La clave crítica aquí es mostrar que la desigualdad no se mantiene sola: requiere un trabajo de _____.",
    answer: "reproducción.",
    note: "Alerta de examen: identificar los mecanismos que perpetúan el orden social."
  },
  {
    id: "T-072-D",
    eje: "Teoría Social",
    sourceId: 72,
    kind: "direct",
    prompt: "Proceso por el cual cambian las estructuras, prácticas e instituciones, ya sea de forma gradual, abrupta o combinada.",
    answer: "Transformación social.",
    note: "Exige actores colectivos, crisis y construcción de alternativas."
  },
  {
    id: "T-072-I",
    eje: "Teoría Social",
    sourceId: 72,
    kind: "inverse",
    prompt: "Cambio de ordenamientos sociales impulsado por sujetos colectivos, conflictos de legitimidad y la capacidad de instituir alternativas.",
    answer: "Transformación social.",
    note: "Puede ser incremental o abrupta."
  },
  {
    id: "T-072-A",
    eje: "Teoría Social",
    sourceId: 72,
    kind: "cloze",
    prompt: "No hay transformación sostenida sin sujetos colectivos y crisis de _____.",
    answer: "legitimidad.",
    note: "Alerta de examen: identificar mecanismos y actores del cambio social."
  },
  {
    id: "T-073-D",
    eje: "Teoría Social",
    sourceId: 73,
    kind: "direct",
    prompt: "Conjunto de formas de orientación de la acción que incluye el cálculo instrumental, los valores, la tradición y los afectos.",
    answer: "Racionalidad social.",
    note: "No se reduce al cálculo utilitario."
  },
  {
    id: "T-073-I",
    eje: "Teoría Social",
    sourceId: 73,
    kind: "inverse",
    prompt: "Modo en que las personas deciden y actúan según fines, valores, costumbres o emociones dentro de un contexto social.",
    answer: "Racionalidad social.",
    note: "Ampliar su concepto evita llamar irracional a lo que solo sigue otra lógica."
  },
  {
    id: "T-073-A",
    eje: "Teoría Social",
    sourceId: 73,
    kind: "cloze",
    prompt: "Error clásico: reducir toda racionalidad al cálculo _____.",
    answer: "instrumental.",
    note: "Alerta de examen: valorar formas múltiples de orientación de la acción."
  },
  {
    id: "T-074-D",
    eje: "Teoría Social",
    sourceId: 74,
    kind: "direct",
    prompt: "Aceptación de un orden social o político porque se le considera válido por tradición, carisma, legalidad, desempeño o valores compartidos.",
    answer: "Legitimidad política y social.",
    note: "Su quiebre suele anticipar cambios profundos."
  },
  {
    id: "T-074-I",
    eje: "Teoría Social",
    sourceId: 74,
    kind: "inverse",
    prompt: "Fundamento de aceptación de un sistema que evita depender únicamente de la represión abierta.",
    answer: "Legitimidad política y social.",
    note: "Puede basarse en fuentes diferentes."
  },
  {
    id: "T-074-A",
    eje: "Teoría Social",
    sourceId: 74,
    kind: "cloze",
    prompt: "Cuando un orden pierde aceptación, empieza a sostenerse cada vez más por la _____.",
    answer: "represión.",
    note: "Alerta de examen: identificar crisis legitimatorias."
  },
  {
    id: "T-075-D",
    eje: "Teoría Social",
    sourceId: 75,
    kind: "direct",
    prompt: "Distinción entre la imposición sin consentimiento y la obediencia aceptada porque se la considera válida.",
    answer: "Poder como dominación y autoridad.",
    note: "La primera recurre más al miedo; la segunda, a la legitimidad."
  },
  {
    id: "T-075-I",
    eje: "Teoría Social",
    sourceId: 75,
    kind: "inverse",
    prompt: "Diferencia entre el poder impuesto coercitivamente y el poder obedecido por el reconocimiento de su validez.",
    answer: "Poder como dominación y autoridad.",
    note: "Ambas formas pueden ser estables o injustas."
  },
  {
    id: "T-075-A",
    eje: "Teoría Social",
    sourceId: 75,
    kind: "cloze",
    prompt: "La autoridad se distingue de la dominación porque incorpora la _____.",
    answer: "legitimidad.",
    note: "Alerta de examen: analizar los tipos de poder en contextos concretos."
  },
  {
    id: "T-076-D",
    eje: "Teoría Social",
    sourceId: 76,
    kind: "direct",
    prompt: "Problema teórico que busca explicar por qué existen jerarquías persistentes y cómo se producen históricamente.",
    answer: "Desigualdad social: naturaleza y orígenes.",
    note: "Las respuestas van de la funcionalidad a la explotación y combinan múltiples dimensiones."
  },
  {
    id: "T-076-I",
    eje: "Teoría Social",
    sourceId: 76,
    kind: "inverse",
    prompt: "Explicaciones sobre las desigualdades que las leen como una motivación necesaria o como resultado de la dominación histórica.",
    answer: "Desigualdad social: naturaleza y orígenes.",
    note: "Ninguna desigualdad es natural por sí misma."
  },
  {
    id: "T-076-A",
    eje: "Teoría Social",
    sourceId: 76,
    kind: "cloze",
    prompt: "El punto crítico aquí es no _____ la desigualdad.",
    answer: "naturalizar.",
    note: "Alerta de examen: reconocer su carácter histórico y construido."
  },
  {
    id: "T-077-D",
    eje: "Teoría Social",
    sourceId: 77,
    kind: "direct",
    prompt: "Estructuras jerárquicas que distribuyen posiciones, oportunidades y experiencias de vida de manera desigual.",
    answer: "Sistemas de estratificación social.",
    note: "Pueden organizarse por clase, estatus, poder o combinaciones."
  },
  {
    id: "T-077-I",
    eje: "Teoría Social",
    sourceId: 77,
    kind: "inverse",
    prompt: "Ordenamiento social que ubica a poblaciones en lugares diferenciados según sus recursos, prestigio o capacidad de decisión.",
    answer: "Sistemas de estratificación social.",
    note: "Moldean oportunidades e identidades."
  },
  {
    id: "T-077-A",
    eje: "Teoría Social",
    sourceId: 77,
    kind: "cloze",
    prompt: "El análisis correcto aquí debe reconocer también sus dimensiones _____.",
    answer: "interseccionales.",
    note: "Alerta de examen: ver cómo clase, estatus y poder se combinan."
  },
  {
    id: "T-078-D",
    eje: "Teoría Social",
    sourceId: 78,
    kind: "direct",
    prompt: "Agrupamientos definidos por una posición semejante en relación con la economía, los recursos y las oportunidades.",
    answer: "Clases sociales.",
    note: "Pueden leerse desde la relación con los medios de producción o desde las opciones de vida."
  },
  {
    id: "T-078-I",
    eje: "Teoría Social",
    sourceId: 78,
    kind: "inverse",
    prompt: "Categorías sociales que no son solo estadísticas, sino potenciales actores políticos con intereses compartidos.",
    answer: "Clases sociales.",
    note: "Son clave para leer oportunidades y límites estructurales."
  },
  {
    id: "T-078-A",
    eje: "Teoría Social",
    sourceId: 78,
    kind: "cloze",
    prompt: "El error común es convertir la clase en una variable fija y olvidar su dimensión _____.",
    answer: "política.",
    note: "Alerta de examen: evitar el determinismo de clase sin borrar su fuerza explicativa."
  },
  {
    id: "T-079-D",
    eje: "Teoría Social",
    sourceId: 79,
    kind: "direct",
    prompt: "Red de confianza, reciprocidad y participación que facilita la cooperación y el acceso a recursos.",
    answer: "Capital social.",
    note: "Puede fortalecer la acción colectiva, aunque no siempre de forma inclusiva."
  },
  {
    id: "T-079-I",
    eje: "Teoría Social",
    sourceId: 79,
    kind: "inverse",
    prompt: "Conjunto de relaciones y normas cívicas que permite resolver problemas colectivos y mediar el acceso a bienes.",
    answer: "Capital social.",
    note: "No es solo un recurso individual; depende de pertenencias sociales."
  },
  {
    id: "T-079-A",
    eje: "Teoría Social",
    sourceId: 79,
    kind: "cloze",
    prompt: "Debe valorarse sin _____, porque algunas redes también excluyen y cierran oportunidades.",
    answer: "romantizarlo.",
    note: "Alerta de examen: reconocer tanto su potencia como sus límites."
  },
  {
    id: "T-080-D",
    eje: "Teoría Social",
    sourceId: 80,
    kind: "direct",
    prompt: "Proceso continuo por el que se aprenden normas, valores, roles y comportamientos dentro de una cultura.",
    answer: "Socialización.",
    note: "No termina en la infancia; atraviesa toda la vida."
  },
  {
    id: "T-080-I",
    eje: "Teoría Social",
    sourceId: 80,
    kind: "inverse",
    prompt: "Aprendizaje permanente de pautas culturales en familia, escuela, pares, medios y trabajo.",
    answer: "Socialización.",
    note: "También abre la pregunta por la resocialización."
  },
  {
    id: "T-080-A",
    eje: "Teoría Social",
    sourceId: 80,
    kind: "cloze",
    prompt: "El rasgo decisivo aquí es su carácter _____, no exclusivamente infantil.",
    answer: "continuo.",
    note: "Alerta de examen: pensarla como un proceso permanente."
  },
  {
    id: "T-081-D",
    eje: "Teoría Social",
    sourceId: 81,
    kind: "direct",
    prompt: "Sistema de símbolos, códigos y prácticas que da sentido compartido a la vida social.",
    answer: "Cultura como sistema simbólico.",
    note: "No es homogénea; contiene conflicto y creatividad."
  },
  {
    id: "T-081-I",
    eje: "Teoría Social",
    sourceId: 81,
    kind: "inverse",
    prompt: "Trama de significados que posibilita la comunicación, interpretación compartida y transmisión intergeneracional.",
    answer: "Cultura como sistema simbólico.",
    note: "Debe entenderse junto con el poder y las condiciones materiales."
  },
  {
    id: "T-081-A",
    eje: "Teoría Social",
    sourceId: 81,
    kind: "cloze",
    prompt: "El sesgo a evitar aquí es el _____ cultural, que olvida los recursos y el poder.",
    answer: "reduccionismo.",
    note: "Alerta de examen: no esencializar la cultura."
  },
  {
    id: "T-082-D",
    eje: "Teoría Social",
    sourceId: 82,
    kind: "direct",
    prompt: "Construcción relacional y cambiante del sentido de sí, conformada por pertenencias, reconocimientos y diferencias.",
    answer: "Identidad social.",
    note: "No es una esencia fija; es un proceso."
  },
  {
    id: "T-082-I",
    eje: "Teoría Social",
    sourceId: 82,
    kind: "inverse",
    prompt: "Proceso social por el cual una persona se reconoce y es reconocida desde múltiples pertenencias activadas contextualmente.",
    answer: "Identidad social.",
    note: "Puede ser emancipadora o volverse un encierro."
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
    prompt: "Sistema social que organiza diferencias, jerarquías y relaciones de poder alrededor del sexo.",
    answer: "Género como categoría social.",
    note: "No es biología; es una construcción histórico-social."
  },
  {
    id: "T-083-I",
    eje: "Teoría Social",
    sourceId: 83,
    kind: "inverse",
    prompt: "Marco de análisis que explica las divisiones del trabajo, acceso desigual al poder y violencias específicas como un producto social.",
    answer: "Género como categoría social.",
    note: "Es imprescindible para leer opresiones persistentes."
  },
  {
    id: "T-083-A",
    eje: "Teoría Social",
    sourceId: 83,
    kind: "cloze",
    prompt: "El error a combatir es la _____ de las desigualdades de género.",
    answer: "naturalización.",
    note: "Alerta de examen: aplicar el análisis de género sin reducirlo a biología."
  },
  {
    id: "T-084-D",
    eje: "Teoría Social",
    sourceId: 84,
    kind: "direct",
    prompt: "Proceso por el cual las diferencias culturales son convertidas en marcas supuestamente naturales que justifican jerarquías.",
    answer: "Etnicidad y procesos de racialización.",
    note: "La etnicidad puede ser pertenencia; la racialización, dominación."
  },
  {
    id: "T-084-I",
    eje: "Teoría Social",
    sourceId: 84,
    kind: "inverse",
    prompt: "Análisis de pertenencias culturales y de la fabricación social de razas para explotar, excluir o jerarquizar.",
    answer: "Etnicidad y procesos de racialización.",
    note: "Permite pensar la fortaleza identitaria y el racismo estructural a la vez."
  },
  {
    id: "T-084-A",
    eje: "Teoría Social",
    sourceId: 84,
    kind: "cloze",
    prompt: "La tesis clave es que la raza no posee una base biológica suficiente; es una _____ social.",
    answer: "construcción.",
    note: "Alerta de examen: historicizar la racialización y sus efectos."
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
    prompt: "Enfoque teórico que pide tolerar la incertidumbre y pensar interacciones múltiples en lugar de causalidad simple.",
    answer: "Complejidad y pensamiento complejo.",
    note: "No equivale a vaguedad; exige más rigor, no menos."
  },
  {
    id: "T-085-A",
    eje: "Teoría Social",
    sourceId: 85,
    kind: "cloze",
    prompt: "La consigna metodológica central aquí es evitar el _____.",
    answer: "reduccionismo.",
    note: "Alerta de examen: no simplificar en exceso lo social."
  },
  {
    id: "T-086-D",
    eje: "Teoría Social",
    sourceId: 86,
    kind: "direct",
    prompt: "Diálogo entre saberes que produce comprensiones nuevas y no una mera suma de enfoques aislados.",
    answer: "Interdisciplinariedad teórica.",
    note: "Es un rasgo constitutivo del Trabajo Social."
  },
  {
    id: "T-086-I",
    eje: "Teoría Social",
    sourceId: 86,
    kind: "inverse",
    prompt: "Síntesis creativa entre sociología, psicología, antropología, política y economía para entender lo social.",
    answer: "Interdisciplinariedad teórica.",
    note: "Su desafío es integrar sin fragmentar."
  },
  {
    id: "T-086-A",
    eje: "Teoría Social",
    sourceId: 86,
    kind: "cloze",
    prompt: "El problema aquí no es la mezcla de disciplinas, sino la _____.",
    answer: "fragmentación.",
    note: "Alerta de examen: integrar perspectivas múltiples sin perder coherencia."
  },
  {
    id: "T-087-D",
    eje: "Teoría Social",
    sourceId: 87,
    kind: "direct",
    prompt: "Enfoque que estudia cómo la realidad social se constituye desde experiencias vividas y significados compartidos.",
    answer: "Fenomenología social.",
    note: "No niega las estructuras; muestra cómo son vividas y reproducidas."
  },
  {
    id: "T-087-I",
    eje: "Teoría Social",
    sourceId: 87,
    kind: "inverse",
    prompt: "Perspectiva que pregunta por el sentido de la experiencia y por cómo los actores constituyen su mundo cotidiano.",
    answer: "Fenomenología social.",
    note: "Aporta herramientas para comprender vivencias concretas."
  },
  {
    id: "T-087-A",
    eje: "Teoría Social",
    sourceId: 87,
    kind: "cloze",
    prompt: "La tarea teórica consiste en vincular la experiencia vivida con las _____.",
    answer: "estructuras sociales.",
    note: "Alerta de examen: evitar tanto el individualismo como el estructuralismo ciego."
  },
  {
    id: "T-088-D",
    eje: "Teoría Social",
    sourceId: 88,
    kind: "direct",
    prompt: "Nombre de la objeción que cuestiona estudiar lo social como naturaleza regida por leyes mecánicas.",
    answer: "Crítica del positivismo en teoría social.",
    note: "Resalta el significado, la reflexividad y el contexto."
  },
  {
    id: "T-088-I",
    eje: "Teoría Social",
    sourceId: 88,
    kind: "inverse",
    prompt: "Argumento que pide complementar la explicación causal con la comprensión hermenéutica dada la especificidad del objeto social.",
    answer: "Crítica del positivismo en teoría social.",
    note: "No implica renunciar al rigor."
  },
  {
    id: "T-088-A",
    eje: "Teoría Social",
    sourceId: 88,
    kind: "cloze",
    prompt: "La crítica no pide abandonar la ciencia, sino reconocer que lo social requiere también interpretación _____.",
    answer: "hermenéutica.",
    note: "Alerta de examen: evitar caricaturizar la crítica al positivismo."
  },
  {
    id: "T-089-D",
    eje: "Teoría Social",
    sourceId: 89,
    kind: "direct",
    prompt: "Revisión de los supuestos de progreso lineal, eurocentrismo y dominio que estructuran la modernidad occidental.",
    answer: "Crítica de la razón moderna.",
    note: "Señala que la modernidad emancipa y domina al mismo tiempo."
  },
  {
    id: "T-089-I",
    eje: "Teoría Social",
    sourceId: 89,
    kind: "inverse",
    prompt: "Perspectiva que cuestiona la fe ciega en el progreso y en la separación sujeto-objeto como bases incontestables.",
    answer: "Crítica de la razón moderna.",
    note: "No equivale a un rechazo ingenuo de toda modernidad."
  },
  {
    id: "T-089-A",
    eje: "Teoría Social",
    sourceId: 89,
    kind: "cloze",
    prompt: "La lectura equilibrada aquí evita tanto la idealización como el _____ ingenuo de la modernidad.",
    answer: "rechazo.",
    note: "Alerta de examen: aplicar la crítica con reflexividad."
  },
  {
    id: "T-090-D",
    eje: "Teoría Social",
    sourceId: 90,
    kind: "direct",
    prompt: "Debate sobre si el eje normativo central debe ser la autonomía individual o la interdependencia comunitaria.",
    answer: "Comunitarismo vs. individualismo.",
    note: "Trabajo Social necesita una síntesis practicable entre ambos."
  },
  {
    id: "T-090-I",
    eje: "Teoría Social",
    sourceId: 90,
    kind: "inverse",
    prompt: "Discusión teórica entre la primacía de derechos individuales y la prioridad de los bienes comunes y responsabilidades colectivas.",
    answer: "Comunitarismo vs. individualismo.",
    note: "Ningún extremo alcanza por sí solo."
  },
  {
    id: "T-090-A",
    eje: "Teoría Social",
    sourceId: 90,
    kind: "cloze",
    prompt: "La clave aquí no es elegir un extremo, sino construir una _____.",
    answer: "síntesis.",
    note: "Alerta de examen: evitar reducciones individualistas o comunitaristas puras."
  },
  {
    id: "T-091-D",
    eje: "Teoría Social",
    sourceId: 91,
    kind: "direct",
    prompt: "Enfoque que une la crítica de estructuras injustas con la búsqueda activa de emancipación.",
    answer: "Teoría crítica y emancipación.",
    note: "No se conforma con describir; busca transformar."
  },
  {
    id: "T-091-I",
    eje: "Teoría Social",
    sourceId: 91,
    kind: "inverse",
    prompt: "Perspectiva que expone contradicciones del orden social y señala posibilidades de cambio liberador.",
    answer: "Teoría crítica y emancipación.",
    note: "Su desafío es no imponer emancipación desde fuera."
  },
  {
    id: "T-091-A",
    eje: "Teoría Social",
    sourceId: 91,
    kind: "cloze",
    prompt: "La apuesta distintiva aquí es pasar de la crítica a la _____.",
    answer: "emancipación.",
    note: "Alerta de examen: aplicar la crítica respetando la autonomía de los afectados."
  },
  {
    id: "T-092-D",
    eje: "Teoría Social",
    sourceId: 92,
    kind: "direct",
    prompt: "Idea de organización política que exige más que elecciones: requiere incidencia real, información y respeto a minorías.",
    answer: "Democracia y participación política.",
    note: "Apunta a una democracia sustantiva."
  },
  {
    id: "T-092-I",
    eje: "Teoría Social",
    sourceId: 92,
    kind: "inverse",
    prompt: "Modelo político en el que la ciudadanía participa activamente y no solo delega periódicamente el poder.",
    answer: "Democracia y participación política.",
    note: "Trabajo Social puede fortalecer el poder ciudadano."
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
    note: "No es una patología en sí mismo."
  },
  {
    id: "T-093-I",
    eje: "Teoría Social",
    sourceId: 93,
    kind: "inverse",
    prompt: "Enfrentamiento entre intereses o posiciones cuya gestión puede ser destructiva o transformadora.",
    answer: "Conflicto social.",
    note: "La tarea no es negarlo, sino canalizarlo."
  },
  {
    id: "T-093-A",
    eje: "Teoría Social",
    sourceId: 93,
    kind: "cloze",
    prompt: "La mirada crítica correcta no romantiza el conflicto, pero tampoco lo trata como pura _____.",
    answer: "patología.",
    note: "Alerta de examen: reconocer sus potenciales transformadores y sus riesgos."
  },
  {
    id: "T-094-D",
    eje: "Teoría Social",
    sourceId: 94,
    kind: "direct",
    prompt: "Condición de pertenencia política que incorpora derechos civiles, políticos y sociales conquistados históricamente.",
    answer: "Ciudadanía y derechos sociales.",
    note: "No son un regalo benigno, sino resultado de luchas."
  },
  {
    id: "T-094-I",
    eje: "Teoría Social",
    sourceId: 94,
    kind: "inverse",
    prompt: "Estatus que combina libertades, participación y garantías materiales para una pertenencia plena a la comunidad política.",
    answer: "Ciudadanía y derechos sociales.",
    note: "La ciudadanía activa requiere exigibilidad y acceso real."
  },
  {
    id: "T-094-A",
    eje: "Teoría Social",
    sourceId: 94,
    kind: "cloze",
    prompt: "La distinción clave aquí se da entre ciudadanía formal y ciudadanía _____.",
    answer: "sustantiva.",
    note: "Alerta de examen: evaluar el acceso real a derechos y no solo su declaración."
  },
  {
    id: "T-095-D",
    eje: "Teoría Social",
    sourceId: 95,
    kind: "direct",
    prompt: "Pregunta normativa por la distribución justa de bienes, cargas y oportunidades en la sociedad.",
    answer: "Justicia social.",
    note: "Puede pensarse desde la igualdad, la libertad o las capacidades."
  },
  {
    id: "T-095-I",
    eje: "Teoría Social",
    sourceId: 95,
    kind: "inverse",
    prompt: "Principio que orienta la reducción de desigualdades y el reconocimiento de la dignidad mediante el acceso equitativo a bienes sociales.",
    answer: "Justicia social.",
    note: "Es un compromiso constitutivo del Trabajo Social."
  },
  {
    id: "T-095-A",
    eje: "Teoría Social",
    sourceId: 95,
    kind: "cloze",
    prompt: "Toda intervención que invoque este principio debe traducirlo en implicaciones _____.",
    answer: "prácticas.",
    note: "Alerta de examen: articular una noción de justicia con una acción concreta."
  },
  {
    id: "T-096-D",
    eje: "Teoría Social",
    sourceId: 96,
    kind: "direct",
    prompt: "Diferencia entre dar a todos lo mismo y ajustar recursos según necesidades para alcanzar resultados justos.",
    answer: "Equidad vs. igualdad.",
    note: "La igualdad formal puede reproducir desigualdades de partida."
  },
  {
    id: "T-096-I",
    eje: "Teoría Social",
    sourceId: 96,
    kind: "inverse",
    prompt: "Distinción normativa donde el trato igual no basta si las condiciones iniciales son profundamente desiguales.",
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
    note: "Alerta de examen: argumentar medidas diferenciadas con base teórica."
  },
  {
    id: "T-097-D",
    eje: "Teoría Social",
    sourceId: 97,
    kind: "direct",
    prompt: "Planteamiento según el cual la justicia requiere tanto una distribución material justa como el respeto a la dignidad y a la diferencia.",
    answer: "Reconocimiento y redistribución.",
    note: "Una dimensión sin la otra deja formas activas de injusticia."
  },
  {
    id: "T-097-I",
    eje: "Teoría Social",
    sourceId: 97,
    kind: "inverse",
    prompt: "Doble criterio de justicia que une el acceso equitativo a recursos y la superación del estigma o desprecio social.",
    answer: "Reconocimiento y redistribución.",
    note: "Su integración es indispensable."
  },
  {
    id: "T-097-A",
    eje: "Teoría Social",
    sourceId: 97,
    kind: "cloze",
    prompt: "Ninguna política de justicia se completa si distribuye recursos pero niega el _____.",
    answer: "reconocimiento.",
    note: "Alerta de examen: evaluar políticas con ambos criterios simultáneamente."
  },
  {
    id: "T-098-D",
    eje: "Teoría Social",
    sourceId: 98,
    kind: "direct",
    prompt: "Idea de que la fragilidad no es una anomalía individual, sino una condición humana y social distribuida de modo desigual.",
    answer: "Vulnerabilidad como condición teórica.",
    note: "Algunas poblaciones cargan vulnerabilidades amplificadas por exclusión estructural."
  },
  {
    id: "T-098-I",
    eje: "Teoría Social",
    sourceId: 98,
    kind: "inverse",
    prompt: "Marco que desplaza la mirada desde sujetos defectuosos hacia ordenamientos sociales que intensifican o protegen fragilidades.",
    answer: "Vulnerabilidad como condición teórica.",
    note: "Cambia el foco de ayuda individual a reorganización protectora."
  },
  {
    id: "T-098-A",
    eje: "Teoría Social",
    sourceId: 98,
    kind: "cloze",
    prompt: "La advertencia decisiva es no tratar a la vulnerabilidad como un _____.",
    answer: "estigma.",
    note: "Alerta de examen: pensarla críticamente como condición y no como defecto."
  },
  {
    id: "T-099-D",
    eje: "Teoría Social",
    sourceId: 99,
    kind: "direct",
    prompt: "Conjunto de procesos para reconocer daños, reparar víctimas, exigir cuentas y evitar la repetición tras periodos de violencia.",
    answer: "Justicia transicional.",
    note: "Combina memoria, reparación, responsabilidad y garantías de no repetición."
  },
  {
    id: "T-099-I",
    eje: "Teoría Social",
    sourceId: 99,
    kind: "inverse",
    prompt: "Marco que busca reconstruir la convivencia después del conflicto mediante la verdad, la reparación y la rendición de cuentas.",
    answer: "Justicia transicional.",
    note: "No busca borrar el conflicto, sino procesarlo."
  },
  {
    id: "T-099-A",
    eje: "Teoría Social",
    sourceId: 99,
    kind: "cloze",
    prompt: "La pieza preventiva central aquí son las garantías de no _____.",
    answer: "repetición.",
    note: "Alerta de examen: comprender su carácter multidimensional."
  },
  {
    id: "T-100-D",
    eje: "Teoría Social",
    sourceId: 100,
    kind: "direct",
    prompt: "Principio que define al Trabajo Social como una profesión no neutral, comprometida con la justicia y la transformación.",
    answer: "Responsabilidad social profesional.",
    note: "Excede el deber técnico y exige rendición de cuentas a las comunidades."
  },
  {
    id: "T-100-I",
    eje: "Teoría Social",
    sourceId: 100,
    kind: "inverse",
    prompt: "Deber constitutivo de una profesión no neutral orientada al bienestar de poblaciones vulneradas y a la transformación social.",
    answer: "Responsabilidad social profesional.",
    note: "Es oportunidad y desafío permanente."
  },
  {
    id: "T-100-A",
    eje: "Teoría Social",
    sourceId: 100,
    kind: "cloze",
    prompt: "La idea central es que el Trabajo Social no es técnicamente neutro, sino socialmente _____.",
    answer: "responsable.",
    note: "Alerta de examen: reflexionar sobre el compromiso ético-político profesional."
  }
];

export default flashcardsActiveRecall;