Source-maps

Source maps is use to help the developer to debug code because when we using babel compiler, it converts our written code (which is jsx) into react js so the browser can understand and also add some more code to it and which would be hard for us to debug. So source-maps would point to our code when we want. Browser do not send request to our js file and only point to babel created js file. to do that we have two ways. Either we can write –source-maps in packge.json or .babelrc “sourceMaps”: true and then npm run build.
