import request from 'supertest';
import { ExpressAdapter } from '@smoothjs/express-adapter'
import { Ignitor } from '@smoothjs/smooth'
import test from 'japa'
import { AppController } from '../app.controller'

test.group('HomeController | HTTP', (group) => {
    let app: any;

    group.before(async () => {
        app = await new Ignitor(new AppController(), new ExpressAdapter()).create()

        await app.listen(5555)
    })

    group.before(async () => {
        await app.close()
    })

    test('GET /', async (assert) => {
        let response = await request(app.getHttpServer()).get('/').expect(200)
        
        assert.equal(response.text, 'Hello World !')
    })
})