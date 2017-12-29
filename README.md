CTEC3905-Assignment2
=====

Javascript APIs Used
-----
- [Google Maps API][1]
- [Google Geocoding Service][2]

Inspirations
-----
This is a mock website I made for my dad's business, a self employed electrician. This site would require a way for clients to book an appointment for a quote, and possibly an image gallery for jobs past done, so the quality of work can be inspected.

I decided the way to get the appointment system appropriately would be to use a calendar and google maps to show where the booked appointments are. This idea fell down when I could use what I wantend appropriately, which was a calendar than looked like an actual calendar, rather than a textbox you put a date in. These controls are very rare in basic javascript, however I did find one, [Vanilla Javascript Calendar, Chrissy Collins][3], though through experimentation I decided to halt development on the date picking functionality, and get the form working with a google map. If I were to carry on this site, I would possibly use a Javascript library such as jQuery to get the control I wish.

In getting the map to work, I spent a lot of time reading the [Google Maps Javascript API][1], before attempting to get things working. I used their worked examples to understand what I needed to do to get what I desired. After I had managed to create a map with markers populated from a separate json data file, I looked into how I could take address information from a form, and add it to the map. To be able to add markers to the map, I found I needed both the latitude and longitude of where I wanted the marker. Fortunately, Google had a [Geocoding service][2] that allowed me to supply an address, and receive a Latitude and Longitude coordinate in response. Once I had figured out the format the address had to be in the map was done. (although I'm fairly sure it says it on the Geocoding website, I very often miss text that I read)

I wanted to use a lot of Javascript in this site, due to my strength being in the production of code, rather than making things look pretty (as can be seen by my colour palette choices). Through the usage of the google map, and the image gallery on the index page, I managed to get a fair amount of Javascript into the page that I was happy with.
My choice of colours in the application where ones I thought looked alright, however my design skills could still use some work.

[1]:https://developers.google.com/maps/documentation/javascript/
[2]:https://developers.google.com/maps/documentation/geocoding/intro
[3]:https://github.com/chrisssycollins/vanilla-calendar
