import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import {
    emailDTOSchema,
    idDTOSchema,
    nameDTOSchema,
    passwordDTOSchema,
    surnameDTOSchema,
} from '#Validations/dto-types.js';

const RegisterDTOSchema = Type.Object(
    {
        _id: idDTOSchema,
        name: nameDTOSchema,
        surname: surnameDTOSchema,
        email: emailDTOSchema,
        password: passwordDTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'El formato del objeto enviado no es valido',
        },
    }
);

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
ajv.addFormat('password', /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormats(ajv, ['uuid', 'email']);
addErrors(ajv);

const validateSchema = ajv.compile(RegisterDTOSchema);

// Middleware
const userRegisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid) {
        const errors = {
            errors: validateSchema.errors.map((e) => {
                return {
                    field: e.instancePath.split('/')[1],
                    errorMessage: e.message,
                };
            }),
        };
        // Example response
        // {
        //     "errors": [
        //       {
        //         "field": "name",
        //         "errorMessage": "El nombre debe tener al menos 2 caracteres de longitud"
        //       },
        //       {
        //         "field": "surname",
        //         "errorMessage": "El apellido debe tener al menos 4 caracteres de longitud"
        //       }
        //     ]
        //   }
        return res.status(400).send(errors);
    }

    next();
};

export default userRegisterDTO;
