import withSplitting from '../lib/hoc/withSplitting';

export const Home = withSplitting(()=>import('./_Home'));
export const Map = withSplitting(()=>import('./_Map'));
export const Login = withSplitting(()=>import('./_Login'));
export const Register = withSplitting(()=>import('./_Register'));
export const Order = withSplitting(()=>import('./_Order'));
