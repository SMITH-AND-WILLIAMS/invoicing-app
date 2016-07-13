# Invoicing-app

This project is an embryon of our CRM.
It's made with emberjs and nodeJS


TODOS:
ADD INSTALL SCRIPT 
  Create db
  Create super admin
  
STEPS
1. Login screen

2. Account creation
  The account can hold multiple companies, so when you create an account there is a minimum of 1 comapny attached to it
3. Company creation that contain clients/contacts/prospects unique for the company that means that if an account has 2 company the contact list will NOT be share between them
4. client/contact/propect creation
5. Account startup screen will propose the choice of the company if there is only one it will imeediately go to the company dashBoard
6. Company dashboard


ACCOUNTS:
->  superadmin
    manage companies    
    manage clients
    create accounts
    manage users
    manage users access
    reset password
    update app  
    
   
    linked to min one company

-> admin
    manage cients
    manage users

    linked to min one company

->  user
    manage invoices

    linked to only one company

-> client
    invoices linsting (printing)
    invoice payments

    
Dashboard superadmin