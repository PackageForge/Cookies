# @packageforge/cookies

TypeScript functions to get, set, and delete cookies.

Add the package to your project on the command line:
```
npm install @packageforge/cookies --save
```

Import the `getCookie`, `setCookie`, and `deleteCookie` functions into your code file:
```typescript
import { getCookie, setCookie, deleteCookie } from '@packageforge/cookies';
```

To get a cookie:

```typescript
value = getCookie('mycookiename');
```

To set a cookie:

```typescript
setCookie('mycookiename',value);
```

To delete a cookie:

```typescript
deleteCookie('mycookiename');
```