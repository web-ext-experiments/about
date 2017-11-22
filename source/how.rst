.. _how:

How to write an Experiment
==========================

An experiment comprises at least three files:

* `api.js`: Your code to implement the API.
* `schema.json`: Defines the API - types, methods, etc.
* `install.rdf`: Install manifest.

The namespace is the value used in the API such as “login” or “media”. This is
what developers will use in the API, such as “browser.login” or
“browser.media”. The namespace needs to be consistent in all places of the
extension:

* `api.js`: ExtensionAPI.getAPI() must return an object with a single top-level
  property: "namespace".
* `schema.json`: the permissions must be `"namespace"`.
* `install.rdf`: the id must be `"namespace@experiments.addons.mozilla.org"`.

You can see an example of all this in the boilerplate_ example where the namespace is "boilerplate".

Using the boilerplate
---------------------

The `boilerplate`_ example provides a simple example that you can download and use in whatever way you see fit.

To get the boilerplate example on Linux or OS X, run the following command:

.. code-block:: bash

    curl -L https://github.com/web-ext-experiments/boilerplate-experiment/archive/master.tar.gz | tar zxf -

You will then be able to change the example to meet your needs.

Designing your API
------------------

You are free to do whatever you'd like to do in an experiment, but if you eventual goal is to uplift it into Firefox then you should probably read the :ref:`uplifting` and :ref:`new` documentation.

Installing the experiment
-------------------------

* Note: Due to the current `Extension Signing <https://wiki.mozilla.org/Add-ons/Extension_Signing>`_ policy, you will need to use the Nightly, Developer Edition or Unbranded builds and set the "xpinstall.signatures.required" preference to "false" to allow install unsigned add-ons.

Your experiment can be installed like any other add-on, for example:

1. You can zip an `.xpi`, and then install it from `about:addons` > `Install Add-on From File`.

.. code-block:: bash

    zip experiment.xpi api.js install.rdf schema.json

2. You also can load the install.rdf temporarily from `about:debugging` > `Load Temporary Add-on`.



Using the experiment
--------------------

Once you have experiment installed, you can then create a WebExtension using the API provided in the experiment. The only requirement is to add into the manifest of the WebExtension the permission for the experiment.

For example from `logins <https://github.com/web-ext-experiments/logins>`_:

.. code-block:: json

    "permissions": ["experiments.logins"]

This gives you permission to use the API. But the API might require more permissions, for example to actually use the `logins` API for all urls, you'll need to do the following:

.. code-block:: json

    "permissions": ["experiments.logins", "logins", "<all_urls>"]

Please see the documentation for each experiment to find what permissions you need.

.. _boilerplate: https://github.com/web-ext-experiments/boilerplate-experiment
