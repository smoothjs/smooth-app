import { CommandService } from '@smoothjs/cli'
import { MakeCommand } from '@smoothjs/cli'

async function bootstrap() {
  await (new CommandService([new MakeCommand()])).create()
}

bootstrap()
