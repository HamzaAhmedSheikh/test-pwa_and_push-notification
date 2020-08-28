export default function swQuizAppDev() {

    if ('serviceWorker' in navigator) {
        let swDev = `${process.env.PUBLIC_URL}/swQuizApp.js`
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(swDev).then((registration) => {
                console.log('ServiceWorker registration successful with scope', registration);

            }).catch((err) => {
                console.log('ServiceWorker registration failed: ', err)
            })

        })

    }
}