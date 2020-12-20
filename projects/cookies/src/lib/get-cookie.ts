export function getCookie(name: string): string | undefined {
  return document.cookie.search(new RegExp("(?:^|;)\\s*" + escape(name) + "\\s*\\=([^;,]*)")) >= 0 ? unescape(RegExp.$1) : undefined;
}