
import { Config } from '@smoothjs/config'
import { Controller, Get } from '@smoothjs/smooth'

@Controller('hello')
export class HomeController {
  @Get('/')
  public index(
    request: Config,
  ) {
    return request.get('app.basePath')
  }
}
