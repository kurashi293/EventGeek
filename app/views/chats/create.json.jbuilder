#⑤         jbuilderはデフォルトで記述されているgemで入力されたデータをJSON形式で出力する
# json.message       @chat.message   #jbuilderを使って入力データをJSON形式で出力し、JavaScriptに渡す。
# json.image         @chat.image
# json.created_at    @chat.created_at.strftime("%Y/%m/%d %H:%M")  #日本時間表記にする
# json.user_name     @chat.user.name
# json.id            @chat.id
# json.avatar        @chat.user.avatar


#jsonファイルでは基本的にjson.KEY VALUEという形で書く
#この記述で.jsファイルに返ってきたデータをjbuilderで定義したキーとバリューの形で呼び出して使う事ができる