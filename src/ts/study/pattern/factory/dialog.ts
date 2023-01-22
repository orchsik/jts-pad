/**
 * product
 */
interface Button {
  render(): void;
  onClick(): void;
}

class WindowsButton implements Button {
  public render(): void {
    console.log('WindowsButton.render()');
  }
  public onClick(): void {
    console.log('WindowsButton.onClick()');
  }
}

class HtmlButton implements Button {
  public render(): void {
    console.log('HtmlButton.render()');
  }
  public onClick(): void {
    console.log('HtmlButton.onClick()');
  }
}

/**
 * factory method
 */
abstract class Dialog {
  public abstract createButton(): Button;

  public render(): void {
    const okButton = this.createButton();
    okButton.render();
  }
}

class WindowsDialog extends Dialog {
  public createButton(): Button {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  public createButton(): Button {
    return new HtmlButton();
  }
}

/**
 * client code
 */
function clientCode(dialog: Dialog) {
  dialog.render();
}
clientCode(new WindowsDialog());
clientCode(new WebDialog());

export {};
