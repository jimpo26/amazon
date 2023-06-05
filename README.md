
# Amazon add to cart button
Why this script? 
There's a big problem with Amazon's cache. Sometimes, when new offers appear in the offers list, the cache doesn't update, and you can't see the product until it refreshes again (think of the PS5 and GPUs in 2020/2021). This script creates a button that can perform an addToCart request. If the product is available in the database, you will be able to buy it!
## How to use?
There are two methods:

1. You can use fetch 
2. You can paste the entire code in the bookmarklet

In the first scenario, you have to put the following code into the bookmarklet `javascript:fetch("https://raw.githubusercontent.com/jimpo26/amazon/main/amazon.js").then((r)=>r.text()).then((text)=>eval(text))`
When you are on a "Not available" Amazon page, a button will appear. 
But, wait a minute: why is this solution really bad? There are a few reasons. 
First of all, the fetch function performs a request to the `raw.githubusercontent.com` server, and it takes some time to receive the response because there are a lot of things to do (TCP connection with a three-way handshake, TLS key exchange, etc.). 
But that's not all. The code above uses the eval function, which executes code on your computer and can be really dangerous. Check out [this link](https://stackoverflow.com/questions/18269797/what-does-eval-do-and-why-its-evil) if you want to know more about the evil eval function.

The second way is better. You have to copy the code from the file [amazonEncoded.js](https://raw.githubusercontent.com/jimpo26/amazon/main/amazonEncoded.js) (it's the exact same code as in the amazon.js file, but it's encoded, so it's written in a single line) and then paste it into a bookmark in your favorite browser. To use it, simply click on the bookmark, and voilà, the button will appear."

