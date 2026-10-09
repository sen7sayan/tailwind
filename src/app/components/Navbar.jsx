import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          MyBrand
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <a href="/" className="hover:text-blue-600">
            Home
          </a>

          {/* Dropdown */}
          <div className="group relative">

            <button className="flex items-center gap-2 hover:text-blue-600">
              Products

              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full z-50 hidden w-48 rounded-md bg-white py-2 shadow-lg group-hover:block">

              <a
                href="/web"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Web Development
              </a>

              <a
                href="/mobile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Mobile Apps
              </a>

              <a
                href="/api"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                API Services
              </a>

            </div>
          </div>

          <a href="/about" className="hover:text-blue-600">
            About
          </a>

          <a
            href="/contact"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}
