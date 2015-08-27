---
title: Не афишировать публичные ключи
lang: 'ru'
tag: шапочкиизфольги
---
SSH по умолчанию пытается пройти аутентификацию при помощи публичных ключей, «засвечивая» их.

Вместе с тем фактом, что Гитхаб раздаёт публичные ключи пользователя по урлу, можно сопоставить
человека, который пытается залогиниться на сервер с аккаунтом на Гитхабе, см. [FilloSottile/whosthere](https://github.com/FiloSottile/whosthere/blob/master/README.md).

Это поведение можно отключить:

После всех директив `Host` в `/.ssh/config`:

```
Host *
    PubkeyAuthentication no
    IdentitiesOnly yes
```

Указываем ключи для каждого хоста отдельно, чтобы их ничто не связывало:

```
Host github.com
    PubkeyAuthentication yes
    IdentityFile ~/.ssh/github_id_rsa
```
