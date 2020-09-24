# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





[
  [ "Test", "test@com.ne.jp", "111111" ],
  [ "Test2", "test2@com.ne.jp", "222222" ],
  [ "Test3", "test3@com.ne.jp", "333333" ],
  [ "Test4", "test4@com.ne.jp", "444444" ],
  [ "Test5", "test5@com.ne.jp", "555555"],
  [ "Test6", "test6@com.ne.jp", "666666" ],
  [ "Test7", "test7@com.ne.jp", "777777" ],
  [ "Test8", "test8@com.ne.jp", "888888" ],
  [ "Test9", "test9@com.ne.jp", "999999" ],
  [ "Test10", "test10@com.ne.jp", "101010" ],
  [ "Test11", "test11@com.ne.jp", "1111111" ],
  [ "Test12", "test12@com.ne.jp", "121212" ],
  [ "Test13", "test13@com.ne.jp", "131313" ],
  [ "Test14", "test14@com.ne.jp", "141414" ],
  [ "Test15", "test15@com.ne.jp", "151515" ],
  [ "Test16", "test16@com.ne.jp", "161616" ],
  [ "Test17", "test17@com.ne.jp", "171717" ],
  [ "Test18", "test18@com.ne.jp", "181818" ],
  [ "Test19", "test19@com.ne.jp", "191919" ],
  [ "Test20", "test20@com.ne.jp", "202020" ],
].each do |name, email, password|
  User.create!(
    { name: name, email: email, password: password }
  )
end




[ "コンサート・音楽", "舞台・伝統芸能", "プロモーション", "キャンペーン・抽選会", "セミナー・講演会", "大会・発表会", "各種式典", "地域イベント", "スポーツイベント", "子ども向けイベント", "アウトドア・キャンプ", "パーティー・交流会", "施工・軽作業", "その他" ]
.each do |name|
  GroupCategory.create!(
    {name: name}
  )
end




task = Category.create(name: "product_back_log")
task_1 = task.children.create(name: "doing")
task_1.children.create(name: "compleate")




# [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]
# .each do |name|
#   WorkStartTime.create!(
#     {hour_on: name}
#   )
# end




# [ "00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55" ]
# .each do |name|
#   WorkStartTime.create!(
#     {minute_on: name}
#   )
# end




# [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]
# .each do |name|
#   WorkEndTime.create!(
#     {hour_on: name}
#   )
# end




# [ "00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55" ]
# .each do |name|
#   WorkEndTime.create!(
#     {minute_on: name}
#   )
# end




# [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]
# .each do |name|
#   BreakTime.create!(
#     {hour_on: name}
#   )
# end




# [ "00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55" ]
# .each do |name|
#   BreakTime.create!(
#     {minute_on: name}
#   )
# end




[ "なし", "あり" ]
.each do |name|
  Transceiver.create!(
    {state: name}
  )
end




[ "なし", "これから", "朝", "昼", "夜", "朝・昼", "朝・夜", "昼・夜", "朝・昼・夜" ]
.each do |name|
  Meal.create!(
    {state: name}
  )
end




[ "私服", "作業着", "作業着(レンタル)", "スーツ", "スーツ(レンタル)", "ユニフォーム", "ユニフォーム(レンタル)", "着ぐるみ", "その他" ]
.each do |name|
  Wear.create!(
    {clothes: name}
  )
end




[ "スタッフ", "サブチーフ", "チーフ", "統括", "管理者", "責任者" ]
.each do |name|
  Rank.create!(
    {name: name}
  )
end