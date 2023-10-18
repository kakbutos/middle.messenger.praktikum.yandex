export const tmpl = `
    <input  class="input {{classNames}} {{#if hasError}}input_error{{/if}}"
            placeholder="{{placeholder}}"
            type="{{type}}"
            value="{{value}}"
            name="{{name}}"
            title="{{title}}"
    />
`;
