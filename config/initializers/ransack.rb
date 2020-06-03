# Ransack.configure do |config|
#   # 述語名
#   config.add_predicate 'gteq_end_of_month',
#                         # Arelの述語を指定。<=で検索したいからlteqを使うよ。
#                         arel_predicate: 'lteq',
#                         # インプットの整形。その日の終わりまでを検索対象に含めるよ。
#                         formatter: proc { |v| v.end_of_month }
# end