import * as yup from 'yup';

const inputDemoSchema = yup.object().shape({
  sportValue: yup.string().required().label('What you do Field'),
  sport: yup.string().required().label('Sport Field'),
  name: yup.string().min(3).required().label('Name Field'),
});

export default inputDemoSchema;
