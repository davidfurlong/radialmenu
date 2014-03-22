radialmenu.js
=============

Right Click Radial Menus in JQuery

Demo:

http://davidfurlong.github.io/radialmenu.js/

Features:
- No Canvas, just CSS
- Supports any amount of elements
- change the radius easily (change value of var c)
- alt right click to get usual right click context menu

###Current: Add a custom version of radialmenu.js to your website as a better nav ###

###Next: Chrome Extension for navigating to your most used sites, fast###

How to use:

Add to HEAD

<pre><code>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
   <link rel="stylesheet" href="radialmenu.css"/>
   <script src="radialmenu.js"></script>
</pre></code>

Add to BODY (add/remove as many li s as you would like)

<pre><code>
	<div class='radial'>
      <ul>
        <li><a href='http://news.ycombinator.com'>HN</a></li>
        <li><a href='http://google.com'>Google</a></li>  
        <li><a href='http://reddit.com'>Reddit</a></li>
        <li><a href='http://facebook.com'>Facebook</a></li> 
        <li><a href='http://localhost'>Localhost</a></li> 
        <li><a href='http://index.html'>Index</a></li> 
      </ul>
    </div>
</pre></code>

<div class='radial'>
      <ul>
        <li><a href='http://news.ycombinator.com'>HN</a></li>
        <li><a href='http://google.com'>Google</a></li>  
        <li><a href='http://reddit.com'>Reddit</a></li>
        <li><a href='http://facebook.com'>Facebook</a></li> 
        <li><a href='http://localhost'>Localhost</a></li> 
        <li><a href='http://index.html'>Index</a></li> 
      </ul>
    </div>

License: 

The MIT License (MIT)

Copyright (c) 2014 David Furlong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.