# Attila

A content focused responsive theme for [Ghost](http://github.com/tryghost/ghost/).

**Notes:** This project is forked from `zutrinken/attila`. However, it is now maintained personally for my blog hosted at http://www.shivamkapoor.com/blogs/technology/. It means that this repository doesn't resonate with the original repository including the project structuring and the grunt tasks.

## Demo

* [Blog](http://attila.zutrinken.com/)
* [Post](http://attila.zutrinken.com/demo/)
* [Tag Archive](http://attila.zutrinken.com/tag/general/)
* [Author Archive](http://attila.zutrinken.com/author/zutrinken/)

## Screenshots

<table>
<tr>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/attila/master/src/screenshot-desktop.jpg" />
</td>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/attila/master/src/screenshot-mobile.jpg" />
</td>
</tr>
</table>

## Features

* Responsive layout
* Navigation support
* Paralax cover images for posts, author archives and blog
* Author informations for posts and author archives
* Featured posts
* Reading progress for posts
* Automatic code syntax highlight and line numbers
* Disqus support
* Subscribers support
* Sharing buttons

## Setup

To enable [Disqus](https://disqus.com/) comments go to your blogs code injection settings and add `<script>var disqus = 'YOUR_DISQUS_SHORTNAME';</script>` to your blog header.

## Develop/Deploy

### 1. Install [Grunt](http://gruntjs.com/getting-started/)
```
npm install -g grunt-cli
```

### 2. Install Dependencies
```
npm install
```
	
### 3. Stage/Test Project
```
grunt stage
```

This step create an unarchived version of the theme under `stage/attila`. The softlink to which could be created under ghost installation directory `ghost/content/theme` for developement and testing purposes.


### 4. Build Project
```
grunt build
```

This step creates a distribution zip.

### 5. Deploy 
Upload zip created in `Step 4` using Ghost admin panel under `Settings/Design/Upload a theme`

## Copyright & License

Copyright (C) 2015-2018 Peter Amende - Released under the [MIT License](https://github.com/zutrinken/attila/blob/master/LICENSE).
