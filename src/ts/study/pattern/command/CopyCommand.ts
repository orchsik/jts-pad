abstract class Command {
  protected app: Application;
  protected editor: Editor;
  protected backup: string;

  constructor(app: Application, editor: Editor) {
    this.app = app;
    this.editor = editor;
  }

  // editor를 백업한다.
  saveBackup(): void {
    this.backup = this.editor.text;
  }

  // 백업을 복원한다.
  undo(): void {
    this.editor.text = this.backup;
  }

  // 편집기의 상태를 변경하면 true를 반환한다.
  abstract execute(): boolean;
}

class CopyCommand extends Command {
  // 복사 커맨드는 편집기의 상태를 변경하지 않으므로 기록에 저장되지 않는다.
  execute(): boolean {
    this.app.clipboard = this.editor.getSelection();
    return false;
  }
}

class CutCommand extends Command {
  // 잘라내기 커맨드는 편집기의 상태를 변경하므로 기록에 저장된다.
  execute(): boolean {
    this.saveBackup();
    this.app.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
    return true;
  }
}

class PasteCommand extends Command {
  execute(): boolean {
    this.saveBackup();
    this.editor.replaceSelection(this.app.clipboard);
    return true;
  }
}

class UndoCommand extends Command {
  execute(): boolean {
    this.app.undo();
    return false;
  }
}

class CommandHistory {
  private history: Command[];

  // 커맨드를 기록에 저장한다.
  push(command: Command) {
    this.history.push(command);
  }

  // 기록에서 커맨드를 제거한다.
  pop(): Command {
    return this.history.pop();
  }
}

class Editor {
  text: string;

  // 선택된 텍스트를 반환한다.
  getSelection(): string {
    return this.text;
  }

  // 선택된 텍스트를 삭제한다.
  deleteSelection(): void {
    this.text = '';
  }

  // 현재 위치에 클립보드의 내용을 삽입한다.
  replaceSelection(text: string): void {
    this.text = text;
  }
}

// 앱 클래스는 객체 관계들을 설정하며 발산자 역할을 한다.
// 이것은 무언가를 수행해야 할 때 커맨드 객체를 만들고 실행한다.
class Application {
  clipboard: string;
  editors: Editor[];
  activeEditor: Editor;
  history: CommandHistory;

  // 사용자 인터페이스 객체들에 커맨드들을 할당하는 코드는 다음과 같을 수 있다.
  createUI(): void {
    const copy = () => {
      this.executeCommand(new CopyCommand(this, this.activeEditor));
    };
    const copyButton = document.getElementById('copy');
    copyButton.addEventListener('click', copy);

    const cut = () => {
      this.executeCommand(new CutCommand(this, this.activeEditor));
    };
    const cutButton = document.getElementById('cut');
    cutButton.addEventListener('click', cut);

    const paste = () => {
      this.executeCommand(new PasteCommand(this, this.activeEditor));
    };
    const pasteButton = document.getElementById('paste');
    pasteButton.addEventListener('click', paste);

    const undo = () => {
      this.executeCommand(new UndoCommand(this, this.activeEditor));
    };
    const undoButton = document.getElementById('undo');
    undoButton.addEventListener('click', undo);
  }

  executeCommand(command: Command): void {
    if (command.execute) {
      this.history.push(command);
    }
  }

  undo(): void {
    const command = this.history.pop();
    if (command !== null) {
      command.undo();
    }
  }
}

export {};
