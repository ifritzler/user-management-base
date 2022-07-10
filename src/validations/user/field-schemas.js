import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo no es valido, debe ser un String',
        format: 'El formato de _id no es valido, debe ser un uuid4',
    },
});
export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'El nombre debe tener al menos 2 caracteres de longitud',
        maxLength: 'El nombre debe tener como maximo 20 caracteres de longitud',
    },
});
export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El apellido debe tener al menos 4 caracteres de longitud',
        maxLength:
            'El apellido debe tener como maximo 50 caracteres de longitud',
    },
});
export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo no es valido, debe ser un String',
        format: 'El formato de email no es valido, debe ser tal como: example@domain.com',
    },
});
export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El tipo de la contraseña no es valido',
        format: 'Debe contener una mayuscula, una minuscula y un numero',
        minLength:
            'La contraseña debe tener al menos 10 caracteres de longitud',
        maxLength:
            'La contraseña debe tener como maximo 25 caracteres de longitud',
    },
});

export const passwordLoginDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'Credenciales Incorrectas',
        format: 'Credenciales Incorrectas',
        minLength: 'Credenciales Incorrectas',
        maxLength: 'Credenciales Incorrectas',
    },
});
