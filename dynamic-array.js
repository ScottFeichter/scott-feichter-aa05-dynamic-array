class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if (this.length === this.capacity) this.resize();

    this.data[this.length] = val;
    return ++this.length;
  }


  pop() {

    // Your code here
    if (this.length) {
      let temp = JSON.parse(JSON.stringify(this.data[this.length - 1]));
      this.data[this.length - 1] = undefined;
      this.length--;
      console.log(temp);
      return temp;
    } else {
      return undefined;
    }
  }

  unshift(val) {

    // Your code here
    if (this.length === this.capacity) this.resize();

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    return ++this.length;
  }

  shift() {

    // Your code here
    if (this.length) {
      let temp = this.data[0];
      for (let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      this.data[this.length - 1] = undefined;
      this.length--;
      return temp;
    } else {
      return undefined;
    }
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {

    // Your code here
    this.capacity *= 2;
    for (let i = this.length; i < this.capacity; i++) {
      this.data[i] = undefined;
    }
  }

}


module.exports = DynamicArray;
