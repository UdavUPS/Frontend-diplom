export function add0 (num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num
}