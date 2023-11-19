type Indexed<T = any> = {
	/* eslint-disable-next-line no-unused-vars */
	[key in string]: T;
};

type PlainObject<T = unknown> = {
	/* eslint-disable-next-line no-unused-vars */
	[k in string]: T;
};

/**
 * Рекурсивно объединяет два объекта типа Indexed
 * @template T - Тип значений в объектах Indexed
 * @param {Indexed<T>} lhs - Первый объединяемый объект типа Indexed
 * @param {Indexed<T>} rhs - Второй объединяемый объект типа Indexed
 * @returns {Indexed<T>} - Результирующий объединенный объект типа Indexed
 */
export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    if (!lhs) {
        return lhs;
    }

    Object.keys(rhs).forEach((key) => {
        if (key in rhs) {
            if (typeof rhs[key] === 'object' && typeof lhs[key] === 'object') {
                /* eslint-disable-next-line no-param-reassign */
                lhs[key] = merge(lhs[key], rhs[key]);
            } else {
                /* eslint-disable-next-line no-param-reassign */
                lhs[key] = rhs[key];
            }
        }
    });

    return lhs;
}

/**
 * Устанавливает значение по указанному пути в объекте
 *
 * @param {Indexed | unknown} object - Изменяемый объект
 * @param {string} path - Путь, по которому нужно установить значение
 * @param {unknown} value - Значение, которое нужно установить по указанному пути
 * @returns {Indexed | unknown} - Измененный объект
 */
export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
        [key]: acc,
    }), value as any);

    return merge(object as Indexed, result);
}

/**
 * Устанавливает значение по указанному пути во вложенном объекте.
 *
 * @param object - Исходный объект.
 * @param path - Путь к значению в виде строки через точки.
 * @param value - Новое значение для установки.
 * @returns - Измененный исходный объект.
 */
export const setNestedValue = (object: Indexed, path: string, value: unknown) => {
    const keys = path.split('.');
    let currentObject = object;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (typeof currentObject[key] !== 'object' || currentObject[key] === null) {
            currentObject[key] = {};
        }

        currentObject = currentObject[key];
    }

    const lastKey = keys[keys.length - 1];

    currentObject[lastKey] = value;

    return object;
};

export function isPlainObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
		&& value !== null
		&& value.constructor === Object
		&& Object.prototype.toString.call(value) === '[object Object]';
}

export function isArrayOrObject(value: unknown): value is ([] | PlainObject) {
    return isPlainObject(value) || Array.isArray(value);
}

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
    // Сравнение количества ключей объектов и массивов
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }
    /* eslint-disable-next-line no-restricted-syntax */
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];

        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value as PlainObject, rightValue as PlainObject)) {
                /* eslint-disable-next-line no-continue */
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}
