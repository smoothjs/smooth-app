import { CommandService } from "@smoothjs/cli";
import { MakeCommand } from "@smoothjs/cli";

async function bootstrap() {
    await new CommandService([
        MakeCommand
    ]).create()
}

bootstrap()