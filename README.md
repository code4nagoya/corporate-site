# www.code4.nagoya

このリポジトリは https://www.code4.nagoya のホスティングのためのリポジトリです。

GitHub Pagesを使用し、カスタムドメインとして「www.code4.nagoya 」を設定しています。

## HTTPS対応

現在はさくらインターネットのVPS上のnginxでHTTPSを処理してリバースプロキシでGitHub Pagesを読み込んでいます。

よって、ブラウザはhttps://www.code4.nagoya にアクセスすると、さくらのVPSと通信しています。さくらのVPSはGitHub Pagesと通信しコンテンツを読み込み返します。

## コンテンツの編集について

例えば以下のコンテツはMobiriseというツールを使って更新しています。

https://www.code4.nagoya/event/2017/11/opendata/

Mobiriseについて
https://mobirise.com/ja/

上記コンテンツを編集する場合はMobiriseを利用して下さい。

1. GitHubからローカルにcloneする。(詳細省きます)
2. project.mobiriseをMobiriseを開く
3. Mobirise上で編集する
4. Mobirise上でローカルリポジトリにPublishする
5. ローカルからGithubにPushする

## License

These codes are licensed under CC0.

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)
