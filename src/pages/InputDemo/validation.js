import * as yup from 'yup';

const inputDemoSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  sport: yup.string().required(),
  sportValue: yup.string().required(),
});

export default inputDemoSchema;
