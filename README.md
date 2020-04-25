ember-cli-origin-trials
==============================================================================

Add the `origin-trial` meta tags to index.html page of Ember.js application.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-origin-trials
```


Usage
------------------------------------------------------------------------------

Add your tokens to `ENV.originTrials.tokens` in `config/environment.js`. Falsy values are automatically removed.

``` js
// config/environment.js
module.exports = function(environment) {
  let ENV = {
    // ...

    originTrials: {
      tokens: [
        'TOKEN_X',
        'TOKEN_Y'
      ]
    }
  };
};
```

It will generate the following tags:

``` html
<meta http-equiv="origin-trial" content="TOKEN_X">
<meta http-equiv="origin-trial" content="TOKEN_Y">
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
