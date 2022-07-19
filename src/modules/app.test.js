test('properly add task to local storage',() => {
    const a = 2;
    const b = 2;
    const c = a+b;
    expect(c).toBe(4)
})
    

addTask = (item) => {
    this.taskArr.push({ description: item, completed: false, index: this.taskArr.length + 1 });
    this.populateLocalStorage();
    this.displayTask();
  }