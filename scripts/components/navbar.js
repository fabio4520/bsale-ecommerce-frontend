export function NavBar() {
  return `
  <nav class='flex justify-between w-full max-w-7xl p-4'>
    <div class='hidden lg:block w-24'>
      <a href="" id='logo-btn'>
        <img src="https://login.bsale.com.pe/images/logo_bsale.svg" alt="Bsale"/>
      </a>
    </div>

    <div class='flex border border-orange-400 rounded-lg max-w-[230px] gap-x-4 p-1'>
      <div>
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <div>
        <input type="text" id="search-navbar" class="border-red-500" placeholder="Search...">
      </div>
    </div>

    <div class="p-3 space-y-2 rounded shadow flex flex-col lg:hidden">
      <span class="block w-7 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-7 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-7 h-0.5 bg-gray-600 animate-pulse"></span>
    </div>

    <div class='hidden lg:flex'>
      <ul class='flex gap-x-8'>
        <a href="home" id='home-btn'>
          <li class='text-lg text-gray-800'>Home</li>
        </a>
        <a href="Categories" id='categories-btn'>
          <li class='text-lg text-gray-800'>Categories</li>
        </a>
      </ul>
    </div>

  </nav>
  `
}
