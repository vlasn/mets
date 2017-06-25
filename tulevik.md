* Kaustastruktuur
    ```
    src/
        app.js
        app.scss
        index.html
        components/
            sampleComponent/
                index.js                        # siin on Reduxi loogikaga container & layout.
                sampleComponent.scss            # Komponendi (konteineri) stiil
                
                sampleComponentInput.js         # Per-komponent JS fail, styling ja testid.
                sampleComponentInput-test.js
                sampleComponentInput.scss
                
                sampleComponentButton.js
                sampleComponentButton-test.js
                sampleComponentButton.scss
                
                sampleComponentActions.js       # Reduxi actionCreatorid.
    
    
    .eslint.js
    .gitignore
    package.json
    webpack.config.js
    ...etc
    ```

* Versioonihaldus


* Linting:
    *kohustuslik*. Uuri `prettier.js`!
    
* Redux & you:
    1) selectorid                                   # reselect @ npm
    2) action creatorid & async actionid
    3) Constant action types
    3) naming convention:
    ```&$xslt
        actioni nimi: <NIMISÕNA>_<TEGUSÕNA>         # CONTRACT_SEARCH_TRIGGERED
        action creator name: <tegusõna><Nimisõna>   # triggerContactSearch
        selector name: get<Nimisõna>                # getContacts
    ```
    
* Muu?
   * Transition animatsioonid?
   * Loader/spinner?
   * Success/failure sõnumid?