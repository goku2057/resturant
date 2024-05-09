export function dbTimeForCustomer(str: string) {
    return str.replace('T', ' -- ').replace('-', '/').replace('-', '/').substring(5, 19);
}