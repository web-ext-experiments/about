.. _how:

How to write an Experiment
==========================

An experiment comprises at least three files:

* `api.js`: this where the API for your code is added.
* `schema.json`: the schema describes the methods being used.
* `install.rdf`: is the registration of your experiment and processed when the bootstrapped add-on is initialised.

The namespace is the value used in the API such as "login" or "media". This is what developers will use in the API, such as "browser.login" or "chrome.api". The namespace needs to be consistent throughout multiple places of the extension. Specifically in the following:

* `api.js`: the top level object key must be named after the namespace.
* `schema.json`: the permissions must be `"experiments.namespace"`.
* `install.rdf`: the id must be `"namespace@experiments.addons.mozilla.org"`.

You can see an example of this in the boilerplate_ example where the namespace is "boilerplate".

Using the boilerplate
---------------------

The boilerplate_ example provides a simple example that you can download and use in whatever way you see fit.

To get the boilerplate example on Linux or OS X, run the following command:

.. code::bash

    curl -L https://github.com/web-ext-experiments/boilerplate-experiment/archive/master.tar.gz | tar zxf -

You will then be able to change the example to meet your needs.

Writing a schema
----------------

TODO: ..

General hints
-------------

APIs strive to be higher level than direct mappings onto underlying Firefox modules. There are a couple of reasons for this:

* The underlying modules may change, in fact its more than likely that they will change in the future. We'd like to change the WebExtension APIs as little as possible because of the impact that has on add-on developers.
* It would be really nice if other browsers accepted and implemented the Experiment so that you could use it in more than one browser.

Running the experiment 
----------------------

Your experiment can be installed like any other add-on it's probably easiest through about:debugging.

Using the experiment
--------------------

Once you have experiment installed, you can then create a WebExtension using the API provided in the experiment. The only requirement is to add into the manifest of the WebExtension the permission for the experiment.

For example from `logins <https://github.com/web-ext-experiments/logins>`_:

.. code:: json

    "permissions": ["experiments.logins"]

This gives you permission to use the API. But the API might require more permissions, for example to actually use the `logins` API for all urls, you'll need to do the following:

.. code:: json

    "permissions": ["experiments.logins", "logins", "<all_urls>"]

Please see the documentation for each experiment to find what permissions you need.

.. _boilerplate: https://github.com/web-ext-experiments/boilerplate-experiment