import "tailwindcss";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Nome</h1>
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer hover:text-gray-500">Home</li>
          <li className="cursor-pointer hover:text-gray-500">Shop</li>
          <li className="cursor-pointer hover:text-gray-500">Contatti</li>
        </ul>
      </div>
    </nav>
  );
}



