export const getFormData = <T>(e: MouseEvent): T | null => {
    e.preventDefault();

    const btnEl = e.target as HTMLElement;
    const form = btnEl!.closest('form') as HTMLFormElement;
    const inputAll = form.querySelectorAll('input');
    const formDataObject: Record<string, any> = {};

    let countErrors = 0;
    inputAll.forEach((input) => {
        const { value, name, type } = input;

        if (input.files && type === 'file') {
            const [file] = input.files;
            formDataObject[name] = file;
        } else {
            formDataObject[name] = value.toString();
        }

        input.dispatchEvent(new Event('blur'));

        const newInput = document.querySelector(`input[name="${name}"]`);
        countErrors += (newInput?.classList.contains('input_error') ? 1 : 0);
    });

    /* eslint-disable-next-line no-console */
    console.log(formDataObject, countErrors);
    return countErrors === 0 ? (formDataObject as T) : null;
};
