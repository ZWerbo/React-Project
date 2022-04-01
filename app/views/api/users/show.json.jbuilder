# json.extract! @user :id, :username
json.partial! "api/users/user", user: @user

#json.reservations @user.reservations.map{ |reservation| reservation }
