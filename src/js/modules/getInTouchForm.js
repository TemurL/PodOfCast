export const getInTouchForm = () => {
    const form = document.getElementsByClassName('get-in-touch__form')[0];
    if (!form) return

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const formDataAsObject = Object.fromEntries(formData);
        let res = 'INPUT DATA: \n';
        for (let prop in formDataAsObject) {
            res += `${prop} - ${formDataAsObject[prop]}; \n`
        }
        alert(res);

        location.reload();
    })
}