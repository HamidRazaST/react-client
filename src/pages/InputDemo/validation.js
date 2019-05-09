import * as yup from 'yup';

const inputDemoSchema = yup.object().shape({
  sportValue: yup.string().required(),
  sport: yup.string().required(),
  name: yup.string().min(3).required(),
});

export default inputDemoSchema;
