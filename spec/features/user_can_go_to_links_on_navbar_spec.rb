require 'rails_helper'

feature "user can use navbar" do
  scenario "user is not signed in" do
    visit '/'

    expect(page).to have_content("LightHaus")
    expect(page).to have_content("Youtube")
    expect(page).to have_content("Twitch")
    expect(page).to have_content("Twitter")
    expect(page).to have_content("Register")
    expect(page).to have_content("Login")

    click_link 'Youtube'

    expect(page).to have_content("Let us help you find out what it is that communities around Youtube personalities and channels like.")
    
    click_link 'LightHaus'

    expect(page).to have_content("Let us help you find out what it is that communities around internet personalities like.")

    click_link 'Login'

    expect(page).to have_content("Log in")
    expect(page).to have_content("Email")
    expect(page).to have_content("Password")

    click_link 'Register'

    expect(page).to have_content("Sign up")
    expect(page).to have_content("Email")
    expect(page).to have_content("First name")
    expect(page).to have_content("Last name")
    expect(page).to have_content("Password")
    expect(page).to have_content("Password confirmation")
  end

  scenario "user is signed in" do
    jose = FactoryGirl.create(:user)

    login_as(jose, :scope => :user)

    visit '/'

    expect(page).to have_content("Jose")
    expect(page).to have_content("Logout")

    click_link 'Jose'

    expect(page).to have_content("Hi, Jose")

    click_link 'Logout'

    expect(page).to have_content("Successfully signed out")
  end
end
