import withSplitting from '../lib/hoc/withSplitting';

export const Home = withSplitting(()=>import('./_Home'));
export const Login = withSplitting(()=>import('./_Login'));
export const Register = withSplitting(()=>import('./_Register'));
