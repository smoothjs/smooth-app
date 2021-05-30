import { Container, Singleton } from 'typescript-ioc'
import { IController } from '@smoothjs/smooth'
import { IListeners } from '@smoothjs/event-emitter'
import { HomeController } from './home'
import { SessionMiddleware } from '@smoothjs/session'

@Singleton
export class AppController implements IController, IListeners {
  controllers = [
    Container.get(HomeController)
  ]

  listerners = [
    //
  ]

  middlewares = [
    {
      middleware: new SessionMiddleware()
    }
  ]
}
