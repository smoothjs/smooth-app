import { AppController } from './app.controller'
import { ExpressAdapter } from '@smoothjs/express-adapter'
import { Ignitor } from '@smoothjs/smooth'
import { EventEmitterModule } from '@smoothjs/event-emitter'
import { JWTModule } from '@smoothjs/jwt'

async function bootstrap() {
  const appController = new AppController()

  JWTModule.fire()

  const app: any = await new Ignitor(appController, new ExpressAdapter()).create()

  await app.listen(3333, () => {
    console.log(`Listening to 3333 port...`)
  })
}

bootstrap()
