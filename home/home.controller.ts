import { Get } from "@smoothjs/smooth";
import { Inject, Singleton } from "typescript-ioc";
import { HomeServices } from "./services/home.service";

@Singleton
export class HomeController {
    @Inject
    private homeServices: HomeServices

    @Get('/')
    public async index() {        
        return this.homeServices.helloMessage()
    }
}