/*
    how require() works
        1-) Node checks to see if the module has been cached (rather that reload the module eact time). If so, returns the cached value
            - Node caches the module first time it's accessed.
        2-) Node checks to see if it is a native module (precompiled binaries written in C++).
            If so, returns the exported functionality
        3-) a new Module object is created and the module's exports property is returned.
            Node looks for the module in a "node_modules" directory, in the following order:
                1-) local directory
                2-) parent directory
                3-) ...
                4-) if not found, looking in the directory for globally installed modules 
        4-) If a folder name is given
            - Node checkes for a package.json file and loads the file that's given on main property
                { "name": "someModule", "main": "./lib/someModule.js" }


    - Module extension is .js by default. .json by fallback (if .json, it simply returns the JSON file)
    - Unlike browser, top-level variables are constrained to their immediate context


    npm install someModuleName
    npm install someModuleName -g
    npm install someModuleName@0.1

    npm uninstall someModuleName
    
    npm update
    npm update someModuleName

    npm outdated

    npm ls
    npm ls -g

    npm config list
    npm config ls -l
    
    npm init
    npm install someModuleName --save
    npm install someModuleName --save-dev

*/

