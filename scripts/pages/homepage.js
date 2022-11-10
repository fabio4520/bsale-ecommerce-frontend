function render() {
  return `
    <h1 class="text-3xl font-bold">
      Hello world!
    </h1>
  `;
}

export const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    
  }
}