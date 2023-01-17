// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    title: 'my website title',
    head: {
        meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        script: [
            // <script src="https://myawesome-lib.js"></script>
            { src: 'https://awesome-lib.js' }
        ],
        noscript: [
            // <noscript>JavaScript is required</noscript>
            { children: 'JavaScript is required' }
        ],
    },
    css: ['@/layouts/global-fonts.css']
}


