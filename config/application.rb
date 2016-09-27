require 'rails/all'
require_relative 'boot'



# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Insta
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.active_record.raise_in_transactional_callbacks = true

    config.action_view.field_error_proc = proc { |html_tag, _| html_tag }
    config.i18n.default_locale = :ja
  end
end
