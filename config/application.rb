require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EventGeek
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.time_zone = 'Tokyo'

    # railsはvalidationに通らないfieldを自動的にfield_with_errorsクラスで囲う。このためレイアウトが崩れる場合がある。
    # 下記の記述はfield_with_errorsクラスを読み込まないようにする
    config.action_view.field_error_proc = Proc.new { |html_tag, instance| html_tag }


    # バリデーション失敗時に、日本語のエラーメッセージを使用する設定
    # デフォルトはen.ymlを参照してしまうので、ja.ymlを参照するように設定
    config.i18n.default_locale = :ja

    # config/locales/以下に設定した翻訳ファイルが全て読み込まれるように、以下のコードを設定。
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end