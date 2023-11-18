/**
 * Функция getTime принимает строку времени и возвращает время в формате "часы:минуты".
 * @param time - строка времени в формате "ГГГГ-ММ-ДДTЧЧ:ММ:СС.МСК"
 * @returns время в формате "часы:минуты"
 */
export const getTime = (time: string) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0'); // добавляем ведущий ноль, если часы меньше 10
    const minutes = date.getMinutes().toString().padStart(2, '0'); // добавляем ведущий ноль, если минуты меньше 10

    return `${hours}:${minutes}`;
};
