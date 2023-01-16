interface ControllerRequest {
  url: string;
  method: string;
  data?: any;
}

interface ControllerResponse {
  status: number;
  data: any;
}

interface Controller {
  process(req: ControllerRequest): Promise<ControllerResponse>;
}

class UserController implements Controller {
  public process(req: ControllerRequest): Promise<ControllerResponse> {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Alice' },
    ];

    const response: ControllerResponse = {
      status: 200,
      data: {},
    };

    if (req.method === 'GET') {
      response.data = users;
    } else {
      response.status = 400;
      response.data = {
        message: 'Bad request',
      };
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 200);
    });
  }
}

class Decorator implements Controller {
  protected controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  public process(req: ControllerRequest): Promise<ControllerResponse> {
    return this.controller.process(req);
  }
}

class TelemetryDecorator extends Decorator {
  public async process(req: ControllerRequest): Promise<ControllerResponse> {
    const start = new Date().getTime();

    const result = await super.process(req);

    const end = new Date().getTime();
    const time = end - start;

    console.log(`${req.url} ${req.method} => ${time}ms`);

    return result;
  }
}

const userController = new TelemetryDecorator(new UserController());
userController.process({ url: '/users', method: 'GET' });

export {};
