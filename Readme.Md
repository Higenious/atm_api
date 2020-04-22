### ATM Machine


Roles

+ Admin
+ User

### Stack 

```sh
  Node Js
  Mongo db

```

How to run 
+ Clone or Download project
+ Navigate to folder 
+ Cmd --> npm install
+ Cmd --> npm start 


``` sh
  API Endpoint

  Role : ADMIN
  
 + API for Login Admin
   http://localhost:3000/admin/login
   method : POST
   Body   : JOSN
     {
	
      "email" : "cchetantayade@gmail.com",
      "password" : "admin"
    }
  
  + API for Sign Up admin Role
    http://localhost:3000/admin/signup
    method : POST
    Body   : JOSN
      {
      	 "email" : "cchetantayade@gmail.com",
      	 "password" : "sadmin"
       }


  + API for Deposit Money in ATM
    http://localhost:3000/admin/deposit
    method : POST
    Body   : JOSN
    Desc   : Deposit will Increase existing Currencies Notes and total count
       {
	       "atm_machineId" : "SBI120",
           "currency" :
             { 
              "note_2000" : 1,
              "note_500"  : 4,
              "note_200"  : 5,
              "note_100"  : 10
           }
  
       } 

  + API for Check Money in ATM
    http://localhost:3000/admin/checkmoney
    Method : GET


```


```sh
   # User Role
  +  API  For  user Sign up 
     http://localhost:3000/users/signup
     method : POST
     Desciption : card_number should be uni &  pin should b 4 digit. 
     Body   : JOSN
       {
	       "name":"chetan",
      	   "card_number" :66668778,
	       "pin" :4145
       }  


  +  API  For  user login 
     http://localhost:3000/users/login
     method : POST
     Body   : JOSN 
       {
   	     "card_number" : 44445558,
	       "pin" : 4444
      }

  +  API  For  withdraw Money  
     http://localhost:3000/users/withdraw
     method : POST
     Body   : JOSN 
     Desc   : withdraw of money from ATM should update existing currencies. 
            : Limit Should be 2000 rs 
            :  
      {
        	 "withdrawal_money" : 5007,
           "card_number" : 44445555,
           "pin" : 4444
      }
  
```