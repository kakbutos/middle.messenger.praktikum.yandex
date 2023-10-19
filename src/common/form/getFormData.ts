export const getFormData = (e: MouseEvent) => {
    e.preventDefault();

    const btnEl = e.target as HTMLElement;
    const form = btnEl!.closest('form') as HTMLFormElement;
    const inputAll = form.querySelectorAll('input');
    const formDataObject: Record<string, string> = {};

    inputAll.forEach((input) => {
        const { value, name } = input;

        formDataObject[name] = value.toString();

        input.dispatchEvent(new Event('blur'));
    });

    /* eslint-disable-next-line no-console */
    console.log(formDataObject);
};
