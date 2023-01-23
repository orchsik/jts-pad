/**
 * Product
 */
interface Button {
  paint(): void;
}
class WinButton implements Button {
  paint(): void {
    console.log('WinButton.paint');
  }
}
class MacButton implements Button {
  paint(): void {
    console.log('MacButton.paint');
  }
}

interface Checkbox {
  paint(): void;
}
class WinCheckbox implements Checkbox {
  paint(): void {
    console.log('WinCheckbox.paint');
  }
}
class MacCheckbox implements Checkbox {
  paint(): void {
    console.log('MacCheckbox.paint');
  }
}

/**
 * Abstract Factory
 */
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}
class Macfactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

/**
 * Client
 */
class Application {
  private factory: GUIFactory;
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  public createUI() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  public paint() {
    this.button.paint();
    this.checkbox.paint();
  }
}

class ApplicationConfig {
  static OS = process.platform;

  static getFactory(): GUIFactory {
    if (ApplicationConfig.OS === 'darwin') {
      return new Macfactory();
    } else if (ApplicationConfig.OS === 'win32') {
      return new WinFactory();
    } else {
      throw Error('Unknown OS: ' + ApplicationConfig.OS);
    }
  }

  static main() {
    const app = new Application(ApplicationConfig.getFactory());
    app.createUI();
    app.paint();
  }
}
