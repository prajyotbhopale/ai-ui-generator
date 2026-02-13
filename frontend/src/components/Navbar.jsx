export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold">Brand</div>
      <ul className="flex space-x-6">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}