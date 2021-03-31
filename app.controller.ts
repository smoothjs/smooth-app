import { Container, Singleton } from "typescript-ioc";
import { IController } from "@smoothjs/smooth";
import { IListeners } from "@smoothjs/event-emitter"

@Singleton
export class AppController implements IController, IListeners {
  controllers = [
    //
  ];

  listerners = [
    //
  ];

  middlewares = [
    //
  ];
}