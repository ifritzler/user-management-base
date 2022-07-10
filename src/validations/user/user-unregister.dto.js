import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { passwordDTOSchema } from './field-schemas.js';

const UnRegisterDTOSchema = Type.Object(
    {
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

addErrors(ajv);

const validateSchema = ajv.compile(UnRegisterDTOSchema);

// Middleware
const userUnRegisterDTO = (req, res, next) => {
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

export default userUnRegisterDTO;
