devtools-theme
==============

Custom Chrome Dev tools theme

## These directions have been created specifically for Chrome 33+

Support for Custom.css has been removed from Chrome in version 32.
This provides a way to easily activate style sheets in the Chrome developer tools.

## Getting Started

1. Go to <a href="chrome://flags">chrome://flags</a>

2. Enable Developer Tools experiments

3. Open the Chrome Developer Tools, click on the gears icon, go to Experiments and check "Allow UI themes"

4. <code>cd /Users/USER NAME/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets</code> (Mac OSX)

5. Clone this repo: <code>git clone https://github.com/ryanpmiller/devtools-theme</code>

6. Go to <a href="chrome://extensions">chrome://extensions</a>

7. Select "Developer mode"

8. Click on "Load unpacked extension"

9. Select the "soda" directory under the devtools-theme directory you've cloned

10. Enjoy your new Dev Tools theme


## To Edit

Install dependencies: <code>npm install</code>

Listen for changes: <code>grunt watch</code>


![Alt text](/screenshot/elements.png "Elements tab Theme Screenshot")



