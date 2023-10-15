export const getFormData = (e: MouseEvent) => {
    e.preventDefault();

    const btnEl = e.target as HTMLElement;
    const form = btnEl!.closest('form') as HTMLFormElement;
    const formData = new FormData(form);
    const formDataObject: Record<string, string> = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value.toString();
    });

    /* eslint-disable-next-line no-console */
    console.log(formDataObject);
};
