import { faAddressBook, faChild, faMale, faChalkboard, faChalkboardTeacher, faMapMarkedAlt, faSchool, faUserTie, faUser } from '@fortawesome/free-solid-svg-icons'

export const listaMaestro = [
  {
    name: 'Dirección',
    collapse: 'collapseDireccion',
    icon: faAddressBook,
    can: 1,
    list: [
      { name: 'Estado', icon: faMapMarkedAlt, link: '/estado', can: 1 },
      { name: 'Municipio', icon: faMapMarkedAlt, link: '/municipio', can: 1 }
    ]
  },
  {
    name: 'Escuela',
    collapse: 'collapseEscuela',
    icon: faSchool,
    can: 1,
    list: [
      { name: 'Grado', icon: faSchool, link: '/grado', can: 1 },
      { name: 'Sección', icon: faSchool, link: '/seccion', can: 1 },
      { name: 'Periodo Escolar', icon: faSchool, link: '/periodoescolar', can: 1 },
      { name: 'Materia', icon: faSchool, link: '/materia', can: 1 }
    ]
  },
  {
    name: 'Personas',
    collapse: 'collapsePersona',
    icon: faMale,
    can: 3,
    list: [
      { name: 'Estudiante', icon: faChild, link: '/estudiante', can: 3 },
      { name: 'Personal', icon: faUserTie, link: '/personal', can: 1 },
      { name: 'Ocupación Laboral', icon: faUserTie, link: '/ocupacionlaboral', can: 1 },
      { name: 'Representante', icon: faUserTie, link: '/representante', can: 1 },
      { name: 'Cargo', icon: faUserTie, link: '/cargo', can: 1 },
      { name: 'Usuarios', icon: faUser, link: '/usuario', can: 1 }
    ]
  }
]

export const listaProcesos = [
  { name: 'Inscripción', icon: faChalkboard, link: '/inscripcion', can: 3 },
  { name: 'Notas', icon: faChalkboardTeacher, link: '/notas', can: 3 },
  { name: 'Asistencias', icon: faChalkboard, link: '/asistencia', can: 2 }
]
