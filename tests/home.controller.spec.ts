import test from 'japa'
import { HomeController } from '../home';

test.group('HomeController | Controller', (group) => {
    let homeController: HomeController

    group.beforeEach(async () => {    
        homeController = new HomeController()
    })

    test('index | return `Hello World !`', async (assert) => {
        assert.equal(await homeController.index(), 'Hello World !')
    })
})