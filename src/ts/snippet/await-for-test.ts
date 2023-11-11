class LoopTest {
  private isStop = false;

  setIsStop(value) {
    this.isStop = value;
  }

  async waitFor() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }

  test = async () => {
    for await (const item of Array(10)
      .fill(0)
      .map((_, i) => i)) {
      console.log('##', item);
      await this.waitFor();
      if ((this.isStop = true)) break;
      for await (const item of Array(10)
        .fill(0)
        .map((_, i) => i)) {
        console.log('@@@', item);
        if (this.isStop) {
          break;
        }
      }
    }
  };
}

const loopTest = new LoopTest();
loopTest.test();
setTimeout(() => {
  loopTest.setIsStop(true);
}, 0);

export default {};
