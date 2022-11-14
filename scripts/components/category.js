
export function CategoryComponent(category) {
  return `
  <a href="" class="category" data-id=${category.id}>
    <div class='flex justify-center items-center w-[290px] h-[290px] bg-[#5c9ead] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-center cursor-pointer hover:bg-[#5c9ead]/30'>
      <h2 class='italic font-semibold tracking-[15px] uppercase break-words'>${ category.name }</h2>
    </div>
  </a>
  `
}
