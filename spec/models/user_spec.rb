require 'rails_helper'

RSpec.describe User, type: :model do
  context "#user" do
    it {should have_valid(:first_name).when('John', 'Sally') }
    it {should_not have_valid(:first_name).when('', nil) }
  end
end
