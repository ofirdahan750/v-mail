import appHeader from './cmps/app-header.cmp.js';
import {emailService} from './apps/mail/email-services/email.service.js'
import { myRouter } from './routes.js';
const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section>
        <app-header/>
        <router-view/>
        <footer><p> &copy; Coffeerights 2021</p></footer>
    </section>
    `,


    components: {
        appHeader
    }
}


new Vue(options)