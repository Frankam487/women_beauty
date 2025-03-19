import { NavLink } from 'react-router-dom';

const List = () => {
  return (
    <div className="flex justify-center">
      <div className="cards w-full max-w-lg">
        <div className="text text-center mb-8">
          <span className="text-xl font-bold">
            Sélectionner une <br />
            catégorie
          </span>
        </div>
        <div className="bg-white p-4 mb-8 shadow-md w-full">
          
          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[12px] font-bold">1. BOXBRAIDS MEN</h3>
            <NavLink
              to="/boxbraids"
              className="text-white no-underline font-serif bg-gray-900 px-6 py-2 cursor-pointer transition">
              Sélectionner
            </NavLink>
          </div>

          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[12px] font-bold">2. TWIST</h3>
            <NavLink
              to="/twist"
              className="text-white no-underline font-serif bg-gray-900 px-6 py-2 cursor-pointer transition">
              Sélectionner
            </NavLink>
          </div>
          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[12px] font-bold">3. KNOTLESS BRAIDS</h3>
            <NavLink
              to="/knotless"
              className="text-white no-underline font-serif bg-gray-900 px-6 py-2 cursor-pointer transition">
              Sélectionner
            </NavLink>
          </div>
          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[12px] font-bold">4. ENLEVER SES TRESSES</h3>
            <NavLink
              to="/crochet"
              className="text-white no-underline font-serif bg-gray-900 px-6 py-2 cursor-pointer transition">
              Sélectionner
            </NavLink>
          </div>
          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[12px] font-bold">
              5. LOCS MEN <br />

            </h3>
            <NavLink
              to="/soft"
              className="text-white  no-underline font-serif bg-gray-900 px-6 py-2 cursor-pointer transition">
              Sélectionner
            </NavLink>
          </div>
          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[12px] font-bold">6. FULANI BRAID MEN</h3>
            <NavLink
              to="/passion"
              className="text-white font-serif bg-gray-900 px-6 py-2 cursor-pointer  no-underline transition">
              Sélectionner
            </NavLink>
          </div>
          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[12px] font-bold">6. FULANI WOMEN</h3>
            <NavLink
              to="/french"
              className="text-white font-serif bg-gray-900 px-6 py-2 cursor-pointer  no-underline transition">
              Sélectionner
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
