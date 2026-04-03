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
    prompt: "Nombre del marco que integra teoría, método y técnicas para intervenir de forma planificada en Trabajo Social.",
    answer: "Metodología en Trabajo Social.",
    note: "Integra diagnóstico, intervención y evaluación; no equivale a una técnica aislada."
  },
  {
    id: "M-021-I",
    eje: "Metodología",
    sourceId: 21,
    kind: "inverse",
    prompt: "Marco integrador que organiza procedimientos y técnicas con fundamento teórico y orientación al cambio social.",
    answer: "Metodología en Trabajo Social.",
    note: "Alcance: individual, grupal, comunitario e institucional."
  },
  {
    id: "M-021-A",
    eje: "Metodología",
    sourceId: 21,
    kind: "cloze",
    prompt: "El error clásico aquí es reducir _____ a un conjunto de técnicas sueltas.",
    answer: "la metodología.",
    note: "Alerta de examen: distinguir metodología de técnicas e instrumentos."
  },
  {
    id: "M-022-D",
    eje: "Metodología",
    sourceId: 22,
    kind: "direct",
    prompt: "Proceso cíclico que produce conocimiento sistemático sobre la realidad y, al mismo tiempo, fundamenta y evalúa la intervención.",
    answer: "Investigación social como fundamento metodológico.",
    note: "Intervención e investigación se retroalimentan."
  },
  {
    id: "M-022-I",
    eje: "Metodología",
    sourceId: 22,
    kind: "inverse",
    prompt: "Base que informa la intervención, evalúa prácticas y convierte la experiencia en conocimiento sistemático.",
    answer: "Investigación social como fundamento metodológico.",
    note: "No es una fase separada del trabajo profesional."
  },
  {
    id: "M-022-A",
    eje: "Metodología",
    sourceId: 22,
    kind: "cloze",
    prompt: "Separar por completo la investigación de la intervención rompe su relación _____.",
    answer: "cíclica.",
    note: "Alerta de examen: conectar investigación con sistematización y evaluación."
  },
  {
    id: "M-023-D",
    eje: "Metodología",
    sourceId: 23,
    kind: "direct",
    prompt: "Conjunto de aproximaciones que prioriza significados, experiencias, contexto y complejidad por encima de la mera medición numérica.",
    answer: "Métodos cualitativos en intervención social.",
    note: "Incluyen observación, entrevista profunda, grupos focales y análisis narrativo."
  },
  {
    id: "M-023-I",
    eje: "Metodología",
    sourceId: 23,
    kind: "inverse",
    prompt: "Aproximación que captura sentidos, interpreta experiencias y profundiza en las dimensiones ocultas del fenómeno social.",
    answer: "Métodos cualitativos en intervención social.",
    note: "Su fuerza radica en la comprensión densa del contexto."
  },
  {
    id: "M-023-A",
    eje: "Metodología",
    sourceId: 23,
    kind: "cloze",
    prompt: "Estos métodos son pertinentes cuando la pregunta exige comprender _____ antes que medir magnitudes.",
    answer: "significados y experiencias.",
    note: "Alerta de examen: justificar cuándo conviene un enfoque cualitativo."
  },
  {
    id: "M-024-D",
    eje: "Metodología",
    sourceId: 24,
    kind: "direct",
    prompt: "Aproximación que cuantifica fenómenos, detecta patrones y trabaja con instrumentos estandarizados y análisis numérico.",
    answer: "Métodos cuantitativos en intervención social.",
    note: "Permiten estimar proporciones, distribuciones y correlaciones."
  },
  {
    id: "M-024-I",
    eje: "Metodología",
    sourceId: 24,
    kind: "inverse",
    prompt: "Uso de medición estandarizada, datos numéricos y análisis estadístico para identificar patrones generalizables.",
    answer: "Métodos cuantitativos en intervención social.",
    note: "Aportan alcance comparativo y medición consistente."
  },
  {
    id: "M-024-A",
    eje: "Metodología",
    sourceId: 24,
    kind: "cloze",
    prompt: "La ventaja principal aquí no es comprender sentidos finos, sino _____, patrones y distribuciones.",
    answer: "cuantificar fenómenos.",
    note: "Alerta de examen: reconocer fortalezas sin caer en el cientificismo."
  },
  {
    id: "M-025-D",
    eje: "Metodología",
    sourceId: 25,
    kind: "direct",
    prompt: "Integración deliberada de métodos cualitativos y cuantitativos para validar hallazgos y construir una lectura multidimensional.",
    answer: "Enfoque mixto o triangulación metodológica.",
    note: "No es una yuxtaposición superficial; requiere diseño intencional."
  },
  {
    id: "M-025-I",
    eje: "Metodología",
    sourceId: 25,
    kind: "inverse",
    prompt: "Diseño que combina las fortalezas de distintos métodos para contrastar datos y ampliar la comprensión del fenómeno.",
    answer: "Enfoque mixto o triangulación metodológica.",
    note: "Busca validación cruzada y profundidad."
  },
  {
    id: "M-025-A",
    eje: "Metodología",
    sourceId: 25,
    kind: "cloze",
    prompt: "Si solo se yuxtaponen técnicas sin articulación epistémica, el resultado es una _____.",
    answer: "yuxtaposición superficial.",
    note: "Alerta de examen: argumentar la pertinencia del enfoque mixto."
  },
  {
    id: "M-026-D",
    eje: "Metodología",
    sourceId: 26,
    kind: "direct",
    prompt: "Proceso analítico previo a la acción que identifica problemas, recursos, fortalezas y contextos para construir una comprensión fundamentada.",
    answer: "Diagnóstico social.",
    note: "No es una descripción neutra; organiza la interpretación de la situación."
  },
  {
    id: "M-026-I",
    eje: "Metodología",
    sourceId: 26,
    kind: "inverse",
    prompt: "Lectura sistemática de actores, recursos, carencias y condiciones macrosociales antes de intervenir.",
    answer: "Diagnóstico social.",
    note: "Integra miradas de participantes y contexto histórico."
  },
  {
    id: "M-026-A",
    eje: "Metodología",
    sourceId: 26,
    kind: "cloze",
    prompt: "El diagnóstico deja de ser tal cuando se reduce a una simple _____.",
    answer: "descripción.",
    note: "Alerta de examen: enfatizar su carácter analítico e interpretativo."
  },
  {
    id: "M-027-D",
    eje: "Metodología",
    sourceId: 27,
    kind: "direct",
    prompt: "Secuencia que va de la exploración inicial a la recolección intensiva, el análisis, la triangulación y la comunicación de resultados.",
    answer: "Fases del diagnóstico social.",
    note: "Cada etapa condiciona a las demás."
  },
  {
    id: "M-027-I",
    eje: "Metodología",
    sourceId: 27,
    kind: "inverse",
    prompt: "Exploración preliminar, recolección de datos, interpretación, triangulación y devolución como estructura secuencial.",
    answer: "Fases del diagnóstico social.",
    note: "No son compartimentos estancos."
  },
  {
    id: "M-027-A",
    eje: "Metodología",
    sourceId: 27,
    kind: "cloze",
    prompt: "Aprender esta secuencia exige reconocer no solo cada etapa, sino también sus _____.",
    answer: "interdependencias.",
    note: "Alerta de examen: describir la lógica entre fases y no solo enlistarlas."
  },
  {
    id: "M-028-D",
    eje: "Metodología",
    sourceId: 28,
    kind: "direct",
    prompt: "Herramientas para obtener datos de forma sistemática, seleccionadas según el problema, el contexto y la finalidad analítica.",
    answer: "Técnicas de recolección de información.",
    note: "Entrevistas, observación, grupos focales, encuestas y documentos son algunas de ellas."
  },
  {
    id: "M-028-I",
    eje: "Metodología",
    sourceId: 28,
    kind: "inverse",
    prompt: "Instrumentos concretos que permiten levantar datos y cuya pertinencia depende del problema y del contexto.",
    answer: "Técnicas de recolección de información.",
    note: "Se eligen estratégicamente, no por costumbre."
  },
  {
    id: "M-028-A",
    eje: "Metodología",
    sourceId: 28,
    kind: "cloze",
    prompt: "La elección correcta aquí depende de la pertinencia contextual y de la _____ metodológica.",
    answer: "justificación.",
    note: "Alerta de examen: seleccionar técnicas con argumentos, no por preferencia personal."
  },
  {
    id: "M-029-D",
    eje: "Metodología",
    sourceId: 29,
    kind: "direct",
    prompt: "Conjunto de criterios que garantiza que el diagnóstico mida lo que pretende medir y lo haga con consistencia.",
    answer: "Validez y confiabilidad en diagnóstico.",
    note: "Se fortalecen con triangulación, validación con participantes y credibilidad analítica."
  },
  {
    id: "M-029-I",
    eje: "Metodología",
    sourceId: 29,
    kind: "inverse",
    prompt: "Calidad de una estrategia diagnóstica cuando sus hallazgos son pertinentes y consistentes.",
    answer: "Validez y confiabilidad en diagnóstico.",
    note: "La primera apunta a la pertinencia; la segunda, a la estabilidad."
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
    prompt: "Operación analítica que descompone problemas complejos en dimensiones, causas, actores y recursos sin culpabilizar a las víctimas.",
    answer: "Análisis de problemas sociales.",
    note: "Exige una mirada holística y estructural."
  },
  {
    id: "M-030-I",
    eje: "Metodología",
    sourceId: 30,
    kind: "inverse",
    prompt: "Proceso que reconstruye causas, mapea actores, identifica recursos y evita explicaciones superficiales sobre una problemática.",
    answer: "Análisis de problemas sociales.",
    note: "Se opone al reduccionismo causal y al individualismo patologizante."
  },
  {
    id: "M-030-A",
    eje: "Metodología",
    sourceId: 30,
    kind: "cloze",
    prompt: "El sesgo que debe evitarse aquí consiste en trasladar la causa principal al individuo y no a la trama _____.",
    answer: "estructural.",
    note: "Alerta de examen: aplicar pensamiento crítico frente a explicaciones simplistas."
  },
  {
    id: "M-031-D",
    eje: "Metodología",
    sourceId: 31,
    kind: "direct",
    prompt: "Proceso de producir, organizar y transferir el saber profesional a partir de la documentación y sistematización de experiencias.",
    answer: "Gestión del conocimiento en la práctica social.",
    note: "Convierte experiencia dispersa en aprendizaje transferible."
  },
  {
    id: "M-031-I",
    eje: "Metodología",
    sourceId: 31,
    kind: "inverse",
    prompt: "Documentación, sistematización, generación de aprendizajes y difusión de resultados como base del saber profesional acumulable.",
    answer: "Gestión del conocimiento en la práctica social.",
    note: "Favorece la formación y la mejora continua."
  },
  {
    id: "M-031-A",
    eje: "Metodología",
    sourceId: 31,
    kind: "cloze",
    prompt: "Sin sistematización, la experiencia queda como vivencia útil pero no como _____ transferible.",
    answer: "conocimiento.",
    note: "Alerta de examen: valorar la sistematización como parte del trabajo metodológico."
  },
  {
    id: "M-032-D",
    eje: "Metodología",
    sourceId: 32,
    kind: "direct",
    prompt: "Construcción ordenada de acciones, objetivos, recursos y tiempos con base en el diagnóstico y apertura a ajustes.",
    answer: "Planificación de intervenciones sociales.",
    note: "Articula diagnóstico, acción y evaluación."
  },
  {
    id: "M-032-I",
    eje: "Metodología",
    sourceId: 32,
    kind: "inverse",
    prompt: "Proceso que organiza objetivos, estrategias, actividades y cronograma sin perder flexibilidad ni participación.",
    answer: "Planificación de intervenciones sociales.",
    note: "Un buen plan no es rígido."
  },
  {
    id: "M-032-A",
    eje: "Metodología",
    sourceId: 32,
    kind: "cloze",
    prompt: "La virtud de un plan no es su rigidez, sino su coherencia y su _____ frente al contexto emergente.",
    answer: "flexibilidad.",
    note: "Alerta de examen: distinguir planificación rigurosa de planificación inflexible."
  },
  {
    id: "M-033-D",
    eje: "Metodología",
    sourceId: 33,
    kind: "direct",
    prompt: "Conjunto de enfoques para construir planes según el problema, el nivel de participación y el tipo de decisión requerida.",
    answer: "Métodos de planificación en Trabajo Social.",
    note: "Incluyen planificación participativa, estratégica, situacional y desde capacidades locales."
  },
  {
    id: "M-033-I",
    eje: "Metodología",
    sourceId: 33,
    kind: "inverse",
    prompt: "Diferentes enfoques que varían en dimensiones priorizadas, niveles de participación y modo de decidir sobre una intervención.",
    answer: "Métodos de planificación en Trabajo Social.",
    note: "La selección depende de la pertinencia contextual."
  },
  {
    id: "M-033-A",
    eje: "Metodología",
    sourceId: 33,
    kind: "cloze",
    prompt: "No existe un método universal de planificación; la clave es la _____ contextual.",
    answer: "pertinencia.",
    note: "Alerta de examen: caracterizar y comparar métodos, no memorizar uno solo."
  },
  {
    id: "M-034-D",
    eje: "Metodología",
    sourceId: 34,
    kind: "direct",
    prompt: "Operación de formular metas específicas, medibles, alcanzables, relevantes y delimitadas en el tiempo.",
    answer: "Establecimiento de objetivos en intervención.",
    note: "Distingue objetivos de proceso, producto e impacto."
  },
  {
    id: "M-034-I",
    eje: "Metodología",
    sourceId: 34,
    kind: "inverse",
    prompt: "Definición rigurosa de metas que orientan el proceso, los resultados inmediatos y los cambios duraderos de una intervención.",
    answer: "Establecimiento de objetivos en intervención.",
    note: "Su coherencia debe derivarse del diagnóstico."
  },
  {
    id: "M-034-A",
    eje: "Metodología",
    sourceId: 34,
    kind: "cloze",
    prompt: "Un objetivo bien formulado no solo debe ser claro; también debe ser temporalmente _____.",
    answer: "delimitado.",
    note: "Alerta de examen: formular objetivos con criterio metodológico riguroso."
  },
  {
    id: "M-035-D",
    eje: "Metodología",
    sourceId: 35,
    kind: "direct",
    prompt: "Administración estratégica de recursos humanos, económicos y materiales para maximizar la efectividad en una intervención.",
    answer: "Gestión de recursos en intervención social.",
    note: "Implica inventariar, asignar, optimizar y rendir cuentas."
  },
  {
    id: "M-035-I",
    eje: "Metodología",
    sourceId: 35,
    kind: "inverse",
    prompt: "Proceso que moviliza disponibilidades, optimiza usos y combina creatividad con rendición de cuentas.",
    answer: "Gestión de recursos en intervención social.",
    note: "También incluye la activación de potencialidades locales y acceso a fondos externos."
  },
  {
    id: "M-035-A",
    eje: "Metodología",
    sourceId: 35,
    kind: "cloze",
    prompt: "Manejar recursos con calidad no significa gastar más, sino asignar de forma _____.",
    answer: "estratégica.",
    note: "Alerta de examen: evaluar eficiencia y efectividad sin reducir todo a costos."
  },
  {
    id: "M-036-D",
    eje: "Metodología",
    sourceId: 36,
    kind: "direct",
    prompt: "Parámetros que permiten monitorear actividades y medir los cambios producidos por una intervención.",
    answer: "Indicadores de proceso y resultado.",
    note: "Deben ser relevantes, verificables y útiles."
  },
  {
    id: "M-036-I",
    eje: "Metodología",
    sourceId: 36,
    kind: "inverse",
    prompt: "Medidas construidas para seguir el desarrollo de acciones y apreciar transformaciones en poblaciones o contextos.",
    answer: "Indicadores de proceso y resultado.",
    note: "Los primeros observan el trayecto; los segundos, los efectos inmediatos."
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
    prompt: "Proceso crítico-reflexivo que determina la eficacia, eficiencia e impacto mediante distintas preguntas y momentos de valoración.",
    answer: "Evaluación de intervenciones sociales.",
    note: "Puede ser diagnóstica, de proceso, de resultado o de impacto."
  },
  {
    id: "M-037-I",
    eje: "Metodología",
    sourceId: 37,
    kind: "inverse",
    prompt: "Valoración sistemática de una acción social para saber cómo se desarrolla, qué logra y qué cambios deja.",
    answer: "Evaluación de intervenciones sociales.",
    note: "No es una simple medición final."
  },
  {
    id: "M-037-A",
    eje: "Metodología",
    sourceId: 37,
    kind: "cloze",
    prompt: "Reducir la evaluación al cierre del proyecto elimina su dimensión de _____ y ajuste.",
    answer: "monitoreo.",
    note: "Alerta de examen: diferenciar tipos y funciones de la evaluación."
  },
  {
    id: "M-038-D",
    eje: "Metodología",
    sourceId: 38,
    kind: "direct",
    prompt: "Metodología que ordena reflexivamente las experiencias para convertirlas en conocimiento explícito y comunicable.",
    answer: "Sistematización de experiencias.",
    note: "Implica ordenamiento, interpretación y extrapolación."
  },
  {
    id: "M-038-I",
    eje: "Metodología",
    sourceId: 38,
    kind: "inverse",
    prompt: "Proceso que transforma una práctica vivida en saber explicitado, analizado y compartible.",
    answer: "Sistematización de experiencias.",
    note: "Produce aprendizaje colectivo y mejora continua."
  },
  {
    id: "M-038-A",
    eje: "Metodología",
    sourceId: 38,
    kind: "cloze",
    prompt: "La diferencia decisiva aquí no es entre hacer y escribir, sino entre vivir una experiencia y _____.",
    answer: "sistematizarla.",
    note: "Alerta de examen: distinguir experiencia de sistematización."
  },
  {
    id: "M-039-D",
    eje: "Metodología",
    sourceId: 39,
    kind: "direct",
    prompt: "Perspectiva que fundamenta la intervención en la dignidad humana, la titularidad de derechos y las obligaciones estatales.",
    answer: "Enfoque de derechos en metodología.",
    note: "Reemplaza la tutela asistencialista por reconocimiento y exigibilidad."
  },
  {
    id: "M-039-I",
    eje: "Metodología",
    sourceId: 39,
    kind: "inverse",
    prompt: "Marco de intervención que trata a las personas como titulares de derechos y no como receptoras pasivas de ayuda.",
    answer: "Enfoque de derechos en metodología.",
    note: "Transforma la relación profesional-usuario."
  },
  {
    id: "M-039-A",
    eje: "Metodología",
    sourceId: 39,
    kind: "cloze",
    prompt: "El cambio central aquí consiste en pasar del asistencialismo a la _____.",
    answer: "titularidad de derechos.",
    note: "Alerta de examen: aplicar el enfoque de derechos de forma consistente."
  },
  {
    id: "M-040-D",
    eje: "Metodología",
    sourceId: 40,
    kind: "direct",
    prompt: "Metodología centrada en el acompañamiento personalizado de situaciones particulares sin perder de vista los determinantes sociales.",
    answer: "Trabajo Social de casos individual.",
    note: "Combina relación de ayuda, diagnóstico contextual y seguimiento."
  },
  {
    id: "M-040-I",
    eje: "Metodología",
    sourceId: 40,
    kind: "inverse",
    prompt: "Intervención profesional focalizada en una persona y su situación específica, articulada con su contexto.",
    answer: "Trabajo Social de casos individual.",
    note: "No debe confundirse con patologización individual."
  },
  {
    id: "M-040-A",
    eje: "Metodología",
    sourceId: 40,
    kind: "cloze",
    prompt: "La condición metodológica clave aquí es no perder la lectura _____ del caso.",
    answer: "contextual.",
    note: "Alerta de examen: evitar reducir el problema a rasgos personales."
  },
  {
    id: "M-041-D",
    eje: "Metodología",
    sourceId: 41,
    kind: "direct",
    prompt: "Vínculo profesional basado en el respeto, la confidencialidad, la autenticidad y la orientación hacia la autonomía del usuario.",
    answer: "Relación de ayuda profesional.",
    note: "No es amistad ni horizontalidad despreocupada."
  },
  {
    id: "M-041-I",
    eje: "Metodología",
    sourceId: 41,
    kind: "inverse",
    prompt: "Interacción profesional con límites claros, roles definidos y finalidad de empoderamiento.",
    answer: "Relación de ayuda profesional.",
    note: "Exige el manejo de límites y transferencias."
  },
  {
    id: "M-041-A",
    eje: "Metodología",
    sourceId: 41,
    kind: "cloze",
    prompt: "Confundir este vínculo con una amistad elimina su carácter _____.",
    answer: "profesional.",
    note: "Alerta de examen: distinguirla de otras relaciones interpersonales."
  },
  {
    id: "M-042-D",
    eje: "Metodología",
    sourceId: 42,
    kind: "direct",
    prompt: "Metodología que utiliza la interacción colectiva y el apoyo mutuo para procesos educativos, organizativos y transformadores.",
    answer: "Trabajo Social grupal.",
    note: "El grupo tiene potencia propia; no es la suma de individuos."
  },
  {
    id: "M-042-I",
    eje: "Metodología",
    sourceId: 42,
    kind: "inverse",
    prompt: "Uso del grupo como espacio de aprendizaje, identificación colectiva y movilización sobre problemas comunes.",
    answer: "Trabajo Social grupal.",
    note: "Permite procesos que exceden la intervención individual."
  },
  {
    id: "M-042-A",
    eje: "Metodología",
    sourceId: 42,
    kind: "cloze",
    prompt: "Reducir el grupo a personas aisladas impide comprender su dinámica _____.",
    answer: "colectiva.",
    note: "Alerta de examen: reconocer el potencial específico del trabajo grupal."
  },
  {
    id: "M-043-D",
    eje: "Metodología",
    sourceId: 43,
    kind: "direct",
    prompt: "Técnicas que aprovechan la interacción grupal para generar confianza, aprendizaje y reflexión compartida.",
    answer: "Dinámicas de grupo como herramienta metodológica.",
    note: "Incluyen juegos, dramatizaciones, colaboración y análisis colectivo."
  },
  {
    id: "M-043-I",
    eje: "Metodología",
    sourceId: 43,
    kind: "inverse",
    prompt: "Uso intencional de actividades grupales para profundizar aprendizajes y fortalecer vínculos.",
    answer: "Dinámicas de grupo como herramienta metodológica.",
    note: "La técnica siempre debe estar subordinada al objetivo."
  },
  {
    id: "M-043-A",
    eje: "Metodología",
    sourceId: 43,
    kind: "cloze",
    prompt: "Una dinámica vale metodológicamente cuando tiene _____, no solo entretenimiento.",
    answer: "intencionalidad.",
    note: "Alerta de examen: evaluar logros educativos y no solo animación."
  },
  {
    id: "M-044-D",
    eje: "Metodología",
    sourceId: 44,
    kind: "direct",
    prompt: "Intervención a nivel colectivo que promueve la organización, la participación y la movilización de recursos para transformar contextos.",
    answer: "Trabajo Social comunitario.",
    note: "La comunidad es un sujeto colectivo, no una receptora pasiva."
  },
  {
    id: "M-044-I",
    eje: "Metodología",
    sourceId: 44,
    kind: "inverse",
    prompt: "Método que fortalece la organización y el protagonismo de la comunidad para transformar su propio entorno.",
    answer: "Trabajo Social comunitario.",
    note: "Se opone al asistencialismo."
  },
  {
    id: "M-044-A",
    eje: "Metodología",
    sourceId: 44,
    kind: "cloze",
    prompt: "El principio central aquí es reemplazar la pasividad comunitaria por _____.",
    answer: "protagonismo.",
    note: "Alerta de examen: promover participación y organización genuinas."
  },
  {
    id: "M-045-D",
    eje: "Metodología",
    sourceId: 45,
    kind: "direct",
    prompt: "Enfoque pedagógico dialógico que convierte a la educación en conciencia crítica y acción transformadora.",
    answer: "Educación popular como metodología.",
    note: "Rechaza la transmisión vertical de saberes."
  },
  {
    id: "M-045-I",
    eje: "Metodología",
    sourceId: 45,
    kind: "inverse",
    prompt: "Método que problematiza la realidad, reconoce saberes previos y construye el aprendizaje en diálogo.",
    answer: "Educación popular como metodología.",
    note: "Los participantes son sujetos activos de transformación."
  },
  {
    id: "M-045-A",
    eje: "Metodología",
    sourceId: 45,
    kind: "cloze",
    prompt: "Cuando el conocimiento baja verticalmente desde un experto, se niega la lógica _____.",
    answer: "dialógica.",
    note: "Alerta de examen: evitar manipulación disfrazada de participación."
  },
  {
    id: "M-046-D",
    eje: "Metodología",
    sourceId: 46,
    kind: "direct",
    prompt: "Involucramiento con poder real de decisión en los procesos que afectan a las personas y comunidades.",
    answer: "Participación social como metodología.",
    note: "No equivale a una consulta decorativa."
  },
  {
    id: "M-046-I",
    eje: "Metodología",
    sourceId: 46,
    kind: "inverse",
    prompt: "Método que redistribuye poder, abre información y permite una influencia efectiva de la población en la intervención.",
    answer: "Participación social como metodología.",
    note: "Exige respeto genuino a los saberes comunitarios."
  },
  {
    id: "M-046-A",
    eje: "Metodología",
    sourceId: 46,
    kind: "cloze",
    prompt: "Cuando se escucha pero no se cede poder, la participación se vuelve _____.",
    answer: "superficial.",
    note: "Alerta de examen: criticar el participacionismo vacío."
  },
  {
    id: "M-047-D",
    eje: "Metodología",
    sourceId: 47,
    kind: "direct",
    prompt: "Proceso por el cual personas y comunidades amplían el control sobre su vida, el acceso a recursos y su capacidad de decisión.",
    answer: "Empoderamiento como proceso metodológico.",
    note: "No se entrega desde arriba; se construye."
  },
  {
    id: "M-047-I",
    eje: "Metodología",
    sourceId: 47,
    kind: "inverse",
    prompt: "Construcción reflexiva, organizacional y política de mayor autonomía, poder y protagonismo.",
    answer: "Empoderamiento como proceso metodológico.",
    note: "Debe producir cambios reales en la capacidad de decidir."
  },
  {
    id: "M-047-A",
    eje: "Metodología",
    sourceId: 47,
    kind: "cloze",
    prompt: "Si no cambia la capacidad real de decidir, el llamado empoderamiento se queda en pura _____.",
    answer: "retórica.",
    note: "Alerta de examen: evaluar si hubo cambios efectivos en poder y autonomía."
  },
  {
    id: "M-048-D",
    eje: "Metodología",
    sourceId: 48,
    kind: "direct",
    prompt: "Coordinación sostenida entre instituciones y sectores para abordar problemas de forma integral y no fragmentada.",
    answer: "Trabajo en red e intersectorialidad.",
    note: "Requiere aliados, roles claros y comunicación constante."
  },
  {
    id: "M-048-I",
    eje: "Metodología",
    sourceId: 48,
    kind: "inverse",
    prompt: "Articulación entre salud, educación, vivienda, empleo y otros campos sin perder la autonomía institucional.",
    answer: "Trabajo en red e intersectorialidad.",
    note: "Su objetivo es el abordaje integral."
  },
  {
    id: "M-048-A",
    eje: "Metodología",
    sourceId: 48,
    kind: "cloze",
    prompt: "El problema que esta metodología busca evitar es la _____ de las respuestas sociales.",
    answer: "fragmentación.",
    note: "Alerta de examen: evaluar la calidad real de la coordinación."
  },
  {
    id: "M-049-D",
    eje: "Metodología",
    sourceId: 49,
    kind: "direct",
    prompt: "Intervención de una tercera parte que facilita la comunicación y la construcción de acuerdos entre actores enfrentados.",
    answer: "Mediación y resolución de conflictos.",
    note: "Busca soluciones mutuamente satisfactorias, no imponerse."
  },
  {
    id: "M-049-I",
    eje: "Metodología",
    sourceId: 49,
    kind: "inverse",
    prompt: "Método para canalizar conflictos con neutralidad vigilante, empatía hacia ambas partes y creatividad en las opciones.",
    answer: "Mediación y resolución de conflictos.",
    note: "Difiere de la imposición autoritaria de una salida."
  },
  {
    id: "M-049-A",
    eje: "Metodología",
    sourceId: 49,
    kind: "cloze",
    prompt: "Cuando el tercero decide por las partes, deja de mediar y empieza a _____.",
    answer: "imponer.",
    note: "Alerta de examen: distinguir mediación de imposición de soluciones."
  },
  {
    id: "M-050-D",
    eje: "Metodología",
    sourceId: 50,
    kind: "direct",
    prompt: "Marco que entiende la fragilidad y la exposición al daño como resultados de exclusión, dinámicas económicas y falta de protección social.",
    answer: "Vulnerabilidad y riesgo social.",
    note: "No son meros atributos individuales."
  },
  {
    id: "M-050-I",
    eje: "Metodología",
    sourceId: 50,
    kind: "inverse",
    prompt: "Conceptualización que une la probabilidad de daño con la debilidad de capacidades para afrontarlo en contextos estructuralmente desiguales.",
    answer: "Vulnerabilidad y riesgo social.",
    note: "Relaciona la exposición con las protecciones disponibles."
  },
  {
    id: "M-050-A",
    eje: "Metodología",
    sourceId: 50,
    kind: "cloze",
    prompt: "El error que debe evitarse es explicar la vulnerabilidad como una falla _____ del sujeto.",
    answer: "individual.",
    note: "Alerta de examen: conectar vulnerabilidad con determinantes macrosociales."
  },
  {
    id: "M-051-D",
    eje: "Metodología",
    sourceId: 51,
    kind: "direct",
    prompt: "Intervención breve y rápida orientada a la contención, estabilización inmediata y activación de recursos ante una ruptura aguda.",
    answer: "Abordaje de situaciones de crisis.",
    note: "No resuelve todo el problema de fondo; abre paso a la recuperación posterior."
  },
  {
    id: "M-051-I",
    eje: "Metodología",
    sourceId: 51,
    kind: "inverse",
    prompt: "Respuesta metodológica que alivia el sufrimiento agudo, restaura la funcionalidad básica y prepara una recuperación posterior.",
    answer: "Abordaje de situaciones de crisis.",
    note: "Su temporalidad es inmediata."
  },
  {
    id: "M-051-A",
    eje: "Metodología",
    sourceId: 51,
    kind: "cloze",
    prompt: "La diferencia con una terapia de fondo radica en que aquí prima la _____ inmediata.",
    answer: "estabilización.",
    note: "Alerta de examen: diferenciar intervención en crisis de otros procesos largos."
  },
  {
    id: "M-052-D",
    eje: "Metodología",
    sourceId: 52,
    kind: "direct",
    prompt: "Intervención psicosocial que reconoce el daño, cuida la seguridad emocional y evita reactivar violentamente la herida.",
    answer: "Abordaje del trauma social.",
    note: "Integra recuperación, recursos comunitarios y búsqueda de justicia."
  },
  {
    id: "M-052-I",
    eje: "Metodología",
    sourceId: 52,
    kind: "inverse",
    prompt: "Método que combina el reconocimiento del daño, la prevención de la retraumatización y la movilización de apoyo social ante la violencia.",
    answer: "Abordaje del trauma social.",
    note: "La justicia puede ser parte del proceso reparador."
  },
  {
    id: "M-052-A",
    eje: "Metodología",
    sourceId: 52,
    kind: "cloze",
    prompt: "Una práctica correcta aquí debe evitar, por encima de todo, la _____.",
    answer: "retraumatización.",
    note: "Alerta de examen: integrar la dimensión psicosocial con la de justicia."
  },
  {
    id: "M-053-D",
    eje: "Metodología",
    sourceId: 53,
    kind: "direct",
    prompt: "Enfoque investigativo donde las comunidades participan como coinvestigadoras y el conocimiento se vincula con la transformación.",
    answer: "Metodología participativa en investigación social.",
    note: "Rompe con la figura del investigador neutral y aislado."
  },
  {
    id: "M-053-I",
    eje: "Metodología",
    sourceId: 53,
    kind: "inverse",
    prompt: "Producción colectiva de conocimiento que reconoce los saberes comunitarios y convierte el investigar en acción transformadora.",
    answer: "Metodología participativa en investigación social.",
    note: "Busca rigor y emancipación a la vez."
  },
  {
    id: "M-053-A",
    eje: "Metodología",
    sourceId: 53,
    kind: "cloze",
    prompt: "La tensión clave en este enfoque no es 'participación versus rigor', sino cómo sostener _____.",
    answer: "ambos.",
    note: "Alerta de examen: evaluar el balance entre transformación y calidad investigativa."
  },
  {
    id: "M-054-D",
    eje: "Metodología",
    sourceId: 54,
    kind: "direct",
    prompt: "Uso de la fotografía, el mapeo, el cine y otras expresiones visuales para comprender y transformar realidades sociales.",
    answer: "Métodos visuales en intervención social.",
    note: "Amplían la expresión más allá del lenguaje escrito."
  },
  {
    id: "M-054-I",
    eje: "Metodología",
    sourceId: 54,
    kind: "inverse",
    prompt: "Herramientas que capturan la complejidad y facilitan la conciencia mediante lenguajes visuales y sensorio-emotivos.",
    answer: "Métodos visuales en intervención social.",
    note: "Son útiles cuando la palabra no basta."
  },
  {
    id: "M-054-A",
    eje: "Metodología",
    sourceId: 54,
    kind: "cloze",
    prompt: "La fortaleza distintiva aquí consiste en valorar formas de expresión _____.",
    answer: "no verbales.",
    note: "Alerta de examen: integrar metodologías creativas con fundamento."
  },
  {
    id: "M-055-D",
    eje: "Metodología",
    sourceId: 55,
    kind: "direct",
    prompt: "Conjunto de principios que orienta toda intervención hacia el respeto, el consentimiento, la justicia y la responsabilidad profesional.",
    answer: "Ética en la práctica metodológica.",
    note: "Exige deliberación constante frente a dilemas complejos."
  },
  {
    id: "M-055-I",
    eje: "Metodología",
    sourceId: 55,
    kind: "inverse",
    prompt: "Marco que combina confidencialidad, autonomía, transparencia y justicia distributiva en la acción profesional.",
    answer: "Ética en la práctica metodológica.",
    note: "No ofrece respuestas automáticas; pide juicio responsable."
  },
  {
    id: "M-055-A",
    eje: "Metodología",
    sourceId: 55,
    kind: "cloze",
    prompt: "La ética profesional no elimina los dilemas; exige _____ sobre ellos.",
    answer: "deliberación.",
    note: "Alerta de examen: argumentar posiciones ante conflictos ético-metodológicos."
  },
  {
    id: "M-056-D",
    eje: "Metodología",
    sourceId: 56,
    kind: "direct",
    prompt: "Proceso reflexivo de extraer teoría práctica a partir de lo vivido, preguntando qué ocurrió y por qué.",
    answer: "Sistematización de aprendizajes.",
    note: "Sirve para autoformación y mejora de prácticas."
  },
  {
    id: "M-056-I",
    eje: "Metodología",
    sourceId: 56,
    kind: "inverse",
    prompt: "Conversión de experiencias en saber comunicable y útil para corregir, formar y enriquecer el acervo disciplinario.",
    answer: "Sistematización de aprendizajes.",
    note: "Es teoría desde la práctica."
  },
  {
    id: "M-056-A",
    eje: "Metodología",
    sourceId: 56,
    kind: "cloze",
    prompt: "El objetivo no es acumular recuerdos de la intervención, sino convertirlos en un _____ explícito.",
    answer: "aprendizaje.",
    note: "Alerta de examen: valorar la sistematización como autoformación continua."
  },
  {
    id: "M-057-D",
    eje: "Metodología",
    sourceId: 57,
    kind: "direct",
    prompt: "Seguimiento permanente que recoge información, la compara con la línea base y permite corregir el curso de una acción.",
    answer: "Monitoreo continuado de intervenciones.",
    note: "Su valor reside en la detección temprana y el ajuste oportuno."
  },
  {
    id: "M-057-I",
    eje: "Metodología",
    sourceId: 57,
    kind: "inverse",
    prompt: "Sistema de seguimiento con análisis frecuente y retroalimentación para mejorar iterativamente una intervención.",
    answer: "Monitoreo continuado de intervenciones.",
    note: "Debe ser funcional y no burocrático."
  },
  {
    id: "M-057-A",
    eje: "Metodología",
    sourceId: 57,
    kind: "cloze",
    prompt: "Cuando el seguimiento solo produce papeles y no decisiones, el monitoreo cae en la _____.",
    answer: "burocracia estéril.",
    note: "Alerta de examen: diseñar sistemas que realmente orienten los ajustes."
  },
  {
    id: "M-058-D",
    eje: "Metodología",
    sourceId: 58,
    kind: "direct",
    prompt: "Proceso de consolidar prácticas eficaces dentro de estructuras estables, presupuestos y políticas duraderas.",
    answer: "Institucionalización de prácticas exitosas.",
    note: "Busca la sostenibilidad más allá de iniciativas personales."
  },
  {
    id: "M-058-I",
    eje: "Metodología",
    sourceId: 58,
    kind: "inverse",
    prompt: "Documentación, capacitación, adecuación institucional y financiamiento para sostener intervenciones que funcionaron.",
    answer: "Institucionalización de prácticas exitosas.",
    note: "Permite ampliar beneficios a mayor escala."
  },
  {
    id: "M-058-A",
    eje: "Metodología",
    sourceId: 58,
    kind: "cloze",
    prompt: "El riesgo permanente al consolidar una práctica es su _____.",
    answer: "burocratización.",
    note: "Alerta de examen: evaluar la factibilidad de la institucionalización sin perder su sentido original."
  },
  {
    id: "M-059-D",
    eje: "Metodología",
    sourceId: 59,
    kind: "direct",
    prompt: "Proceso colectivo de adaptar, comunicar y hacer útil el conocimiento nuevo dentro de contextos concretos de intervención.",
    answer: "Transferencia de conocimiento en Trabajo Social.",
    note: "No es una transmisión vertical ni una receta descontextualizada."
  },
  {
    id: "M-059-I",
    eje: "Metodología",
    sourceId: 59,
    kind: "inverse",
    prompt: "Circulación del saber profesional mediante capacitación, documentación y redes de aprendizaje con adaptación local.",
    answer: "Transferencia de conocimiento en Trabajo Social.",
    note: "El conocimiento cambia cuando circula."
  },
  {
    id: "M-059-A",
    eje: "Metodología",
    sourceId: 59,
    kind: "cloze",
    prompt: "El principal error aquí es convertir el conocimiento en una _____ sin contexto.",
    answer: "receta.",
    note: "Alerta de examen: promover la adaptación creativa y no la copia automática."
  },
  {
    id: "M-060-D",
    eje: "Metodología",
    sourceId: 60,
    kind: "direct",
    prompt: "Valoración de una intervención construida con los beneficiarios como actores centrales del criterio, los datos y las decisiones.",
    answer: "Evaluación participativa.",
    note: "Desplaza la figura del experto solitario."
  },
  {
    id: "M-060-I",
    eje: "Metodología",
    sourceId: 60,
    kind: "inverse",
    prompt: "Proceso evaluativo donde quienes viven la intervención participan en definir criterios, analizar hallazgos y reorientar acciones.",
    answer: "Evaluación participativa.",
    note: "Aporta perspectivas que ningún observador externo posee por sí solo."
  },
  {
    id: "M-060-A",
    eje: "Metodología",
    sourceId: 60,
    kind: "cloze",
    prompt: "Si la población solo aparece para validar una decisión ya tomada, la participación es _____.",
    answer: "tokenista.",
    note: "Alerta de examen: evaluar la autenticidad de la participación."
  },
  {
    id: "M-061-D",
    eje: "Metodología",
    sourceId: 61,
    kind: "direct",
    prompt: "Enfoque que estudia las experiencias vividas, los sentidos y las estructuras de la experiencia desde la perspectiva del sujeto.",
    answer: "Métodos fenomenológicos en Trabajo Social.",
    note: "Capturan dimensiones existenciales, simbólicas y emocionales."
  },
  {
    id: "M-061-I",
    eje: "Metodología",
    sourceId: 61,
    kind: "inverse",
    prompt: "Método que privilegia el primer orden de la vivencia y busca comprender cómo se experimenta un fenómeno.",
    answer: "Métodos fenomenológicos en Trabajo Social.",
    note: "No reemplaza el contexto; lo articula con la experiencia."
  },
  {
    id: "M-061-A",
    eje: "Metodología",
    sourceId: 61,
    kind: "cloze",
    prompt: "El error opuesto sería convertir la experiencia en un dato puramente _____.",
    answer: "externo.",
    note: "Alerta de examen: comprender la fenomenología con rigor y no como impresionismo."
  },
  {
    id: "M-062-D",
    eje: "Metodología",
    sourceId: 62,
    kind: "direct",
    prompt: "Procedimientos para estudiar documentos, discursos y narrativas identificando patrones, significados y relaciones de poder.",
    answer: "Métodos de análisis textual.",
    note: "Incluyen análisis temático, narrativo, del discurso y hermenéutico."
  },
  {
    id: "M-062-I",
    eje: "Metodología",
    sourceId: 62,
    kind: "inverse",
    prompt: "Estrategias que leen textos y relatos para decodificar sentidos implícitos y reconstruir realidades desde el lenguaje.",
    answer: "Métodos de análisis textual.",
    note: "Requieren rigor interpretativo."
  },
  {
    id: "M-062-A",
    eje: "Metodología",
    sourceId: 62,
    kind: "cloze",
    prompt: "El riesgo de este enfoque es quedarse en una lectura _____ sin trabajo analítico.",
    answer: "superficial.",
    note: "Alerta de examen: sostener profundidad metodológica en la interpretación textual."
  },
  {
    id: "M-063-D",
    eje: "Metodología",
    sourceId: 63,
    kind: "direct",
    prompt: "Aproximación que reconstruye trayectorias vitales para leer en ellas los procesos históricos y las estructuras sociales.",
    answer: "Métodos de historias de vida.",
    note: "Conectan la singularidad biográfica con la condición social."
  },
  {
    id: "M-063-I",
    eje: "Metodología",
    sourceId: 63,
    kind: "inverse",
    prompt: "Uso de narrativas longitudinales y memoria reflexiva para entender cómo lo personal expresa lo histórico y lo político.",
    answer: "Métodos de historias de vida.",
    note: "No deben caer en el psicologismo."
  },
  {
    id: "M-063-A",
    eje: "Metodología",
    sourceId: 63,
    kind: "cloze",
    prompt: "La consigna analítica clave aquí es unir lo singular con lo _____.",
    answer: "estructural.",
    note: "Alerta de examen: evitar leer una biografía como un hecho aislado."
  },
  {
    id: "M-064-D",
    eje: "Metodología",
    sourceId: 64,
    kind: "direct",
    prompt: "Perspectiva que entiende las situaciones como resultado de interacciones recíprocas entre personas y múltiples contextos.",
    answer: "Enfoque ecosistémico en intervención.",
    note: "Rechaza la separación individuo-ambiente."
  },
  {
    id: "M-064-I",
    eje: "Metodología",
    sourceId: 64,
    kind: "inverse",
    prompt: "Lectura multinivel de influencias recíprocas entre sujeto, familia, comunidad, instituciones y estructura.",
    answer: "Enfoque ecosistémico en intervención.",
    note: "Busca integración y efectividad."
  },
  {
    id: "M-064-A",
    eje: "Metodología",
    sourceId: 64,
    kind: "cloze",
    prompt: "La clave teórica aquí es romper la dicotomía entre el individuo y su _____.",
    answer: "ambiente.",
    note: "Alerta de examen: evaluar siempre los múltiples niveles de influencia."
  },
  {
    id: "M-065-D",
    eje: "Metodología",
    sourceId: 65,
    kind: "direct",
    prompt: "Práctica reflexiva mediante la cual el profesional revisa fortalezas, límites y errores para mejorar continuamente.",
    answer: "Autoevaluación de prácticas profesionales.",
    note: "Requiere honestidad, apertura y compromiso con el cambio."
  },
  {
    id: "M-065-I",
    eje: "Metodología",
    sourceId: 65,
    kind: "inverse",
    prompt: "Herramienta de desarrollo profesional basada en la reflexión crítica sobre la propia acción.",
    answer: "Autoevaluación de prácticas profesionales.",
    note: "Debe fortalecer, no paralizar."
  },
  {
    id: "M-065-A",
    eje: "Metodología",
    sourceId: 65,
    kind: "cloze",
    prompt: "El equilibrio correcto aquí evita tanto la complacencia como la _____.",
    answer: "autoflagelación.",
    note: "Alerta de examen: promover la reflexión crítica productiva."
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