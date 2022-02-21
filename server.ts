import { Ignitor } from '@smoothjs/smooth'

async function bootstrap() {
  const app: any = await (new Ignitor(__dirname)).create()

  await app.listen(3333, () => {
    console.log(`Listening to 3333 port...`)
  })
}

bootstrap()
