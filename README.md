# earthquakeZen

Github: https://github.com/cerebrium/earthquakeZen
Website: https://earthquakezen.netlify.app/

Hello Realtor.com engineers!
I hope that you enjoy the submission of this application. Running npm start should get this running in development.

I enjoyed writing this, but I will admit I was surprised when the prompt asked not to use create-react-app! This uses webpack, and
some of the troubles I had was with routing to an :id and having it now respond to my 404. But I was able to solve that by
adding the publicPath. In production this is solved by the netlify.toml file.

I also spent some time considering using esbuild, but it seems not to be quite ready for production.

Beyond the build, I thought a lot about file structure.

<pre>

1. I have used barreling, for easy access to sub components. However, I am aware that keeping areas of similarity close to each other
   is particularly important. For this, barreling of sub-components outside of their branch was avoided.

2. I used a views file to store all pages. Inside of the views, each file should represent a view. Inside of the view there should be:
   a. styles => where the css is stored
   b. hooks => if there was logic involving mutable data there is a hook responsible
   c. components => building blocks for the views

3. Data
   a. data is stored in shared > data > index
      - The main object is exported, along with a type
      - The details page requires a lookup of a specific object, this seems better suited to a hashmap, so one was made

4. Nav
   a. Found in shared > nav > Nav
   b. This is part of the base layout (shared > layout), every page shares this component so it was nested in at the top level
   c. The other pages are rendered within the overall layout
   d. css grid is the base of the styling for everything, with flex used primarily for centering

5. App
   a. This is where the routing and the 404 page can be found

6. useFeatures
   a. This hook is where the sorting happens. However there were a number of edge cases that were considered leading to a ballooning
   file size.
      - Ca and California both exist in the data, but as a 'sort' they should be considered the same
      - This was solved by trimming, finding first 2 letters for states, then making lowercase before comparing
      - Then given multiple instances of california (and others), the cities needed to be considered for 
      an actual valuable sort.
         1. Options I considered included to use graph coordinates that were inside the earthquakes, I know 
         that given lat long you can find quadkey using something like this: https://docs.microsoft.com/en-us/bingmaps/articles/bing-maps-tile-system
         However, since it wasn't in the prompt to do that, it was considered out of scope.
         2. The option decided was alphabetical based on city, when state is matching. 



</pre>
