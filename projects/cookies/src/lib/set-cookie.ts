export function setCookie(name: string, value: string): void {
  document.cookie = escape(name) + "=" + escape(value);
}