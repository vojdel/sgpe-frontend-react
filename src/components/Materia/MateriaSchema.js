import * as yup from 'yup'

export const MateriaSchema = yup.string()
  .min(5, 'El nombre de la materia es muy corto')
  .max(20, 'El nombre de la materia es muy largo')
