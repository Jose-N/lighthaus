require 'rails_helper'

feature "user can sign in" do

  scenario "user signs up successfully" do
   visit '/' 
   click_link 'Register'

   fill_in 'Email', with: 'jose@jose.com'
   fill_in 'First name', with: 'Jose'
   fill_in 'Last name', with: 'Naylor'
   fill_in 'Password', with: 'josejose'
   fill_in 'Password confirmation', with: 'josejose'

   click_button 'Sign up'

   expect(page).to have_content("Welcome! You have signed up successfully.")
  end

  scenario "user signs up with no info" do
   visit '/' 
   click_link 'Register'

   fill_in 'Email', with: ''
   fill_in 'First name', with: ''
   fill_in 'Last name', with: ''
   fill_in 'Password', with: ''
   fill_in 'Password confirmation', with: ''

   click_button 'Sign up'

   expect(page).to have_content("Email can't be blank")
   expect(page).to have_content("Password can't be blank")
   expect(page).to have_content("First name can't be blank")
   expect(page).to have_content("Last name can't be blank")
  end

  scenario "user signs up with invalid password" do
   visit '/' 
   click_link 'Register'

   fill_in 'Email', with: 'jose@jose.com'
   fill_in 'First name', with: 'Jose'
   fill_in 'Last name', with: 'Naylor'
   fill_in 'Password', with: '12'
   fill_in 'Password confirmation', with: '1'

   click_button 'Sign up'

   expect(page).to have_content("Password confirmation doesn't match Password")
   expect(page).to have_content("Password is too short (minimum is 6 characters)")
  end

  scenario "user tries to sign up with email thats already registered" do
    user = FactoryGirl.create(:user)

   visit '/' 
   click_link 'Register'

   fill_in 'Email', with: 'jose@jose.com'
   fill_in 'First name', with: 'Jose'
   fill_in 'Last name', with: 'Naylor'
   fill_in 'Password', with: 'josejose'
   fill_in 'Password confirmation', with: 'josejose'

   click_button 'Sign up'

   expect(page).to have_content("Email has already been taken")
  end
end
