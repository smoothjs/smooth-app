import { Singleton } from 'typescript-ioc'

@Singleton
export class HomeServices {
  public helloMessage() {
    return 'Hello World !'
  }
}
