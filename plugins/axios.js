export default async function ({ $axios, app }) {
    $axios.onRequest(_ => {
        $axios.setHeader("Accept-Language", app.i18n.locale || "ru");
    })
}