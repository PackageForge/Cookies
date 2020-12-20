export function deleteCookie(name: string): void {
  document.cookie = escape(name);
}