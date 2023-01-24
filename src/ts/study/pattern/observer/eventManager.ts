/**
 * observer = subscirber
 */
type ListenerType = 'EmailAlert' | 'Logging';

type Listeners = {
  [key in ListenerType]: EventListener[];
};

interface EventListener {
  update(filename: string): void;
}

class EmailAlertListener implements EventListener {
  public update(filename: string): void {
    console.log(`EmailAlert: ${filename} has been changed!`);
  }
}

class LoggingListener implements EventListener {
  public update(filename: string): void {
    console.log(`Logging: ${filename} has been changed!`);
  }
}

/**
 * subject, publisher
 */
class EventManager {
  private listeners: Listeners = {
    EmailAlert: [],
    Logging: [],
  };

  public subscribe(type: ListenerType, listener: EventListener): void {
    this.listeners[type].push(listener);
  }

  public unsubscribe(type: ListenerType, listener: EventListener): void {
    this.listeners[type] = this.listeners[type].filter((l) => l !== listener);
  }

  public notify(type: ListenerType, filename: string): void {
    this.listeners[type].forEach((l) => l.update(filename));
  }
}

class Editor {
  private eventManager: EventManager;

  constructor(eventManager: EventManager) {
    this.eventManager = eventManager;
  }

  public openFile(filename: string): void {
    this.eventManager.notify('Logging', filename);
  }

  public saveFile(filename: string): void {
    this.eventManager.notify('EmailAlert', filename);
    this.eventManager.notify('Logging', filename);
  }
}

/**
 * client
 */
const eventManager = new EventManager();
const emailAlertListener = new EmailAlertListener();
eventManager.subscribe('EmailAlert', emailAlertListener);
const loggingListener = new LoggingListener();
eventManager.subscribe('Logging', loggingListener);

const editor = new Editor(eventManager);
editor.openFile('file1.txt');
editor.saveFile('file2.txt');

eventManager.unsubscribe('EmailAlert', emailAlertListener);
console.log('\nUnsubscirbe EmailAlertListener');
editor.openFile('file1.txt');
editor.saveFile('file2.txt');

export {};
