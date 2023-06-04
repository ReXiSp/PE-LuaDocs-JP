
# スプライト

では、次はスプライトを追加してみましょう。

[これ](src/test.png)をimagesフォルダーに置いてください。

次に、Luaファイルにこのような文章を追加します。

`scripts/script.lua`
```lua
function onCreatePost()

    makeLuaSprite("sprite", "test", 0, 0)
    addLuaSprite("sprite")

end
```

[参照元: 関数一覧 - スプライト](../documents/functions#スプライト操作)

これが基本的な追加方法です。

では、Bopeeboをプレイしてみましょう！

![プレビュー](img/addsprite.png "プレビュー")

このように、スプライトが追加されていたら成功です！