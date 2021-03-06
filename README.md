

**OpenTabl**
-----------------------------
opentabl is a clone of the restaurant reservation website opentable (clever renaming I know). Allowing users to make reservations, reviews, and (eventually) favorite restaurants in the area! Here is the home page.

<img width="1729" alt="OpentablHome" src="https://user-images.githubusercontent.com/87534348/161307351-62795076-e176-4a16-96dc-b3e9dc93268d.png">

**Technologies**
------------------------
- React
- Redux
- JavaScript
- Ruby on Rails
- AWS S3
- Google Map API
- PostgreSQL
- Webpack

**User Auth**!
------------
- Built a modal that is used on the session create form and the user create form. In order to easily navigate features of site we have a nice demo user login!
- User authentication is implemented on both frontend and backend with presence validations. Uniqueness contraints (for username and email) are enforced in models and database. Upon a successful signup, the password is hashed using BCrypt and saved to the database as a password digest. 
- Errors are rendered in the modal on unsucessful login or signup to steer the user in the right direction 

![login](https://user-images.githubusercontent.com/87534348/166074817-7b18c24d-371f-409b-9482-f6c513dc167b.gif)


**Search bar**
-------------
- Constructed a search bar that filters the results in the real time. 
- The results can be filtered by the restaurant and cuisine on the homepage and the neighborhood, restaurant, and cuisine on the search page. The search page also contain gives the User the most common neighborhoods and cuisine. 
![searchbar](https://user-images.githubusercontent.com/87534348/166081259-da641b2a-f5e8-469c-bde0-6d1b7ca62ea6.gif)




**User Profile**
------------------
- Built a user profile that gives the user the ability to browse all pertinent info. From saved restaurants, reservations, and written reviews, then gives them the ability to edit and delete if so desired!
- Each tab is a distinct route within the profile component making it inacessible to those other than the person logged in. 

![profileactivity](https://user-images.githubusercontent.com/87534348/166076769-edc10802-9e7a-4559-bfe4-8d833c35f088.gif)

**Review Crud** 
----------------
- User are able to leave reviews when logged in (the review button toggling to a reminder that a user MUST be logged in to create review)
- After the review is created the user can access the review on the restaurant show page or within the user profile. Both areas allow the user to edit or delete the form. 

**Reservation CRUD** 
----------------
- User can begin a reservation on the restaurant show page, then must confirm the reservation on the next page. If the reservation is not confirmed it will not show up within the user profile. 
- In the profile the user can edit the reservation(minor details of it) and delete it all together. 





