import { NavLink } from 'react-router-dom';

const Button = ({ text, route, gradient }) => {
  return (
    <NavLink
      to={route}
      className={`inline-block w-full text-center py-2 bg-gradient-to-r ${gradient} text-white rounded-lg hover:scale-105 transition-all`}>
      {text}
    </NavLink>
  );
};

export default Button;
