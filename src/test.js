const test = {
  name: 'test module',
  color: 'gray',
  size: 1,
  enabled: false,
  print() {
    console.log(this.name);
    console.log(this.color);
    console.log(this.size);
    console.log(this.enabled);
  },
  message(message) {
    console.log(message);
  },
};

export default test;
