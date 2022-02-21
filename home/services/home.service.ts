import { Singleton } from 'typescript-ioc'

@Singleton
export class HomeServices {
  public helloMessage(): string {
    return 'Hello World !'
  }
}
