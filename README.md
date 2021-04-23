# ITWS4500-S21-Quiz2-tralsa
 
MongoDB Compass Connection String: mongodb+srv://dbUserAnya:Zrv3X27vB2XtHHIA@cluster0.nxqx9.mongodb.net/test
 
## References:
* https://programmingmentor.com/post/save-form-nodejs-mongodb/
* https://www.beyondjava.net/animations-with-d3-and-angular
* https://www.tutorialspoint.com/d3js/index.htm
* https://www.d3-graph-gallery.com/graph/custom_axis.html
* https://getbootstrap.com/docs/4.0/components/modal/
* https://getbootstrap.com/docs/4.1/components/card/
* https://getbootstrap.com/docs/4.0/components/buttons/
* https://howtocreateapps.com/angular-tutorial-json/
* https://getbootstrap.com/docs/4.0/components/carousel/
* https://storyset.com/search
* https://css-tricks.com/snippets/css/typewriter-effect/
* https://www.convertcsv.com/csv-to-html.htm (CSV file to HTML converter; used to convert the combined eclipse data CSV file to the table in combined.component.html)

## Data Sources - NASA:
#### Lunar Eclipse Data
* https://eclipse.gsfc.nasa.gov/LEdecade/LEdecade2001.html
* https://eclipse.gsfc.nasa.gov/LEdecade/LEdecade2011.html
* https://eclipse.gsfc.nasa.gov/LEdecade/LEdecade2021.html
 
#### Solar Eclipse Data
* https://eclipse.gsfc.nasa.gov/SEdecade/SEdecade2001.html
* https://eclipse.gsfc.nasa.gov/SEdecade/SEdecade2011.html
* https://eclipse.gsfc.nasa.gov/SEdecade/SEdecade2021.html
 
## Why I devloped this app, key features, and purpose:
I created an informational/ educational website similar to a blog site that focuses on space/astronomy and specifically Lunar and Solar eclipse data for my lifetime (2001 - 2021). 
 
I have always been fascinated by space and astronomy and a few years ago, in 2017 my family and I travelled to TN to see the total solar eclipse. On our trip besides watching the eclipse we wanted to find other interesting things to do in the area and that was the reasoning behind the recommendation form feature I added in the model. This form will allow people to suggest viewing locations and other fun activities in and around the area. (As a side note: I do have an option to view the recommendations as a raw json file that will get returned from the mongo database). 
 
I have always thought solar and lunar eclipses were very interesting and decided to find data sets from NASA and map them out. As someone who is very interested in data in general I decided it would be perfect if I combined these two together to create the lunar and solar eclipse scatter plots that plot out the data. The data I collected is from 2001 - 2030 and that is the data that will be outputted when you download the csv files.
 
The scatter plots were created in D3.js, even though we hadn't technically spent time learning it. I used the sample code provided as a template to create my visualizations. The plots map out the date they occured on the x-axis and the duration on the y-axis.
 
## Creativity:
For creativity, first I had to perform ETL on all the data provided by NASA and input that into the database which took a very long time. Next I created a general wireframe of what to include in my app. Afterwards I created a color scheme to make sure my app was visually appealing and followed UI/UX and contrast standards (color scheme swatches are in the assets folder). I created a logo that fit with this color scheme to make the app more cohesive. I also imported google fonts that reminded me of space and made sure they were still easy to read. Another feature I used for creativity is bootstrap, specifically: navbars, modals, buttons, cards, and image carousels. Bootstrap made it very easy and the cards gave the app the blog-like feel I was going for. I also added css animations such as the typewriter effect to make the app seem more personal. 

