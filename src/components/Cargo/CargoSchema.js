import * as yup from 'yup'

export const CargoSchema = yup.object().shape({
  cargo: yup.string()
    .min(5, 'El nombre del cargo es muy corto')
    .max(20, 'El nombre del cargo es muy largo')
})
